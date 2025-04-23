/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import './assert';
import path from "path";
import fs from "fs/promises";
import { RenderPackageLLMsApi, RenderPackageLLMsDocs, RenderPackageLLMsOptions, UploadConfig } from "./types";
import resolveDocsEmbedding from "./services/docs-resolver";
import parseDocsMarkdownEmbeddings from "./services/docs-parser";
import { ApiPageContent, renderApiPageMarkdown } from './services/api-renderer';
import { unescapeHtmlDeep } from './services/unescape-html';
import exclude from './services/excluder';
import logger from './logger';

// Mock fetch for development purposes to print body size
const originalFetch = global.fetch;
global.fetch = async function mockedFetch(url: RequestInfo | URL, init?: RequestInit) {
  if (init?.body && typeof init.body === 'string') {
    const bodySizeKB = (init.body.length / (1024 * 1024)).toFixed(2);
    console.log(`Fetch to ${url.toString()}: Body size: ${bodySizeKB} MB`);
  }
  
  return originalFetch(url, init);
};


interface DemoDocument {
  content: string;
  metadata: {
    title?: string;
    components?: string[];
    description: string;
  };
}

type ApiDocument = ApiPageContent & {
  description: string;
}

const staticDocsReplacements = [
  {
    // Remove the markdown metadata
    token: /^---\n([\s\S]*?)\n---\n/,
    resolved: '',
  },
  {
    // Remove <p> tags
    token: /<p[^>]*>(.*)<\/p>/gi,
    resolved: '$1',
  },
  {
    // Replace the plan badge with a text
    token: /\[?<span class="plan-(premium|pro)"><\/span>\]\(\/x\/introduction\/licensing\/#(?:premium|pro)-plan '(\w+) plan'\)/g,
    resolved: '**$2 plan**',
  },
  {
    // Replace relative paths with absolute paths
    token: /\[(.*?)\]\((\/[^\s)]+)\)/g,
    resolved: '[$1](https://mui.com$2)',
  },
  {
    // Replace nbsp with a space
    // eslint-disable-next-line no-irregular-whitespace
    token: / /g,
    resolved: ' ',
  },
]

async function readDocs(docs: RenderPackageLLMsDocs, options: RenderPackageLLMsOptions) {
  const files = await fs.readdir(docs.dataRootDir, { recursive: true });
  const documents: DemoDocument[] = [];

  await Promise.all(files.map(async (file) => {
    if (!file.endsWith('.md')) { return; }

    const filePath = path.join(docs.dataRootDir, file);
    if (exclude(filePath, docs.exclude)) { return; }

    const fileContent = await fs.readFile(filePath, 'utf8');
    
    const { content: baseContent, embeddings, metadata } = await parseDocsMarkdownEmbeddings(
      fileContent, path.dirname(filePath),
    );
    const resolvedEmbeddings = [
      ...staticDocsReplacements,
      ...await Promise.all(
        embeddings.map(async (embedding) => {
          return {
            ...embedding,
            resolved: (await resolveDocsEmbedding(embedding, filePath, docs, options)).trim(),
          };
        })
      )
    ];

    let content = baseContent;
    resolvedEmbeddings.forEach((embedding) => {
      content = content.replace(embedding.token, embedding.resolved);
    });

    documents.push({
      content: documentToLLMs([{ content }]),
      metadata,
    });
  }))
  
  return documents;
}

function fetchApiContent(data: ApiPageContent) {
  return renderApiPageMarkdown(data)
    .catch((error) => {
      logger.error({ error: (error.stack || error.message || error?.toString()) }, `Error rendering API page for ${data.muiName ?? data.name}:`);
      throw error;
    })
}


async function readApis(api: RenderPackageLLMsApi, docs: DemoDocument[]) {
  const files = await fs.readdir(api.dataRootDir, { recursive: true });
  const documents: ApiDocument[] = [];

  await Promise.all(files.map(async (file) => {
    if (!file.endsWith('.json')) { return; }

    const filePath = path.join(api.dataRootDir, file);
    if (exclude(filePath, api.exclude)) { return; }

    const fileContent = await fs.readFile(filePath, 'utf8');
    const fileJson = JSON.parse(fileContent) as ApiPageContent;

    const relatedDoc = docs
      .find((doc) => doc.metadata.components?.includes(fileJson.name))

    documents.push({
      ...unescapeHtmlDeep(fileJson),
      description: relatedDoc?.metadata.description ?? '',
    });
  }))
  
  return documents;
}

function documentToLLMs(documents: { content: string }[]) {
  let newContent = documents.map(it => it.content).join('\n\n***\n\n');

  while (newContent.startsWith('\n')) {
    newContent = newContent.slice(1);
  }

  while (newContent.endsWith('\n')) {
    newContent = newContent.slice(0, -1);
  }

  while (newContent.includes('\n\n\n')) {
    newContent = newContent.replace(/\n\n\n/g, '\n\n');
  }
  
  return newContent;
}

interface RenderPackageLLMsResult {
  docs?: DemoDocument[];
  api?: ApiDocument[];
}

// Return the markdown for the all
export async function renderPackageLLMs(options: RenderPackageLLMsOptions): Promise<RenderPackageLLMsResult> {
  const result: RenderPackageLLMsResult = {}

  if (options.docs) {
    result.docs = await readDocs(options.docs, options);
  }

  if (options.api) {
    result.api = await readApis(options.api, result.docs ?? []);
  }

  return result;
}

async function saveMarkdown(outputDir: string, results: RenderPackageLLMsResult) {
  await fs.rm(outputDir, { recursive: true }).catch(() => {});
  await fs.mkdir(outputDir, { recursive: true }).catch(() => {});

  const llmsFull: { content: string }[] = [];
  if (results.docs) {
    const content = documentToLLMs(results.docs);
    llmsFull.push({ content });

    await fs.writeFile(path.join(outputDir, 'llms-docs.txt'), content);
  }
  if (results.api) {
    const contents = await Promise.all(results.api.map(async (it) => ({ content: await fetchApiContent(it) })));
    const content = documentToLLMs(contents);
    llmsFull.push({ content });

    await fs.writeFile(path.join(outputDir, 'llms-api.txt'), content);
  }

  await fs.writeFile(path.join(outputDir, 'llms-full.txt'), documentToLLMs(llmsFull));
}

export async function renderAndSavePackageLLMs(options: Omit<RenderPackageLLMsOptions, 'outputDir'> & { outputDir: string }): Promise<void> {
  const { outputDir, ...rest } = options;
  if (!outputDir) {
    throw new Error('outputDir is required');
  }

  const results = await renderPackageLLMs(rest);
  await saveMarkdown(outputDir, results);
}

const backendHostsList = {
  production: 'https://chat-backend.mui.com',
  development: 'http://localhost:5003',
}

async function uploadResults(
  options: RenderPackageLLMsOptions,
  config: UploadConfig,
  results: RenderPackageLLMsResult,
) {
  // const llmsTxt = markdown.full;
  // const llmsDocsTxt = markdown.docs;
  // const llmsApiTxt = markdown.api;

  // console.log(llmsTxt);
  const backendHost = backendHostsList[process.env.NODE_ENV as keyof typeof backendHostsList]
    ?? backendHostsList.development;
  const response = await fetch(`${backendHost}/v1/internal/import/docs/batch`, {
    method: 'POST',
    headers: {
      'X-Api-Key': config.apiToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      package: options.package,
      docs: results.docs,
      api: results.api,
    }),
  })

  if (!response.ok) {
    const body = await response.json();
    console.error(`Failed to upload results: ${response.statusText} ${JSON.stringify(body, null, 2)}`);
  }
}

export async function renderAndUploadPackageLLMs(
  options: RenderPackageLLMsOptions,
  config: UploadConfig,
): Promise<void> {
  const { outputDir, ...rest } = options;
  const results = await renderPackageLLMs(rest);

  if (outputDir) {
    await saveMarkdown(outputDir, results);
  }

  await uploadResults(options, config, results);
}

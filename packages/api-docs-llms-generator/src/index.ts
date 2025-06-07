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
    pathname: string;
  };
}

type ApiDocument = ApiPageContent & {
  description: string;
  pathname: string;
}

const staticDocsReplacements = [
  // {
  //   // Remove the markdown metadata
  //   token: /^---\n([\s\S]*?)\n---\n/,
  //   resolved: '',
  // },
  {
    // Remove <p> tags
    token: /<p[^>]*>(.*)<\/p>/gi,
    resolved: '$1',
  },
  {
    // Replace the plan badge with a text
    token: /\[?<span class="plan-(premium|pro)"><\/span>\]\(\/x\/introduction\/licensing\/#(?:premium|pro)-plan '(\w+) plan'\)/g,
    // resolved: '**$2 plan**',
    resolved: '\n\n\n<info-block>\nPreview environments require a [**$2** MUI X Plan](/docs/professional-features) or higher.\n</info-block>\n',
  },
  {
    // Replace the :::status with <status-block>
    token: /:::(info|success|warning|error)[\s\S]*?:::/gi,
    // resolved: '**$2 plan**',
    resolved: '<$1-block>\n$2\n</$1-block>\n',
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

    const extLength = path.extname(filePath).length;
    const pathFilename = path.basename(filePath).slice(0, -extLength);
    const pathDirname = path.dirname(filePath).split('/').pop() ?? '';
    const resolvedPathname = path.relative(docs.dataRootDir,
      pathFilename === pathDirname
        ? path.dirname(filePath)
        : filePath.slice(0, -extLength)
    );

    const { content: baseContent, embeddings, metadata } = await parseDocsMarkdownEmbeddings(
      fileContent, resolvedPathname,
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
      pathname: path.relative(api.dataRootDir, filePath.slice(0, -path.extname(filePath).length)),
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
  await fs.rm(outputDir, { recursive: true, force: true }).catch(() => {});
  await fs.mkdir(outputDir, { recursive: true }).catch(() => {});

  await fs.writeFile(path.join(outputDir, 'results.json'), JSON.stringify(results, null, 2));

  const llmsFull: { content: string }[] = [];
  if (results.docs) {
    const content = documentToLLMs(results.docs);
    llmsFull.push({ content });

    for (const doc of results.docs) {
      const filePath = path.join(outputDir, `${doc.metadata.pathname}.md`);
      await fs.mkdir(path.dirname(filePath), { recursive: true }).catch(() => {});
      await fs.writeFile(filePath, doc.content);
    }
  }

  if (results.api) {
    const contents = await Promise.all(results.api.map(async (it) => ({ ...it, content: await fetchApiContent(it) })));
    const content = documentToLLMs(contents);
    llmsFull.push({ content });

    for (const doc of contents) {
      const filePath = path.join(outputDir, `api/${doc.pathname}.md`);
      await fs.mkdir(path.dirname(filePath), { recursive: true }).catch(() => {});
      await fs.writeFile(filePath, doc.content);
    }
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

async function uploadResults(
  options: RenderPackageLLMsOptions,
  uploadConfig: UploadConfig,
  results: RenderPackageLLMsResult,
) {
  const response = await fetch(`${uploadConfig.apiHost}/v1/internal/import/docs/batch`, {
    method: 'POST',
    headers: {
      'X-Api-Key': uploadConfig.apiToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      package: {
        id: options.id,
        ...options.package,
      },
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
  uploadConfig: UploadConfig | undefined,
): Promise<void> {
  const { outputDir, ...rest } = options;
  const results = await renderPackageLLMs(rest);

  if (outputDir) {
    await saveMarkdown(outputDir, results);
  }

  if (uploadConfig) {
    await uploadResults(options, uploadConfig, results);
  }
}

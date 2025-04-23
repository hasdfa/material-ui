/* eslint-disable no-await-in-loop */
import path from "path";
import fs from "fs/promises";
import { parseImportsExports } from 'parse-imports-exports'

import jsBundle from "./js-bundler";
import parseMarkdown from "./html-to-markdown";
import { DocsEmbeddingObject } from "./docs-parser";
import reactRenderComponentToHtml from "./react-renderer";
import makeComponentWrapperText from '../polyfills/component-wrapper';
import { RenderPackageLLMsDocs, RenderPackageLLMsOptions } from "../types";
import logger from "../logger";

interface ResolvedFile {
  filePath: string;
  content: string;
}

async function resolveComponent(
  component: string,
  initialFilePath: string,
  docsOptions: RenderPackageLLMsDocs,
  options: RenderPackageLLMsOptions
): Promise<string> {
  const filePath = docsOptions.componentsRoot
    ? path.join(docsOptions.componentsRoot, component)
    : path.resolve(path.dirname(initialFilePath), component)
  const cleanup: (() => void)[] = [];

  // Ignore not-local components
  if (component.startsWith('@mui')) {
    return '';
  }

  if (!path.extname(component)) {
    const resolved = await resolveImportPath(component);
    if (resolved) {
      component = resolved;
    }
  }

  let bundledFilePath: string | null = null;
  try {
    bundledFilePath = await (async () => {
      const originalFileName = path.basename(filePath);
      const tmpFilePath = path.join(filePath.slice(0, -originalFileName.length), `root.${originalFileName}`);
      cleanup.push(() => fs.unlink(tmpFilePath));

      const tmpFileContent = makeComponentWrapperText(originalFileName)
      await fs.writeFile(tmpFilePath, tmpFileContent);

      const { result, cleanup: cleanupBundle } = await jsBundle(tmpFilePath, options.repoRootDir);
      cleanup.push(cleanupBundle);

      return result;
    })()

    const html = await reactRenderComponentToHtml(bundledFilePath);
    const markdown = await parseMarkdown(html);

    return markdown;
  } catch (err: any) {
    logger.error(
      {
        filePath,
        bundledFilePath,
        error: err.message,
      },
      'Error resolving component',
    );

    return '';
  } finally {
    await Promise.allSettled(cleanup.map((fn) => fn()));
  }
}

function getRelativeImport(from: string, to: string) {
  const relative = path.relative(path.dirname(from), to);
  return relative.startsWith('..') ? relative : `./${relative}`;
}

async function resolveImportPath(filePath: string) {
  const attempts = [
    filePath,
    `${filePath}.ts`,
    `${filePath}.tsx`,
    `${filePath}.mts`,
    `${filePath}.js`,
    `${filePath}.mjs`,
    `${filePath}.jsx`,
    `${filePath}/index.ts`,
    `${filePath}/index.tsx`,
    `${filePath}/index.mts`,
    `${filePath}/index.js`,
    `${filePath}/index.mjs`,
    `${filePath}/index.jsx`,
  ];

  for (const attempt of attempts) {
    const stats = await fs.stat(attempt).catch(() => null);
    if (stats?.isFile()) {
      return attempt;
    }
  }

  return null;
}

async function resolveImport(filePath: string) {
  const resolved = await resolveImportPath(filePath);
  if (!resolved) {
    return null;
  }

  return fs.readFile(resolved, 'utf8');;
}

async function resolveImportsDeep(
  filePath: string,
  fileContent: string,
  files: ResolvedFile[],
  initialFilePath: string,
): Promise<void> {
  try {
    const { namedImports } = await parseImportsExports(fileContent);
    const namedImportsList = Object.keys(namedImports ?? {});

    for (const importStatement of namedImportsList) {
      if (!importStatement.startsWith('.')) {
        continue;
      }

      const importPath = path.resolve(path.dirname(filePath), importStatement);
      const importContent = await resolveImport(importPath);
      if (!importContent) {
        throw new Error(`Could not resolve import ${importStatement} from ${filePath}`);
      }

      files.push({
        filePath: getRelativeImport(initialFilePath, importPath),
        content: importContent,
      });

      await resolveImportsDeep(importPath, importContent, files, initialFilePath);
    }
  } catch (err: any) {
    logger.error(
      {
        filePath,
        initialFilePath,
        error: (err.stack || err.message || err?.toString()),
      },
      'Error resolving imports for demo file',
    );
  }
}

// As we use js/ts files for jsx syntax, we need to map the extname to the correct language.
const langOverrides = {
  js: 'jsx',
  ts: 'tsx',
}

function getLangFromExtname(extname: string) {
  const lang = extname.slice(1);
  return langOverrides[lang as keyof typeof langOverrides] ?? lang;
}

async function resolveDemo(demo: string, initialFilePath: string, options: RenderPackageLLMsDocs): Promise<string> {
  const { filePath, content } = await (async () => {
    const jsFilePath = options.demosRoot
      ? path.join(options.demosRoot, demo)
      : path.resolve(path.dirname(initialFilePath), demo)
    const attempts = [
      `${jsFilePath.slice(0, -path.extname(jsFilePath).length)}.ts`,
      `${jsFilePath.slice(0, -path.extname(jsFilePath).length)}.tsx`
    ];

    for (const attempt of attempts) {
      if (await fs.stat(attempt).catch(() => null)) {
        return { filePath: attempt, content: await fs.readFile(attempt, 'utf8') };
      }
    }

    return { filePath: jsFilePath, content: await fs.readFile(jsFilePath, 'utf8') };
  })();

  const files: ResolvedFile[] = [{ filePath: path.basename(filePath), content }]
  await resolveImportsDeep(filePath, content, files, filePath);

  const extname = path.extname(filePath);
  const demoName = path.basename(filePath).slice(0, -extname.length);

  return [
    `<example name="${demoName}">`,
    ...files.map((file) => `\`\`\`${getLangFromExtname(path.extname(file.filePath))} file="${file.filePath}"\n${file.content.trim()}\n\`\`\``),
    `</example>`
  ].join('\n')
}

export default async function resolveDocsEmbedding(
  embedding: DocsEmbeddingObject,
  filePath: string,
  docsOptions: RenderPackageLLMsDocs,
  options: RenderPackageLLMsOptions
): Promise<string> {
  if ('component' in embedding.data) {
    return resolveComponent(embedding.data.component, filePath, docsOptions, options);
  }

  if ('demo' in embedding.data) {
    return resolveDemo(embedding.data.demo, filePath, docsOptions);
  }

  throw new Error(`Unknown embedding type: ${JSON.stringify(embedding.data)}`);
}

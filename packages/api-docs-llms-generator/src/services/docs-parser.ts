import logger from "../logger";
import parseMarkdown from "./html-to-markdown";

export type DocsEmbedding = 
  | { component: string }
  | { demo: string }

export interface DocsEmbeddingObject {
  token: string;
  data: DocsEmbedding;
}

export default async function parseDocsMarkdownEmbeddings(content: string, pathname: string): Promise<{
  content: string;
  embeddings: DocsEmbeddingObject[];
  metadata: {
    title?: string;
    components?: string[];
    description: string;
    pathname: string;
  };
}> {
  // Regex to capture everything between {{ and }}.
  const braceRegex = /\n({({[\s\S]*?})})/g;

  let match;
  const embeddings: DocsEmbeddingObject[] = [];

  // eslint-disable-next-line no-cond-assign
  while ((match = braceRegex.exec(content)) !== null) {
    // The inside of {{ ... }} is match[2]
    const jsonString = match[2].trim();

    try {
      // Attempt to parse the contents as JSON
      // eslint-disable-next-line no-eval
      const parsed = JSON.parse(jsonString);
      embeddings.push({
        token: match[1],
        data: parsed,
      });
    } catch (err: any) {
      logger.warn(
        {
          jsonString,
          error: (err.stack || err.message || err.toString()),
        },
        `Could not parse JSON inside {{...}}`,
      );

      throw new Error(`Could not parse JSON inside {{...}}`);
    }
  }

  const rawDocumentMetadata = content.match(/^---\n([\s\S]*?)\n---\n/)?.[1];
  const documentMetadata = rawDocumentMetadata?.split('\n').reduce((acc, line) => {
    const [key] = line.split(':');
    acc[key.trim()] = line.slice(key.length + 1).trim();
    return acc;
  }, {} as Record<string, string>);

  return {
    content,
    embeddings,
    metadata: {
      ...(documentMetadata ?? {}),
      description: await parseMarkdown(
        /<p[^>]*>(.*)<\/p>/gi.exec(content)?.[1] ?? ''
      ),
      components: [
        ...(documentMetadata?.components ?? '')
          .matchAll(/[\w-]+/gi)
      ].map((m) => m[0]?.trim()),
      pathname,
    },
  };
}

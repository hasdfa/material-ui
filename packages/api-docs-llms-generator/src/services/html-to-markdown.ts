import path from "path";
import koffi from "koffi";
import { stat } from "fs/promises";
import * as cheerio from "cheerio";
import { fileURLToPath } from "url";
import PQueue from "p-queue";
import logger from "../logger";
import goExecutableFile from "../../sharedLibs/go-html-to-md/html-to-markdown.so";

const moduleDir = path.dirname(fileURLToPath(import.meta.url));
const goExecutablePath = path.resolve(moduleDir, goExecutableFile)
const queue = new PQueue({ concurrency: 50 });
let activeOperations = 0;

class GoMarkdownConverter {
  private static instance: GoMarkdownConverter;

  private convert: any;

  private constructor() {
    const lib = koffi.load(goExecutablePath);
    this.convert = lib.func("ConvertHTMLToMarkdown", "string", ["string"]);
  }

  public static async getInstance(): Promise<GoMarkdownConverter> {
    if (!GoMarkdownConverter.instance) {
      try {
        await stat(goExecutablePath);
      } catch (_) {
        throw new Error("Go shared library not found");
      }
      GoMarkdownConverter.instance = new GoMarkdownConverter();
    }
    return GoMarkdownConverter.instance;
  }

  public async convertHTMLToMarkdown(html: string): Promise<string> {
    return queue.add(
      async () => {
        logger.debug(`Starting. Active: ${++activeOperations}`);

        const result = await new Promise<string>((resolve, reject) => {
          this.convert.async(html, (err: Error | null, res: string) => {
            if (res && !err) {
              resolve(res);
            } else {
              reject(err ?? new Error("Failed to convert HTML to Markdown"));
            }
          });
        });

        logger.debug(`Completed. Active: ${--activeOperations}`);

        return result;
      },
      { throwOnTimeout: true, timeout: 30_000 }
    );
  }
}

export default async function parseMarkdown(
  html: string | null | undefined,
): Promise<string> {
  if (!html) {
    return "";
  }

  try {
    // Go parser is 4x faster than turndown and more accurate
    if (process.env.USE_GO_MARKDOWN_PARSER !== "false") {
      const converter = await GoMarkdownConverter.getInstance();
      const content = prepareHtmlDocument(html);
      let markdownContent = await converter.convertHTMLToMarkdown(content);

      markdownContent = processMultiLineLinks(markdownContent);
      markdownContent = removeSkipToContentLinks(markdownContent);

      return markdownContent;
    }
  } catch (error: any) {
    if (
      !(error instanceof Error) ||
      error.message !== "Go shared library not found"
    ) {
      logger.error(
        { error: error.stack || error },
        `Error converting HTML to Markdown with Go parser: ${error}`,
      );
    } else {
      logger.warn(
        { goExecutablePath },
        "Tried to use Go parser, but it doesn't exist in the file system.",
      );
    }
  }

  // Fallback to TurndownService if Go parser fails or is not enabled
  const { default: TurndownService } = await import("turndown");
  // @ts-ignore
  const turndownPluginGfm = await import("@joplin/turndown-plugin-gfm");

  const turndownService = new TurndownService();
  turndownService.addRule("inlineLink", {
    filter: (node: any, options: any) => {
      return (
        options.linkStyle === "inlined" &&
        node.nodeName === "A" &&
        node.getAttribute("href")
      );
    },
    replacement: (content: any, node: any) => {
      const href = node.getAttribute("href").trim();
      const title = node.title ? ` "${node.title}"` : "";
      return `[${content.trim}](${href}${title})\n`;
    },
  });
  turndownService.use(turndownPluginGfm.gfm);
  turndownService.use(turndownPluginGfm.highlightedCodeBlock);
  turndownService.use(turndownPluginGfm.tables);

  try {
    const content = prepareHtmlDocument(html);
    let markdownContent = await turndownService.turndown(content);
    markdownContent = processMultiLineLinks(markdownContent);
    markdownContent = removeSkipToContentLinks(markdownContent);

    return markdownContent;
  } catch (error: any) {
    logger.error({ error: error.stack || error }, "Error converting HTML to Markdown");
    return ""; // Optionally return an empty string or handle the error as needed
  }
}

function prepareHtmlDocument(html: string): string {
  const $ = cheerio.load(html);

  // Remove all style and svg - it's useless for markdown
  $("style, svg").remove();

  $('pre').each((_, el) => {
    const $el = $(el);
    const code = $el.text() || '';
    $el.replaceWith(`<pre><code>${code}</code></pre>`);
  });

  // For each heading element, check if it contains *any* heading element
  $('h1, h2, h3, h4, h5, h6').each((_, el) => {
    const $el = $(el);
    const tagName = $el.prop("tagName") ?? "";
    const level = +(tagName.slice(1) ?? '1');

    // Does this heading contain another heading tag?
    const headings = $el.find('h1, h2, h3, h4, h5, h6');
    if (headings.length > 0) {
      const firstTextNode = $el.find('*')
        .filter((_i, el2) => $(el2).html()?.trim() === $(el2).text().trim())
        .first();

      // Create a new container (div by default)
      const $replacement = $(`<div></div>`);

      // Transfer the inner HTML from the original
      let newHtml = ""

      if (firstTextNode) {
        const text = firstTextNode.text() ?? '';
        const newTag = `h${level+1}`;
        newHtml = `<${newTag}>${text}</${newTag}>${newHtml}`;

        firstTextNode.remove();
      }

      newHtml += $el.html() || "";
      $replacement.html(newHtml);

      // Replace heading with the new heading
      $el.replaceWith($replacement);
    }
  });

  return $("body").html() || "";
}

function processMultiLineLinks(markdownContent: string): string {
  let insideLinkContent = false;
  let newMarkdownContent = "";
  let linkOpenCount = 0;
  for (let i = 0; i < markdownContent.length; i += 1) {
    const char = markdownContent[i];

    if (char === "[") {
      linkOpenCount += 1;
    } else if (char === "]") {
      linkOpenCount = Math.max(0, linkOpenCount - 1);
    }
    insideLinkContent = linkOpenCount > 0;

    if (insideLinkContent && char === "\n") {
      newMarkdownContent += "\\\n";
    } else {
      newMarkdownContent += char;
    }
  }
  return newMarkdownContent;
}

function removeSkipToContentLinks(markdownContent: string): string {
  // Remove [Skip to Content](#page) and [Skip to content](#skip)
  const newMarkdownContent = markdownContent.replace(
    /\[Skip to Content\]\(#[^\\)]*\)/gi,
    "",
  );
  return newMarkdownContent;
}

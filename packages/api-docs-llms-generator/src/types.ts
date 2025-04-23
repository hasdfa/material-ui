import { z } from 'zod';

const excludeSchema = z.array(z.union([z.string(), z.instanceof(RegExp)]));

export const RenderPackageLLMsOptionsSchema = z.object({
  package: z.object({
    name: z.string(),
    version: z.string(),
  }),

  // Root directory for the repo (e.g. <root>)
  repoRootDir: z.string(),

  // Docs parser configuration
  docs: z
    .object({
      // Root package directory (e.g. <root>/docs/data/data-grid)
      dataRootDir: z.string(),

      // Root directory where to resolve components from docs embedding
      componentsRoot: z.string().optional().describe('Root directory for components. If omitted, will be used relative to the file.'),

      // Root directory where to resolve demos from docs embedding
      demosRoot: z.string().optional().describe('Root directory for demos. If omitted, will be used relative to the file.'),

      // List of files to exclude from the generation
      exclude: excludeSchema.optional(),
    })
    .optional(),

  // API parser configuration
  api: z
    .object({
      // Root directory for api (e.g. <root>/docs/pages/x/api)
      dataRootDir: z.string(),

      // List of files to exclude from the generation
      exclude: excludeSchema.optional(),
    })
    .optional(),

  // Output directory for the generated files
  outputDir: z.string().optional(),
});

export type ExcludeItems = z.infer<typeof excludeSchema>;
export type RenderPackageLLMsOptions = z.infer<typeof RenderPackageLLMsOptionsSchema>;
export type RenderPackageLLMsDocs = NonNullable<RenderPackageLLMsOptions['docs']>;
export type RenderPackageLLMsApi = NonNullable<RenderPackageLLMsOptions['api']>;

export const uploadConfigSchema = z.object({
  apiToken: z.string(),
});

export const renderInputConfigSchema = z.object({
  upload: uploadConfigSchema,
  entities: z.array(RenderPackageLLMsOptionsSchema),
});

export type UploadConfig = z.infer<typeof uploadConfigSchema>;
export type RenderInputConfig = z.infer<typeof renderInputConfigSchema>;

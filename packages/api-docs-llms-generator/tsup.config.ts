import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  format: ['esm'],
  outDir: './dist',
  skipNodeModulesBundle: true,
  clean: true,
  dts: true,
  esbuildOptions(options) {
    options.assetNames = 'assets/[name]';
    options.banner = {
      js: '#!/usr/bin/env node\n',
    };
  },
  loader: {
    '.so': 'file',
    '.jsx-as-file': 'file',
    '.txt': 'text',
  },
  external: [/@mui\/monorepo\/packages\/mui-docs/, /@mui\/monorepo\/docs/],
})

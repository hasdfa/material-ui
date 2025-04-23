/* eslint-disable no-underscore-dangle */
import { defineConfig, build as tsupBuild, Options } from 'tsup'
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';

import muiDummyIcon from '../polyfills/mui-dummy-icon.jsx-as-file';
import nextRouter from '../polyfills/next-router.jsx-as-file';
import nextLink from '../polyfills/next-link.jsx-as-file';

// @ts-ignore
globalThis.__MUI_RELEASE_INFO__ = '<release-info>';

const moduleDir = typeof __dirname === 'string'
  ? __dirname
  : (() => {
    const filename = fileURLToPath(import.meta.url);
    return path.dirname(filename);
  })()

const tsupBaseConfig = defineConfig({
  format: 'cjs',
  noExternal: [/^next\//, /^@mui\/icons-material(\/.*)?$/],
  skipNodeModulesBundle: true,
  splitting: false,
  silent: true,
  bundle: true,
  loader: {
    '.mts': 'ts',
    '.ts': 'ts',
    '.tsx': 'tsx',
    '.mjs': 'jsx',
    '.js': 'jsx',
    '.jsx': 'jsx',
    '.jsx-as-file': 'jsx',
  },
  esbuildPlugins: [
    {
      name: 'mock-dependencies',
      setup(build) {
        build.onResolve({ filter: /^next\/link$/ }, () => ({
          path: path.resolve(moduleDir, nextLink),
        }));
        build.onResolve({ filter: /^next\/router$/ }, () => ({
          path: path.resolve(moduleDir, nextRouter),
        }));
        build.onResolve({ filter: /^@mui\/icons-material\/.*$/ }, () => ({
          path: path.resolve(moduleDir, muiDummyIcon),
        }));
      },
    },
  ],
  esbuildOptions: (options) => {
    options.logLevel = 'silent';
    return options;
  },
  env: {
    NODE_ENV: 'development',
  }
})

export default async function jsBundle(
  filePath: string,
  rootDir: string,
) {
  const randomId = Math.random().toString(36).substring(2, 15);
  const tmpFilePath = path.join(rootDir, `dist/${randomId}`);
  await fs.mkdir(path.dirname(tmpFilePath), { recursive: true }).catch(() => {});

  const cleanups: (() => void)[] = [
    () => fs.rm(tmpFilePath, { recursive: true, force: true }).catch(() => {})
  ]
  const cleanup = () => cleanups.forEach((fn) => fn());


  const tsupConfig: Options = {
    ...tsupBaseConfig,
    outDir: tmpFilePath,
    entry: [filePath],
  };

  const cwd = process.cwd();
  cleanups.push(() => process.chdir(cwd));
  process.chdir(rootDir);

  await tsupBuild(tsupConfig);

  // There should be only one file in the output directory
  const files = await fs.readdir(tmpFilePath);
  if (files.length !== 1) {
    throw new Error('Expected exactly one file in the output directory');
  }

  return {
    result: path.join(tmpFilePath, files[0]),
    cleanup,
  }
}

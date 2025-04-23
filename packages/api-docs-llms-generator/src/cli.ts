import path from 'path';
import yargs from 'yargs';
import logger from './logger';
import { renderInputConfigSchema } from './types';
import { renderAndUploadPackageLLMs } from './index'

const argv = yargs(process.argv.slice(2))
  .option('config', {
    type: 'string',
    required: true,
  })
  .parseSync();

async function main() {
  const configPath = path.resolve(process.cwd(), argv.config);
  logger.info({ configPath }, 'Loading config...');
  let rawConfig = await import(configPath);
  if (rawConfig.default) {
    rawConfig = rawConfig.default;
  }

  const config = await renderInputConfigSchema.safeParseAsync(rawConfig);
  if (!config.success) {
    logger.error({ errors: config.error.errors }, 'Invalid config');
    process.exit(1);
  }

  await Promise.all(
    config.data.entities.map(entity =>
      renderAndUploadPackageLLMs(entity, config.data.upload)
    )
  );
}

main().catch(error => {
  logger.error({ stack: (error.stack || error.message || error.toString()) }, error.message || error.toString());
  process.exit(1);
});

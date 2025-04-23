import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const moduleDir = path.dirname(fileURLToPath(import.meta.url));

const repoRootDir = path.resolve(moduleDir, "..");
const docsRootDir = path.join(repoRootDir, "docs");
const docsDataDir = path.join(docsRootDir, "data");
const apiDataDir = path.join(docsRootDir, "pages/");

const readPackageJson = (filepath) => {
  const pkgJson = JSON.parse(fs.readFileSync(path.join(repoRootDir, filepath, "package.json"), "utf8"));
  return {
    name: pkgJson.name,
    version: pkgJson.version,
  };
};

export default {
  upload: {
    apiToken: "abc-token",
  },
  entities: [
    {
      package: readPackageJson("packages/mui-material"),
      repoRootDir,
      docsRootDir,
      docs: {
        dataRootDir: path.join(docsDataDir, "material"),
        componentsRoot: path.join(docsRootDir, "src"),
        exclude: [
          'all-components/all-components.md',
          'getting-started/templates/templates.md',
          'discover-more/showcase/showcase.md',
          'example-projects/example-projects.md',
        ],
      },
      outputDir: path.join(repoRootDir, ".llms/material"),
      api: {
        dataRootDir: path.join(apiDataDir, "material-ui/api"),
      },
    },
    {
      package: readPackageJson("packages/mui-joy"),
      repoRootDir,
      docs: {
        dataRootDir: path.join(docsDataDir, "joy"),
        componentsRoot: path.join(docsRootDir, "src"),
        exclude: [
          'customization/theme-builder/theme-builder.md'
        ],
      },
      outputDir: path.join(repoRootDir, ".llms/joy"),
      api: {
        dataRootDir: path.join(apiDataDir, "joy-ui/api"),
      },
    },
  ]
};

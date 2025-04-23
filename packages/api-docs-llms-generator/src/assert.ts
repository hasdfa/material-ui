// tsup will drop this file because we exlcuded it from the "sideEffects" array in the "package.json"
// We need this because we use custom loaders, see more in the "tsup.config.ts" file
throw new Error("This module should be build before being used");

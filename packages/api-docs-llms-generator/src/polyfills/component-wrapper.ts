const makeComponentWrapperText = (componentFileName: string) => `
import * as React from 'react';
import { BrandingProvider } from '@mui/docs/branding/BrandingProvider';
import { DocsProvider } from '@mui/docs/DocsProvider/DocsProvider';
import * as config from '@mui/docs/config';
import Component from './${componentFileName}';

export default function Wrapper() {
  return (
    <DocsProvider
      config={config}
      defaultUserLanguage="en"
      translations={{ en: {} }}
    >
      <BrandingProvider>
        <Component />
      </BrandingProvider>
    </DocsProvider>
  )
}
`.trim()

export default makeComponentWrapperText;

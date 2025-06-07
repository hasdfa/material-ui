# Right-to-left support

Learn how to implement right-to-left (RTL) text with Joy UI to support languages such as Arabic, Persian, and Hebrew.

## Setup

This guide outlines the three steps necessary to change the direction of text-based components in Joy UI to support RTL languages, as shown in the demo below:

<example name="RtlDemo">
```tsx file="RtlDemo.tsx"
import * as React from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

const theme = extendTheme({
  direction: 'rtl',
});

const cacheRtl = createCache({
  key: 'joyrtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function RtlDemo() {
  return (
    <CacheProvider value={cacheRtl}>
      <CssVarsProvider theme={theme}>
        <div dir="rtl">
          <FormControl>
            <FormLabel>ملصق</FormLabel>
            <Input placeholder="العنصر النائب" />
            <FormHelperText>هذا نص مساعد</FormHelperText>
          </FormControl>
        </div>
      </CssVarsProvider>
    </CacheProvider>
  );
}
```
</example>

### 1. Set the HTML direction

You can set the text direction either globally (across the entire app) or locally (specific to individual components), depending on your use case.

#### Globally

Add `dir="rtl"` to the app's root `<html>` tag to set the global text direction:

```html
<html dir="rtl"></html>
```

If you can't set the `dir` attribute directly on the root `<html>` element, as a workaround, use the JavaScript API before the page is rendered:

```js
document.documentElement.setAttribute('dir', 'rtl');
```

#### Locally

Add the `dir="rtl"` attribute to any other HTML element or React component if you need limit the scope of the text direction to that element and its children.

:::warning
Components that use React portals (like the [Modal](https://mui.com/joy-ui/react-modal/)) do _not_ inherit the `dir` attribute from parents, because they actually render outside of their parental DOM trees.

You must apply the `dir` attribute directly to these components if it's not globally defined as right-to-left:

```jsx
<Box dir="rtl">
  <Modal /> // ❌ this Modal will still be left-to-right (the default)
</Box>
<Box dir="rtl">
  <Modal dir="rtl" /> // ✅ this Modal will be right-to-left as intended
</Box>
```

:::

### 2. Set the theme direction

Use the `extendTheme` API to set the theme direction to `'rtl'`:

```js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  direction: 'rtl',
});
```

### 3. Configure RTL style plugin

Install the [`stylis-plugin-rtl`](https://github.com/styled-components/stylis-plugin-rtl) using one of the commands below:

<codeblock storageKey="package-manager">

```bash npm
npm install stylis stylis-plugin-rtl
```

```bash pnpm
pnpm add stylis stylis-plugin-rtl
```

```bash yarn
yarn add stylis stylis-plugin-rtl
```

</codeblock>

#### With Emotion

If you're using Emotion, use the [CacheProvider](https://emotion.sh/docs/cache-provider) to create a new cache instance that uses `rtlPlugin` from `stylis-plugin-rtl` and add that to the top of your application tree:

```jsx
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function Rtl(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
```

#### With styled-components

If you're using styled-components, use the [StyleSheetManager](https://styled-components.com/docs/api#stylesheetmanager) and provide `rtlPlugin` to the `stylisPlugins` property:

```jsx
import { StyleSheetManager } from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';

function Rtl(props) {
  return (
    <StyleSheetManager stylisPlugins={[rtlPlugin]}>
      {props.children}
    </StyleSheetManager>
  );
}
```

## Opting out of RTL locally

To turn off RTL on specific components, use the template literal syntax and add the `/* @noflip */` directive:

```js
const LeftToRightTextInRtlApp = styled('div')`
  /* @noflip */
  text-align: left;
`;
```

<example name="RtlOptOut">
```tsx file="RtlOptOut.tsx"
import * as React from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { styled } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Switch from '@mui/joy/Switch';

const Normal = styled('div')`
  text-align: left;
`;

const Noflip = styled('div')`
  /* @noflip */
  text-align: left;
`;

const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: 'mui',
});

export default function RtlOptOut() {
  const [rtl, setRtl] = React.useState(false);

  const handleChange = () => {
    setRtl(!rtl);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Switch onChange={handleChange} endDecorator="Toggle RTL" />
      <CacheProvider value={rtl ? rtlCache : ltrCache}>
        <Box sx={{ flexGrow: 1, mx: 2 }} dir={rtl ? 'rtl' : ''}>
          <Normal>RTL normal behavior</Normal>
          <Noflip>RTL noflip</Noflip>
        </Box>
      </CacheProvider>
    </Box>
  );
}
```
</example>
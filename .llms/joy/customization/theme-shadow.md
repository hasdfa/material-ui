# Theme shadow

Learn about the default theme's shadow scale and how to customize it.

## Default tokens

Joy UI uses a T-shirt scale (sm, md, lg, etc.) for defining shadows used by components such as [Card](https://mui.com/joy-ui/react-card/), [Menu](https://mui.com/joy-ui/react-menu/), and more.
These tokens are grouped inside the `theme.shadow` node:

<example name="ShadowThemeViewer">
```tsx file="ShadowThemeViewer.tsx"
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { styled, extendTheme, Shadow } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import LightMode from '@mui/icons-material/LightModeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';
import Check from '@mui/icons-material/CheckCircle';
import { useClipboardCopy } from '@mui/docs/CodeCopy';

const Table = styled('table')(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.vars.palette.divider,
  borderRadius: theme.vars.radius.md,
  borderCollapse: 'separate',
  borderSpacing: 0,
  width: '100%',
  overflowY: 'scroll',
  th: {
    textAlign: 'left',
    padding: 12,
    position: 'sticky',
    top: 0,
    zIndex: 1,
    ...theme.variants.soft.neutral,
  },
  td: {
    verticalAlign: 'top',
    padding: '8px 12px',
  },
  tr: {
    '&:hover': {
      backgroundColor: theme.vars.palette.background.level1,
    },
    '&:first-of-type': {
      '& td': { paddingTop: 6 },
    },
  },
}));
const defaultTheme = extendTheme();

export default function ShadowThemeViewer() {
  const { copy, isCopied } = useClipboardCopy();
  const tokens = Object.keys(defaultTheme.shadow) as Array<keyof Shadow>;
  const formatShadowLayers = (shadow: string) =>
    React.Children.toArray(
      shadow
        .split(', ')
        .reduce<
          Array<React.ReactNode>
        >((result, curr, index, array) => (array.length - 1 !== index ? [...result, `${curr},`, <br />] : [...result, curr]), []),
    );
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      <Sheet
        variant="solid"
        color="success"
        sx={[
          {
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transition: '0.3s',
            p: 0.5,
            px: 0.75,
            borderRadius: 'xs',
            boxShadow: 'sm',
            zIndex: 1,
          },
          isCopied
            ? { transform: `translateX(-50%) translateY(-0.5rem)` }
            : { transform: `translateX(-50%) translateY(calc(100% + 0.5rem))` },
        ]}
      >
        <Typography level="body-xs" textColor="inherit" startDecorator={<Check />}>
          Copied
        </Typography>
      </Sheet>
      <Table>
        <thead>
          <tr>
            <th>
              <Typography sx={{ fontSize: 'sm' }}>Token</Typography>
            </th>
            <th>
              <Typography sx={{ fontSize: 'sm' }}>Value</Typography>
            </th>
            <th>
              <Typography startDecorator={<LightMode />} sx={{ fontSize: 'sm' }}>
                Light
              </Typography>
            </th>
            <th>
              <Typography startDecorator={<DarkMode />} sx={{ fontSize: 'sm' }}>
                Dark
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token}>
              <td>
                <Typography sx={{ fontSize: 'sm' }}>{token}</Typography>
              </td>
              <td>
                <Link
                  component="button"
                  color="neutral"
                  textColor="inherit"
                  onClick={() => copy(token)}
                  sx={{ textAlign: 'left', fontSize: 'xs', fontFamily: 'code' }}
                >
                  {formatShadowLayers(defaultTheme.shadow[token])}
                </Link>
              </td>
              <td data-joy-color-scheme="light">
                <Sheet
                  variant="outlined"
                  sx={{
                    width: 64,
                    height: 64,
                    boxShadow: (theme) => theme.shadow[token],
                    borderRadius: 'xs',
                    mr: 2,
                  }}
                />
              </td>
              <td data-joy-color-scheme="dark">
                <Sheet
                  variant="outlined"
                  sx={{
                    width: 64,
                    height: 64,
                    boxShadow: (theme) => theme.shadow[token],
                    borderRadius: 'xs',
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}
```
</example>

## Customizing the default shadow

Provide key-values to the `shadow` node to override the default shadows:

```js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  shadow: {
    xs: '{CSS box-shadow}',
    sm: '{CSS box-shadow}',
    md: '{CSS box-shadow}',
    lg: '{CSS box-shadow}',
    xl: '{CSS box-shadow}',
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.
```

:::success
We recommend using `var(--joy-shadowRing)` and `var(--joy-shadowChannel)` for shadow values, similar to the [default token value](#default-tokens).
:::

## Adding new shadows

You can add any custom keys to the `shadow` node:

```js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  shadow: {
    subtle: '{CSS box-shadow}',
    strong: '{CSS box-shadow}',
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.
```

### TypeScript

When working in TypeScript, you need to augment the theme's `Shadow` interface with the new keys:

```ts
// You can put this to any file that's included in your tsconfig
declare module '@mui/joy/styles' {
  interface Shadow {
    subtle: string;
    strong: string;
  }
}
```

## Shadow ring

The shadow ring can be configured for both light and dark color schemes.
To create a shadow ring, provide a valid CSS box-shadow value to the `shadowRing` node:

```js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      // This creates a 1px box-shadow.
      shadowRing: '0 0 0 1px rgba(0 0 0 / 0.1)',
    },
    dark: {
      shadowChannel: '0 0 0 1px rgba(255 255 255 / 0.1)',
    },
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.
```

:::warning
Customizing the theme's shadow ring will affect all Joy UI components that consume the theme's shadows.

If you want to create a shadow ring for a specific element, see [Customizing shadows on an element](#customizing-shadows-on-an-element).
:::

## Shadow colors

The color of the shadow comes from the theme token named `var(--joy-shadowChannel)`.
You can customize the value for both light and dark color schemes:

```js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      shadowChannel: '12 12 12',
    },
    dark: {
      shadowChannel: '0 0 0',
    },
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.
```

:::warning
The `shadowChannel` value must be rgb channels, for example `187 187 187`.
:::

## Customizing shadows on an element

To customize a shadow color or shadow ring on a specific instance, use the raw value from the `theme.shadow.*`.

:::error
**Don't** use shadows from `theme.vars` or the shorthand syntax `{ shadow: '{key}' }` because the value points to the global CSS variable which does not work with the custom `shadowChannel` and `shadowRing` on the instance.
:::

```js
// ✅
<Button
  sx={(theme) => ({
    boxShadow: theme.shadow.md,
    '--joy-shadowChannel': theme.vars.palette.primary.mainChannel,
    '--joy-shadowRing': 'inset 0 -3px 0 rgba(0 0 0 / 0.24)',
  })}
>

// ❌ Both of these do not work
<Button
  sx={(theme) => ({
    boxShadow: 'md',
    '--joy-shadowChannel': theme.vars.palette.primary.mainChannel,
    '--joy-shadowRing': 'inset 0 -3px 0 rgba(0 0 0 / 0.24)',
  })}
>
<Button
  sx={(theme) => ({
    boxShadow: theme.vars.shadow.md,
    '--joy-shadowChannel': theme.vars.palette.primary.mainChannel,
    '--joy-shadowRing': 'inset 0 -3px 0 rgba(0 0 0 / 0.24)',
  })}
>
```

<example name="CustomShadowOnElement">
```tsx file="CustomShadowOnElement.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';

export default function CustomShadowOnElement() {
  return (
    <Button
      size="lg"
      sx={(theme) => ({
        boxShadow: theme.shadow.md,
        transition: '0.2s',
        '--joy-shadowChannel': theme.vars.palette.primary.mainChannel,
        '--joy-shadowRing': 'inset 0 -3px 0 rgba(0 0 0 / 0.24)',
        '&:hover': {
          boxShadow: theme.shadow.lg,
          transform: 'translateY(-3px)',
        },
        '&:active': {
          boxShadow: theme.shadow.md,
          transform: 'translateY(0px)',
          '--joy-shadowRing': '0 0 #000',
        },
      })}
    >
      Buy
    </Button>
  );
}
```
</example>
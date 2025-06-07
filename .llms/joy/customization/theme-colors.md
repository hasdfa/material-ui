# Theme colors

Learn about the default theme's color palette and how to customize it.

## Default color tokens

Joy UI's default theme includes 5 built-in semantic color palettes, with light and dark mapping, to help you build great looking UIs quickly.

<example name="PaletteThemeViewer">
```tsx file="PaletteThemeViewer.tsx"
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { extendTheme, Palette, styled } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import LightMode from '@mui/icons-material/LightModeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useClipboardCopy } from '@mui/docs/CodeCopy';

const defaultTheme = extendTheme();

const traverseObject = (palette: Palette) => {
  const result: Record<string, any> = {};
  const traverse = (object: any, parts: string[] = []) => {
    if (object && typeof object === 'object') {
      for (const key of Object.keys(object)) {
        traverse(object[key], [...parts, key]);
      }
    } else {
      result[parts.join('.')] = object;
    }
  };
  traverse(palette);
  return result;
};

// https://stackoverflow.com/a/38641281/559913
const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});

const Table = styled('table')(({ theme }) => ({
  borderCollapse: 'separate',
  borderSpacing: 0,
  display: 'block',
  height: 500,
  overflowY: 'scroll',
  th: {
    textAlign: 'left',
    padding: 8,
    position: 'sticky',
    top: 0,
    zIndex: 1,
    ...theme.variants.soft.neutral,
  },
  td: {
    verticalAlign: 'top',
    padding: '3px 6px',
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

export default function PaletteThemeViewer() {
  const { copy, isCopied } = useClipboardCopy();
  const light = traverseObject(defaultTheme.colorSchemes.light.palette);
  const dark = traverseObject(defaultTheme.colorSchemes.dark.palette);
  const paletteTokens = Array.from(
    new Set([...Object.keys(dark), ...Object.keys(light)]),
  ).sort(collator.compare);
  const renderSwatch = (colorScheme: 'light' | 'dark', token: string) => (
    <Box
      component="span"
      data-joy-color-scheme={colorScheme}
      sx={{
        position: 'relative',
        width: '1em',
        height: '1em',
        fontSize: 'var(--Icon-fontSize)',
        borderRadius: '2px',
        backgroundImage: `linear-gradient(90deg, var(--joy-palette-text-tertiary) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, var(--joy-palette-text-tertiary) 50%)`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '100% 50%, 100% 50%',
        backgroundPosition: '0 0, 0 100%',
        '&::after': {
          content: '""',
          position: 'absolute',
          display: 'block',
          inset: 0,
          bgcolor: token,
          borderRadius: 'inherit',
          boxShadow: 'inset 0 0 0 1px #bababa',
        },
      }}
    />
  );
  return (
    <Box
      sx={{
        marginBottom: '-9px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid',
        borderColor: 'divider',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
      }}
    >
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
            pl: 0.5,
            pr: 1,
            borderRadius: 'xl',
            boxShadow: 'md',
            zIndex: 1,
          },
          isCopied
            ? { transform: `translateX(-50%) translateY(-0.5rem)` }
            : { transform: `translateX(-50%) translateY(calc(100% + 0.5rem))` },
        ]}
      >
        <Typography
          level="body-xs"
          textColor="inherit"
          startDecorator={<CheckCircleRoundedIcon fontSize="small" />}
        >
          Copied
        </Typography>
      </Sheet>
      <Table>
        <thead>
          <tr>
            <th>
              <Typography textColor="inherit" sx={{ fontSize: 'sm' }}>
                Token
              </Typography>
            </th>
            <th>
              <Typography
                startDecorator={<LightMode />}
                textColor="inherit"
                sx={{ fontSize: 'sm' }}
              >
                Light
              </Typography>
            </th>
            <th>
              <Typography
                startDecorator={<DarkMode />}
                textColor="inherit"
                sx={{ fontSize: 'sm' }}
              >
                Dark
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {paletteTokens
            .filter((token) => token !== 'mode')
            .map((token) => (
              <tr key={token}>
                <td>
                  <Link
                    component="button"
                    color="neutral"
                    textColor="inherit"
                    onClick={() => copy(token)}
                    endDecorator={
                      light[token].match(/^[0-9]+\s[0-9]+\s[0-9]+$/) ? (
                        <Tooltip
                          size="sm"
                          arrow
                          title={
                            <Typography>
                              Translucent color usage: <br />
                              <Typography
                                component="code"
                                sx={{ fontFamily: 'code', py: 1, display: 'block' }}
                              >
                                rgba(var(--joy-palette-{token.replace('.', '-')}) /
                                0.6)
                              </Typography>
                            </Typography>
                          }
                          sx={{ pointerEvents: 'none' }}
                        >
                          <InfoOutlined sx={{ cursor: 'initial' }} />
                        </Tooltip>
                      ) : null
                    }
                    sx={{
                      fontSize: 'sm',
                      fontWeight: 'md',
                      textAlign: 'left',
                      cursor: 'copy',
                    }}
                  >
                    {token}
                  </Link>
                </td>
                <td>
                  <Link
                    component="button"
                    color="neutral"
                    textColor="inherit"
                    startDecorator={renderSwatch('light', token)}
                    onClick={() => copy(light[token])}
                    sx={{
                      fontSize: 'xs',
                      fontFamily: 'code',
                      textAlign: 'left',
                      alignItems: 'flex-start',
                      cursor: 'copy',
                    }}
                  >
                    {light[token]}
                  </Link>
                </td>
                <td>
                  <Link
                    component="button"
                    color="neutral"
                    textColor="inherit"
                    startDecorator={renderSwatch('dark', token)}
                    onClick={() => copy(dark[token])}
                    sx={{
                      fontSize: 'xs',
                      fontFamily: 'code',
                      textAlign: 'left',
                      alignItems: 'flex-start',
                      cursor: 'copy',
                    }}
                  >
                    {dark[token]}
                  </Link>
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

:::info
Some tokens reuse color values from others using the [`var(--*)`](https://developer.mozilla.org/en-US/docs/Web/CSS/var) syntax.
:::

### Global variant tokens

One of Joy UI's main features is the four [global variants](https://mui.com/joy-ui/main-features/global-variants/) that are available in every component. They use the built-in color palettes following the format of **variant type | state | CSS property**. For example:

- `solidBg` refers to the solid variant's background color in its initial state.
- `outlinedHoverBorder` refers to the outlined variant's border color in its hover state.

### Channel tokens

The channel tokens helps creating translucent colors using (`rgba`).
The ones ending with `Channel` are automatically generated for each palette.

- `lightChannel`: is generated from the palette's `200` token.
- `mainChannel`: is generated from the palette's `500` token.
- `darkChannel`: is generated from the palette's `800` token.

The code snippet below shows how to use them:

```js
import Typography from '@mui/joy/Typography';

<Typography
  sx={theme => ({
    color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.72)`,
  })}
>
```

## Customizations

### Changing the default values

To change the HEX code for each color while still following the palette pattern, extend the theme by accessing them through the `palette` node on the target mode (light or dark):

```js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.
```

### Changing the global variant tokens

A good way to start changing how color looks like with the built-in variants is by using the Button component as a jumping-off point.
For example, here's how you'd make the Joy UI Button match the colors of another system, such as [Bootstrap](https://getbootstrap.com/docs/5.2/components/buttons/#examples):

<example name="BootstrapVariantTokens">
```jsx file="BootstrapVariantTokens.js"
import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

const palette = {
  primary: {
    solidBg: '#0d6efd',
    solidBorder: '#0d6efd',
    solidHoverBg: '#0b5ed7',
    solidHoverBorder: '#0a58ca',
    solidActiveBg: '#0a58ca',
    solidActiveBorder: '#0a53be',
    solidDisabledBg: '#0d6efd',
    solidDisabledBorder: '#0d6efd',
  },
  neutral: {
    solidBg: '#6c757d',
    solidBorder: '#6c757d',
    solidHoverBg: '#5c636a',
    solidHoverBorder: '#565e64',
    solidActiveBg: '#565e64',
    solidActiveBorder: '#51585e',
    solidDisabledBg: '#6c757d',
    solidDisabledBorder: '#6c757d',
    // btn-light
    softColor: '#000',
    softBg: '#f8f9fa',
    softBorder: '#f8f9fa',
    softHoverBg: '#f9fafb',
    softHoverBorder: '#f9fafb',
    softActiveBg: '#f9fafb',
    softActiveBorder: '#f9fafb',
    softDisabledBg: '#f8f9fa',
    softDisabledBorder: '#f8f9fa',
  },
  success: {
    solidBg: '#198754',
    solidBorder: '#198754',
    solidHoverBg: '#157347',
    solidHoverBorder: '#146c43',
    solidActiveBg: '#146c43',
    solidActiveBorder: '#13653f',
    solidDisabledBg: '#198754',
    solidDisabledBorder: '#198754',
  },
  danger: {
    solidBg: '#dc3545',
    solidBorder: '#dc3545',
    solidHoverBg: '#bb2d3b',
    solidHoverBorder: '#b02a37',
    solidActiveBg: '#b02a37',
    solidActiveBorder: '#a52834',
    solidDisabledBg: '#dc3545',
    solidDisabledBorder: '#dc3545',
  },
  warning: {
    solidColor: '#000',
    solidBg: '#ffc107',
    solidBorder: '#ffc107',
    solidHoverBg: '#ffca2c',
    solidHoverBorder: '#ffc720',
    solidActiveBg: '#ffcd39',
    solidActiveBorder: '#ffc720',
    solidDisabledBg: '#ffc107',
    solidDisabledBorder: '#ffc107',
  },
  info: {
    solidColor: '#000',
    solidBg: '#0dcaf0',
    solidBorder: '#0dcaf0',
    solidHoverBg: '#31d2f2',
    solidHoverBorder: '#25cff2',
    solidActiveBg: '#3dd5f3',
    solidActiveBorder: '#25cff2',
    solidDisabledBg: '#0dcaf0',
    solidDisabledBorder: '#0dcaf0',
  },
};

const bootstrapTheme = extendTheme({
  cssVarPrefix: 'bs',
  colorSchemes: {
    light: { palette },
    dark: { palette },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          letterSpacing: 'normal',
          fontWeight: theme.vars.fontWeight.md,
          fontFamily: theme.vars.fontFamily.fallback,
          outlineWidth: 0,
          borderRadius: '0.375rem',
          transition:
            'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
          ...(ownerState.size === 'md' && {
            paddingInline: '0.75rem',
            minHeight: 38,
          }),
        }),
      },
    },
  },
});

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function BootstrapVariantTokens() {
  // the `node` is used for attaching CSS variables to this demo, you might not need it in your application.
  const [node, setNode] = React.useState(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById('bootstrap-buttons-demo'));
  }, []);

  return (
    <CssVarsProvider theme={bootstrapTheme} colorSchemeNode={node || null}>
      <Box
        id="bootstrap-buttons-demo"
        sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}
      >
        <Button>Primary</Button>
        <Button color="neutral">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
        <Button variant="soft" color="neutral">
          Light
        </Button>
      </Box>
    </CssVarsProvider>
  );
}
```
</example>

- Bootstrap's default buttons are comparable to Joy UI's `solid` variant.
- Bootstrap's `secondary` variant uses a gray color, similar to Joy UI's `neutral`.
- Bootstrap's `btn-light` is similar to Joy UI's button using the `soft` variant and `neutral` color palette.
- Joy UI's defaults don't include anything similar to Bootstrap's `btn-dark`.
  - We can recreate it using one of the three main customization approaches.

### Adding color tokens

To make any new color available through the `color` prop, insert them in the `colorSchemes` key of the extended theme.
You'll also be able to access them with both the `styled` and `sx` APIs.

```js
extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // `gradient` is a new color token
        gradient: {
          primary: 'linear-gradient(to top, var(--joy-palette-primary-main), #000)',
        },
      },
    },
  },
});

// `sx` prop usage example:
<Button sx={{ background: (theme) => theme.vars.palette.gradient.primary }} />;
```

:::success
We recommend to limit them to 3 levels deep－in this case: `palette.gradient.primary`.
:::

#### TypeScript

Augment the theme's `Palette` interface, when working in TypeScript, to include the new tokens.

```ts
// You can put this to any file that's included in your tsconfig
declare module '@mui/joy/styles' {
  interface Palette {
    gradient: {
      primary: string;
    };
  }
}
```

:::success
Adding custom tokens increases your stylesheet's bundle size, and adds an extra set of maintenance costs to your app.
These tradeoffs mean that adding new tokens is usually only worthwhile when you know that they'll be used by many components.

As an alternative, consider using [the `sx` prop](https://mui.com/joy-ui/customization/approaches/#the-sx-prop) for one-off customizations.
:::

### Adding new palettes

To add entirely new color palettes, with any type of scale, and make them available through the `color` prop, insert them in the `colorSchemes` key of the extended theme.

The snippet below adds a custom `secondary` palette to the theme.

```js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        secondary: {
          // Credit:
          // https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          // Adjust the global variant tokens as you'd like.
          // The tokens should be the same for all color schemes.
          solidBg: 'var(--joy-palette-secondary-400)',
          solidActiveBg: 'var(--joy-palette-secondary-500)',
          outlinedBorder: 'var(--joy-palette-secondary-500)',
          outlinedColor: 'var(--joy-palette-secondary-700)',
          outlinedActiveBg: 'var(--joy-palette-secondary-100)',
          softColor: 'var(--joy-palette-secondary-800)',
          softBg: 'var(--joy-palette-secondary-200)',
          softActiveBg: 'var(--joy-palette-secondary-300)',
          plainColor: 'var(--joy-palette-secondary-700)',
          plainActiveBg: 'var(--joy-palette-secondary-100)',
        },
      },
    },
    dark: {
      palette: {
        secondary: {
          // Credit:
          // https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          // Adjust the global variant tokens as you'd like.
          // The tokens should be the same for all color schemes.
          solidBg: 'var(--joy-palette-secondary-400)',
          solidActiveBg: 'var(--joy-palette-secondary-500)',
          outlinedBorder: 'var(--joy-palette-secondary-700)',
          outlinedColor: 'var(--joy-palette-secondary-600)',
          outlinedActiveBg: 'var(--joy-palette-secondary-900)',
          softColor: 'var(--joy-palette-secondary-500)',
          softBg: 'var(--joy-palette-secondary-900)',
          softActiveBg: 'var(--joy-palette-secondary-800)',
          plainColor: 'var(--joy-palette-secondary-500)',
          plainActiveBg: 'var(--joy-palette-secondary-900)',
        },
      },
    },
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.
```

Then, you will be able to use `secondary` color on Joy UI components:

```js
<Button color="secondary">
<IconButton variant="outlined" color="secondary">
<Chip variant="soft" color="secondary">
```

#### TypeScript

When working in TypeScript, you must augment the theme's interfaces to include the new palette.

```ts
// You can put this to any file that's included in your tsconfig
import type { PaletteRange } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    secondary: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    secondary: PaletteRange;
  }
}
```

:::warning
Note that adding new palettes increases the HTML bundle size.
:::

### Removing the default tokens

To remove any default token, use `undefined` as a value within the extended theme.
This removes them from the `theme` object and prevents the corresponding CSS variable from being generated.

For example, all default global variant color tokens comes with styles for the `:active` pseudo class.
Here's how you'd remove it from the solid variant.

<example name="RemoveActiveTokens">
```jsx file="RemoveActiveTokens.js"
import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

// ⚠️ If the value is `undefined`, it should be `undefined` for other color schemes as well.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidActiveBg: undefined,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          solidActiveBg: undefined,
        },
      },
    },
  },
});

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function RemoveActiveTokens() {
  // the `node` is used for attaching CSS variables to this demo, you might not need it in your application.
  const [node, setNode] = React.useState(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById('remove-active-tokens-demo'));
  }, []);

  return (
    <CssVarsProvider theme={theme} colorSchemeNode={node || null}>
      <Box
        id="remove-active-tokens-demo"
        sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}
      >
        <Button>Button</Button>
      </Box>
    </CssVarsProvider>
  );
}
```
</example>
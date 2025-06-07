# Theme typography

Learn about the default theme's typography system and how to customize it.

## Default system

Joy UI's default theme includes a built-in typography system of 11 distinct levels—including semantic HTML headers as well as a comparable system for body text—to help you ensure consistency across your interface.

<example name="TypographyThemeViewer">
```tsx file="TypographyThemeViewer.tsx"
import * as React from 'react';
import { extendTheme, styled, TypographySystem, FontSize } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';

const defaultTheme = extendTheme();

const Table = styled('table')(({ theme }) => ({
  borderCollapse: 'separate',
  borderSpacing: 0,
  display: 'block',
  width: 'max-content',
  overflow: 'auto',
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
    '& > *': {
      padding: '8px 12px',
      margin: '-8px -12px',
    },
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

const extractFromVar = (value: string, field: string) =>
  (value || '').replace(`var(--joy-${field}-`, '').replace(')', '');

export default function TypographyThemeViewer() {
  const levels = Object.keys(defaultTheme.typography) as Array<
    keyof TypographySystem
  >;
  const renderSwatch = (colorScheme: 'light' | 'dark', token: string) =>
    token ? (
      <Box
        component="span"
        data-joy-color-scheme={colorScheme}
        sx={{
          display: 'inline-block',
          width: '16px',
          height: '16px',
          borderRadius: '2px',
          bgcolor: token,
          boxShadow: 'inset 0 0 0 1px #bababa',
        }}
      />
    ) : null;
  return (
    <Box
      sx={{
        marginBottom: '-9px',
        maxWidth: '100%',
        overflowX: 'scroll',
        border: '1px solid',
        borderColor: 'divider',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
      }}
    >
      <Table>
        <thead>
          <tr>
            <th>
              <Typography sx={{ fontSize: 'sm' }}>Level</Typography>
            </th>
            <th>
              <Typography noWrap sx={{ fontSize: 'sm' }}>
                Color
              </Typography>
            </th>
            <th>
              <Typography noWrap sx={{ fontSize: 'sm' }}>
                Font size
              </Typography>
            </th>
            <th>
              <Typography noWrap sx={{ fontSize: 'sm' }}>
                Font weight
              </Typography>
            </th>
            <th>
              <Typography noWrap sx={{ fontSize: 'sm' }}>
                Line height
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level) => (
            <tr key={level}>
              <td>
                <Tooltip
                  title={<Typography level={level}>Preview</Typography>}
                  size="sm"
                  arrow
                  variant="outlined"
                  placement="bottom-start"
                  sx={{ pointerEvents: 'none' }}
                >
                  <Typography sx={{ fontSize: 'sm', cursor: 'zoom-in' }}>
                    {level}
                  </Typography>
                </Tooltip>
              </td>
              <td>
                <Tooltip
                  size="sm"
                  arrow
                  variant="outlined"
                  title={
                    <Box sx={{ display: 'flex', gap: 3 }}>
                      <Typography
                        startDecorator={renderSwatch(
                          'light',
                          defaultTheme.typography[level].color as string,
                        )}
                        sx={{ fontSize: 'xs' }}
                      >
                        (light)
                      </Typography>
                      <Typography
                        startDecorator={renderSwatch(
                          'dark',
                          defaultTheme.typography[level].color as string,
                        )}
                        sx={{ fontSize: 'xs' }}
                      >
                        (dark)
                      </Typography>
                    </Box>
                  }
                  sx={{ pointerEvents: 'none' }}
                >
                  <Typography
                    sx={{ fontSize: 'xs', fontFamily: 'code', cursor: 'zoom-in' }}
                  >
                    {defaultTheme.typography[level].color || '-'}
                  </Typography>
                </Tooltip>
              </td>
              <td>
                <Tooltip
                  size="sm"
                  arrow
                  title={
                    defaultTheme.fontSize[
                      extractFromVar(
                        defaultTheme.typography[level].fontSize as string,
                        'fontSize',
                      ) as keyof FontSize
                    ]
                  }
                  sx={{ pointerEvents: 'none' }}
                >
                  <Typography
                    sx={{ fontSize: 'xs', fontFamily: 'code', cursor: 'zoom-in' }}
                  >
                    {defaultTheme.typography[level].fontSize || '-'}
                  </Typography>
                </Tooltip>
              </td>
              {(['fontWeight', 'lineHeight'] as const).map((field) => (
                <td key={field}>
                  <Tooltip
                    size="sm"
                    arrow
                    title={
                      (defaultTheme[field] as Record<string, any>)[
                        extractFromVar(
                          defaultTheme.typography[level][field] as string,
                          field,
                        )
                      ] || ''
                    }
                    sx={{ pointerEvents: 'none' }}
                  >
                    <Typography
                      sx={{
                        fontSize: 'xs',
                        fontFamily: 'code',
                        textAlign: 'center',
                        cursor: 'zoom-in',
                      }}
                    >
                      {defaultTheme.typography[level][field] || '-'}
                    </Typography>
                  </Tooltip>
                </td>
              ))}
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
[CSS Baseline](https://mui.com/joy-ui/react-css-baseline/), [Scoped CSS Baseline](https://mui.com/joy-ui/react-css-baseline/#scoping-on-children), and [Typography](https://mui.com/joy-ui/react-typography/) are the only components that consume the theme typography directly, ensuring you can customize or even remove the default typography system without affecting other components.
:::

### Usage

There are several ways that you can use the theme typography in your application:

#### Typography component

Use the `level` prop in the [Typography](https://mui.com/joy-ui/react-typography/) component:

```jsx
// use the `theme.typography['body-sm']` styles
<Typography level="body-sm">Secondary info</Typography>
```

#### CSS Baseline

The [CSS Baseline](https://mui.com/joy-ui/react-css-baseline/) component applies `body-md` as the default level on the global stylesheet:

```jsx
<CssBaseline />

// inherits the `theme.typography['body-md']` styles
Hello World
```

#### sx prop

Customize the typographic styles via the `sx` prop using `typography: 'some-level'`:

```jsx
// to apply the `theme.typography['body-sm']` styles:
<Box sx={{ typography: 'body-sm' }}>Small text</Box>
```

#### Applying theme styles to custom components

Use the [`styled`](https://mui.com/joy-ui/customization/approaches/#reusable-component) function to create a custom component and apply styles from `theme.typography.*`:

```jsx
import { styled } from '@mui/joy/styles';

const Tag = styled('span')((theme) => ({
  ...theme.typography['body-sm'],
  color: 'inherit',
  borderRadius: theme.vars.radius.xs,
  boxShadow: theme.vars.shadow.sm,
  padding: '0.125em 0.375em',
}));
```

## Customizations

To customize a default level, provide its name as a key along with an object containing the CSS rules as a value to the `theme.typography` node.

The example below illustrates the customization of the `h1` level:

<example name="CustomTypographyLevel">
```tsx file="CustomTypographyLevel.tsx"
import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';

const customTheme = extendTheme({
  typography: {
    h1: {
      // `--joy` is the default CSS variable prefix.
      // If you have a custom prefix, you have to use it instead.
      // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
      background:
        'linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))',
      // `Webkit*` properties must come later.
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
});

export default function CustomTypographyLevel() {
  return (
    <CssVarsProvider theme={customTheme}>
      <Box sx={(theme) => theme.typography.h1}>This is a gradient h1</Box>
    </CssVarsProvider>
  );
}
```
</example>

### Removing the default system

Use `undefined` as a value to remove any unwanted levels:

```js
const customTheme = extendTheme({
  typography: {
    'title-sm': undefined,
    'title-xs': undefined,
  },
});
```

For TypeScript, you must augment the theme structure to exclude the default levels:

```ts
// You can put this to any file that's included in your tsconfig
declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    'title-sm': false;
    'title-xs': false;
  }
}
```

### Adding more levels

To add a new level, define it as a key-value pair in the `theme.typography` node, where the key is the name of the new level and the value is an object containing the CSS rules.

The demo below shows how to add a new level called `kbd`:

<example name="NewTypographyLevel">
```tsx file="NewTypographyLevel.tsx"
import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';

declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    kbd: true;
  }
}

const customTheme = extendTheme({
  typography: {
    kbd: {
      background:
        'linear-gradient(to top, var(--joy-palette-background-level2), var(--joy-palette-background-surface))',
      border: '1px solid var(--joy-palette-neutral-outlinedBorder)',
      borderRadius: 'var(--joy-radius-xs)',
      boxShadow: 'var(--joy-shadow-sm)',
      padding: '0.125em 0.375em',
    },
  },
});

export default function NewTypographyLevel() {
  return (
    <CssVarsProvider theme={customTheme}>
      <div>
        <Typography>
          Press <Typography level="kbd">⌘</Typography> +{' '}
          <Typography level="kbd">k</Typography> to search the documentation.
        </Typography>
      </div>
    </CssVarsProvider>
  );
}
```
</example>

For TypeScript, you must augment the theme structure to include the new level:

```ts
// You can put this to any file that's included in your tsconfig
declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    kbd: true;
  }
}
```

### Changing the default font

Joy UI uses the [Inter](https://rsms.me/inter/) font by default.
To change it, override the theme's `fontFamily` property:

```js
extendTheme({
  fontFamily: {
    display: 'Noto Sans', // applies to `h1`–`h4`
    body: 'Noto Sans', // applies to `title-*` and `body-*`
  },
});
```

## Common examples

Here is a collection of well-known typography systems that you can use with Joy UI.
Feel free to [submit a PR](https://github.com/mui/material-ui/compare) to add your favorite if it's not here. ❤️

### Microsoft's Fluent

- Design resource: [Figma](https://www.figma.com/community/file/836828295772957889/microsoft-fluent-2-web)
- Font: [Segoe UI](https://learn.microsoft.com/en-us/typography/font-list/segoe-ui)

<iframe src="https://codesandbox.io/embed/joy-ui-fluent-typography-system-j86fct?module=%2Fdemo.tsx&fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:360px; border:0; border-radius: 12px; overflow:hidden;"
     title="Joy UI - Fluent Typography System"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Apple's Human Interface Guidelines

- Design resource: [Sketch library](https://developer.apple.com/design/resources/)
- Font: [San Francisco (SF)](https://developer.apple.com/fonts/)

<iframe src="https://codesandbox.io/embed/joy-ui-human-interface-guidelines-typography-system-lkuz4d?module=%2Fdemo.tsx&fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:320px; border:0; border-radius: 12px; overflow:hidden;"
     title="Joy UI - Human Interface Guidelines Typography System"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Google's Material Design 3

- Design resource: [Figma](https://www.figma.com/community/file/1035203688168086460/material-3-design-kit)
- Font: [Roboto](https://fonts.google.com/specimen/Roboto)

<iframe src="https://codesandbox.io/embed/joy-ui-material-3-typography-system-lx044f?module=%2Fdemo.tsx&fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 12px; overflow:hidden;"
     title="Joy UI - Joy UI - M3 Typography System"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
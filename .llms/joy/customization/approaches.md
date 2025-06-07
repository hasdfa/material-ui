# Approaches

Learn which approach is recommended, depending on the situation, to customize Joy UI components.

- For customizing only a specific instance of a given component, [_use the `sx` prop_](#the-sx-prop).
- To ensure every instance of a given component looks the same across you app, [_use theming_](#theming).
- To create something that Joy UI doesn't support out of the box but still has design consistency, create a [_reusable component_](#reusable-component) that uses Joy UI's theme design tokens.

## The sx prop

The `sx` prop provides a superset of CSS (contains all CSS properties/selectors, in addition to custom ones) that maps values directly from the theme, depending on the CSS property used.

Every Joy UI component supports it and it's a tool that allows you to quickly customize components on the spot.
Visit [the `sx` prop documentation](https://mui.com/system/getting-started/the-sx-prop/) to learn more about it.

<example name="SxProp">
```jsx file="SxProp.js"
import * as React from 'react';
import Button from '@mui/joy/Button';

export default function SxProp() {
  return (
    <Button
      size="md"
      sx={(theme) => ({
        background: `linear-gradient(-45deg, ${theme.vars.palette.primary[700]}, ${theme.vars.palette.primary[600]})`,
        boxShadow: 'inset 0px 2px 2px rgba(255, 255, 255, 0.3)',
        borderRadius: 'md',
        fontWeight: 'lg', // short-hand syntax, same as `theme.fontWeight.lg`
        '&:hover': {
          background: `${theme.vars.palette.primary[700]}`,
          boxShadow: 'inset 0px 0px 4px rgba(0, 0, 0, 0.3)',
        },
      })}
    >
      This is a call to action
    </Button>
  );
}
```
</example>

## Theming

The theme is an object where you define both your design language with foundational tokens such as color schemes, typography and spacing scales, and how each component, and their different variants and states, uses them.

Here are some examples that reproduce popular designs (only the light mode, though):

<example name="ButtonThemes">
```jsx file="ButtonThemes.js"
import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import { BrandingProvider } from '@mui/docs/branding';

const githubTheme = extendTheme({
  cssVarPrefix: 'gh',
  colorSchemes: {
    light: {
      palette: {
        success: {
          solidBg: '#2DA44E',
          solidHoverBg: '#2C974B',
          solidActiveBg: '#298E46',
        },
        neutral: {
          outlinedBg: '#F6F8FA',
          outlinedHoverBg: '#F3F4F6',
          outlinedActiveBg: 'rgba(238, 239, 242, 1)',
          outlinedBorder: 'rgba(27, 31, 36, 0.15)',
        },
        focusVisible: 'rgba(3, 102, 214, 0.3)',
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '3px',
    },
  },
  fontFamily: {
    body: 'SF Pro Text, var(--gh-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: '6px',
          boxShadow: '0 1px 0 0 rgba(27, 31, 35, 0.04)',
          transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
          transitionProperty: 'color,background-color,box-shadow,border-color',
          ...(ownerState.size === 'md' && {
            fontWeight: 600,
            minHeight: '32px',
            fontSize: '14px',
            '--Button-paddingInline': '1rem',
          }),
          ...(ownerState.color === 'success' &&
            ownerState.variant === 'solid' && {
              '--gh-palette-focusVisible': 'rgba(46, 164, 79, 0.4)',
              border: '1px solid rgba(27, 31, 36, 0.15)',
              '&:active': {
                boxShadow: 'inset 0px 1px 0px rgba(20, 70, 32, 0.2)',
              },
            }),
          ...(ownerState.color === 'neutral' &&
            ownerState.variant === 'outlined' && {
              '&:active': {
                boxShadow: 'none',
              },
            }),
        }),
      },
    },
  },
});
const githubCode = `const githubTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        success: {
          solidBg: '#2DA44E',
          solidHoverBg: '#2C974B',
          solidActiveBg: '#298E46',
        },
        neutral: {
          outlinedBg: '#F6F8FA',
          outlinedHoverBg: '#F3F4F6',
          outlinedActiveBg: 'rgba(238, 239, 242, 1)',
          outlinedBorder: 'rgba(27, 31, 36, 0.15)',
        },
        focusVisible: 'rgba(3, 102, 214, 0.3)',
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '3px',
    },
  },
  fontFamily: {
    body: 'SF Pro Text, var(--gh-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: '6px',
          boxShadow: '0 1px 0 0 rgba(27, 31, 35, 0.04)',
          transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
          transitionProperty: 'color,background-color,box-shadow,border-color',
          ...(ownerState.size === 'md' && {
            fontWeight: 600,
            minHeight: '32px',
            fontSize: '14px',
            '--Button-paddingInline': '1rem',
          }),
          ...(ownerState.color === 'success' &&
            ownerState.variant === 'solid' && {
              '--gh-palette-focusVisible': 'rgba(46, 164, 79, 0.4)',
              border: '1px solid rgba(27, 31, 36, 0.15)',
              '&:active': {
                boxShadow: 'inset 0px 1px 0px rgba(20, 70, 32, 0.2)',
              },
            }),
          ...(ownerState.color === 'neutral' &&
            ownerState.variant === 'outlined' && {
              '&:active': {
                boxShadow: 'none',
              },
            }),
        }),
      },
    },
  },
});`;

const fluentTheme = extendTheme({
  cssVarPrefix: 'fluent',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#0078D4',
          solidHoverBg: '#106EBE',
          solidActiveBg: '#005A9E',
          solidDisabledBg: '#F3F2F1',
          solidDisabledColor: '#A19F9D',
        },
        neutral: {
          outlinedBg: '#fff',
          outlinedColor: '#201F1E',
          outlinedDisabledBg: '#F3F2F1',
          outlinedDisabledColor: '#A19F9D',
          outlinedDisabledBorder: '#C8C6C4',
          outlinedBorder: '#8A8886',
          outlinedHoverBg: '#F3F2F1',
          outlinedHoverBorder: undefined,
          outlinedActiveBg: '#EDEBE9',
        },
        focusVisible: '#323130',
      },
    },
  },
  focus: {
    default: {
      outlineOffset: -1,
      outlineWidth: '1px',
    },
  },
  fontFamily: {
    body: '"Segoe UI Variable", var(--fluent-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '--Button-iconOffsetStep': 0,
          ...(ownerState.variant === 'solid' && {
            '&.Mui-focusVisible, &:focus-visible': {
              outlineOffset: '-3px',
              outlineColor: '#fff',
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            '&.Mui-focusVisible, &:focus-visible': {
              outlineOffset: '-3px',
            },
          }),
          ...(ownerState.size === 'md' && {
            '--Icon-fontSize': '20px',
            fontSize: '14px',
            fontWeight: 600,
            minHeight: '32px',
            borderRadius: '2px',
            paddingLeft: 20,
            paddingRight: 20,
          }),
        }),
      },
    },
  },
});
const fluentCode = `const fluentTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#0078D4',
          solidHoverBg: '#106EBE',
          solidActiveBg: '#005A9E',
          solidDisabledBg: '#F3F2F1',
          solidDisabledColor: '#A19F9D',
        },
        neutral: {
          outlinedBg: '#fff',
          outlinedColor: '#201F1E',
          outlinedDisabledBg: '#F3F2F1',
          outlinedDisabledColor: '#A19F9D',
          outlinedDisabledBorder: '#C8C6C4',
          outlinedBorder: '#8A8886',
          outlinedHoverBg: '#F3F2F1',
          outlinedHoverBorder: undefined,
          outlinedActiveBg: '#EDEBE9',
        },
        focusVisible: '#323130',
      },
    },
  },
  focus: {
    default: {
      outlineOffset: -1,
      outlineWidth: '1px',
    },
  },
  fontFamily: {
    body: '"Segoe UI Variable", var(--fluent-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '--Button-iconOffsetStep': 0,
          ...(ownerState.variant === 'solid' && {
            '&.Mui-focusVisible, &:focus-visible': {
              outlineOffset: '-3px',
              outlineColor: '#fff',
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            '&.Mui-focusVisible, &:focus-visible': {
              outlineOffset: '-3px',
            },
          }),
          ...(ownerState.size === 'md' && {
            '--Icon-fontSize': '20px',
            fontSize: '14px',
            fontWeight: 600,
            minHeight: '32px',
            borderRadius: '2px',
            paddingLeft: 20,
            paddingRight: 20,
          }),
        }),
      },
    },
  },
});`;

const chakraTheme = extendTheme({
  cssVarPrefix: 'chakra',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#319795',
          solidHoverBg: '#2C7A7B',
          solidActiveBg: '#285E61',
          outlinedColor: '#2C7A7B',
          outlinedBorder: '#2C7A7B',
          outlinedHoverBorder: undefined,
          outlinedHoverBg: '#E6FFFA',
          outlinedActiveBg: '#B2F5EA',
        },
        focusVisible: 'rgba(66, 153, 225, 0.6)',
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '3px',
    },
  },
  fontFamily: {
    body: 'Inter, var(--chakra-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&:focus': theme.focus.default,
          fontWeight: 600,
          ...(ownerState.size === 'md' && {
            borderRadius: '0.375rem',
            paddingInline: '1rem',
          }),
        }),
      },
    },
  },
});
const chakraCode = `const chakraTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#319795',
          solidHoverBg: '#2C7A7B',
          solidActiveBg: '#285E61',
          outlinedColor: '#2C7A7B',
          outlinedBorder: '#2C7A7B',
          outlinedHoverBorder: undefined,
          outlinedHoverBg: '#E6FFFA',
          outlinedActiveBg: '#B2F5EA',
        },
        focusVisible: 'rgba(66, 153, 225, 0.6)',
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '3px',
    },
  },
  fontFamily: {
    body: 'Inter, var(--chakra-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&:focus': theme.focus.default,
          fontWeight: 600,
          ...(ownerState.size === 'md' && {
            borderRadius: '0.375rem',
            paddingInline: '1rem',
          }),
        }),
      },
    },
  },
});`;

const mantineTheme = extendTheme({
  cssVarPrefix: 'mantine',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#228be6',
          solidHoverBg: '#1c7ed6',
          solidActiveBg: undefined,
          softColor: '#228be6',
          softBg: 'rgba(231, 245, 255, 1)',
          softHoverBg: 'rgba(208, 235, 255, 0.65)',
          softActiveBg: undefined,
          outlinedColor: '#228be6',
          outlinedBorder: '#228be6',
          outlinedHoverBg: 'rgba(231, 245, 255, 0.35)',
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
        },
      },
    },
  },
  fontFamily: {
    body: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  },
  focus: {
    default: {
      outlineWidth: '2px',
      outlineOffset: '2px',
      outlineColor: '#339af0',
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          transition: 'initial',
          borderRadius: '4px',
          fontWeight: 600,
          ...(ownerState.size === 'md' && {
            minHeight: '36px',
            fontSize: '14px',
            paddingInline: '18px',
          }),
          '&:active': {
            transform: 'translateY(1px)',
          },
        }),
      },
    },
  },
});
const mantineCode = `const mantineTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#228be6',
          solidHoverBg: '#1c7ed6',
          solidActiveBg: undefined,
          softColor: '#228be6',
          softBg: 'rgba(231, 245, 255, 1)',
          softHoverBg: 'rgba(208, 235, 255, 0.65)',
          softActiveBg: undefined,
          outlinedColor: '#228be6',
          outlinedBorder: '#228be6',
          outlinedHoverBg: 'rgba(231, 245, 255, 0.35)',
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
        },
      },
    },
  },
  fontFamily: {
    body: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  },
  focus: {
    default: {
      outlineWidth: '2px',
      outlineOffset: '2px',
      outlineColor: '#339af0',
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          transition: 'initial',
          borderRadius: '4px',
          fontWeight: 600,
          ...(ownerState.size === 'md' && {
            minHeight: '36px',
            fontSize: '14px',
            paddingInline: '18px',
          }),
          '&:active': {
            transform: 'translateY(1px)',
          },
        }),
      },
    },
  },
});`;

const themes = {
  github: githubTheme,
  fluent: fluentTheme,
  chakra: chakraTheme,
  mantine: mantineTheme,
};
const codes = {
  github: githubCode,
  fluent: fluentCode,
  chakra: chakraCode,
  mantine: mantineCode,
};

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function ButtonThemes() {
  // the `node` is used for attaching CSS variables to this demo, you might not need it in your application.
  const [node, setNode] = React.useState(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById('button-themes-demo'));
  }, []);

  const [design, setDesign] = React.useState('github');
  return (
    <Box
      sx={{
        m: -1.5,
        mt: 0.5,
        flexGrow: 1,
        maxWidth: 'calc(100% + 24px)',
        borderRadius: '8px',
        '& .markdown-body pre': {
          margin: 0,
          borderRadius: 'xs',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
        <CssVarsProvider
          disableNestedContext
          theme={themes[design]}
          colorSchemeNode={node || null}
          colorSchemeSelector="#button-themes-demo"
          modeStorageKey="button-themes-demo"
          colorSchemeStorageKey="button-themes-demo"
        >
          <Box
            id="button-themes-demo"
            sx={{
              flexGrow: 1,
              m: 'auto',
              display: 'flex',
              alignItems: 'center',
              p: 2,
              minHeight: 100,
            }}
          >
            {design === 'github' && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="success">Primary</Button>
                <Button variant="outlined" color="neutral">
                  Default
                </Button>
              </Box>
            )}

            {design === 'fluent' && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button>Primary</Button>
                <Button variant="outlined" color="neutral">
                  Secondary
                </Button>
              </Box>
            )}

            {design === 'chakra' && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button>Solid</Button>
                <Button variant="outlined">Outlined</Button>
              </Box>
            )}

            {design === 'mantine' && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button>Solid</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="outlined">Outlined</Button>
              </Box>
            )}
          </Box>
        </CssVarsProvider>
        <Box
          sx={{
            mx: 'auto',
            pt: 3,
            width: '100%',
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <FormLabel htmlFor="button-theme">Change the theme:</FormLabel>
          <Select
            slotProps={{
              button: {
                id: 'button-theme',
              },
            }}
            size="sm"
            value={design}
            onChange={(event, newValue) => setDesign(newValue)}
            sx={{ minWidth: 160 }}
          >
            <Option value="github">GitHub</Option>
            <Option value="fluent">Fluent</Option>
            <Option value="chakra">Chakra</Option>
            <Option value="mantine">Mantine</Option>
          </Select>
        </Box>
      </Box>
      <BrandingProvider mode="dark">
        <HighlightedCode
          code={`import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

${codes[design]}

function App() {
  return (
    <CssVarsProvider theme={${design}Theme}>
      <Button>Solid</Button>
      ...other buttons
    </CssVarsProvider>
  );
};
`}
          copyButtonHidden
          language="jsx"
          sx={{
            display: { xs: 'none', md: 'block' },
            maxHeight: '40vh',
            overflow: 'auto',
            borderRadius: '7px',
          }}
        />
      </BrandingProvider>
    </Box>
  );
}
```
</example>

### Customizing theme tokens

Theme tokens refer to both _low-level_ and _global variant_ design tokens.

For example, instead of assigning the same hex code every time you want to change a given component's background color, you assign a theme token instead.
If, at any point, you want to change that, you'd change in one place only, ensuring you consistency across all the components that use that theme token.

To print your own design language into Joy UI components, start by customizing these tokens first, as every component uses them.

To do that, always use the `extendTheme` function as the customized tokens will be deeply merged into the default theme.
Under the hood, Joy UI will convert the tokens to CSS variables, enabling you to get them through `theme.vars.*`, which is very convenient as you can use any styling solution to read those CSS vars.

```js
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          // 300, 400, ..., 800,
          900: '#78350f',
        },
      },
    },
  },
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)',
  },
});

function App() {
  return <CssVarsProvider theme={theme}>...</CssVarsProvider>;
}
```

### Customizing components

Each Joy UI component uses a pre-defined set of theme tokens.
For example, the default small [`Button`](https://mui.com/joy-ui/react-button/) comes with `fontSize: sm` by default.
To change that while ensuring that every instance of it has the same styles, do it [targeting the component directly from the theme](https://mui.com/joy-ui/customization/themed-components/).

Here's a preview of how you'd change the button's font size to large:

```js
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

const theme = extendTheme({
  components: {
    // The component identifier always start with `Joy${ComponentName}`.
    JoyButton: {
      styleOverrides: {
        root: ({ theme }) => {
          // theme.vars.* return the CSS variables.
          fontSize: theme.vars.fontSize.lg, // 'var(--joy-fontSize-lg)'
        },
      },
    },
  },
});

function MyApp() {
  return (
    <CssVarsProvider theme={theme}>
      <Button>Text</Button>
    </CssVarsProvider>
  );
}
```

## Reusable component

Creating new and custom components is always an option when you don't find exactly what you're looking for.
You can, however, ensure design consistency with other Joy UI components by pulling styles from the theme through the `styled` function.

You also gain the ability to use the `sx` prop, which also accepts theme tokens, to customize this newly created component.

<example name="StyledComponent">
```tsx file="StyledComponent.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

const ToggleButton = styled('button')(({ theme }) => ({
  padding: '0.5rem 1rem',
  borderRadius: theme.vars.radius.sm,
  display: 'inline-flex',
  justifyContent: 'center',
  gap: '8px',
  minHeight: 40,
  fontFamily: theme.vars.fontFamily.body,
  fontSize: theme.vars.fontSize.md,
  fontWeight: theme.vars.fontWeight.md,
  alignItems: 'center',
  border: '1px solid',
  borderColor: theme.vars.palette.neutral.outlinedBorder,
  backgroundColor: theme.vars.palette.background.body,
  boxShadow: theme.vars.shadow.md,
  [theme.focus.selector]: theme.focus.default,
  ...theme.variants.plain.neutral,
  variants: [
    {
      props: { 'aria-pressed': 'false' },
      style: {
        '&:hover': theme.variants.plainHover.neutral,
        '&:active': theme.variants.plainActive.neutral,
      },
    },
    {
      props: { 'aria-pressed': 'true' },
      style: {
        color: theme.vars.palette.danger.plainColor,
        backgroundColor: theme.vars.palette.background.body,
        boxShadow: theme.shadow.sm.replace(/,/g, ', inset'),
      },
    },
  ],
}));

export default function StyledComponent() {
  const [muted, setMuted] = React.useState(false);
  return (
    <ToggleButton
      aria-pressed={muted ? 'true' : 'false'}
      onClick={() => setMuted((bool) => !bool)}
      sx={{ minWidth: 120 }}
    >
      Mute {muted ? <VolumeOffRoundedIcon /> : <VolumeUpRoundedIcon />}
    </ToggleButton>
  );
}
```
</example>
---
productId: joy-ui
title: React Typography component
components: Typography
githubLabel: 'component: Typography'
---

# Typography

The Typography component helps present design and content clearly and efficiently.

## Introduction

The Typography component helps maintain a consistent design by providing a limited set of values to choose from and convenient props for building common designs faster.

<example name="TypographyUsage">
```jsx file="TypographyUsage.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function TypographyUsage() {
  return (
    <JoyUsageDemo
      componentName="Typography"
      data={[
        {
          propName: 'level',
          knob: 'select',
          defaultValue: 'h1',
          options: [
            'h1',
            'h2',
            'h3',
            'h4',
            'title-lg',
            'title-md',
            'title-sm',
            'body-lg',
            'body-md',
            'body-sm',
            'body-xs',
          ],
        },

        {
          propName: 'color',
          knob: 'color',
        },

        {
          propName: 'variant',
          knob: 'radio',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },

        {
          propName: 'children',
          knob: 'input',
          defaultValue:
            'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        },

        {
          propName: 'noWrap',
          knob: 'switch',
          defaultValue: false,
        },
      ]}
      renderDemo={(props) => (
        <Box sx={{ maxWidth: '400px' }}>
          <Typography
            {...props}
            sx={
              !props.noWrap && {
                overflow: 'hidden',
                display: '-webkit-box',
                '-webkit-line-clamp': '3',
                '-webkit-box-orient': 'vertical',
              }
            }
          >
            {props.children}
          </Typography>
        </Box>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Typography from '@mui/joy/Typography';
```

The Typography component wraps around its content, and displays text with specific typographic styles and properties.

<example name="TypographyBasics">
```tsx file="TypographyBasics.tsx"
import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

export default function TypographyBasics() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
      <Typography level="h1">National Parks</Typography>
      <Typography level="h2" sx={{ fontSize: 'xl', mb: 0.5 }}>
        Yosemite National Park
      </Typography>
      <Typography>
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
      </Typography>
    </Card>
  );
}
```
</example>

### Heading

Use `h1` through `h4` to render a headline. The produced HTML element will match the semantic [headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) of the page structure.

<example name="TypographyHeadline">
```tsx file="TypographyHeadline.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

export default function TypographyHeadline() {
  return (
    <Stack spacing={1.5}>
      <Typography level="h1">h1: Lorem ipsum</Typography>
      <Typography level="h2">h2: What is Lorem Ipsum?</Typography>
      <Typography level="h3">h3: The standard Lorem Ipsum passage.</Typography>
      <Typography level="h4">h4: The smallest headline of the page</Typography>
    </Stack>
  );
}
```
</example>

:::info
The `h5` and `h6` levels are not provided by default given that they are not commonly used. However, you can add them by [customizing the theme's typography](#typography-scale).
:::

### Title and body

Aside from the heading typographic levels, the Typography component also provides the `title-*` and `body-*` type levels.

To ensure proper information hierarchy, we recommend combining them using either the same size or a lower one. For example, using `title-lg` with `body-lg` or `title-md` with `body-sm`.

<example name="TypographyTitleBody">
```tsx file="TypographyTitleBody.tsx"
import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';

export default function TypographyTitleBody() {
  return (
    <Stack spacing={2} sx={{ maxWidth: '60ch' }}>
      <Card>
        <Typography level="title-lg">
          Title of the component{' '}
          <Typography
            level="title-lg"
            textColor="var(--joy-palette-success-plainColor)"
            sx={{ fontFamily: 'monospace', opacity: '50%' }}
          >
            title-lg
          </Typography>
        </Typography>
        <Typography level="body-md">
          This is the description of the component that contain some information of
          it.{' '}
          <Typography
            level="body-md"
            textColor="var(--joy-palette-success-plainColor)"
            sx={{ fontFamily: 'monospace', opacity: '50%' }}
          >
            body-md
          </Typography>
        </Typography>
      </Card>
      <Card>
        <Typography level="title-md">
          Title of the component{' '}
          <Typography
            level="title-md"
            textColor="var(--joy-palette-success-plainColor)"
            sx={{ fontFamily: 'monospace', opacity: '50%' }}
          >
            title-md
          </Typography>
        </Typography>
        <Typography level="body-md">
          This is the description of the component that contain some information of
          it.{' '}
          <Typography
            level="body-md"
            textColor="var(--joy-palette-success-plainColor)"
            sx={{ fontFamily: 'monospace', opacity: '50%' }}
          >
            body-md
          </Typography>
        </Typography>
        <Typography level="body-sm">
          Metadata, for example a date.{' '}
          <Typography
            level="body-sm"
            textColor="var(--joy-palette-success-plainColor)"
            sx={{ fontFamily: 'monospace', opacity: '50%' }}
          >
            body-sm
          </Typography>
        </Typography>
      </Card>
      <Card>
        <Typography level="title-sm">
          Title of the component{' '}
          <Typography
            level="title-sm"
            textColor="var(--joy-palette-success-plainColor)"
            sx={{ fontFamily: 'monospace', opacity: '50%' }}
          >
            title-sm
          </Typography>
        </Typography>
        <Typography level="body-sm">
          This is the description of the component that contain some information of
          it.{' '}
          <Typography
            level="body-sm"
            textColor="var(--joy-palette-success-plainColor)"
            sx={{ fontFamily: 'monospace', opacity: '50%' }}
          >
            body-sm
          </Typography>
        </Typography>
        <Typography level="body-xs">
          Metadata, for example a date.{' '}
          <Typography
            level="body-xs"
            textColor="var(--joy-palette-success-plainColor)"
            sx={{ fontFamily: 'monospace', opacity: '50%' }}
          >
            body-xs
          </Typography>
        </Typography>
      </Card>
    </Stack>
  );
}
```
</example>

### Nested Typography

The Typography component renders as a `<p>` by default.
Nested Typography components are rendered as `<span>` elements (unless customized by [the `component` prop](#semantic-elements)).

<example name="NestedTypography">
```tsx file="NestedTypography.tsx"
import * as React from 'react';
import Typography from '@mui/joy/Typography';

export default function NestedTypography() {
  return (
    <Typography sx={{ maxWidth: 400 }}>
      Typography lets you create <Typography variant="soft">nested</Typography>{' '}
      typography. Use your{' '}
      <Typography variant="outlined" color="success">
        imagination
      </Typography>{' '}
      to build wonderful{' '}
      <Typography variant="solid" color="primary" noWrap>
        user interface
      </Typography>
      .
    </Typography>
  );
}
```
</example>

## Customization

### System props

As a CSS utility component, Typography supports every [MUI System](https://mui.com/system/properties/) property.
These properties can be used to customize the styling of the component and make it fit seamlessly with the overall design.

:::warning
Note that the `color` prop is an exception, it refers to the palette instead of the text color specifically. To set the text color, use the `textColor` prop.
:::

```jsx

// Using the neutral color palette that defaults to the 500 value
<Typography color="neutral" fontSize="sm" fontWeight="lg" />

// Changing the specific element's color to neutral
<Typography textColor="neutral.300" fontSize="sm" fontWeight="lg" >

```

### Levels

The `level` prop gives access to a pre-defined scale of typographic values defined in the theme.
These values include various heading levels (h1, h2, h3, etc.) as well as body text levels (body-md, body-sm, etc) and can be used to apply consistent typography throughout your application.
Additionally, you can also use the level prop to control the font size, weight, line height, and other typographic properties.

:::warning
Keep in mind that each level renders a specific HTML tag (for example "h1" renders as an `<h1>` element, "body-md" renders as a `<p>`, etc.)
:::

<example name="TypographyScales">
```tsx file="TypographyScales.tsx"
import * as React from 'react';
import Typography from '@mui/joy/Typography';

export default function TypographyScales() {
  return (
    <div>
      <Typography level="h1">h1</Typography>
      <Typography level="h2">h2</Typography>
      <Typography level="h3">h3</Typography>
      <Typography level="h4">h4</Typography>
      <Typography level="title-lg">title-lg</Typography>
      <Typography level="title-md">title-md</Typography>
      <Typography level="title-sm">title-sm</Typography>
      <Typography level="body-lg">body-lg</Typography>
      <Typography level="body-md">body-md</Typography>
      <Typography level="body-sm">body-sm</Typography>
      <Typography level="body-xs">body-xs</Typography>
    </div>
  );
}
```
</example>

### Semantic elements

To customize the semantic element used, you can use the `component` prop.
This can be useful in situations where you want to use a different semantic element than the one assigned by the `level` prop.
The component will render as the HTML element defined by `component`, but with the styles assigned to its respective `level`.

```jsx
// There's already an h1 on the page so let's not add another one.

<Typography level="h1" component="h2">
  I render as an h2, but I have h1 styles
</Typography>
```

In a more efficient way, you can change the HTML mapping tags at the theme level.

```js
const theme = extendTheme({
  components: {
    JoyTypography: {
      defaultProps: {
        levelMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h3',
          h4: 'h3',
          'title-lg': 'p',
          'title-md': 'p',
          'title-sm': 'p',
          'body-md': 'p',
          'body-sm': 'p',
          'body-xs': 'span',
        },
      },
    },
  },
});
```

### Decorators

Use the `startDecorator` and `endDecorator` props to add supporting icons or elements to the Typography.

<example name="TypographyDecorators">
```tsx file="TypographyDecorators.tsx"
import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export default function TypographyDecorators() {
  return (
    <div>
      <Typography startDecorator={<InfoOutlined />} sx={{ mb: 2 }}>
        The icon automatically adjusts to the scale
      </Typography>
      <Typography
        level="body-lg"
        endDecorator={
          <Chip component="span" size="sm">
            123
          </Chip>
        }
        sx={{ justifyContent: 'center' }}
      >
        The display also changes to flexbox
      </Typography>
    </div>
  );
}
```
</example>

### Typography scale

To create a custom typographic scale, you can define the keys and values in the `theme.typography` node at the theme level.

```js
extendTheme({
  typography: {
    subtitle: {
      fontSize: 'var(--joy-fontSize-lg)',
      fontWeight: 'var(--joy-fontWeight-md)',
      // CSS selectors are also supported!
      '& + p': {
        marginTop: '4px',
      },
    },
    label: {
      fontSize: 'var(--joy-fontSize-sm)',
      fontWeight: 'var(--joy-fontWeight-lg)',
      lineHeight: 'var(--joy-lineHeight-lg)',
      marginBottom: '3px',
    },
  },
});
```

You can also access the newly created levels from the `level` prop:

```js
<Typography level="subtitle">
<Typography level="label">
```

:::warning
When using TypeScript, make sure to add module augmentation for the new theme values.

```ts
// in your theme or index file
declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    subtitle: true;
    label: true;
  }
}
```

:::

#### Removing the default scale

To remove any unused typographic levels (for example, if you're building your own fully custom scale), you can clear the built-in values by assigning `undefined` to them in the theme.

```js
extendTheme({
  typography: {
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    'title-lg': undefined,
    'title-md': undefined,
    'title-sm': undefined,
    'body-lg': undefined,
    'body-md': undefined,
    'body-sm': undefined,
    'body-xs': undefined,
    // ...your scale
  },
});
```

When using TypeScript, be sure to also remove the built-in typography tokens from the types.

```ts
// in your theme or index file
declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    'title-lg': false;
    'title-md': false;
    'title-sm': false;
    'body-lg': false;
    'body-md': false;
    'body-sm': false;
    'body-xs': false;
  }
}
```

## Common examples

The demo below illustrates multiple uses of the Typography component with others as [decorators](#decorators).

<example name="DecoratorExamples">
```tsx file="DecoratorExamples.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export default function DecoratorExamples() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
    >
      <Typography
        startDecorator={
          <Box
            component="span"
            sx={{
              bgcolor: 'neutral.400',
              width: '0.5em',
              height: '0.5em',
              borderRadius: '50%',
            }}
          />
        }
      >
        Inactive
      </Typography>
      <Typography
        startDecorator={
          <Typography textColor="text.secondary" sx={{ fontSize: 'lg' }}>
            $
          </Typography>
        }
        sx={{ fontSize: 'xl4', lineHeight: 1, alignItems: 'flex-start' }}
      >
        25
      </Typography>
      <Typography
        level="body-sm"
        startDecorator={<InfoOutlined />}
        sx={{ alignItems: 'flex-start', maxWidth: 240, wordBreak: 'break-all' }}
      >
        This example demonstrates multiple lines of the text.
      </Typography>
      <Typography
        variant="soft"
        color="danger"
        startDecorator="🚨"
        sx={{ fontSize: 'sm', '--Typography-gap': '0.5rem', p: 1 }}
      >
        Simple alert using only Typography.
      </Typography>
      <Typography color="success">
        <SvgIcon fontSize="md" sx={{ m: '-2px', mr: '2px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </SvgIcon>
        +8.2%
        <Typography level="body-xs" sx={{ ml: 1 }}>
          Since last month
        </Typography>
      </Typography>
    </Box>
  );
}
```
</example>

## Accessibility

Here are some factors to ensure that your Typography components are accessible:

- Ensure sufficient color contrast between text and background, using a minimum of [WCAG 2.0's color contrast ratio](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) of 4.5:1.
- Use [relative units](https://mui.com/material-ui/customization/typography/#font-size) such as rem for `fontSize` to accommodate the user's settings.
- Use a consistent [heading hierarchy](https://www.w3.org/WAI/tutorials/page-structure/headings/), and avoid skipping levels.
- Keep semantics and style separate by using the appropriate semantic elements(#semantic-elements).

## Anatomy

The Typography component is composed of a single root `<p>` that's assigned the `body-md` class, unless these defaults are overridden by the [`level`](#levels) and/or [`component`](#semantic-elements) props.

When one Typography component is nested within another, the nested component renders as a `<span>` (unless customized as described above).

```html
<p class="MuiTypography-root MuiTypography-body-md">
  <!-- Typography content -->
  <span class="MuiTypography-root MuiTypography-inherit">
    <!-- Nested Typography content -->
  </span>
</p>
```
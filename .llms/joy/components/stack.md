---
productId: joy-ui
title: React Stack component
components: Stack
githubLabel: 'component: Stack'
---

# Stack

Stack is a container component for arranging elements vertically or horizontally.

## Introduction

The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.

<example name="InteractiveStack">
```tsx file="InteractiveStack.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Stack, { StackProps } from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import { BrandingProvider } from '@mui/docs/branding';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',
  fontWeight: theme.fontWeight.md,
  color: theme.vars.palette.text.secondary,
  border: '1px solid',
  borderColor: theme.palette.divider,
  borderRadius: theme.radius.md,
}));

export default function InteractiveStack() {
  const [direction, setDirection] = React.useState<StackProps['direction']>('row');
  const [justifyContent, setJustifyContent] = React.useState('center');
  const [alignItems, setAlignItems] = React.useState('center');
  const [spacing, setSpacing] = React.useState(2);

  const jsx = `
<Stack
  direction="${direction}"
  spacing={${spacing}}
  sx={{
    justifyContent: "${justifyContent}",
    alignItems: "${alignItems}",
  }}
>
`;

  return (
    <Stack sx={{ flexGrow: 1, '* pre': { mb: 0 } }}>
      <Stack
        direction={direction}
        spacing={spacing}
        sx={{ justifyContent, alignItems, minHeight: 200, pb: 3 }}
      >
        {[0, 1, 2].map((value) => (
          <Item key={value} sx={{ p: 2, pt: value + 1, pb: value + 1 }}>
            {`Item ${value + 1}`}
          </Item>
        ))}
      </Stack>
      <Sheet
        variant="outlined"
        sx={(theme) => ({
          p: 2,
          borderRadius: 'md',
          bgcolor: theme.palette.neutral[50],
          borderColor: theme.palette.neutral[100],
          [theme.getColorSchemeSelector('dark')]: {
            borderColor: theme.palette.neutral[800],
            backgroundColor: theme.palette.neutral[900],
          },
        })}
      >
        <Grid container spacing={3}>
          <Grid size={12}>
            <FormControl>
              <FormLabel sx={{ mb: 0.5 }}>direction</FormLabel>
              <RadioGroup
                size="sm"
                orientation="horizontal"
                name="direction"
                aria-label="direction"
                value={direction}
                onChange={(event) => {
                  setDirection(event.target.value as StackProps['direction']);
                }}
                sx={{ flexWrap: 'wrap', gap: 2, '--RadioGroup-gap': '0px' }}
              >
                <Radio label="row" value="row" />
                <Radio label="row-reverse" value="row-reverse" />
                <Radio label="column" value="column" />
                <Radio label="column-reverse" value="column-reverse" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl>
              <FormLabel sx={{ mb: 0.5 }}>alignItems</FormLabel>
              <RadioGroup
                size="sm"
                orientation="horizontal"
                name="alignItems"
                aria-label="align items"
                value={alignItems}
                onChange={(event) => {
                  setAlignItems(event.target.value);
                }}
                sx={{ flexWrap: 'wrap', gap: 2, '--RadioGroup-gap': '0px' }}
              >
                <Radio label="flex-start" value="flex-start" />
                <Radio label="center" value="center" />
                <Radio label="flex-end" value="flex-end" />
                <Radio label="stretch" value="stretch" />
                <Radio label="baseline" value="baseline" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl>
              <FormLabel sx={{ mb: 0.5 }}>justifyContent</FormLabel>
              <RadioGroup
                size="sm"
                orientation="horizontal"
                name="justifyContent"
                aria-label="justifyContent"
                value={justifyContent}
                onChange={(event) => {
                  setJustifyContent(event.target.value);
                }}
                sx={{ flexWrap: 'wrap', gap: 2, '--RadioGroup-gap': '0px' }}
              >
                <Radio label="flex-start" value="flex-start" />
                <Radio label="center" value="center" />
                <Radio label="flex-end" value="flex-end" />
                <Radio label="space-between" value="space-between" />
                <Radio label="space-around" value="space-around" />
                <Radio label="space-evenly" value="space-evenly" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl>
              <FormLabel sx={{ mb: 0.5 }}>spacing</FormLabel>
              <RadioGroup
                size="sm"
                orientation="horizontal"
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSpacing(Number((event.target as HTMLInputElement).value));
                }}
                sx={{ flexWrap: 'wrap', gap: 2, '--RadioGroup-gap': '0px' }}
              >
                {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                  <Radio
                    key={value}
                    label={value.toString()}
                    value={value.toString()}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Sheet>
      <BrandingProvider mode="dark">
        <HighlightedCode code={jsx} language="jsx" />
      </BrandingProvider>
    </Stack>
  );
}
```
</example>

## Basics

```jsx
import Stack from '@mui/joy/Stack';
```

The Stack component acts as a generic container, wrapping around the elements to be arranged.

Use the `spacing` prop to control the space between children.
The spacing value can be any number, including decimals, or a string.
(The prop is converted into a CSS property using the [`theme.spacing()`](https://mui.com/material-ui/customization/spacing/) helper.)

<example name="BasicStack">
```tsx file="BasicStack.tsx"
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',
  fontWeight: theme.fontWeight.md,
  color: theme.vars.palette.text.secondary,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: theme.spacing(1),
  borderRadius: theme.radius.md,
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  );
}
```
</example>

### Stack vs. Grid

Stack is ideal for one-dimensional layouts, while [Grid](https://mui.com/joy-ui/react-grid/) is preferable when you need both vertical _and_ horizontal arrangement.

## Customization

### Direction

By default, Stack arranges items vertically in a column.
Use the `direction` prop to position items horizontally in a row:

<example name="DirectionStack">
```tsx file="DirectionStack.tsx"
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',
  fontWeight: theme.fontWeight.md,
  color: theme.vars.palette.text.secondary,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: theme.spacing(1),
  borderRadius: theme.radius.md,
}));

export default function DirectionStack() {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
```
</example>

### Dividers

Use the `divider` prop to insert an element between each child.
This works particularly well with the [Divider](https://mui.com/joy-ui/react-divider/) component, as shown below:

<example name="DividerStack">
```tsx file="DividerStack.tsx"
import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',
  fontWeight: theme.fontWeight.md,
  color: theme.vars.palette.text.secondary,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: theme.spacing(1),
  borderRadius: theme.radius.md,
}));

export default function DividerStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" />}
        spacing={2}
        sx={{ justifyContent: 'center' }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  );
}
```
</example>

### Responsive values

You can switch the `direction` or `spacing` values based on the active breakpoint.

<example name="ResponsiveStack">
```tsx file="ResponsiveStack.tsx"
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',
  fontWeight: theme.fontWeight.md,
  color: theme.vars.palette.text.secondary,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: theme.spacing(1),
  borderRadius: theme.radius.md,
}));

export default function ResponsiveStack() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
```
</example>

### Flexbox gap

To use [flexbox `gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) for the spacing implementation, set the `useFlexGap` prop to true.
It removes the [known limitations](#limitations) of the default implementation that uses a CSS nested selector.

:::info
The CSS flexbox gap property is not fully supported in some browsers.
We recommend checking the [support percentage](https://caniuse.com/?search=flex%20gap) before using it.
:::

<example name="FlexboxGapStack">
```tsx file="FlexboxGapStack.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',
  fontWeight: theme.fontWeight.md,
  color: theme.vars.palette.text.secondary,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: theme.spacing(1),
  borderRadius: theme.radius.md,
  flexGrow: 1,
}));

export default function FlexboxGapStack() {
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={1} direction="row" useFlexGap sx={{ flexWrap: 'wrap' }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Long content</Item>
      </Stack>
    </Box>
  );
}
```
</example>

To set the prop to all stack instances, create a theme with default props:

```js
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Stack from '@mui/joy/Stack';

const theme = extendTheme({
  components: {
    JoyStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <Stack>…</Stack> {/* uses flexbox gap by default */}
    </CssVarsProvider>
  );
}
```

### System props

:::info
System props are deprecated and will be removed in the next major release. Please use the `sx` prop instead.

```diff
- <Stack mt={2} />
+ <Stack sx={{ mt: 2 }} />
```

:::

## Limitations

### Margin on the children

Customizing the margin on the children is not supported by default.

For instance, the top-margin on the `Button` component below will be ignored.

```jsx
<Stack>
  <Button sx={{ marginTop: '30px' }}>...</Button>
</Stack>
```

:::success
To overcome this limitation, set [`useFlexGap`](#flexbox-gap) prop to true to switch to CSS flexbox gap implementation.

You can learn more about this limitation by visiting this [RFC](https://github.com/mui/material-ui/issues/33754).
:::

### white-space: nowrap

The initial setting on flex items is `min-width: auto`.
This causes a positioning conflict when children use `white-space: nowrap;`.
You can reproduce the issue with:

```jsx
<Stack direction="row">
  <Typography noWrap>
```

In order for the item to stay within the container you need to set `min-width: 0`.

```jsx
<Stack direction="row" sx={{ minWidth: 0 }}>
  <Typography noWrap>
```

<example name="ZeroWidthStack">
```tsx file="ZeroWidthStack.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  maxWidth: 400,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;

export default function ZeroWidthStack() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item variant="outlined" sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Avatar>W</Avatar>
          <Typography noWrap>{message}</Typography>
        </Stack>
      </Item>
      <Item variant="outlined" sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Stack>
            <Avatar>W</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{message}</Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>
  );
}
```
</example>

## Anatomy

The Stack component is composed of a single root `<div>` element:

```html
<div class="MuiStack-root">
  <!-- Stack contents -->
</div>
```
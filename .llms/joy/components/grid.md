---
productId: joy-ui
title: React Grid component
components: Grid
githubLabel: 'component: Grid'
---

# Grid

Grid acts as a generic container, wrapping around the elements to be arranged.

## Introduction

The Grid component, based on a 12-column grid layout, creates visual consistency between layouts while allowing flexibility across a wide variety of designs.

:::warning
The `Grid` component shouldn't be confused with a data grid; it is closer to a layout grid. For a data grid head to the [MUI X Data Grid](https://mui.com/x/react-data-grid/) component.
:::

## Basics

```jsx
import Grid from '@mui/joy/Grid';
```

Column widths are integer values between 1 and 12.
For example, an item with `size={6}` occupies half of the grid container's width.

<example name="BasicGrid">
```tsx file="BasicGrid.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function BasicGrid() {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid>
    </Grid>
  );
}
```
</example>

## Customization

### Grid with multiple breakpoints

Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.

For example, `size={{ xs: 12, sm: 6 }}` sizes a component to occupy half of the viewport width (6 columns) when viewport width is 600 or more pixels. For smaller viewports, the component fills all 12 available columns.

<example name="FullWidthGrid">
```tsx file="FullWidthGrid.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function FullWidthGrid() {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid size={{ xs: 6, md: 8 }}>
        <Item>xs=6 md=8</Item>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid size={{ xs: 6, md: 8 }}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid>
  );
}
```
</example>

### Spacing

To control space between children, use the `spacing` prop.
The spacing value can be any positive number, including decimals and any string.
The prop is converted into a CSS property using the [`theme.spacing()`](https://mui.com/material-ui/customization/spacing/) helper.

<example name="SpacingGrid">
```tsx file="SpacingGrid.tsx"
import * as React from 'react';
import Grid from '@mui/joy/Grid';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import { BrandingProvider } from '@mui/docs/branding';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid size={12}>
        <Grid container spacing={spacing} sx={{ justifyContent: 'center' }}>
          {[0, 1, 2].map((value) => (
            <Grid key={value}>
              <Sheet sx={{ height: 140, width: 100 }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid size={12}>
        <Sheet sx={{ p: 2 }}>
          <Grid container>
            <Grid>
              <FormControl>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  orientation="horizontal"
                  sx={{ flexWrap: 'wrap', gap: 2, '--RadioGroup-gap': '0px' }}
                >
                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                    <Radio
                      key={value}
                      value={value.toString()}
                      label={value.toString()}
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
      </Grid>
    </Grid>
  );
}
```
</example>

### Row & column spacing

The `rowSpacing` and `columnSpacing` props allow for specifying the row and column gaps independently.
It's similar to the `row-gap` and `column-gap` properties of [CSS Grid](https://mui.com/system/grid/#row-gap-amp-column-gap).

<example name="RowAndColumnSpacing">
```tsx file="RowAndColumnSpacing.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' }}
    >
      <Grid size={6}>
        <Item>1</Item>
      </Grid>
      <Grid size={6}>
        <Item>2</Item>
      </Grid>
      <Grid size={6}>
        <Item>3</Item>
      </Grid>
      <Grid size={6}>
        <Item>4</Item>
      </Grid>
    </Grid>
  );
}
```
</example>

### Responsive values

You can switch the props' value based on the active breakpoint.

<example name="ResponsiveGrid">
```tsx file="ResponsiveGrid.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function ResponsiveGrid() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
          <Item>{index + 1}</Item>
        </Grid>
      ))}
    </Grid>
  );
}
```
</example>

Responsive values is supported by:

- `size`
- `columns`
- `columnSpacing`
- `direction`
- `rowSpacing`
- `spacing`
- `offset`
- all the [other props](#system-props) of MUI System

:::warning
When using a responsive `columns` prop, each grid item needs its corresponding breakpoint.
For instance, this is not working. The grid item misses the value for `md`:

```jsx
<Grid container columns={{ xs: 4, md: 12 }}>
  <Grid size={{ xs: 2 }} />
</Grid>
```

:::

### Auto-layout

The Auto-layout makes the grid items equitably share the available space.
This also means that you can set the width of one grid item, and the others will automatically resize around it.

<example name="AutoGrid">
```tsx file="AutoGrid.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function AutoGrid() {
  return (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid size="grow">
        <Item>size=grow</Item>
      </Grid>
      <Grid size={6}>
        <Item>size=6</Item>
      </Grid>
      <Grid size="grow">
        <Item>size=grow</Item>
      </Grid>
    </Grid>
  );
}
```
</example>

### Variable width content

Set one of the size breakpoint props to `"auto"` to render a column based on the natural width of its content.

<example name="VariableWidthGrid">
```tsx file="VariableWidthGrid.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function VariableWidthGrid() {
  return (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid size="auto">
        <Item>size=auto</Item>
      </Grid>
      <Grid size={6}>
        <Item>size=6</Item>
      </Grid>
      <Grid size="grow">
        <Item>size=grow</Item>
      </Grid>
    </Grid>
  );
}
```
</example>

### Columns

You can change the default number of columns (12) with the `columns` prop.

<example name="ColumnsGrid">
```tsx file="ColumnsGrid.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function ColumnsGrid() {
  return (
    <Grid container spacing={2} columns={16} sx={{ flexGrow: 1 }}>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid>
    </Grid>
  );
}
```
</example>

### System props

:::info
System props are deprecated and will be removed in the next major release. Please use the `sx` prop instead.

```diff
- <Grid mt={2} />
+ <Grid sx={{ mt: 2 }} />
```

:::

## Interactive demo

Below is an interactive demo that lets you explore the visual results of the different settings:

<example name="InteractiveGrid">
```tsx file="InteractiveGrid.tsx"
import * as React from 'react';
import Grid from '@mui/joy/Grid';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import { GridDirection } from '@mui/system';
import { BrandingProvider } from '@mui/docs/branding';
import { HighlightedCode } from '@mui/docs/HighlightedCode';

type GridItemsAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export default function InteractiveGrid() {
  const [direction, setDirection] = React.useState<GridDirection>('row');
  const [justifyContent, setJustifyContent] =
    React.useState<GridJustification>('center');
  const [alignItems, setAlignItems] = React.useState<GridItemsAlignment>('center');

  const jsx = `
<Grid
  container
  direction="${direction}"
  sx={{
    justifyContent: "${justifyContent}",
    alignItems: "${alignItems}",
  }}
>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid size={12}>
        <Grid
          container
          spacing={2}
          direction={direction}
          sx={{ alignItems, justifyContent, height: 300, pt: 2, pb: 2 }}
        >
          {[0, 1, 2].map((value) => (
            <Grid key={value}>
              <Sheet
                sx={{
                  p: 2,
                  height: '100%',
                  pt: `${(value + 1) * 10}px`,
                  pb: `${(value + 1) * 10}px`,
                }}
              >
                {`Cell ${value + 1}`}
              </Sheet>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid size={12}>
        <Sheet sx={{ p: 2 }}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <FormControl>
                <FormLabel sx={{ mb: 1.5 }}>direction</FormLabel>
                <RadioGroup
                  orientation="horizontal"
                  name="direction"
                  aria-label="direction"
                  value={direction}
                  onChange={(event) => {
                    setDirection(
                      (event.target as HTMLInputElement).value as GridDirection,
                    );
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
                <FormLabel sx={{ mb: 1.5 }}>justifyContent</FormLabel>
                <RadioGroup
                  orientation="horizontal"
                  name="justifyContent"
                  aria-label="justifyContent"
                  value={justifyContent}
                  onChange={(event) => {
                    setJustifyContent(
                      (event.target as HTMLInputElement).value as GridJustification,
                    );
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
                <FormLabel sx={{ mb: 1.5 }}>alignItems</FormLabel>
                <RadioGroup
                  orientation="horizontal"
                  name="alignItems"
                  aria-label="align items"
                  value={alignItems}
                  onChange={(event) => {
                    setAlignItems(
                      (event.target as HTMLInputElement).value as GridItemsAlignment,
                    );
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
          </Grid>
        </Sheet>
      </Grid>
      <Grid size={12}>
        <BrandingProvider mode="dark">
          <HighlightedCode code={jsx} language="jsx" />
        </BrandingProvider>
      </Grid>
    </Grid>
  );
}
```
</example>

## Limitations

### Negative margin

The spacing between items is implemented with a negative margin. This might lead to unexpected behaviors. For instance, to apply a background color, you need to apply `display: flex;` to the parent.

### direction: column | column-reverse

The `size` and `offset` props are **not supported** within `direction="column"` and `direction="column-reverse"` containers.

They define the number of grids the component will use for a given breakpoint. They are intended to control **width** using `flex-basis` in `row` containers but they will impact height in `column` containers.
If used, these props may have undesirable effects on the height of the `Grid` item elements.

## CSS Grid Layout

The `Grid` component is using CSS flexbox internally.
But as seen below, you can easily use [MUI System](https://mui.com/system/grid/) and CSS Grid to layout your pages.

<example name="CSSGrid">
```tsx file="CSSGrid.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
        <Box sx={{ gridColumn: 'span 8' }}>
          <Item>size=8</Item>
        </Box>
        <Box sx={{ gridColumn: 'span 4' }}>
          <Item>size=4</Item>
        </Box>
        <Box sx={{ gridColumn: 'span 4' }}>
          <Item>size=4</Item>
        </Box>
        <Box sx={{ gridColumn: 'span 8' }}>
          <Item>size=8</Item>
        </Box>
      </Box>
    </Box>
  );
}
```
</example>

## Common examples

### Centering children

To center a grid item's content, specify `display="flex"` directly on the item.
Then use `justifyContent` and/or `alignItems` to adjust the position of the content, as shown below:

<example name="ChildrenCenteredGrid">
```tsx file="ChildrenCenteredGrid.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';

export default function ChildrenCenteredGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {['Jimmy', 'Michal', 'Jun', 'Marija'].map((name, index) => (
          <Grid
            key={name}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 180,
            }}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <Avatar src={`/static/images/avatar/${index + 1}.jpg`} size="lg" />
            <Typography sx={{ ml: 1.5 }}>{name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
```
</example>

## Anatomy

The Grid component is composed of a single root `<div>` element:

```html
<div class="MuiGrid-root">
  <!-- Grid contents -->
</div>
```
---
productId: material-ui
title: React Paper component
components: Paper
githubLabel: 'component: Paper'
materialDesign: https://m2.material.io/design/environment/elevation.html
githubSource: packages/mui-material/src/Paper
---

# Paper

The Paper component is a container for displaying content on an elevated surface.

## Introduction

In Material Design, surface components and shadow styles are heavily influenced by their real-world physical counterparts.

Material UI implements this concept with the Paper component, a container-like surface that features the [`elevation`](#elevation) prop for pulling box-shadow values from the theme.

:::success
The Paper component is ideally suited for designs that follow [Material Design's elevation system](https://m2.material.io/design/environment/elevation.html#elevation-in-material-design), which is meant to replicate how light casts shadows in the physical world.

If you just need a generic container, you may prefer to use the [Box](https://mui.com/material-ui/react-box/) or [Container](https://mui.com/material-ui/react-container/) components.
:::

<example name="SimplePaper">
```tsx file="SimplePaper.tsx"
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}
```
</example>

## Component

```jsx
import Paper from '@mui/material/Paper';
```

## Customization

### Elevation

Use the `elevation` prop to establish hierarchy through the use of shadows.
The Paper component's default elevation level is `1`.
The prop accepts values from `0` to `24`.
The higher the number, the further away the Paper appears to be from its background.

In dark mode, increasing the elevation also makes the background color lighter.
This is done by applying a semi-transparent gradient with the `background-image` CSS property.

:::warning
The aforementioned dark mode behavior can lead to confusion when overriding the Paper component, because changing the `background-color` property won't affect the lighter shading.
To override it, you must either use a new background value, or customize the values for both `background-color` and `background-image`.
:::

<example name="Elevation">
```tsx file="Elevation.tsx"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {[lightTheme, darkTheme].map((theme, index) => (
          <Grid key={index} size={6}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                  <Item key={elevation} elevation={elevation}>
                    {`elevation=${elevation}`}
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
```
</example>

### Variants

Set the `variant` prop to `"outlined"` for a flat, outlined Paper with no shadows:

<example name="Variants">
```tsx file="Variants.tsx"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Variants() {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper variant="elevation">default variant</DemoPaper>
      <DemoPaper variant="outlined">outlined variant</DemoPaper>
    </Stack>
  );
}
```
</example>

### Corners

The Paper component features rounded corners by default.
Add the `square` prop for square corners:

<example name="SquareCorners">
```tsx file="SquareCorners.tsx"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function SquareCorners() {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper square={false}>rounded corners</DemoPaper>
      <DemoPaper square>square corners</DemoPaper>
    </Stack>
  );
}
```
</example>

## Anatomy

The Paper component is composed of a single root `<div>` that wraps around its contents:

```html
<div class="MuiPaper-root">
  <!-- Paper contents -->
</div>
```
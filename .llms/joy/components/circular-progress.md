---
productId: joy-ui
title: React Circular Progress component
components: CircularProgress
githubLabel: 'component: CircularProgress'
---

# Circular Progress

The Circular Progress component showcases the duration of a process or an indefinite wait period.

## Introduction

A circular progress indicator, often referred to as a spinner, is a visual representation of the progress of an operation or task.

The Circular Progress component defaults to indeterminate, signifying an undefined wait duration.
Use [determinate](#determinate) mode to indicate how long a given operation will take.

<example name="CircularProgressUsage">
```jsx file="CircularProgressUsage.js"
import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function CircularProgressUsage() {
  return (
    <JoyUsageDemo
      componentName="CircularProgress"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'soft',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },
        {
          propName: 'color',
          knob: 'color',
          defaultValue: 'primary',
        },
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          propName: 'determinate',
          knob: 'switch',
          defaultValue: false,
        },
        {
          propName: 'value',
          knob: 'number',
          defaultValue: 25,
        },
      ]}
      renderDemo={(props) => <CircularProgress {...props} />}
    />
  );
}
```
</example>

:::info
The component's animations rely primarily on CSS to ensure that it functions even before JavaScript loads.
:::

## Basics

```jsx
import CircularProgress from '@mui/joy/CircularProgress';
```

The Circular Progress component provides users with updates on the status of ongoing processes such as loading an app, submitting a form, or saving updates.

## Customization

### Variants

The Circular Progress component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid` (default), `soft`, `outlined`, and `plain`.

<example name="CircularProgressVariants">
```tsx file="CircularProgressVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

export default function CircularProgressVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress variant="solid" />
      <CircularProgress variant="soft" />
      <CircularProgress variant="outlined" />
      <CircularProgress variant="plain" />
    </Box>
  );
}
```
</example>

### Sizes

Circular Progress comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="CircularProgressSizes">
```tsx file="CircularProgressSizes.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

export default function CircularProgressSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress size="sm" />
      <CircularProgress size="md" />
      <CircularProgress size="lg" />
    </Box>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Colors

Every palette included in the theme is available via the `color` prop.

<example name="CircularProgressColors">
```tsx file="CircularProgressColors.tsx"
import Typography from '@mui/joy/Typography';
import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import { VariantProp } from '@mui/joy';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';

export default function CircularProgressColors() {
  const [variant, setVariant] = React.useState<VariantProp>('solid');
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
          gap: 1,
        }}
      >
        <CircularProgress variant={variant} color="primary" />
        <CircularProgress variant={variant} color="neutral" />
        <CircularProgress variant={variant} color="danger" />
        <CircularProgress variant={variant} color="success" />
        <CircularProgress variant={variant} color="warning" />
      </Box>
      <Sheet
        sx={{
          background: 'transparent',
          pl: 4,
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography
          level="body-sm"
          id="variant-label"
          textColor="text.primary"
          sx={{ fontWeight: 'xl', mb: 1 }}
        >
          Variant:
        </Typography>
        <RadioGroup
          size="sm"
          aria-labelledby="variant-label"
          name="variant"
          value={variant}
          onChange={(event) => setVariant(event.target.value as VariantProp)}
        >
          <Radio label="Solid" value="solid" />
          <Radio label="Soft" value="soft" />
          <Radio label="Outlined" value="outlined" />
          <Radio label="Plain" value="plain" />
        </RadioGroup>
      </Sheet>
    </Box>
  );
}
```
</example>

### Thickness

You can use the `thickness` prop to control the circle's stroke width.

<example name="CircularProgressThickness">
```jsx file="CircularProgressThickness.js"
import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';

export default function CircularProgressThickness() {
  return <CircularProgress thickness={1} />;
}
```
</example>

### Determinate

The `determinate` prop lets you indicate a specified wait time.

<example name="CircularProgressDeterminate">
```tsx file="CircularProgressDeterminate.tsx"
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import * as React from 'react';

export default function CircularProgressDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress determinate value={25} />
      <CircularProgress determinate value={50} />
      <CircularProgress determinate value={75} />
      <CircularProgress determinate value={100} />
      <CircularProgress determinate value={progress} />
    </Box>
  );
}
```
</example>

### Children

By default, any children nested inside the Circular Progress will be centered.

<example name="CircularProgressChildren">
```tsx file="CircularProgressChildren.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import ReportIcon from '@mui/icons-material/Report';
import WarningIcon from '@mui/icons-material/Warning';

export default function CircularProgressChildren() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress color="warning">
        <WarningIcon color="warning" />
      </CircularProgress>
      <CircularProgress size="lg" determinate value={66.67}>
        2 / 3
      </CircularProgress>
      <CircularProgress color="danger" sx={{ '--CircularProgress-size': '80px' }}>
        <ReportIcon color="danger" />
      </CircularProgress>
    </Box>
  );
}
```
</example>

:::info
For plain texts and icons, the dimension is relative to the circular progress's CSS variable (`--CircularProgress-size`).
:::

### With a button

The Circular Progress component can be used as a decorator to show loading on a button.

The size of the Circular Progress is controlled by a button, an icon button, or a link unless the `size` prop is explicitly specified on the progress.

<example name="CircularProgressButton">
```tsx file="CircularProgressButton.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import CircularProgress from '@mui/joy/CircularProgress';

export default function CircularProgressButton() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startDecorator={<CircularProgress variant="solid" />}>Loading…</Button>
      <IconButton>
        <CircularProgress />
      </IconButton>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        component="button"
        variant="plain"
        startDecorator={<CircularProgress />}
        sx={{ p: 1 }}
      >
        Submitting...
      </Link>
    </Box>
  );
}
```
</example>

## Third-party integrations

### use-count-up

Use the `useCountUp` hook from the [use-count-up](https://www.npmjs.com/package/use-count-up) package to create a counting animation by providing `start`, `end`, and `duration` values.

<example name="CircularProgressCountUp">
```tsx file="CircularProgressCountUp.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';

export default function CircularProgressCountUp() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonLabel, setButtonLabel] = React.useState('Start');

  const { value: value1, reset: resetValue1 } = useCountUp({
    isCounting: isLoading,
    duration: 1,
    start: 0,
    end: 25,
    onComplete: () => {
      setIsLoading(false);
      setButtonLabel('Reset');
    },
  });

  const { value: value2, reset } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 75,
  });

  const handleButtonClick = () => {
    if (isLoading) {
      setIsLoading(false);
      setButtonLabel('Start');
      resetValue1();
    } else if (buttonLabel === 'Reset') {
      setButtonLabel('Start');
      resetValue1();
    } else {
      setIsLoading(true);
      setButtonLabel('Reset');
    }
  };

  return (
    <Stack
      direction="row"
      spacing={8}
      sx={{ alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Stack spacing={2}>
        <CircularProgress size="lg" determinate value={value1 as number}>
          <Typography>{value1}%</Typography>
        </CircularProgress>
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={handleButtonClick}
        >
          {buttonLabel}
        </Button>
      </Stack>
      <Stack spacing={2}>
        <CircularProgress size="lg" determinate value={value2 as number}>
          <Typography>{value2}%</Typography>
        </CircularProgress>
        <Button size="sm" variant="outlined" color="neutral" onClick={reset}>
          Reload
        </Button>
      </Stack>
    </Stack>
  );
}
```
</example>

## CSS variables playground

Play around with all the CSS variables available on the component to see how the design changes.
You can use these to customize the component with both the `sx` prop and the theme.

<example name="CircularProgressVariables">
```jsx file="CircularProgressVariables.js"
import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function CircularProgressVariables() {
  return (
    <JoyVariablesDemo
      componentName="CircularProgress"
      data={[
        {
          var: '--CircularProgress-size',
          defaultValue: '40px',
          helperText: 'Supports only `px` unit',
        },
        {
          var: '--CircularProgress-trackThickness',
          defaultValue: '6px',
        },
        {
          var: '--CircularProgress-progressThickness',
          defaultValue: '6px',
        },
      ]}
      renderDemo={(sx) => <CircularProgress sx={sx} />}
    />
  );
}
```
</example>

## Accessibility

Out of the box, the `aria-valuenow` attribute will indicate the current value of the progress bar only when the value is not indeterminate.
This attribute will display the value as a percentage.

Here are a few tips to make sure you have an accessible circular progress component:

- When creating your circular progress component, ensure sufficient color contrast between it and the background, using a minimum of [WCAG 2.0's color contrast ratio](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) of 4.5:1.
- To define a human-readable text alternative to `aria-valuenow`, the `aria-valuetext` will show the current value in a more user-friendly way.
  For example, downloading files might be conveyed as `aria-valuetext="8% (34 minutes) remaining`.
- The `aria-valuemin` and `aria-valuemax` attributes are commonly used to indicate the minimum and maximum values of a range.
  By default, these attributes are set to 0 and 100, respectively.
  If you need to set a different minimum or maximum value for your range, you can use the these attributes to do so.
- Use the `aria-label` or `aria-labelledby` attribute to provide an accessible name for your progress component.
  These define the string value or identifies the element(s) that label the progress component.

## Anatomy

The Circular Progress component is composed of a single root `<span>` with an `<svg>` component that wraps around two `<circle>`.

```html
<span role="progressbar" class="MuiCircularProgress-root">
  <svg class="MuiCircularProgress-svg">
    <circle class="MuiCircularProgress-track"></circle>
    <circle class="MuiCircularProgress-progress"></circle>
  </svg>
  <!-- children are nested here when present -->
</span>
```
---
productId: joy-ui
title: React Linear Progress component
components: LinearProgress
githubLabel: 'component: LinearProgress'
---

# Linear Progress

Linear Progress indicators, commonly known as loaders, express an unspecified wait time or display the length of a process.

## Introduction

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

The `LinearProgress` is indeterminate by default, indicating an unspecified wait time.
To actually have it represent how long an operation will take, use the [determinate](#determinate) mode.

The animations of the components rely on CSS as much as possible to work even before the JavaScript is loaded.

<example name="LinearProgressUsage">
```jsx file="LinearProgressUsage.js"
import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/joy/Box';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function LinearProgressUsage() {
  return (
    <JoyUsageDemo
      componentName="LinearProgress"
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
      renderDemo={(props) => (
        <Box sx={{ width: 300 }}>
          <LinearProgress {...props} />
        </Box>
      )}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import LinearProgress from '@mui/joy/LinearProgress';

export default function MyApp() {
  return <LinearProgress />;
}
```

### Variants

The linear progress component supports the four global variants: `solid`, `soft` (default), `outlined`, and `plain`.

<example name="LinearProgressVariants">
```tsx file="LinearProgressVariants.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';

export default function LinearProgressVariants() {
  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
      <LinearProgress variant="solid" />
      <LinearProgress variant="soft" />
      <LinearProgress variant="outlined" />
      <LinearProgress variant="plain" />
    </Stack>
  );
}
```
</example>

### Colors

Every palette included in the theme is available via the `color` prop.
Play around combining different colors.

<example name="LinearProgressColors">
```tsx file="LinearProgressColors.tsx"
import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { VariantProp } from '@mui/joy/styles';

export default function LinearProgressColors() {
  const [variant, setVariant] = React.useState<VariantProp>('soft');

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 3 }}>
      <Stack spacing={2} sx={{ flex: 1 }}>
        <LinearProgress color="primary" variant={variant} />
        <LinearProgress color="neutral" variant={variant} />
        <LinearProgress color="danger" variant={variant} />
        <LinearProgress color="success" variant={variant} />
        <LinearProgress color="warning" variant={variant} />
      </Stack>
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

### Sizes

The linear progress component comes with three sizes out of the box: `sm`, `md` (the default), and `lg`.

<example name="LinearProgressSizes">
```tsx file="LinearProgressSizes.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';

export default function LinearProgressSizes() {
  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
      <LinearProgress size="sm" />
      <LinearProgress size="md" />
      <LinearProgress size="lg" />
    </Stack>
  );
}
```
</example>

:::info
To learn how to add more sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Determinate

You can use the `determinate` prop if you want to indicate a specified wait time.

<example name="LinearProgressDeterminate">
```tsx file="LinearProgressDeterminate.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';

export default function LinearProgressDeterminate() {
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
    <Stack spacing={2} sx={{ flex: 1 }}>
      <LinearProgress determinate value={25} />
      <LinearProgress determinate value={50} />
      <LinearProgress determinate value={75} />
      <LinearProgress determinate value={100} />
      <LinearProgress determinate value={progress} />
    </Stack>
  );
}
```
</example>

### Thickness

Provides a number to `thickness` prop to control the bar's stroke width.

<example name="LinearProgressThickness">
```tsx file="LinearProgressThickness.tsx"
import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';

export default function LinearProgressThickness() {
  return <LinearProgress thickness={1} />;
}
```
</example>

## 3rd-party integration

### use-count-up

Using the [use-count-up](https://www.npmjs.com/package/use-count-up) package, you can create a counting animation by providing `start`, `end`, and `duration` values.

<example name="LinearProgressCountUp">
```tsx file="LinearProgressCountUp.tsx"
import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import { useCountUp } from 'use-count-up';

export default function LinearProgressCountUp() {
  const { value } = useCountUp({
    isCounting: true,
    duration: 5,
    easing: 'linear',
    start: 0,
    end: 75,
    onComplete: () => ({
      shouldRepeat: true,
      delay: 2,
    }),
  });

  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={24}
      value={Number(value!)}
      sx={{
        '--LinearProgress-radius': '20px',
        '--LinearProgress-thickness': '24px',
      }}
    >
      <Typography
        level="body-xs"
        textColor="common.white"
        sx={{ fontWeight: 'xl', mixBlendMode: 'difference' }}
      >
        LOADING… {`${Math.round(Number(value!))}%`}
      </Typography>
    </LinearProgress>
  );
}
```
</example>

## CSS variables playground

Play around with all the CSS variables available on the component to see how the design changes.

You can use those to customize the component on both the `sx` prop and the theme.

<example name="LinearProgressVariables">
```tsx file="LinearProgressVariables.tsx"
import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/joy/Box';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function LinearProgressVariables() {
  return (
    <JoyVariablesDemo
      componentName="LinearProgress"
      data={[
        {
          var: '--LinearProgress-thickness',
          defaultValue: '6px',
        },
        {
          var: '--LinearProgress-radius',
          helperText: "Default to root's thickness",
        },
        {
          var: '--LinearProgress-progressThickness',
          helperText: "Default to root's thickness",
        },
        {
          var: '--LinearProgress-progressRadius',
          helperText: "Default to root's thickness",
        },
      ]}
      renderDemo={(sx) => (
        <Box sx={{ width: 300 }}>
          <LinearProgress sx={sx} />
        </Box>
      )}
    />
  );
}
```
</example>

## Common examples

### With label

<example name="LinearProgressWithLabel">
```tsx file="LinearProgressWithLabel.tsx"
import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function LinearProgressWithLabel() {
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
    <Box sx={{ bgcolor: 'white', width: '100%' }}>
      <LinearProgress
        determinate
        variant="outlined"
        color="neutral"
        size="sm"
        thickness={32}
        value={progress}
        sx={{
          '--LinearProgress-radius': '0px',
          '--LinearProgress-progressThickness': '24px',
          boxShadow: 'sm',
          borderColor: 'neutral.500',
        }}
      >
        <Typography
          level="body-xs"
          textColor="common.white"
          sx={{ fontWeight: 'xl', mixBlendMode: 'difference' }}
        >
          LOADING… {`${Math.round(progress)}%`}
        </Typography>
      </LinearProgress>
    </Box>
  );
}
```
</example>
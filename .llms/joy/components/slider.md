---
productId: joy-ui
title: React Slider component
components: Slider
githubLabel: 'component: slider'
unstyled: https://base-ui.com/react/components/slider
---

# Slider

Slider generates a background element that can be used for various purposes.

## Introduction

Sliders are ideal for interface controls that benefit from a visual representation of adjustable content, such as volume or brightness settings, or for applying image filters such as gradients or saturation.

<example name="SliderUsage">
```jsx file="SliderUsage.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function SliderUsage() {
  return (
    <JoyUsageDemo
      componentName="Slider"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'solid',
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
          propName: 'orientation',
          knob: 'radio',
          options: ['horizontal', 'vertical'],
          defaultValue: 'horizontal',
        },
        {
          propName: 'valueLabelDisplay',
          knob: 'radio',
          options: ['off', 'on', 'auto'],
          defaultValue: 'off',
        },
        { propName: 'disabled', knob: 'switch' },
        { propName: 'marks', knob: 'switch' },
      ]}
      renderDemo={(props) => (
        <Box
          sx={[
            {
              p: 2,
              lineHeight: 0,
              borderRadius: 'sm',
            },
            props.orientation === 'horizontal' && {
              width: 240,
              maxWidth: '100%',
            },
            props.orientation === 'vertical' && { height: 200 },
          ]}
        >
          <Slider defaultValue={3} max={10} {...props} />
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
import Slider from '@mui/joy/Slider';

export default function MyApp() {
  return <Slider defaultValue={3} max={10} />;
}
```

### Steps

Change the default step increments by setting a desired value to the `step` prop.
Make sure to adjust the `shiftStep` prop (the granularity with which the slider can step when using Page Up/Down or Shift + Arrow Up/Down) to a value divadable with the `step`.

<example name="StepsSlider">
```tsx file="StepsSlider.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';

function valueText(value: number) {
  return `${value}°C`;
}

export default function StepsSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
        getAriaValueText={valueText}
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
```
</example>

### Custom marks

You can create custom marks by providing a rich array to the `marks` prop:

<example name="MarksSlider">
```tsx file="MarksSlider.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valueText(value: number) {
  return `${value}°C`;
}

export default function MarksSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valueText}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
```
</example>

### Always visible label

To make the thumb label always visible, toggle on the `valueLabelDisplay` prop.

<example name="AlwaysVisibleLabelSlider">
```tsx file="AlwaysVisibleLabelSlider.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valueText(value: number) {
  return `${value}°C`;
}

export default function AlwaysVisibleLabelSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valueText}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
```
</example>

### Vertical

Set `orientation="vertical"` to display the vertical slider.

<example name="VerticalSlider">
```tsx file="VerticalSlider.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valueText(value: number) {
  return `${value}°C`;
}

export default function VerticalSlider() {
  return (
    <Box sx={{ mx: 'auto', height: 200 }}>
      <Slider
        orientation="vertical"
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valueText}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
```
</example>

### Keep the label at edges

Apply the following styles to ensure that the label doesn't get cut off on mobile when it hits the edge of the slider.

<example name="EdgeLabelSlider">
```tsx file="EdgeLabelSlider.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider, { sliderClasses } from '@mui/joy/Slider';

function valueText(value: number) {
  return `${value}°C`;
}

export default function EdgeLabelSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        track={false}
        defaultValue={[0, 100]}
        getAriaLabel={() => 'Amount'}
        getAriaValueText={valueText}
        marks={[
          {
            value: 0,
            label: '0°C',
          },
          {
            value: 100,
            label: '100°C',
          },
        ]}
        valueLabelDisplay="on"
        sx={{
          // Need both of the selectors to make it works on the server-side and client-side
          [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
            [`&.${sliderClasses.markLabel}`]: {
              transform: 'none',
            },
            [`& .${sliderClasses.valueLabel}`]: {
              left: 'calc(var(--Slider-thumbSize) / 2)',
              borderBottomLeftRadius: 0,
              '&::before': {
                left: 0,
                transform: 'translateY(100%)',
                borderLeftColor: 'currentColor',
              },
            },
          },
          [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
            [`&.${sliderClasses.markLabel}`]: {
              transform: 'translateX(-100%)',
            },
            [`& .${sliderClasses.valueLabel}`]: {
              right: 'calc(var(--Slider-thumbSize) / 2)',
              borderBottomRightRadius: 0,
              '&::before': {
                left: 'initial',
                right: 0,
                transform: 'translateY(100%)',
                borderRightColor: 'currentColor',
              },
            },
          },
        }}
      />
    </Box>
  );
}
```
</example>

### Range slider

To let users set the start and end of a range on a slider, provide an array of values to the `value` or `defaultValue` prop:

<example name="RangeSlider">
```tsx file="RangeSlider.tsx"
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import * as React from 'react';

function valueText(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
      />
    </Box>
  );
}
```
</example>

### Track

The slider's track shows how much of it has been selected.
You can either invert it by assigning `inverted` to the `track` prop or remove it entirely by assigning a value of `false`.

<example name="TrackInvertedSlider">
```tsx file="TrackInvertedSlider.tsx"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Slider from '@mui/joy/Slider';

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`,
);

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valueText(value: number) {
  return `${value}°C`;
}

export default function TrackInvertedSlider() {
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="track-inverted-slider" gutterBottom>
        Inverted track
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valueText}
        defaultValue={30}
        marks={marks}
      />
      <Separator />
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valueText}
        defaultValue={[20, 37]}
        marks={marks}
      />
    </Box>
  );
}
```
</example>

<example name="TrackFalseSlider">
```tsx file="TrackFalseSlider.tsx"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Slider from '@mui/joy/Slider';

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`,
);

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valueText(value: number) {
  return `${value}°C`;
}

export default function TrackFalseSlider() {
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="track-false-slider" gutterBottom>
        Removed track
      </Typography>
      <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={valueText}
        defaultValue={37}
        marks={marks}
      />
      <Separator />
      <Typography id="track-false-range-slider" gutterBottom>
        Removed track range slider
      </Typography>
      <Slider
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valueText}
        defaultValue={[20, 37, 100]}
        marks={marks}
      />
    </Box>
  );
}
```
</example>

## CSS variables playground

Play around with all the CSS variables available in the slider component to see how the design changes.

You can use those to customize the component on both the `sx` prop and the theme.

<example name="SliderVariables">
```jsx file="SliderVariables.js"
import * as React from 'react';
import Slider from '@mui/joy/Slider';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function SliderVariables() {
  return (
    <JoyVariablesDemo
      componentName="Slider"
      data={[
        { var: '--Slider-trackSize', defaultValue: '6px' },
        { var: '--Slider-markSize', defaultValue: '2px' },
        { var: '--Slider-thumbSize', defaultValue: '14px' },
        { var: '--Slider-thumbWidth', defaultValue: '14px' },
        { var: '--Slider-valueLabelArrowSize', defaultValue: '8px' },
      ]}
      renderDemo={(sx) => (
        <Slider
          defaultValue={3}
          max={10}
          marks
          valueLabelDisplay="on"
          sx={{ ...sx, width: 240, maxWidth: '100%' }}
        />
      )}
    />
  );
}
```
</example>
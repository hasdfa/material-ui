---
productId: joy-ui
title: React Toggle Button Group component
githubLabel: 'component: toggle button'
components: ToggleButtonGroup, Button, IconButton
unstyled: https://base-ui.com/react/components/toggle-group
---

# Toggle Button Group

A group of mutually exclusive buttons.

## Introduction

Toggle Button Group provides a way to get mutually exclusive actions closer together by sharing a common container.
It controls the selected state of its child buttons when given its own `value` prop.

<example name="ToggleGroupUsage">
```jsx file="ToggleGroupUsage.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function ToggleGroupUsage() {
  const [value, setValue] = React.useState('bold');
  const [values, setValues] = React.useState([value]);
  return (
    <JoyUsageDemo
      componentName="ToggleButtonGroup"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'outlined',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },
        {
          propName: 'color',
          knob: 'color',
          defaultValue: 'neutral',
        },
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          propName: 'children',
          defaultValue: `<Button />
  <IconButton />
  <IconButton />`,
        },
      ]}
      renderDemo={(props) => (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <ToggleButtonGroup
            value={props.exclusive ? value : values}
            onChange={(event, newValue) => {
              if (Array.isArray(newValue)) {
                setValues(newValue);
              } else {
                setValue(newValue);
              }
            }}
            {...props}
          >
            <Button value="bold">Bold</Button>
            <IconButton value="italic">
              <FormatItalicIcon />
            </IconButton>
            <IconButton value="underlined">
              <FormatUnderlinedIcon />
            </IconButton>
          </ToggleButtonGroup>
        </Box>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
```

Note that Joy UI doesn't provide a Toggle Button component but rather a Toggle Button Group container component. The reason for that is that according to the [WAI ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/), it's better to use `aria-pressed` on the Button or Icon Button component instead.

<example name="ToggleButtons">
```tsx file="ToggleButtons.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import FormatBold from '@mui/icons-material/FormatBold';

export default function ToggleButtons() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setPressed(!pressed)}
        aria-pressed={pressed ? 'true' : 'false'}
        sx={(theme) => ({
          [`&[aria-pressed="true"]`]: {
            ...theme.variants.outlinedActive.neutral,
            borderColor: theme.vars.palette.neutral.outlinedHoverBorder,
          },
        })}
      >
        Button
      </Button>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setPressed(!pressed)}
        aria-pressed={pressed ? 'true' : 'false'}
        sx={(theme) => ({
          [`&[aria-pressed="true"]`]: {
            ...theme.variants.outlinedActive.neutral,
            borderColor: theme.vars.palette.neutral.outlinedHoverBorder,
          },
        })}
      >
        <FormatBold />
      </IconButton>
    </Stack>
  );
}
```
</example>

That said, when using the Toggle Button Group component, pass a value as an array.
When a button within the group is pressed, the Toggle Button Group component triggers the `onChange` prop of it and passes the updated array as a parameter.

The Toggle Button Group component uses the same styles as the [Button Group](https://mui.com/joy-ui/react-button-group/) component to ensure a consistent visual connection between all of the Joy UI buttons.

<example name="ToggleGroup">
```tsx file="ToggleGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function ToggleGroup() {
  const [value, setValue] = React.useState(['default']);
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Button value="default">Default</Button>
      <IconButton value="bold">
        <FormatBoldIcon />
      </IconButton>
      <IconButton value="italic">
        <FormatItalicIcon />
      </IconButton>
      <IconButton value="underlined">
        <FormatUnderlinedIcon />
      </IconButton>
    </ToggleButtonGroup>
  );
}
```
</example>

### Exclusive selection

When the value provided to the Toggle Button Group component is not an array, it operates in the exclusive selection mode, which means that only one button can be selected at a single time within the group.

<example name="ExclusiveSelection">
```tsx file="ExclusiveSelection.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function ExclusiveSelection() {
  const [value, setValue] = React.useState<string | null>('default');
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Button value="default">Default</Button>
      <IconButton value="bold">
        <FormatBoldIcon />
      </IconButton>
      <IconButton value="italic">
        <FormatItalicIcon />
      </IconButton>
      <IconButton value="underlined">
        <FormatUnderlinedIcon />
      </IconButton>
    </ToggleButtonGroup>
  );
}
```
</example>

## Customization

### Variants

The Toggle Button Group component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `outlined` (default), `plain`, `soft`, and `solid`.

<example name="ToggleGroupVariants">
```tsx file="ToggleGroupVariants.tsx"
import * as React from 'react';
import { VariantProp } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';

export default function ToggleGroupVariants() {
  const [value, setValue] = React.useState<VariantProp | null>('plain');
  return (
    <ToggleButtonGroup
      variant={value || undefined}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Button value="plain">plain</Button>
      <Button value="outlined">outlined</Button>
      <Button value="soft">soft</Button>
      <Button value="solid">solid</Button>
    </ToggleButtonGroup>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Sizes

The Toggle Button Group component comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="ToggleGroupSizes">
```tsx file="ToggleGroupSizes.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ToggleButtonGroup, {
  ToggleButtonGroupStaticProps,
} from '@mui/joy/ToggleButtonGroup';

export default function ToggleGroupSizes() {
  const [value, setValue] = React.useState<
    ToggleButtonGroupStaticProps['size'] | null
  >('md');
  return (
    <ToggleButtonGroup
      size={value || undefined}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Button value="sm">Small</Button>
      <Button value="md">Medium</Button>
      <Button value="lg">Large</Button>
    </ToggleButtonGroup>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Colors

Every palette included in the theme is available via the color prop.

<example name="ToggleGroupColors">
```tsx file="ToggleGroupColors.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Stack from '@mui/joy/Stack';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { VariantProp, ColorPaletteProp } from '@mui/joy/styles';

export default function ToggleGroupColors() {
  const [variant, setVariant] = React.useState<VariantProp | null>('plain');
  const [color, setColor] = React.useState<ColorPaletteProp | null>('neutral');
  return (
    <Stack spacing={2}>
      <ToggleButtonGroup
        variant={variant || undefined}
        color={color || undefined}
        value="pressed"
      >
        <Button value="pressed">I&apos;m pressed</Button>
        <IconButton value="bold">
          <FormatBoldIcon />
        </IconButton>
        <IconButton value="italic">
          <FormatItalicIcon />
        </IconButton>
        <IconButton value="underlined">
          <FormatUnderlinedIcon />
        </IconButton>
      </ToggleButtonGroup>
      <FormControl>
        <FormLabel>Variant</FormLabel>
        <RadioGroup
          orientation="horizontal"
          value={variant}
          onChange={(event) => setVariant(event.target.value as VariantProp)}
        >
          <Radio value="plain" label="plain" />
          <Radio value="outlined" label="outlined" />
          <Radio value="soft" label="soft" />
          <Radio value="solid" label="solid" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Color</FormLabel>
        <RadioGroup
          orientation="horizontal"
          value={color}
          onChange={(event) => setColor(event.target.value as ColorPaletteProp)}
        >
          <Radio value="primary" label="primary" />
          <Radio value="neutral" label="neutral" />
          <Radio value="danger" label="danger" />
          <Radio value="success" label="success" />
          <Radio value="warning" label="warning" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
```
</example>

### Spacing

By default, there's no spacing between the buttons within a Toggle Button Group.
Use the `spacing` prop with a value greater than 0 to separate each button.

The spacing is applied using the `gap` CSS property and its value is determined on the theme `theme.spacing(<value>)`).

<example name="ToggleGroupSpacing">
```tsx file="ToggleGroupSpacing.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function ToggleGroupSpacing() {
  const [value, setValue] = React.useState(['default']);
  return (
    <ToggleButtonGroup
      spacing={2}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Button value="default">Default</Button>
      <IconButton value="bold">
        <FormatBoldIcon />
      </IconButton>
      <IconButton value="italic">
        <FormatItalicIcon />
      </IconButton>
      <IconButton value="underlined">
        <FormatUnderlinedIcon />
      </IconButton>
    </ToggleButtonGroup>
  );
}
```
</example>

To create a responsive spacing scale, the `<value>` can be an object or an array.

```js
<ToggleButtonGroup spacing={{ xs: 0, md: 2, lg: 3 }}>…</ToggleButtonGroup>
```

## Common examples

### Figma-like toggle group

Use the CSS variable `--ButtonGroup-connected` to control when border radius of the buttons in-between should be removed.

To create a Figma-like button group where the buttons are connected when users hover on any of the buttons, set the `--ButtonGroup-connected` to `0` and change to `1` on hover.

<example name="FigmaButtonGroup">
```tsx file="FigmaButtonGroup.tsx"
import * as React from 'react';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import IconButton from '@mui/joy/IconButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

export default function FigmaButtonGroup() {
  const [index, setIndex] = React.useState<string | null>('0');
  return (
    <ToggleButtonGroup
      variant="plain"
      value={index}
      onChange={(event, newIndex) => {
        setIndex(newIndex);
      }}
      aria-label="figma button group"
      sx={{
        '--ButtonGroup-radius': '3px',
        '--ButtonGroup-separatorSize': '0px',
        '--ButtonGroup-connected': '0',
        '&:hover': {
          boxShadow: 'inset 0px 0px 0px 1px var(--joy-palette-neutral-softBg)',
          '--ButtonGroup-connected': '1',
        },
      }}
    >
      <IconButton value={0}>
        <FormatAlignLeftIcon />
      </IconButton>
      <IconButton value={1}>
        <FormatAlignCenterIcon />
      </IconButton>
      <IconButton value={2}>
        <FormatAlignRightIcon />
      </IconButton>
      <IconButton value={3}>
        <FormatAlignJustifyIcon />
      </IconButton>
    </ToggleButtonGroup>
  );
}
```
</example>

### Editor toolbar

<example name="ToggleGroupToolbar">
```tsx file="ToggleGroupToolbar.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import SvgIcon from '@mui/joy/SvgIcon';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function ToggleGroupToolbar() {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [formats, setFormats] = React.useState(() => ['italic']);
  const [color, setColor] = React.useState('#ff5252');
  return (
    <Sheet
      variant="outlined"
      sx={{ borderRadius: 'md', display: 'inline-flex', gap: 2, p: 0.5 }}
    >
      <ToggleButtonGroup
        variant="plain"
        spacing={0.5}
        value={alignment}
        onChange={(event, newAlignment) => {
          setAlignment(newAlignment);
        }}
        aria-label="text alignment"
      >
        <IconButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </IconButton>
        <IconButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </IconButton>
        <IconButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </IconButton>
        <IconButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </IconButton>
      </ToggleButtonGroup>
      <Divider orientation="vertical" sx={{ height: '60%', alignSelf: 'center' }} />
      <ToggleButtonGroup
        variant="plain"
        spacing={0.5}
        value={formats}
        onChange={(event, newFormats) => {
          setFormats(newFormats);
        }}
        aria-label="text formatting"
      >
        <IconButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </IconButton>
        <IconButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </IconButton>
        <IconButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </IconButton>
      </ToggleButtonGroup>
      <Divider orientation="vertical" sx={{ height: '60%', alignSelf: 'center' }} />
      <Button
        component="label"
        tabIndex={-1}
        role={undefined}
        aria-label="fill color"
        variant="outlined"
        color="neutral"
        endDecorator={
          <SvgIcon fontSize="md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </SvgIcon>
        }
        sx={{ pl: 1 }}
      >
        <AspectRatio
          variant="plain"
          ratio="1"
          sx={{ borderRadius: '50%', width: '1.5em', bgcolor: color }}
        >
          <div />
        </AspectRatio>
        <Box
          component="input"
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          sx={{
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: '1px',
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            whiteSpace: 'nowrap',
            width: '1px',
          }}
        />
      </Button>
    </Sheet>
  );
}
```
</example>

## Accessibility

### ARIA

- The Toggle Button Group component has `role="group"`. Make sure to provide an accessible label with `aria-label="label"`, `aria-labelledby="id"` or `<label>`.
- For the toggle button, set `aria-pressed="<bool>"` according to the button state. Make sure to label an icon button with `aria-label`.

### Keyboard

Buttons within a Toggle Button Group component are in the same order as in the DOM.
Use the tab key to navigate them.
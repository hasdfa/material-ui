---
productId: joy-ui
title: React Button Group component
components: Button, IconButton, ButtonGroup
githubLabel: 'component: ButtonGroup'
---

# Button Group

The Button Group combines a set of related buttons.

## Introduction

The Button Group component combines a set of buttons that have similar or related functionality.

<example name="ButtonGroupUsage">
```jsx file="ButtonGroupUsage.js"
import * as React from 'react';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function ButtonGroupUsage() {
  return (
    <JoyUsageDemo
      componentName="ButtonGroup"
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
          propName: 'disabled',
          knob: 'switch',
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
          defaultValue: 'horizontal',
          options: ['horizontal', 'vertical'],
        },
        {
          propName: 'spacing',
          knob: 'number',
          defaultValue: 0,
        },
        {
          propName: 'children',
          defaultValue: `<Button />
  ...
  <IconButton />`,
        },
      ]}
      renderDemo={(props) => (
        <ButtonGroup {...props}>
          <Button>Vote</Button>
          <Button>Comment</Button>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </ButtonGroup>
      )}
    />
  );
}
```
</example>

## Basics

The Button Group component can wrap [`Button`](https://mui.com/joy-ui/react-button/) and [`IconButton`](https://mui.com/joy-ui/react-button/#icon-button).

<example name="BasicButtonGroup">
```tsx file="BasicButtonGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <IconButton>
        <Settings />
      </IconButton>
    </ButtonGroup>
  );
}
```
</example>

## Customization

### Variants

The Button Group component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `outlined` (default), `solid`, `soft`, and `plain`.

The `variant` prop is passed to the buttons, not the Button Group itself.

<example name="VariantButtonGroup">
```tsx file="VariantButtonGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';

export default function VariantButtonGroup() {
  return (
    <Stack spacing={2}>
      <ButtonGroup aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="plain" aria-label="plain button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="soft" aria-label="soft button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="solid" aria-label="solid button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Sizes

The Button Group component comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="GroupSizesColors">
```tsx file="GroupSizesColors.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';

export default function GroupSizesColors() {
  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <ButtonGroup size="sm" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="plain button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="lg" aria-label="soft button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Colors

Every palette included in the theme is available via the `color` prop.
Play around combining different colors with different variants.

<example name="ButtonGroupColors">
```tsx file="ButtonGroupColors.tsx"
import * as React from 'react';
import { VariantProp } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';

export default function ButtonGroupColors() {
  const [variant, setVariant] = React.useState<VariantProp>('outlined');
  const createOnClick = (value: VariantProp) => () => {
    setVariant(value);
  };
  return (
    <Stack spacing={1} sx={{ alignItems: 'center' }}>
      <ButtonGroup variant={variant} size="sm" aria-label="neutral button group">
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="primary"
        aria-label="primary button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="danger"
        aria-label="danger button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="success"
        aria-label="success button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="warning"
        aria-label="warning button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
    </Stack>
  );
}
```
</example>

### Disabled

Use the `disabled` prop to disable all the buttons.
Note that if you explicitly specify the `disabled` prop on the buttons directly, it will override what is used in the Button Group.

<example name="DisabledButtonGroup">
```tsx file="DisabledButtonGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';

export default function DisabledButtonGroup() {
  return (
    <ButtonGroup disabled aria-label="disabled button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <IconButton disabled={false}>
        <Settings />
      </IconButton>
    </ButtonGroup>
  );
}
```
</example>

### Spacing

Use `spacing` prop to control the gap between buttons. If the `spacing` is set to `0` (by default), the radius of the buttons will be adjusted to form a continuous surface.

<example name="SpacingButtonGroup">
```tsx file="SpacingButtonGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';

export default function SpacingButtonGroup() {
  return (
    <ButtonGroup spacing="0.5rem" aria-label="spacing button group">
      <Button>One</Button>
      <Button disabled>Two</Button>
      <Button>Three</Button>
      <IconButton>
        <Settings />
      </IconButton>
    </ButtonGroup>
  );
}
```
</example>

:::success
The type of value can be:

- `string`: any valid CSS length unit, for example `px`, `rem`, `em`, etc.
- `number`: will be calculated by `theme.spacing` function.
- `array`: the responsive values based on the breakpoints defined in the theme.
- `object`: the key must be one of the breakpoints defined in the theme (the defaults are `"xs" | "sm" | "md" | "lg" | "xl")`, and the value is the spacing of type `string` or `number`.

```jsx
<ButtonGroup spacing={{ xs: 0, sm: 1, md: '2rem' }}>...</ButtonGroup>
```

:::

### Vertical group

The Button Group component can be displayed vertically using the `orientation="vertical"` prop.
Note that this prop has no effect on `IconButton` component.

<example name="GroupOrientation">
```tsx file="GroupOrientation.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two" disabled>
    Two
  </Button>,
  <Button key="three">Three</Button>,
];

export default function GroupOrientation() {
  return (
    <Stack spacing={2} direction="row">
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical plain button group"
        variant="plain"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical soft button group"
        variant="soft"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical solid button group"
        variant="solid"
      >
        {buttons}
      </ButtonGroup>
    </Stack>
  );
}
```
</example>

### Stretching button

Use the `buttonFlex` prop to make the buttons fill the available space of the Button Group component.

<example name="FlexButtonGroup">
```tsx file="FlexButtonGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';

export default function FlexButtonGroup() {
  return (
    <ButtonGroup
      buttonFlex={1}
      aria-label="flex button group"
      sx={{
        p: 2,
        width: 500,
        maxWidth: '100%',
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <IconButton>
        <Settings />
      </IconButton>
    </ButtonGroup>
  );
}
```
</example>

#### Minimum width

For a large container, control the default width of the buttons by providing a valid [CSS `flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) value to the `buttonFlex` prop.

<example name="MinWidthButtonGroup">
```tsx file="MinWidthButtonGroup.tsx"
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Typography from '@mui/joy/Typography';

export default function MinWidthButtonGroup() {
  return (
    <Card
      variant="outlined"
      sx={{ width: '100%', overflow: 'auto', resize: 'horizontal' }}
    >
      <CardContent sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>Title</Typography>
        <Typography sx={{ mb: 3, maxWidth: '32ch' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        <ButtonGroup
          variant="soft"
          aria-label="outlined primary button group"
          buttonFlex="0 1 200px"
          sx={{ width: '100%', justifyContent: 'center' }}
        >
          <Button>Buy</Button>
          <Button>Learn</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
```
</example>

### Split button

The Button Group component can also be used to create a split button.
The dropdown can change the button action (as in this example) or be used to immediately trigger a related action.

<example name="SplitButton">
```tsx file="SplitButton.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const actionRef = React.useRef<() => void>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        ref={anchorRef}
        variant="solid"
        color="success"
        aria-label="split button"
      >
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <IconButton
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onMouseDown={() => {
            // @ts-ignore
            actionRef.current = () => setOpen(!open);
          }}
          onKeyDown={() => {
            // @ts-ignore
            actionRef.current = () => setOpen(!open);
          }}
          onClick={() => {
            actionRef.current?.();
          }}
        >
          <ArrowDropDownIcon />
        </IconButton>
      </ButtonGroup>
      <Menu open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current}>
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 2}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
```
</example>

### Separator color

When the Button Group's variant is <b>not</b> `outlined`, separators are created between buttons.
To control the color of the separator, override the CSS variable `--ButtonGroup-separatorColor` via the `sx` prop.

<example name="SeparatorButtonGroup">
```tsx file="SeparatorButtonGroup.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Slider from '@mui/joy/Slider';
import Settings from '@mui/icons-material/Settings';

export default function SeparatorButtonGroup() {
  const [hue, setHue] = React.useState(0);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Slider
        value={hue}
        min={0}
        max={360}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => `hsl(${value} 100% 50%)`}
        onChange={(event, newValue) => setHue(newValue as number)}
      />
      <ButtonGroup
        variant="plain"
        aria-label="button group"
        sx={{ '--ButtonGroup-separatorColor': `hsl(${hue} 100% 50%) !important` }}
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <IconButton>
          <Settings />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
}
```
</example>

## Using it with a Tooltip

The Button Group component supports arbitrary children that wrap the buttons by preserving the same appearance.

<example name="TooltipButtonGroup">
```tsx file="TooltipButtonGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Person from '@mui/icons-material/Person';

export default function TooltipButtonGroup() {
  return (
    <ButtonGroup variant="soft" aria-label="tooltip button group">
      <Tooltip arrow title="Go to profile">
        <Button startDecorator={<Person />}>Hover me</Button>
      </Tooltip>
      <Tooltip arrow title="Open settings">
        <span>
          <IconButton disabled>
            <Settings />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip arrow title="Go to profile">
        <Button endDecorator={<Person />}>Hover me</Button>
      </Tooltip>
    </ButtonGroup>
  );
}
```
</example>

## Common examples

### Pill button group

Use the CSS variable `--ButtonGroup-radius` to control the radius of the start and end buttons.

<example name="RadiusButtonGroup">
```tsx file="RadiusButtonGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';

export default function RadiusButtonGroup() {
  return (
    <ButtonGroup
      aria-label="radius button group"
      sx={{ '--ButtonGroup-radius': '40px' }}
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <IconButton>
        <Settings />
      </IconButton>
    </ButtonGroup>
  );
}
```
</example>

### Custom separator

This example uses the `Divider` component to create a custom separator between the buttons.
The CSS variable `--ButtonGroup-separatorColor` is then set with an arbitrary value to remove the default separator.

<example name="CustomSeparatorButtonGroup">
```tsx file="CustomSeparatorButtonGroup.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';

export default function CustomSeparatorButtonGroup() {
  return (
    <ButtonGroup
      variant="solid"
      color="success"
      aria-label="button group"
      sx={{
        '--ButtonGroup-separatorColor': 'none !important',
        '& > span': {
          zIndex: 3,
          background:
            'linear-gradient(to top, transparent, rgba(255 255 255 / 0.6), transparent)',
        },
      }}
    >
      <Button>One</Button>
      <Divider />
      <Button>Two</Button>
      <Divider />
      <Button>Three</Button>
      <Divider />
      <IconButton>
        <Settings />
      </IconButton>
    </ButtonGroup>
  );
}
```
</example>
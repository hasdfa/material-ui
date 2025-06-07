---
productId: joy-ui
title: React Button component
components: Button, IconButton
githubLabel: 'component: button'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/button/
---

# Button

Buttons let users take actions and make choices with a single tap.

## Introduction

Buttons communicate actions that users can take.
The Joy UI Button component replaces the native HTML `<button>` element and offers expanded options for styling and accessibility.

<example name="ButtonUsage">
```jsx file="ButtonUsage.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function ButtonUsage() {
  return (
    <JoyUsageDemo
      componentName="Button"
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
          propName: 'disabled',
          knob: 'switch',
          defaultValue: false,
        },
        {
          propName: 'loading',
          knob: 'switch',
          defaultValue: false,
        },
        { propName: 'onClick', defaultValue: () => {} },
      ]}
      renderDemo={(props) => (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button startDecorator={<FavoriteBorder />} {...props}>
            Hello world
          </Button>
          <IconButton {...props}>
            <FavoriteBorder />
          </IconButton>
        </Box>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Button from '@mui/joy/Button';
```

The Joy UI Button behaves similarly to the native HTML `<button>`, so it wraps around the text displayed on its surface.

The demo below shows the three basic states available to the Button: default, disabled, and loading.

<example name="BasicButtons">
```tsx file="BasicButtons.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function BasicButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button>Button</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </Box>
  );
}
```
</example>

### Disabled

Use the `disabled` prop to disable interaction and focus:

<example name="ButtonDisabled">
```tsx file="ButtonDisabled.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';

export default function ButtonDisabled() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button disabled variant="solid" startDecorator={<Add />}>
        Solid
      </Button>
      <Button disabled color="neutral" variant="soft" startDecorator={<Add />}>
        Soft
      </Button>
      <Button disabled color="success" variant="outlined" startDecorator={<Add />}>
        Outlined
      </Button>
      <Button disabled color="danger" variant="plain" startDecorator={<Add />}>
        Plain
      </Button>
    </Box>
  );
}
```
</example>

### Loading

Add the `loading` prop to show the Button's loading state.
The Button is [disabled](#disabled) as long as it's loading.
See [Loading indicator](#loading-indicator) and [Loading position](#loading-position) for customization options.

<example name="ButtonLoading">
```tsx file="ButtonLoading.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

export default function ButtonLoading() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button loading variant="solid">
        Solid
      </Button>
      <Button loading variant="soft">
        Soft
      </Button>
      <Button loading variant="outlined">
        Outlined
      </Button>
      <Button loading variant="plain">
        Plain
      </Button>
    </Box>
  );
}
```
</example>

## Customization

### Variants

The Button component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid` (default), `soft`, `outlined`, and `plain`.

<example name="ButtonVariants">
```tsx file="ButtonVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

export default function ButtonVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="plain">Plain</Button>
    </Box>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Sizes

The Button component comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="ButtonSizes">
```tsx file="ButtonSizes.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
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
Play around combining different colors with different variants.

<example name="ButtonColors">
```tsx file="ButtonColors.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Typography from '@mui/joy/Typography';
import { VariantProp } from '@mui/joy/styles';

export default function ButtonColors() {
  const [variant, setVariant] = React.useState<VariantProp>('solid');
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1,
        }}
      >
        <Button size="md" variant={variant} color="primary">
          Primary
        </Button>
        <Button size="md" variant={variant} color="neutral">
          Neutral
        </Button>
        <Button size="md" variant={variant} color="danger">
          Danger
        </Button>
        <Button size="md" variant={variant} color="success">
          Success
        </Button>
        <Button size="md" variant={variant} color="warning">
          Warning
        </Button>
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

### Decorators

Use the `startDecorator` and `endDecorator` props to append actions and icons to either side of the Button:

<example name="ButtonIcons">
```tsx file="ButtonIcons.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ButtonIcons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button startDecorator={<Add />}>Add to cart</Button>
      <Button endDecorator={<KeyboardArrowRight />} color="success">
        Go to checkout
      </Button>
    </Box>
  );
}
```
</example>

### Loading indicator

The default loading indicator uses the [Circular Progress](https://mui.com/joy-ui/react-circular-progress/) component.
Use the `loadingIndicator` prop to replace it with a custom indicator, as shown below:

<example name="ButtonLoadingIndicator">
```tsx file="ButtonLoadingIndicator.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';

export default function ButtonLoadingIndicator() {
  return (
    <Stack spacing={2} direction="row">
      <Button loading>Default</Button>
      <Button loading loadingIndicator="Loading…">
        Custom
      </Button>
    </Stack>
  );
}
```
</example>

### Loading position

The `loadingPosition` prop sets the position of the Button's loading indicator.
It supports three values:

- `center` (default): The loading indicator is nested inside the `loadingIndicatorCenter` slot and replaces the Button's contents when in the loading state.
- `start`: The loading indicator replaces the [starting decorator](#decorators) when the Button is in the loading state.
- `end`: The loading indicator replaces the [ending decorator](#decorators) when the Button is in the loading state.

<example name="ButtonLoadingPosition">
```tsx file="ButtonLoadingPosition.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/joy/Button';

export default function ButtonLoadingPosition() {
  return (
    <Stack spacing={2} direction="row">
      <Button loading loadingPosition="start">
        Start
      </Button>
      <Button loading loadingPosition="end" endDecorator={<SendIcon />}>
        End
      </Button>
    </Stack>
  );
}
```
</example>

### Link Button

Buttons let users take actions, but if that action is to navigate to a new page, then an anchor tag is generally preferable over a button tag.

If you need the style of a button with the functionality of a link, then you can use the `component` prop to replace the default `<button>` with an `<a>`, as shown below:

<example name="ButtonLink">
```tsx file="ButtonLink.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import OpenInNew from '@mui/icons-material/OpenInNew';

export default function ButtonLink() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Button component="a" href="#as-link" startDecorator={<OpenInNew />}>
        Open in new tab
      </Button>
      <IconButton aria-label="Open in new tab" component="a" href="#as-link">
        <OpenInNew />
      </IconButton>
    </Box>
  );
}
```
</example>

### File upload

To create a file upload button, turn the button into a label using `component="label"` and then create a visually-hidden input with type `file`.

<example name="InputFileUpload">
```tsx file="InputFileUpload.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function InputFileUpload() {
  return (
    <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      startDecorator={
        <SvgIcon>
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
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }
    >
      Upload a file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
```
</example>

## Icon Button

```jsx
import IconButton from '@mui/joy/IconButton';
```

Use the Icon Button component for a square button to house an icon with no text content.

<example name="IconButtons">
```tsx file="IconButtons.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import Switch from '@mui/joy/Switch';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function IconButtons() {
  const [disabled, setDisabled] = React.useState(false);
  return (
    <Stack spacing={3} sx={{ alignItems: 'center' }}>
      <FormControl orientation="horizontal">
        <FormLabel>Disabled</FormLabel>
        <Switch
          checked={disabled}
          onChange={(event) => setDisabled(event.target.checked)}
        />
      </FormControl>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <IconButton disabled={disabled} variant="solid">
          <FavoriteBorder />
        </IconButton>
        <IconButton disabled={disabled} variant="soft">
          <FavoriteBorder />
        </IconButton>
        <IconButton disabled={disabled} variant="outlined">
          <FavoriteBorder />
        </IconButton>
        <IconButton disabled={disabled} variant="plain">
          <FavoriteBorder />
        </IconButton>
      </Box>
    </Stack>
  );
}
```
</example>

## CSS variables playground

Play around with the CSS variables available to the Button and Icon Button components to see how the design changes.
You can use these to customize the components with both the `sx` prop and the theme.

### Button

<example name="ButtonVariables">
```jsx file="ButtonVariables.js"
import * as React from 'react';
import Button from '@mui/joy/Button';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function ButtonVariables() {
  return (
    <JoyVariablesDemo
      componentName="Button"
      renderCode={(formattedSx) => `<Button
  startDecorator={<FavoriteBorder />}${formattedSx ? `${formattedSx}>` : '\n>'}`}
      data={[
        {
          var: '--Button-gap',
          defaultValue: '8px',
        },
      ]}
      renderDemo={(sx) => (
        <Button sx={sx} startDecorator={<FavoriteBorder />}>
          Favorite
        </Button>
      )}
    />
  );
}
```
</example>

### Icon Button

<example name="IconButtonVariables">
```jsx file="IconButtonVariables.js"
import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function IconButtonVariables() {
  return (
    <JoyVariablesDemo
      componentName="IconButton"
      renderCode={(formattedSx) =>
        `<IconButton${formattedSx ? `${formattedSx}>` : '\n>'}
  <FavoriteBorder />
</IconButton>`
      }
      data={[
        {
          var: '--IconButton-size',
          defaultValue: '36px',
        },
      ]}
      renderDemo={(sx) => (
        <IconButton sx={sx}>
          <FavoriteBorder />
        </IconButton>
      )}
    />
  );
}
```
</example>

## Accessibility

All Buttons must have a meaningful [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) so their purpose can be understood by users who require assistive technology.

This is especially important for [Icon Buttons](#icon-button) because they don't contain any text.
For example, an Icon Button that displays a `<FavoriteBorder />` icon might have a label that looks like this:

```js
<IconButton aria-label="Add to favorites">
  <FavoriteBorder />
</IconButton>
```

## Anatomy

The Button component is composed of a single root `<button>` element that wraps around its contents:

```html
<button class="MuiButton-root" type="button">
  <!-- Button contents -->
</button>
```
---
productId: joy-ui
title: React Divider component
components: Divider
githubLabel: 'component: divider'
unstyled: https://base-ui.com/react/components/separator
---

# Divider

A divider is a thin line that groups content in lists and layouts.

## Introduction

Dividers separate content into clear groups.

<example name="DividerUsage">
```tsx file="DividerUsage.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function DividerUsage() {
  return (
    <JoyUsageDemo
      componentName="Divider"
      data={[
        {
          propName: 'orientation',
          knob: 'radio',
          defaultValue: 'horizontal',
          options: ['horizontal', 'vertical'],
        },
        {
          propName: 'children',
          knob: 'input',
          defaultValue: '',
        },
      ]}
      renderDemo={(props) => (
        <Sheet sx={{ my: 2, bgcolor: 'transparent' }}>
          <Sheet
            sx={{
              height: 12,
              width: 80,
              borderRadius: 'lg',
              mb: 1,
              bgcolor: 'background.level3',
            }}
          />
          <Stack
            direction={props.orientation === 'vertical' ? 'row' : 'column'}
            spacing={2}
            sx={{ width: 300, pb: 3 }}
          >
            <Sheet
              sx={[
                {
                  flexGrow: 1,
                  borderRadius: 'xs',
                  bgcolor: 'background.level3',
                },
                props.orientation === 'vertical' ? { height: 120 } : { height: 40 },
              ]}
            />
            <Divider {...props} />
            <Sheet
              sx={[
                {
                  flexGrow: 1,
                  borderRadius: 'xs',
                  bgcolor: 'background.level3',
                },
                props.orientation === 'vertical' ? { height: 120 } : { height: 40 },
              ]}
            />
          </Stack>
        </Sheet>
      )}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Divider from '@mui/joy/Divider';

export default function MyApp() {
  return <Divider />;
}
```

### Rendered with content

Use the `Divider` to wrap elements that will be added to it.

<example name="DividerText">
```tsx file="DividerText.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import Chip from '@mui/joy/Chip';

export default function DividerText() {
  const content = (
    <Box sx={{ fontSize: 'sm', color: 'text.tertiary' }}>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </Box>
  );

  return (
    <Stack spacing={1}>
      {content}
      <Divider>Visual indicator</Divider>
      {content}
      <Divider>
        <Chip variant="soft" color="neutral" size="sm">
          Visual indicator
        </Chip>
      </Divider>
      {content}
    </Stack>
  );
}
```
</example>

:::warning
When using the `Divider` component for visual decoration, such as in a heading, explicitly specify `role="presentation"` on it to make sure screen readers can announce its content:

```js
<Divider component="div" role="presentation">
  {/* any elements nested inside the role="presentation" preserve their semantics. */}
</Divider>
```

:::

### Vertical divider

Use the `orientation` prop to render a vertical divider.

<example name="VerticalDividers">
```tsx file="VerticalDividers.tsx"
import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';

export default function VerticalDividers() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 'sm',
          bgcolor: 'background.surface',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" />
        <FormatBoldIcon />
        <FormatItalicIcon />
      </Box>
    </div>
  );
}
```
</example>

#### Vertical with text

You can also render a vertical divider with content.

<example name="VerticalDividerText">
```tsx file="VerticalDividerText.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';

export default function VerticalDividerText() {
  const content = (
    <Box sx={{ fontSize: 'sm', color: 'text.tertiary' }}>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </Box>
  );

  return (
    <Stack spacing={2} direction="row">
      {content}
      <Divider orientation="vertical">Visual indicator</Divider>
      {content}
    </Stack>
  );
}
```
</example>

### Child position

To control the position of the content, override the CSS variable `--Divider-childPosition` via `sx` prop.

```js
<Divider sx={{ '--Divider-childPosition': '20%' }}> {/* the value can be any CSS valid unit */}
```

<example name="DividerChildPosition">
```tsx file="DividerChildPosition.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Slider from '@mui/joy/Slider';
import Sheet from '@mui/joy/Sheet';

export default function DividerChildPosition() {
  const [position, setPosition] = React.useState<number | Array<number>>(50);
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1} sx={{ fontSize: 'sm' }}>
        <Sheet variant="soft" sx={{ height: 40, borderRadius: 'xs' }} />
        <Divider sx={{ '--Divider-childPosition': `${position}%` }}>
          Visual indicator
        </Divider>
        <Sheet variant="soft" sx={{ height: 40, borderRadius: 'xs' }} />
      </Stack>
      <Slider
        value={position}
        min={0}
        max={100}
        step={1}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => `${value}%`}
        onChange={(event, value) => setPosition(value)}
      />
    </Box>
  );
}
```
</example>

## Automatic adjustment

When the `Divider` is a direct child of either a [Card](https://mui.com/joy-ui/react-card/) or [ModalDialog](https://mui.com/joy-ui/react-modal/#modal-dialog), it will automatically adapt to their spacing and orientation.

### Card

Note how the `Divider`stretches by default from edge to edge of the `Card`.
It will also adapt to the `Card` orientation.

<example name="DividerInCard">
```tsx file="DividerInCard.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card, { CardProps } from '@mui/joy/Card';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';

export default function DividerInCard() {
  const [orientation, setOrientation] =
    React.useState<CardProps['orientation']>('vertical');
  return (
    <div>
      <Checkbox
        label="horizontal"
        checked={orientation === 'horizontal'}
        onChange={(event) =>
          setOrientation(event.target.checked ? 'horizontal' : 'vertical')
        }
        sx={{ mb: 2 }}
      />
      <Card
        orientation={orientation}
        variant="outlined"
        sx={{ width: 400, maxWidth: '100%', gap: 1.5 }}
      >
        <Typography sx={{ fontSize: 'lg', fontWeight: 'md' }}>Headline</Typography>
        <Divider />
        <Box
          sx={[
            orientation === 'horizontal'
              ? { display: 'block' }
              : { display: 'contents' },
          ]}
        >
          <Typography level="body-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </Typography>
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            endDecorator={<ArrowForward />}
            sx={[
              { width: '100%' },
              orientation === 'horizontal' ? { mt: 2 } : { mt: 0 },
            ]}
          >
            See more
          </Button>
        </Box>
      </Card>
    </div>
  );
}
```
</example>

### ModalDialog

The same edge to edge stretching happens with the `ModalDialog` as well.
To opt-out from the automatic adjustment, use `inset="none"` on the divider.

<example name="DividerInModalDialog">
```tsx file="DividerInModalDialog.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import CardOverflow from '@mui/joy/CardOverflow';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Divider from '@mui/joy/Divider';

export default function DividerInModalDialog() {
  return (
    <ModalDialog
      sx={{
        // this custom styles is for demonstration purpose, you might not need them in your app
        position: 'static',
        transform: 'none',
        maxWidth: 300,
      }}
    >
      <DialogTitle>Modal Title</DialogTitle>
      <Divider inset="none" />
      <DialogContent>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s
      </DialogContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <DialogActions
          buttonFlex="none"
          sx={{ pt: 1.5, justifyContent: 'flex-start' }}
        >
          <Button size="sm">Got it!</Button>
        </DialogActions>
      </CardOverflow>
    </ModalDialog>
  );
}
```
</example>

## Common examples

### Fullscreen overflow

Here is a CSS trick that lets you stretch the divider outside of its parent's boundary.

Use `box-shadow` with `100vmax` unit to fill the outer space and then remove the vertical overflow by using `clip-path: inset(0px -100vmax)`.

<example name="FullscreenOverflowDivider">
```tsx file="FullscreenOverflowDivider.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Checkbox from '@mui/joy/Checkbox';

export default function FullscreenOverflowDivider() {
  const [shadow, setShadow] = React.useState(false);
  const [clip, setClip] = React.useState(false);
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Box
          sx={(theme) => ({
            width: 200,
            py: 5,
            mx: 'auto',
            border: '1px solid',
            borderColor: 'success.300',
            bgcolor: `rgba(${theme.vars.palette.success.lightChannel} / 0.5)`,
          })}
        >
          <Divider
            sx={[
              shadow
                ? { boxShadow: '0 0 0 100vmax var(--Divider-lineColor)' }
                : { boxShadow: 'initial' },
              clip ? { clipPath: 'inset(0px -100vmax)' } : { clipPath: 'initial' },
            ]}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 2 }}>
        <Checkbox
          label="box-shadow"
          checked={shadow}
          onChange={(event) => setShadow(event.target.checked)}
        />
        <Checkbox
          label="clip-path"
          checked={clip}
          onChange={(event) => setClip(event.target.checked)}
        />
      </Box>
    </Box>
  );
}
```
</example>

:::info
The `var(--Divider-lineColor)` is defined by the Divider component so you can refer to it without hard-coding the value or accessing to the theme.
:::
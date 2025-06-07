---
productId: joy-ui
title: React Badge component
components: Badge
githubLabel: 'component: badge'
---

# Badge

The Badge component generates a small label that is attached to its child element.

## Introduction

A badge is a small descriptor for UI elements.
It typically sits on or near an element and indicates the status of that element by displaying a number, icon, or other short set of characters.

<example name="BadgeUsage">
```jsx file="BadgeUsage.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Badge from '@mui/joy/Badge';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function BadgeUsage() {
  return (
    <JoyUsageDemo
      componentName="Badge"
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
          propName: 'badgeContent',
          knob: 'input',
        },
      ]}
      renderDemo={(props) => (
        <Badge {...props}>
          <Box
            sx={{
              bgcolor: 'background.level3',
              borderRadius: 'xs',
              width: 48,
              height: 48,
            }}
          />
        </Badge>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Badge from '@mui/joy/Badge';
```

The Badge component wraps around the UI element that it's attached to.
Its default appearance is a dot in the app's `primary` color that sits on the top-right corner of the element that it's attached to.

<example name="SimpleBadge">
```tsx file="SimpleBadge.tsx"
import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';

export default function SimpleBadge() {
  return (
    <Badge>
      <Typography sx={{ fontSize: 'xl' }}>🛒</Typography>
    </Badge>
  );
}
```
</example>

### Content

Use a string or a number as a value for the `badgeContent` prop to display content inside the Badge.

<example name="ContentBadge">
```tsx file="ContentBadge.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';
import Warning from '@mui/icons-material/Warning';

export default function ContentBadge() {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Badge badgeContent={4}>
        <Typography sx={{ fontSize: 'xl' }}>🛍</Typography>
      </Badge>
      <Badge badgeContent="❕">
        <Typography sx={{ fontSize: 'xl' }}>🔔</Typography>
      </Badge>
      <Badge variant="plain" color="danger" badgeContent={<Warning />}>
        <Typography sx={{ fontSize: 'xl' }}>🪫</Typography>
      </Badge>
    </Box>
  );
}
```
</example>

### Numbers

The following props are useful when `badgeContent` is a number.

#### showZero

By default, the Badge will be automatically hidden when `badgeContent={0}`.
You can override this behavior with the `showZero` prop:

<example name="NumberBadge">
```tsx file="NumberBadge.tsx"
import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Checkbox from '@mui/joy/Checkbox';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

export default function NumberBadge() {
  const [count, setCount] = React.useState(0);
  const [showZero, setShowZero] = React.useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        mt: 4,
      }}
    >
      <Badge badgeContent={count} showZero={showZero}>
        <Typography level="h1" component="h2">
          🛍
        </Typography>
      </Badge>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          pt: 4,
          mb: 2,
          borderTop: '1px solid',
          borderColor: 'background.level1',
        }}
      >
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c - 1)}
        >
          <Remove />
        </IconButton>
        <Typography textColor="text.secondary" sx={{ fontWeight: 'md' }}>
          {count}
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c + 1)}
        >
          <Add />
        </IconButton>
      </Box>
      <Checkbox
        onChange={(event) => setShowZero(event.target.checked)}
        checked={showZero}
        label="show zero"
      />
    </Box>
  );
}
```
</example>

#### Maximum value

Use the `max` prop to cap the content to a maximum numerical value.

<example name="BadgeMax">
```tsx file="BadgeMax.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Badge from '@mui/joy/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function BadgeMax() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} badgeInset="0 -6px 0 0">
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} max={999} badgeInset="0 -12px 0 0">
        <MailIcon />
      </Badge>
    </Box>
  );
}
```
</example>

## Customization

### Variants

The Badge component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid` (default), `soft` , `outlined`, and `plain`.

<example name="BadgeVariants">
```tsx file="BadgeVariants.tsx"
import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function BadgeVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge badgeContent={1} variant="solid">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={2} variant="soft">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={3} variant="outlined">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={4} variant="plain">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
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

The Badge component comes in three sizes: `sm`, `md` (default), and `lg`:

<example name="BadgeSizes">
```tsx file="BadgeSizes.tsx"
import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function BadgeSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge badgeContent={10} size="sm">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={20} size="md">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={30} size="lg">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
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

<example name="BadgeColors">
```tsx file="BadgeColors.tsx"
import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function BadgeColors() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge badgeContent={'P'} color="primary">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={'N'} color="neutral">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={'D'} color="danger">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={'S'} color="success">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
      <Badge badgeContent={'W'} color="warning">
        <Typography sx={{ fontSize: 'xl' }}>💌</Typography>
      </Badge>
    </Box>
  );
}
```
</example>

### Visibility

Use the `invisible` prop to control the Badge's visibility.

:::warning
If [`showZero`](#numbers) and `invisible` are both applied at the same time, then the Badge will still be visible when `badgeContent={0}`.
:::

<example name="BadgeVisibility">
```tsx file="BadgeVisibility.tsx"
import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';

export default function BadgeVisibility() {
  const [invisible, setInvisible] = React.useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        minWidth: 200,
        justifyContent: 'space-between',
      }}
    >
      <Badge badgeContent={12} invisible={invisible}>
        <Typography sx={{ fontSize: 'xl' }}>🛍</Typography>
      </Badge>
      <Switch
        startDecorator="invisible"
        checked={invisible}
        onChange={(event) => setInvisible(event.target.checked)}
        variant={invisible ? 'solid' : 'outlined'}
      />
    </Box>
  );
}
```
</example>

### Position

By default, the Badge sits on the top-right corner of the element that it's attached to.
Use the `anchorOrigin` prop to change the position of the Badge according to its `vertical` (top or bottom) and `horizontal` (left or right) placement.
Try clicking the arrows in the demo below to change the position of the Badge:

<example name="BadgeAlignment">
```tsx file="BadgeAlignment.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Badge, { BadgeProps } from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import { BrandingProvider } from '@mui/docs/branding';

export default function BadgeAlignment() {
  const [anchorOrigin, setAnchorOrigin] = React.useState<BadgeProps['anchorOrigin']>(
    {
      vertical: 'top',
      horizontal: 'right',
    },
  );
  const jsx = `
<Badge
  anchorOrigin={{
    vertical: '${anchorOrigin?.vertical}',
    horizontal: '${anchorOrigin?.horizontal}',
  }}
>
`;
  return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
      <Box sx={{ p: 5, position: 'relative', display: 'inline-block' }}>
        <Badge anchorOrigin={anchorOrigin} badgeInset="14%">
          <Avatar size="lg" src="/static/images/avatar/2.jpg" />
        </Badge>
        <IconButton
          color="neutral"
          size="sm"
          aria-label="top left"
          onClick={() => setAnchorOrigin({ vertical: 'top', horizontal: 'left' })}
          sx={{ borderRadius: 'xl', position: 'absolute', top: 0, left: 0 }}
        >
          <ArrowDownward sx={{ transform: 'rotate(-45deg)' }} />
        </IconButton>
        <IconButton
          color="neutral"
          size="sm"
          aria-label="top right"
          onClick={() => setAnchorOrigin({ vertical: 'top', horizontal: 'right' })}
          sx={{ borderRadius: 'xl', position: 'absolute', top: 0, right: 0 }}
        >
          <ArrowDownward sx={{ transform: 'rotate(45deg)' }} />
        </IconButton>
        <IconButton
          color="neutral"
          size="sm"
          aria-label="bottom right"
          onClick={() => setAnchorOrigin({ vertical: 'bottom', horizontal: 'left' })}
          sx={{ borderRadius: 'xl', position: 'absolute', bottom: 0, left: 0 }}
        >
          <ArrowUpward sx={{ transform: 'rotate(45deg)' }} />
        </IconButton>
        <IconButton
          color="neutral"
          size="sm"
          aria-label="bottom left"
          onClick={() =>
            setAnchorOrigin({ vertical: 'bottom', horizontal: 'right' })
          }
          sx={{ borderRadius: 'xl', position: 'absolute', bottom: 0, right: 0 }}
        >
          <ArrowUpward sx={{ transform: 'rotate(-45deg)' }} />
        </IconButton>
      </Box>
      <BrandingProvider mode="dark">
        <HighlightedCode
          code={jsx}
          language="jsx"
          sx={{ minWidth: 300, textAlign: 'left' }}
        />
      </BrandingProvider>
    </Box>
  );
}
```
</example>

### Inset

Use the `badgeInset` prop to fine-tune the position of the Badge relative to the element that it's attached to.
This prop accepts a string composed of numbers expressed in units of `px`, `%`, `em`, or `rem`. (This syntax corresponds to the [inset CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/inset).)

This string defines the inset from the Badge's [`anchorOrigin`](#position)—for instance, the demo below pushes the Badge 14% closer to the center of its child element (relative to the top-right corner) along both the vertical and horizontal axes:

<example name="BadgeInset">
```tsx file="BadgeInset.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Badge from '@mui/joy/Badge';

export default function BadgeInset() {
  return (
    <Badge badgeInset="14%" color="danger">
      <Avatar src="/static/images/avatar/1.jpg" />
    </Badge>
  );
}
```
</example>

If you pass two unit-numbers to the `badgeInset` prop—for example`"50px 10px"`—the first number applies to the vertical axis, and the second applies horizontally.
If you pass four unit-numbers to the prop—such as `"0 -10px 0 5px"`, they are applied clockwise starting from the top.

## Accessibility

Screen readers may not provide users with enough information about a badge's contents.
To make your Badge accessible, you must provide a full description with `aria-label`, as shown in the demo below:

<example name="AccessibleBadges">
```tsx file="AccessibleBadges.tsx"
import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Badge from '@mui/joy/Badge';
import MailIcon from '@mui/icons-material/Mail';

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function AccessibleBadges() {
  return (
    <IconButton color="neutral" aria-label={notificationsLabel(100)}>
      <Badge badgeContent={100} badgeInset="-20%">
        <MailIcon />
      </Badge>
    </IconButton>
  );
}
```
</example>

## Anatomy

The Badge component is composed of a root `<span>` that houses the element that the Badge is attached to, followed by a `<span>` to represent the Badge itself:

```html
<span class="MuiBadge-root">
  <!-- the element the Badge is attached to -->
  <span class="MuiBadge-badge">
    <!-- Badge content -->
  </span>
</span>
```
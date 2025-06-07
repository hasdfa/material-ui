---
productId: joy-ui
title: React Avatar component
components: Avatar, AvatarGroup, SvgIcon
githubLabel: 'component: avatar'
---

# Avatar

An avatar is a graphical representation of a user's identity.

## Introduction

The Avatar component can be used to display graphical information about a user in places such as menus, tables, and chats.

<example name="AvatarUsage">
```jsx file="AvatarUsage.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function AvatarUsage() {
  return (
    <JoyUsageDemo
      componentName="Avatar"
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
          defaultValue: 'neutral',
        },
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
      ]}
      renderDemo={(props) => (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Avatar src="/static/images/avatar/1.jpg" {...props} />
          <Avatar {...props}>M</Avatar>
          <Avatar {...props} />
        </Box>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Avatar from '@mui/joy/Avatar';
```

By default, the Avatar component displays a generic Person Icon.
You can replace this icon with a text string or an image.

<example name="BasicAvatars">
```tsx file="BasicAvatars.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function BasicAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar />
      <Avatar>JG</Avatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Box>
  );
}
```
</example>

### Text Avatar

Wrap the Avatar component around a string to display text.
Note that the Avatar is designed to comfortably fit two letters at most—for instance, a user's initials:

<example name="InitialAvatars">
```tsx file="InitialAvatars.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';

export default function InitialAvatars() {
  return <Avatar>RE</Avatar>;
}
```
</example>

### Image Avatar

Insert images into the Avatar by defining a path inside the `src` prop, just like you would with an HTML `<img>` element.
Make sure to to write a meaningful description for the `alt` prop.

<example name="ImageAvatars">
```tsx file="ImageAvatars.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function ImageAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Box>
  );
}
```
</example>

#### Image fallbacks

If an error occurs while loading the Avatar's image, it will fall back to the following alternatives (in this order):

1. The provided child string
2. The first letter of the alt text
3. The default generic icon

<example name="FallbackAvatars">
```tsx file="FallbackAvatars.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';

export default function FallbackAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar alt="Remy Sharp" src="/broken-image.jpg">
        BT
      </Avatar>
      <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
      <Avatar src="/broken-image.jpg" />
    </Box>
  );
}
```
</example>

## Customization

### Variants

The Avatar component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid`, `soft` (default), `outlined`, and `plain`.

<example name="AvatarVariants">
```tsx file="AvatarVariants.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function AvatarVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Avatar variant="solid" />
      <Avatar variant="soft" />
      <Avatar variant="outlined" />
      <Avatar variant="plain" />
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

The Avatar component comes in three sizes: `sm`, `md` (default), and `lg`:

<example name="AvatarSizes">
```tsx file="AvatarSizes.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function AvatarSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="sm" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="md" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="lg" />
    </Box>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

## Usage with Avatar Group

```jsx
import AvatarGroup from '@mui/joy/AvatarGroup';
```

Use the Avatar Group component to group multiple Avatars together.

<example name="GroupedAvatars">
```tsx file="GroupedAvatars.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';

export default function GroupedAvatars() {
  return (
    <AvatarGroup>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar>+3</Avatar>
    </AvatarGroup>
  );
}
```
</example>

### Quantity within a group

The Avatar Group does not provide built-in props to control the maximum or the total number of Avatars within a group.
This is intentionally left open-ended to give you broader options for customization.

The demo below shows an example of an Avatar Group that maxes out at five; all Avatars beyond the first four are lumped together in the fifth Avatar, which displays the total number hidden:

<example name="MaxAndTotalAvatars">
```tsx file="MaxAndTotalAvatars.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';

function clampAvatars<T>(
  avatars: Array<T>,
  options: { max?: number; total?: number } = { max: 5 },
) {
  const { max = 5, total } = options;
  let clampedMax = max < 2 ? 2 : max;
  const totalAvatars = total || avatars.length;
  if (totalAvatars === clampedMax) {
    clampedMax += 1;
  }
  clampedMax = Math.min(totalAvatars + 1, clampedMax);
  const maxAvatars = Math.min(avatars.length, clampedMax - 1);
  const surplus = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0);
  return { avatars: avatars.slice(0, maxAvatars).reverse(), surplus };
}

export default function MaxAndTotalAvatars() {
  const dataFromTheServer = {
    people: [
      {
        alt: 'Remy Sharp',
        src: '/static/images/avatar/1.jpg',
      },
      {
        alt: 'Travis Howard',
        src: '/static/images/avatar/2.jpg',
      },
      {
        alt: 'Agnes Walker',
        src: '/static/images/avatar/4.jpg',
      },
      {
        alt: 'Trevor Henderson',
        src: '/static/images/avatar/5.jpg',
      },
    ],
    total: 24,
  };
  const { avatars, surplus } = clampAvatars(dataFromTheServer.people, {
    max: 5,
    total: dataFromTheServer.total,
  });
  return (
    <AvatarGroup>
      {avatars.map((avatar) => (
        <Avatar key={avatar.alt} {...avatar} />
      ))}
      {!!surplus && <Avatar>+{surplus}</Avatar>}
    </AvatarGroup>
  );
}
```
</example>

### Consistent appearance

The Avatar component exposes meaningful CSS variables to communicate with Avatar Group.
You can apply those variables to other non-Avatar components to mimic the Avatar's appearance inside of a group.
This customization technique makes your interface more resilient to changes, as any style changes applied to the Avatar will also be applied to the other components in the group.

Here is an example using an Icon Button with its styles defined by the Avatar's CSS variables:

<example name="EllipsisAvatarAction">
```tsx file="EllipsisAvatarAction.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import IconButton from '@mui/joy/IconButton';
import SvgIcon from '@mui/joy/SvgIcon';

export default function EllipsisAvatarAction() {
  return (
    <AvatarGroup>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <IconButton
        color="neutral"
        onClick={() => alert('You clicked!')}
        sx={{
          borderRadius: '50%',
          marginInlineStart: 'var(--Avatar-marginInlineStart)',
          boxShadow: 'var(--Avatar-ring)',
        }}
      >
        <SvgIcon>
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </SvgIcon>
      </IconButton>
    </AvatarGroup>
  );
}
```
</example>

### Overlapping order

By default, the first Avatar in the group sits behind the second, which sits behind the third, and so on.
You can reverse the overlapping order by reversing the order of the Avatars and using the CSS `flexDirection: row-reverse` property in the Avatar Group:

<example name="OverlapAvatarGroup">
```tsx file="OverlapAvatarGroup.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';

export default function OverlapAvatarGroup() {
  return (
    <AvatarGroup sx={{ flexDirection: 'row-reverse' }}>
      <Avatar>+3</Avatar>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </AvatarGroup>
  );
}
```
</example>

### Vertical stacking

To render the Avatar Group vertically, add the CSS `writing-mode: vertical-rl` property and rotate the interior element (if one is present) by -90 degrees.

:::success
This approach is preferable because it preserves the overlapping offset between Avatars; the alternative—`flexDirection: column`—does not.
:::

<example name="VerticalAvatarGroup">
```tsx file="VerticalAvatarGroup.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';

export default function VerticalAvatarGroup() {
  return (
    <AvatarGroup sx={{ writingMode: 'vertical-rl' }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar sx={{ transform: 'rotate(-90deg)' }}>+3</Avatar>
    </AvatarGroup>
  );
}
```
</example>

## Usage with Badge

```jsx
import Badge from '@mui/joy/Badge';
```

Combine the Avatar component with the [Badge](https://mui.com/joy-ui/react-badge/) to visually communicate more complex information about a user's status:

<example name="BadgeAvatars">
```tsx file="BadgeAvatars.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import Avatar from '@mui/joy/Avatar';

export default function BadgeAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Badge
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeInset="14%"
        color="success"
        sx={{
          [`& .${badgeClasses.badge}`]: {
            '&::after': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              animation: 'ripple 1.2s infinite ease-in-out',
              border: '2px solid',
              borderColor: 'success.500',
              content: '""',
            },
          },
          '@keyframes ripple': {
            '0%': {
              transform: 'scale(1)',
              opacity: 1,
            },
            '100%': {
              transform: 'scale(2)',
              opacity: 0,
            },
          },
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Badge>
      <Badge
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="plain"
        badgeContent={
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ '--Avatar-size': '24px' }}
          />
        }
        badgeInset="14%"
        sx={{ '--Badge-paddingX': '0px' }}
      >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" size="lg" />
      </Badge>
    </Box>
  );
}
```
</example>

## CSS variables playground

Play around with the CSS variables available to the Avatar component to see how the design changes.
You can use these to customize the component with both the `sx` prop and the theme.

<example name="AvatarGroupVariables">
```jsx file="AvatarGroupVariables.js"
import * as React from 'react';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Avatar from '@mui/joy/Avatar';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function AvatarGroupVariables() {
  return (
    <JoyVariablesDemo
      componentName="AvatarGroup"
      childrenAccepted
      data={[
        {
          var: '--AvatarGroup-gap',
          defaultValue: '-8px',
        },
        {
          var: '--Avatar-size',
          defaultValue: '40px',
        },
        {
          var: '--Avatar-ringSize',
          defaultValue: '4px',
        },
      ]}
      renderDemo={(sx) => (
        <AvatarGroup sx={sx}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar>+3</Avatar>
        </AvatarGroup>
      )}
    />
  );
}
```
</example>

## Anatomy

The Avatar component is composed of a root `<div>` that may wrap around an `<svg>`, an `<img>`, or a string:

```html
<div class="MuiAvatar-root">
  <!-- Avatar contents -->
</div>
```
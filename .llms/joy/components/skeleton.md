---
productId: joy-ui
title: React Skeleton component
githubLabel: 'component: skeleton'
components: Skeleton, AspectRatio, Avatar, Typography
---

# Skeleton

Skeletons are preview placeholders for components that haven't loaded yet, reducing load-time frustration.

## Introduction

Skeletons provide users an expectation of what the UI looks like while data loads.
It helps reducing the perception of long loading times while being a more interesting loading state to look at.

<example name="BasicSkeleton">
```tsx file="BasicSkeleton.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

export default function BasicSkeleton() {
  return (
    <Card variant="outlined" sx={{ width: 343, display: 'flex', gap: 2 }}>
      <AspectRatio ratio="21/9">
        <Skeleton variant="overlay">
          <img
            alt=""
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          />
        </Skeleton>
      </AspectRatio>
      <Typography>
        <Skeleton>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries.
        </Skeleton>
      </Typography>
    </Card>
  );
}
```
</example>

## Basics

```jsx
import Skeleton from '@mui/joy/Skeleton';
```

There are two methods of using the Skeleton component:

1. **Masking a component**: see the [Avatar](#avatar), [Image](#image) and [Typography](#inline-with-typography) examples. The Skeleton component will inherit their dimension which makes for a more predictable UI while also preventing layout shift when the loading is done.
2. **Setting a custom width and height**: see the [Geometry](#geometry) and [Text block](#text-block) examples. Use this for full control of the Skeleton size, ignoring its parent dimensions entirely. Be aware that this option _can_ generate layout shift if the actual component the Skeleton is mimicking has a different size.

## Customization

### Loading

The Skeleton has the `loading` prop set to `true` by default.

Set it to `false` to hide the Skeleton component.
If the Skeleton has children, they will be rendered instead.

<example name="LoadingSkeleton">
```tsx file="LoadingSkeleton.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

export default function LoadingSkeleton() {
  const [loading, setLoading] = React.useState(true);
  return (
    <Stack spacing={2} useFlexGap>
      <Card variant="outlined" sx={{ width: 343 }}>
        <AspectRatio ratio="21/9">
          <Skeleton loading={loading} variant="overlay">
            <img
              alt=""
              src={
                loading
                  ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                  : 'https://images.unsplash.com/photo-1686548812883-9d3777f4c137?h=400&fit=crop&auto=format&dpr=2'
              }
            />
          </Skeleton>
        </AspectRatio>
        <Typography>
          <Skeleton loading={loading}>
            {loading
              ? 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
              : 'An aerial view of a road in the middle of a forest. This image was uploaded by Dian Yu on Unsplash.'}
          </Skeleton>
        </Typography>
        <Button onClick={() => setLoading(!loading)}>
          {loading ? 'Stop' : 'Start'} loading
        </Button>
      </Card>
    </Stack>
  );
}
```
</example>

### Animation

Use the `animation` prop to control how the Skeleton component animates.
The `animation` prop value can be one of the following:

- `pulse` (default): The background of the Skeleton fades in and out.
- `wave`: A wave animation flowing from left to right.
- `false`: Disable the animation entirely.

The demo below shows the wave animation:

<example name="AnimationSkeleton">
```tsx file="AnimationSkeleton.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

export default function AnimationSkeleton() {
  return (
    <Stack spacing={2} useFlexGap>
      <Card variant="outlined" sx={{ width: 343 }}>
        <CardContent orientation="horizontal">
          <Skeleton animation="wave" variant="circular" width={48} height={48} />
          <div>
            <Skeleton animation="wave" variant="text" sx={{ width: 120 }} />
            <Skeleton
              animation="wave"
              variant="text"
              level="body-sm"
              sx={{ width: 200 }}
            />
          </div>
        </CardContent>
        <AspectRatio ratio="21/9">
          <Skeleton animation="wave" variant="overlay">
            <img
              alt=""
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            />
          </Skeleton>
        </AspectRatio>
        <Typography sx={{ overflow: 'hidden' }}>
          <Skeleton animation="wave">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and
            publishing industries.
          </Skeleton>
        </Typography>
        <Button>
          Read more
          <Skeleton animation="wave" />
        </Button>
      </Card>
    </Stack>
  );
}
```
</example>

To set the `wave` animation as the default for all Skeleton component instances, use the theme's default props:

```js
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  components: {
    JoySkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <Skeleton />{' '}
      {/* The Skeleton component will have the wave animation by default */}
    </CssVarsProvider>
  );
}
```

:::info
To learn more about global theme changes, see [Themed Components](https://mui.com/joy-ui/customization/themed-components/) page.
:::

### Avatar

Use the [Avatar](https://mui.com/joy-ui/react-avatar/) component to wrap the Skeleton when displaying an avatar.

<example name="AvatarSkeleton">
```tsx file="AvatarSkeleton.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Skeleton from '@mui/joy/Skeleton';
import Stack from '@mui/joy/Stack';
import Switch from '@mui/joy/Switch';

export default function AvatarSkeleton() {
  const [loading, setLoading] = React.useState(true);
  return (
    <Stack
      spacing={4}
      useFlexGap
      sx={{ width: 200, height: 100, alignItems: 'center' }}
    >
      <Avatar src={loading ? '' : '/static/images/avatar/1.jpg'}>
        <Skeleton loading={loading} />
      </Avatar>
      <FormControl orientation="horizontal" sx={{ gap: 1 }}>
        <Switch
          size="sm"
          checked={loading}
          onChange={(event) => setLoading(event.target.checked)}
        />
        <FormLabel>Loading</FormLabel>
      </FormControl>
    </Stack>
  );
}
```
</example>

### Image

Use the [AspectRatio](https://mui.com/joy-ui/react-aspect-ratio/) component to wrap the Skeleton when displaying an image.

<example name="ImageSkeleton">
```tsx file="ImageSkeleton.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Skeleton from '@mui/joy/Skeleton';
import Stack from '@mui/joy/Stack';
import Switch from '@mui/joy/Switch';

export default function ImageSkeleton() {
  const [loading, setLoading] = React.useState(true);
  return (
    <Stack spacing={2} useFlexGap sx={{ alignItems: 'center' }}>
      <Box sx={{ m: 'auto' }}>
        <AspectRatio variant="plain" sx={{ width: 300 }}>
          <Skeleton loading={loading}>
            <img
              src={
                loading
                  ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                  : 'https://images.unsplash.com/photo-1686548812883-9d3777f4c137?h=400&fit=crop&auto=format&dpr=2'
              }
              alt=""
            />
          </Skeleton>
        </AspectRatio>
      </Box>
      <FormControl orientation="horizontal" sx={{ gap: 1 }}>
        <Switch
          size="sm"
          checked={loading}
          onChange={(event) => setLoading(event.target.checked)}
        />
        <FormLabel>Loading</FormLabel>
      </FormControl>
    </Stack>
  );
}
```
</example>

### Inline with Typography

Insert the Skeleton between the Typography component and the text to display placeholder lines.

<example name="InlineSkeleton">
```tsx file="InlineSkeleton.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Skeleton from '@mui/joy/Skeleton';
import Stack from '@mui/joy/Stack';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';

export default function InlineSkeleton() {
  const [loading, setLoading] = React.useState(true);
  return (
    <Stack spacing={2} useFlexGap sx={{ maxWidth: '60ch' }}>
      <Box sx={{ m: 'auto' }}>
        <Typography
          level="h1"
          sx={{ fontSize: 'xl', position: 'relative', overflow: 'hidden' }}
        >
          <Skeleton loading={loading}>A heading</Skeleton>
        </Typography>
        <Typography
          level="body-xs"
          sx={{ mt: 1, mb: 2, position: 'relative', overflow: 'hidden' }}
        >
          <Skeleton loading={loading}>HISTORY, PURPOSE AND USAGE</Skeleton>
        </Typography>
        <Typography sx={{ position: 'relative', overflow: 'hidden' }}>
          <Skeleton loading={loading}>
            <i>Lorem ipsum</i> is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups.
          </Skeleton>
        </Typography>
      </Box>
      <FormControl orientation="horizontal" sx={{ gap: 1 }}>
        <Switch
          size="sm"
          checked={loading}
          onChange={(event) => setLoading(event.target.checked)}
        />
        <FormLabel>Loading</FormLabel>
      </FormControl>
    </Stack>
  );
}
```
</example>

### Geometry

To build a specific Skeleton shape, use the `variant` prop and choose between `circular` or `rectangular`.
And to have it on a specific dimension, use the `width` and `height` props.

<example name="GeometrySkeleton">
```tsx file="GeometrySkeleton.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Skeleton from '@mui/joy/Skeleton';

export default function GeometrySkeleton() {
  return (
    <div>
      <Box sx={{ m: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div>
          <Skeleton variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" width={140} height="1em" />
        </div>
      </Box>
    </div>
  );
}
```
</example>

:::success
The `width` and `height` props support object notation for responsive values.

The example below shows how to create a Skeleton component with a circular shape that is 40x40px on mobile and 48x48px on desktop.

```js
<Skeleton
  variant="circular"
  width={{ xs: 40, md: 48 }}
  height={{ xs: 40, md: 48 }}
/>
```

:::

### Text block

Use the `variant="text"` and `level` props to create a block of skeleton text that follows the theme's typography styles.

The `level` prop value can be a theme's typography-related token.
The result of the skeleton text will have the same height as the text of the `level` prop.

<example name="TextBlockSkeleton">
```tsx file="TextBlockSkeleton.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

export default function TextBlockSkeleton() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '100px 260px', gap: 1 }}>
      <Skeleton variant="text" level="h1" />
      <Typography level="h1">h1 Typeface</Typography>

      <Skeleton variant="text" level="h2" />
      <Typography level="h2">h2 Typeface</Typography>

      <Skeleton variant="text" />
      <Typography>body-md Typeface</Typography>

      <Skeleton variant="text" level="body-sm" />
      <Typography level="body-sm">body-sm Typeface</Typography>

      <Skeleton variant="text" level="body-xs" />
      <Typography level="body-xs">body-xs Typeface</Typography>
    </Box>
  );
}
```
</example>

## Common examples

### Basic card

<example name="BasicCardSkeleton">
```tsx file="BasicCardSkeleton.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Skeleton from '@mui/joy/Skeleton';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function BasicCardSkeleton() {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <div>
        <Typography level="h2" sx={{ fontSize: 'md', mb: 0.5 }}>
          <Skeleton>Yosemite National Park</Skeleton>
        </Typography>
        <Typography level="body-sm">
          <Skeleton>April 24 to May 02, 2021</Skeleton>
        </Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
          <Skeleton />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <Skeleton>
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </Skeleton>
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">
            <Skeleton>Total price:</Skeleton>
          </Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
            <Skeleton>$2,900</Skeleton>
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Explore
          <Skeleton />
        </Button>
      </CardContent>
    </Card>
  );
}
```
</example>

### Comment

<example name="CommentSkeleton">
```tsx file="CommentSkeleton.tsx"
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Skeleton from '@mui/joy/Skeleton';

export default function CommentSkeleton() {
  return (
    <Card
      variant="outlined"
      sx={{ width: 'max(400px, 60%)', borderRadius: 0, '--Card-radius': 0 }}
    >
      <CardContent orientation="horizontal">
        <Skeleton variant="rectangular" width={44} height={44} />
        <div>
          <Skeleton variant="text" width={100} />
          <Skeleton level="body-sm" variant="text" width={200} />
        </div>
      </CardContent>
      <CardContent sx={{ gap: 0.5, mt: 1 }}>
        <Skeleton level="body-xs" variant="text" width="92%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="96%" />
      </CardContent>
    </Card>
  );
}
```
</example>
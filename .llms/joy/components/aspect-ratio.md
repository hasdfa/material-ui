---
productId: joy-ui
title: React Aspect Ratio component
components: AspectRatio
---

# Aspect Ratio

The Aspect Ratio component resizes its contents to match the desired ratio.

## Introduction

Aspect Ratio is a wrapper component for quickly resizing content to conform to your preferred ratio of width to height.
Media content like images can be stretched, resized, and cropped based on the CSS `object-fit` property.

:::info
A [native CSS `aspect-ratio` property](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) does exist, and we plan to implement it in Joy UI soon.
:::

## Basics

```jsx
import AspectRatio from '@mui/joy/AspectRatio';
```

The Aspect Ratio component wraps around the content that it resizes.
The element to be resized must be the first direct child.
The default ratio is `16/9`.

<example name="BasicRatio">
```tsx file="BasicRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';

export default function BasicRatio() {
  return (
    <AspectRatio sx={{ width: 300 }}>
      <Typography level="h2" component="div">
        16/9
      </Typography>
    </AspectRatio>
  );
}
```
</example>

## Customization

### Variants

The Aspect Ratio component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid`, `soft` (default), `outlined`, and `plain`.

<example name="VariantsRatio">
```tsx file="VariantsRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';

export default function VariantsRatio() {
  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid size={{ xs: 6, md: 'grow' }}>
        <AspectRatio variant="solid">
          <Typography level="inherit" sx={{ fontWeight: 'lg' }}>
            Solid
          </Typography>
        </AspectRatio>
      </Grid>
      <Grid size={{ xs: 6, md: 'grow' }}>
        <AspectRatio variant="soft">
          <Typography level="inherit" sx={{ fontWeight: 'lg' }}>
            Soft
          </Typography>
        </AspectRatio>
      </Grid>
      <Grid size={{ xs: 6, md: 'grow' }}>
        <AspectRatio variant="outlined">
          <Typography level="inherit" sx={{ fontWeight: 'lg' }}>
            Outlined
          </Typography>
        </AspectRatio>
      </Grid>
      <Grid size={{ xs: 6, md: 'grow' }}>
        <AspectRatio variant="plain">
          <Typography level="inherit" sx={{ fontWeight: 'lg' }}>
            Plain
          </Typography>
        </AspectRatio>
      </Grid>
    </Grid>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Ratio

Use the `ratio` prop to change the aspect ratio, following the pattern `width/height`.
For example, the demo below uses a ratio of `4/3`, which is a common alternative to the default `16/9`:

<example name="CustomRatio">
```tsx file="CustomRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';

export default function CustomRatio() {
  return (
    <AspectRatio
      variant="outlined"
      ratio="4/3"
      sx={{ width: 300, bgcolor: 'background.level2', borderRadius: 'md' }}
    >
      <Typography level="h2" component="div">
        4/3
      </Typography>
    </AspectRatio>
  );
}
```
</example>

:::info
The `ratio` prop uses the [CSS `calc()`](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) function under the hood.
:::

### Object fit

When the content inside the Aspect Ratio component is an image or a video, you can use the `objectFit` prop to control how it's resized.

This prop gives you access to all of the values associated with the CSS `object-fit` property: `cover` (default), `contain`, `fill`, `scaleDown`, `initial`, `inherit`, and `none`.

<example name="MediaRatio">
```tsx file="MediaRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

export default function MediaRatio() {
  return (
    <Box sx={{ width: 300, borderRadius: 'sm', p: 1 }}>
      <AspectRatio objectFit="contain">
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt="A beautiful landscape."
        />
      </AspectRatio>
    </Box>
  );
}
```
</example>

### Media placeholder

Use a `<div>`, or a [Box](https://mui.com/system/react-box/) component paired with an icon, as a fallback when there is no media content provided:

<example name="PlaceholderAspectRatio">
```tsx file="PlaceholderAspectRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import ImageIcon from '@mui/icons-material/Image';

export default function PlaceholderAspectRatio() {
  return (
    <Card variant="outlined" sx={{ width: 300 }}>
      <AspectRatio>
        <div>
          <ImageIcon sx={{ fontSize: '3rem', opacity: 0.2 }} />
        </div>
      </AspectRatio>
      <div>
        <Typography level="title-md">Title</Typography>
        <Typography level="body-sm">Description of the card.</Typography>
      </div>
    </Card>
  );
}
```
</example>

### Minimum and maximum height

Use the `minHeight` and `maxHeight` props to set the lower and upper bound for the height of the content.
This is useful when the Aspect Ratio component wraps dynamic-width content, as shown in the demo below:

<example name="MinMaxRatio">
```tsx file="MinMaxRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

export default function MinMaxRatio() {
  return (
    <Box sx={{ width: 300, resize: 'horizontal', overflow: 'auto', p: 1 }}>
      <AspectRatio minHeight={120} maxHeight={200}>
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt=""
        />
      </AspectRatio>
    </Box>
  );
}
```
</example>

## Using inside a flex row

When the Aspect Ratio component is a child of a flexbox `row` container, use `flex-basis` to set the ideal width of the content:

<example name="FlexRowRatio">
```tsx file="FlexRowRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function FlexRowRatio() {
  const [flexBasis, setFlexBasis] = React.useState(200);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card
        variant="outlined"
        size="sm"
        orientation="horizontal"
        sx={{ gap: 2, minWidth: 300 }}
      >
        <AspectRatio
          sx={[
            { overflow: 'auto' },
            flexBasis ? { flexBasis: `${flexBasis}px` } : { flexBasis: null },
          ]}
        >
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </AspectRatio>
        <div>
          <Typography level="title-sm">Yosemite National Park</Typography>
          <Typography level="body-sm">California, USA</Typography>
        </div>
      </Card>
      <br />
      <FormControl sx={{ mx: 'auto', width: '100%' }}>
        <FormLabel>flexBasis</FormLabel>
        <Input
          variant="outlined"
          type="number"
          placeholder="number"
          value={flexBasis}
          endDecorator="px"
          onChange={(event) => setFlexBasis(event.target.valueAsNumber)}
        />
      </FormControl>
    </Box>
  );
}
```
</example>

By default, the Aspect Ratio component will retain the provided aspect ratio. If you want the Aspect Ratio component to fill the vertical space, set the `flex` prop to `true`:

<example name="FlexAspectRatio">
```tsx file="FlexAspectRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Switch from '@mui/joy/Switch';

export default function FlexAspectRatio() {
  const [flex, setFlex] = React.useState(false);
  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <FormControl orientation="horizontal">
        <FormLabel>Flex</FormLabel>
        <Switch checked={flex} onChange={(event) => setFlex(event.target.checked)} />
      </FormControl>
      <Card
        orientation="horizontal"
        variant="outlined"
        sx={{ boxShadow: 'none', resize: 'horizontal', overflow: 'auto' }}
      >
        <AspectRatio ratio="21/9" flex={flex} sx={{ flexBasis: 200 }}>
          <Typography level="h1" component="div">
            21 / 9
          </Typography>
        </AspectRatio>
        <CardContent>
          <Typography level="body-xs">20 APR 2023</Typography>
          <Typography level="title-lg" component="div">
            Widget Title
          </Typography>
          <Typography level="body-lg">
            Lorem ipsum is placeholder text commonly used in the graphic.
          </Typography>
          <CardActions buttonFlex="none">
            <Button variant="outlined" color="neutral" size="sm">
              See details
            </Button>
            <Button variant="solid" color="neutral" size="sm">
              Learn more
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Stack>
  );
}
```
</example>

## Using with Next.js Image

The Aspect Ratio component can be used with a [Next.js Image](https://nextjs.org/docs/app/building-your-application/optimizing/images) component as a child.
The Image should always include the `layout="fill"` property—otherwise it requires `height` and `width` values, which would defeat the purpose of the Aspect Ratio component.

```js
import Image from 'next/image';
import AspectRatio from '@mui/joy/AspectRatio';
import mountains from '../public/mountains.jpg';

function App() {
  return (
    <AspectRatio variant="outlined" ratio="1" objectFit="cover">
      {/* only layout="fill" makes sense for using with AspectRatio */}
      <Image alt="Mountains" src={mountains} layout="fill" placeholder="blur" />
    </AspectRatio>
  );
}
```

## Using with an icon

The Aspect Ratio component can be a handy tool for creating a square container for an icon.

<example name="IconWrapper">
```tsx file="IconWrapper.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Stack from '@mui/joy/Stack';
import Favorite from '@mui/icons-material/Favorite';

export default function IconWrapper() {
  return (
    <Stack direction="row" spacing={2}>
      <AspectRatio ratio="1" variant="solid" color="primary" sx={{ minWidth: 40 }}>
        {/* an extra div is required to make the icon center */}
        <div>
          <Favorite />
        </div>
      </AspectRatio>
      <AspectRatio
        ratio="1"
        variant="outlined"
        color="success"
        sx={{ minWidth: 40, borderRadius: 'sm' }}
      >
        <div>
          <Favorite />
        </div>
      </AspectRatio>
      <AspectRatio
        ratio="1"
        variant="soft"
        color="danger"
        sx={{ minWidth: 40, borderRadius: '50%' }}
      >
        <div>
          <Favorite />
        </div>
      </AspectRatio>
    </Stack>
  );
}
```
</example>

## Common examples

### Mobile carousel

In designs like this, ensure to assign a `minWidth` value to prevent the Aspect Ratio component from shrinking.

<example name="CarouselRatio">
```tsx file="CarouselRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

export default function CarouselRatio() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 343,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
          <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
```
</example>

### List stack

This is a simple illustration of how to use Aspect Ratio with list components:

<example name="ListStackRatio">
```tsx file="ListStackRatio.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

export default function ListStackRatio() {
  return (
    <Card variant="outlined" sx={{ width: 300, p: 0 }}>
      <List sx={{ py: 'var(--ListDivider-gap)' }}>
        {data.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItem>
              <ListItemButton sx={{ gap: 2 }}>
                <AspectRatio sx={{ flexBasis: 120 }}>
                  <img
                    srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.src}?w=120&fit=crop&auto=format`}
                    alt={item.title}
                  />
                </AspectRatio>
                <ListItemContent>
                  <Typography sx={{ fontWeight: 'md' }}>{item.title}</Typography>
                  <Typography level="body-sm">{item.description}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {index !== data.length - 1 && <ListDivider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}
```
</example>

## Anatomy

The Aspect Ratio component is composed of a root `<div>` with a content `<div>` nested inside; the child component is given a `data-first-child` attribute for styling purposes:

```html
<div class="MuiAspectRatio-root">
  <div class="MuiAspectRatio-content">
    <some-element data-first-child>
      <!-- Aspect Ratio contents -->
    </some-element>
  </div>
</div>
```
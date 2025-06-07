---
productId: joy-ui
title: React Card component
components: Card, CardActions, CardContent, CardCover, CardOverflow
githubLabel: 'component: card'
---

# Card

A card is a generic container for grouping related UI elements and content.

## Introduction

The Joy UI Card component includes several complementary utility components to handle various use cases:

- [Card](#basics): a surface-level container for grouping related components.
- [Card Overflow](#expand-to-fill): a supplemental wrapper that expands a Card's contents to fill all edges.
- [Card Cover](#card-layers): an optional container for displaying background images and gradient layers behind the Card Content.
- [Card Content](#card-layers): an optional wrapper that brings content to the front (commonly but not always used with the Card Cover).
- [Card Actions](#actions): an optional wrapper that groups a set of buttons.

<example name="CardUsage">
```jsx file="CardUsage.js"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { CardActions, CardContent } from '@mui/joy';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function CardUsage() {
  return (
    <JoyUsageDemo
      componentName="Card"
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
          propName: 'orientation',
          knob: 'radio',
          defaultValue: 'vertical',
          options: ['vertical', 'horizontal'],
        },
        { propName: 'invertedColors', knob: 'switch' },
      ]}
      renderDemo={(props) => (
        <Card {...props} sx={{ m: 1, mb: 4, maxWidth: 350 }}>
          <AspectRatio ratio="16/9">
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Typography level="body-xs">NATIONAL PARK</Typography>
            <Typography
              level="title-lg"
              component="div"
              sx={{ textWrap: 'balance' }}
            >
              Yosemite - Your Next Adventure
            </Typography>
            <Typography>
              {"Yosemite National Park is in California's Sierra Nevada mountains."}
            </Typography>
            <CardActions>
              <Button fullWidth variant="outlined" size="sm">
                Add to list
              </Button>
              <Button fullWidth size="sm">
                Explore
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Card from '@mui/joy/Card';
```

Card is a surface-level container for grouping related components.
The demo below shows a typical Card that groups together Typography, Aspect Ratio, and Button components, among others:

<example name="BasicCard">
```tsx file="BasicCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function BasicCard() {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">Yosemite National Park</Typography>
        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>$2,900</Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
```
</example>

## Customization

### Variants

The Card component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `plain`, `outlined` (default), `soft`, and `solid`.

<example name="CardVariants">
```tsx file="CardVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function CardVariants() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 2,
      }}
    >
      <Card variant="plain">
        <CardContent>
          <Typography level="title-md">Plain card</Typography>
          <Typography>Description of the card.</Typography>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">Outlined card (default)</Typography>
          <Typography>Description of the card.</Typography>
        </CardContent>
      </Card>

      <Card variant="soft">
        <CardContent>
          <Typography level="title-md">Soft card</Typography>
          <Typography>Description of the card.</Typography>
        </CardContent>
      </Card>

      <Card variant="solid">
        <CardContent>
          <Typography level="title-md" textColor="inherit">
            Solid card
          </Typography>
          <Typography textColor="inherit">Description of the card.</Typography>
        </CardContent>
      </Card>
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

The Card component comes in three sizes: `sm`, `md` (default), and `lg`.

Each size has different padding, gap, and font size values.

<example name="CardSizes">
```tsx file="CardSizes.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';

export default function CardSizes() {
  return (
    <Stack spacing={1}>
      <Card size="sm">Small card</Card>
      <Card>Medium card (default)</Card>
      <Card size="lg">Large card</Card>
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

<example name="CardColors">
```tsx file="CardColors.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import { VariantProp, ColorPaletteProp } from '@mui/joy/styles';

export default function CardColors() {
  const [variant, setVariant] = React.useState<VariantProp>('plain');
  const [color, setColor] = React.useState<ColorPaletteProp>('neutral');
  return (
    <Stack spacing={2}>
      <Card variant={variant} color={color} sx={{ minWidth: 343 }}>
        <Typography
          level="title-md"
          textColor="inherit"
          sx={{ textTransform: 'capitalize' }}
        >
          {color} {variant} card
        </Typography>
      </Card>
      <FormControl>
        <FormLabel>Variant</FormLabel>
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            onClick={() => setVariant('plain')}
          >
            plain
          </Button>
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            onClick={() => setVariant('outlined')}
          >
            outlined
          </Button>
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            onClick={() => setVariant('soft')}
          >
            soft
          </Button>
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            onClick={() => setVariant('solid')}
          >
            solid
          </Button>
        </Box>
      </FormControl>
      <FormControl>
        <FormLabel>Color</FormLabel>
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          <Button
            size="sm"
            variant="soft"
            color="primary"
            onClick={() => setColor('primary')}
          >
            primary
          </Button>
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            onClick={() => setColor('neutral')}
          >
            neutral
          </Button>
          <Button
            size="sm"
            variant="soft"
            color="danger"
            onClick={() => setColor('danger')}
          >
            danger
          </Button>
          <Button
            size="sm"
            variant="soft"
            color="success"
            onClick={() => setColor('success')}
          >
            success
          </Button>
          <Button
            size="sm"
            variant="soft"
            color="warning"
            onClick={() => setColor('warning')}
          >
            warning
          </Button>
        </Box>
      </FormControl>
    </Stack>
  );
}
```
</example>

### Inverted colors

When the Card's variant is `soft` or `solid`, you can use the `invertedColors={true}` prop to invert the colors of the children to have enough contrast.

To learn more about this, check out [Color Inversion](https://mui.com/joy-ui/main-features/color-inversion/) feature.

<example name="CardInvertedColors">
```tsx file="CardInvertedColors.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';

export default function CardInvertedColors() {
  return (
    <Card variant="solid" color="primary" invertedColors>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" determinate value={20}>
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
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </SvgIcon>
        </CircularProgress>
        <CardContent>
          <Typography level="body-md">Gross profit</Typography>
          <Typography level="h2">$ 432.6M</Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button variant="soft" size="sm">
          Add to Watchlist
        </Button>
        <Button variant="solid" size="sm">
          See breakdown
        </Button>
      </CardActions>
    </Card>
  );
}
```
</example>

### Expand to fill

```jsx
import CardOverflow from '@mui/joy/CardOverflow';
```

By default, the Card component adds padding around the outer edges of its contents.
To eliminate this white space, add the Card Overflow component inside the Card as a wrapper around the content to be expanded.

<example name="OverflowCard">
```tsx file="OverflowCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function OverflowCard() {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">Yosemite National Park</Typography>
        <Typography level="body-sm">California</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            6.3k views
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
```
</example>

### Card layers

```jsx
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
```

The default Card provides a single flat surface for other components to sit on top of.
Use the Card Cover and Card Content components to expose multiple layers between a Card and the UI elements on its surface.

Card Cover makes it possible to add images, videos, and color and gradient overlays underneath the Card Content.
Hover your mouse on the demo below to see how the layers are stacked:

<example name="CardLayers3d">
```tsx file="CardLayers3d.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function CardLayers3d() {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '280px',
          width: 320,
          backgroundColor: '#fff',
          borderColor: '#000',
        }}
      >
        <Typography level="h2" textColor="#000" sx={{ fontSize: 'lg' }}>
          Card
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#777',
            backdropFilter: 'blur(1px)',
          }}
        >
          <Typography level="h2" textColor="#fff" sx={{ fontSize: 'lg' }}>
            Card Cover
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            border: '1px solid',
            borderColor: '#000',
            backdropFilter: 'blur(1px)',
          }}
        >
          <Typography level="h2" textColor="#fff" sx={{ fontSize: 'lg', m: 2 }}>
            Card Content
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
```
</example>

#### Images and videos

Use an image or a video element inside the Card Cover to display media.
The component uses [`object-fit: cover`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) to fill the whole Card by default.

<example name="MediaCover">
```tsx file="MediaCover.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MediaCover() {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            textColor="#fff"
            sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            textColor="#fff"
            sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
```
</example>

#### Gradient overlay

To create a gradient overlay—frequently seen when a bright image is used as a background—insert an additional Card Cover component between the image layer and the content layer.
You can add any number of Card Covers to create more sophisticated stacked layers this way.

<example name="GradientCover">
```tsx file="GradientCover.tsx"
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

export default function GradientCover() {
  return (
    <Card sx={{ minHeight: '280px', width: 320 }}>
      <CardCover>
        <img
          src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          Yosemite National Park
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          California, USA
        </Typography>
      </CardContent>
    </Card>
  );
}
```
</example>

### Horizontal alignment

Card contents are arranged in a column by default.
For horizontal alignment, add the `orientation="horizontal"` prop to the Card.
If present, the [Card Overflow](#expand-to-fill) component will adapt accordingly.

<example name="RowCard">
```tsx file="RowCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function RowCard() {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
          Yosemite Park
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
  );
}
```
</example>

### Actions

Cards often include actions that users can take, like proceeding to a new page or section of the app.
There may be individual (discrete) actions _within_ a given card, or _the entire card itself_ may trigger an action when clicked or tapped.

The following sections explain how to approach each of these scenarios.

#### Bottom actions

Cards often include buttons at the bottom section. Use `CardActions` component as a wrapper of those buttons to create proper spacing around them.

The demo below also use `buttonFlex` prop to set the ideal width of the buttons to `120px` while allowing them to shrink if necessary. To learn more about CSS flex, visit [MDN's guide](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

<example name="BottomActionsCard">
```tsx file="BottomActionsCard.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function BottomActionsCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        // to make the card resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" size="lg" />
        <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
          <Avatar src="/static/images/avatar/2.jpg" />
          <Avatar src="/static/images/avatar/3.jpg" />
          <Avatar src="/static/images/avatar/4.jpg" />
          <Avatar>+4K</Avatar>
        </AvatarGroup>
      </Box>
      <CardContent>
        <Typography level="title-lg">NYC Coders</Typography>
        <Typography level="body-sm">
          We are a community of developers prepping for coding interviews,
          participate, chat with others and get better at interviewing.
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
          <FavoriteBorder />
        </IconButton>
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
```
</example>

#### Discrete actions

By default, action elements like links and buttons sit above the surface-level interactive area of the Card.
In some cases, you might have to adjust the z-index to bring these elements to the front—for instance, the Favorite Icon Button in the demo below needs a higher z-index in order to sit on top of its Aspect Ratio sibling:

<example name="MultipleInteractionCard">
```tsx file="MultipleInteractionCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';

export default function MultipleInteractionCard() {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none">
            Yosemite National Park
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">California</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">6.3k views</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">1 hour ago</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
```
</example>

:::success
You can use the CSS pseudo-class [`:focus-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) to apply styles to the Card when any of its children receive focus.
:::

#### Whole Card actions

To make the entire Card clickable, add a [Link](https://mui.com/joy-ui/react-link/) component to the title (or some other important text content) inside the Card.
Then add the `overlay` prop to the Link to spread it across the Card as a whole.

:::info
This approach helps to ensure proper keyboard navigation support by applying `focus-visible` styles to the Card itself.
Learn more about this and other best practices for accessible cards in the [Inclusive Components blog](https://inclusive-components.design/cards/).
:::

<example name="InteractiveCard">
```tsx file="InteractiveCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function InteractiveCard() {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg" id="card-description">
          Yosemite Park
        </Typography>
        <Typography
          level="body-sm"
          aria-describedby="card-description"
          sx={{ mb: 1 }}
        >
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            California, USA
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          Cool weather all day long
        </Chip>
      </CardContent>
    </Card>
  );
}
```
</example>

## CSS variables playground

Play around with the CSS variables available to the Card component to see how the design changes.
You can use these to customize the component with both the `sx` prop and the theme.

<example name="CardVariables">
```jsx file="CardVariables.js"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function CardVariables() {
  return (
    <JoyVariablesDemo
      componentName="Card"
      data={[
        {
          var: '--Card-padding',
          defaultValue: '16px',
          type: 'number',
        },
        {
          var: '--Card-radius',
          defaultValue: '12px',
          type: 'number',
        },
      ]}
      renderDemo={(sx) => (
        <Card variant="outlined" sx={{ maxWidth: 240, boxShadow: 'none', ...sx }}>
          <CardContent>
            <Typography sx={{ fontWeight: 'lg' }}>Card title</Typography>
            <Typography level="body-sm">An interesting description.</Typography>
          </CardContent>
          <CardActions buttonFlex="1">
            <Button variant="solid" color="primary" size="sm">
              Buy
            </Button>
            <IconButton variant="outlined" color="neutral" size="sm">
              <BookmarkBorderIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    />
  );
}
```
</example>

:::success
If you need to adjust a Card's padding or border radius, it's preferable to do so using these variables rather than plain CSS properties.
This is because the variables are also used to calculate a proper radius for the Card's children, to prevent a mismatch between their relative proportions.
:::

## Common examples

### Nested cards

<example name="NestedCard">
```tsx file="NestedCard.tsx"
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BallotIcon from '@mui/icons-material/Ballot';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { AspectRatio } from '@mui/joy';

export default function NestedCard() {
  return (
    <Card sx={{ borderRadius: 0, width: 300, maxWidth: '100%' }}>
      <CardContent>
        <Typography level="body-xs">IN DESIGN</Typography>
        <Typography level="title-lg">AFSL Web App</Typography>
      </CardContent>
      <Card
        orientation="horizontal"
        size="sm"
        sx={{ bgcolor: 'background.surface', borderRadius: 0, mb: 1 }}
      >
        <CardOverflow>
          <AspectRatio
            ratio="1"
            sx={{ minWidth: 70, '& img[data-first-child]': { p: 1.5 } }}
          >
            <img
              src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=70"
              srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=70&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">Sub project</Typography>
          <Typography level="body-sm">Next review in 17 days</Typography>
        </CardContent>
      </Card>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          justifyContent: 'space-around',
          py: 1,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography startDecorator={<BallotIcon color="danger" />} level="title-sm">
          13
        </Typography>
        <Divider orientation="vertical" />
        <Typography startDecorator={<CommentOutlinedIcon />} level="title-sm">
          9
        </Typography>
        <Divider orientation="vertical" />
        <Typography startDecorator={<InboxOutlinedIcon />} level="title-sm">
          32
        </Typography>
      </CardOverflow>
    </Card>
  );
}
```
</example>

### Bio card

<example name="BioCard">
```tsx file="BioCard.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';

export default function BioCard() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          PRO
        </Chip>
        <Typography level="title-lg">Josephine Blanton</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
          love to code.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
        >
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
                />
                <path
                  fill="currentColor"
                  d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351a9.757 9.757 0 0 1-.92.87a13.156 13.156 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003c.027.061.05.118.094.229l.017.04c1.513-.17 3.109-.107 4.656.103c.206.027.4.056.584.087Zm-9.385-7.45a46.15 46.15 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767c.33-.274.594-.532.796-.755A7.968 7.968 0 0 0 12 4c-.476 0-.942.042-1.396.121ZM4.253 9.997a29.21 29.21 0 0 0 2.04-.123a31.53 31.53 0 0 0 4.862-.822a54.36 54.36 0 0 0-2.7-4.227a8.018 8.018 0 0 0-4.202 5.172Zm1.53 7.038a14.21 14.21 0 0 1 1.575-1.899c1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995c-1.836.535-3.77.869-5.697 1.042c-.94.085-1.783.122-2.403.128a7.966 7.966 0 0 0 1.784 5.032Zm9.221 2.38a35.951 35.951 0 0 0-1.632-5.709c-2 .727-3.596 1.79-4.829 3.058a9.77 9.77 0 0 0-1.317 1.655A7.964 7.964 0 0 0 12 20a7.977 7.977 0 0 0 3.005-.583Zm1.874-1.075a7.998 7.998 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12.025 12.025 0 0 0-3.18-.033a39.39 39.39 0 0 1 1.438 5.14ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
        </Box>
      </CardContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button>Message</Button>
            <Button>Connect</Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
```
</example>

### Credit card form

<example name="CreditCardForm">
```tsx file="CreditCardForm.tsx"
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function CreditCardForm() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '100%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Add new card
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card number</FormLabel>
          <Input endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <Input endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input endDecorator={<InfoOutlined />} />
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card holder name</FormLabel>
          <Input placeholder="Enter cardholder's full name" />
        </FormControl>
        <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" color="primary">
            Add card
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
```
</example>

### Congratulations card

<example name="CongratCard">
```tsx file="CongratCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

export default function CongratCard() {
  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        '--icon-size': '100px',
      }}
    >
      <CardOverflow variant="solid" color="warning">
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            <BakeryDiningIcon color="warning" sx={{ fontSize: '4rem' }} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
        🎊 Congrats Julia 🎊
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
        You just gain one Cookhat for Salad cooking. Share your achievement with your
        friends.
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
        }}
      >
        <Button variant="solid" color="warning">
          Share
        </Button>
        <Button variant="plain" color="neutral">
          Skip
        </Button>
      </CardActions>
    </Card>
  );
}
```
</example>

### FAQ card

<example name="FAQCard">
```tsx file="FAQCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function FAQCard() {
  return (
    <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: 'center',
        maxWidth: '100%',
        width: 500,
        // to make the demo resizable
        resize: 'horizontal',
        overflow: 'auto',
      }}
    >
      <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          flex: '0 0 200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 'var(--Card-padding)',
        }}
      >
        <Typography textColor="#fff" sx={{ fontSize: 'xl4', fontWeight: 'xl' }}>
          89
        </Typography>
        <Typography textColor="primary.200">
          FAQs answered, see if yours is one of them.
        </Typography>
      </CardOverflow>
      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
        <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
          <img
            alt=""
            src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
          />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg">Need Some Help?</Typography>
          <Typography sx={{ fontSize: 'sm', mt: 0.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor.
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            '--variant-borderWidth': '2px',
            borderRadius: 40,
            borderColor: 'primary.500',
            mx: 'auto',
          }}
        >
          See FAQ
        </Button>
      </CardContent>
    </Card>
  );
}
```
</example>

### License card

<example name="LicenseCard">
```tsx file="LicenseCard.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function LicenseCard() {
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        boxShadow: 'lg',
        width: 400,
        maxWidth: '100%',
        // to make the demo resizeable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Chip size="sm" variant="soft">
          Sketch 55+
        </Chip>
        <Chip size="sm" variant="soft">
          Figma
        </Chip>
      </Box>
      <div>
        <Typography level="h2">
          $58{' '}
          <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
            /month
          </Typography>
        </Typography>
      </div>
      <CardContent>
        <Typography level="title-lg">Individual License</Typography>
        <Typography level="body-md">
          This license allows you to use the Symbol System Design with unlimited
          amount of personal and commercial projects.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="solid">Purchase Now</Button>
      </CardActions>
    </Card>
  );
}
```
</example>

### Pricing card

<example name="PricingCards">
```tsx file="PricingCards.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function PricingCards() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: 2,
      }}
    >
      <Card size="lg" variant="outlined">
        <Chip size="sm" variant="outlined" color="neutral">
          BASIC
        </Chip>
        <Typography level="h2">Professional</Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Virtual Credit Cards
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Financial Analytics
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Checking Account
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            API Integration
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }}>
            3.990€{' '}
            <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
              / month
            </Typography>
          </Typography>
          <Button
            variant="soft"
            color="neutral"
            endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button>
        </CardActions>
      </Card>
      <Card
        size="lg"
        variant="solid"
        color="neutral"
        invertedColors
        sx={{ bgcolor: 'neutral.900' }}
      >
        <Chip size="sm" variant="outlined">
          MOST POPULAR
        </Chip>
        <Typography level="h2">Unlimited</Typography>
        <Divider inset="none" />
        <List
          size="sm"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            mx: 'calc(-1 * var(--ListItem-paddingX))',
          }}
        >
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Virtual Credit Cards
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Financial Analytics
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Checking Account
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            API Integration
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Cancel Anytime
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }}>
            5.990€{' '}
            <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
              / month
            </Typography>
          </Typography>
          <Button endDecorator={<KeyboardArrowRight />}>Start now</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
```
</example>

### Product card

This example demonstrates the automatic adjustment when a button is placed as a only child of a [CardOverflow](#expand-to-fill) component. The button will be stretched to fill the entire area of the CardOverflow and the bottom corner radius is also adjusted.

<example name="ProductCard">
```tsx file="ProductCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProductCard() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">Bluetooth Headset</Typography>
        <Link
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: 'md' }}
        >
          Super Rockez A400
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          2,900 THB
        </Typography>
        <Typography level="body-sm">
          (Only <b>7</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
```
</example>

### User card

Combining CSS min-width with clamp, a [horizontal card](#horizontal-alignment) can be stacked when it reaches a certain width or below.

The example below shows a user card that stacks when the card's width is equal or below 500px. The drag handle is at the bottom right corner of the card.

<example name="UserCard">
```tsx file="UserCard.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function UserCard() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          bgcolor: 'warning.300',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            content: '"vertical"',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            content: '"horizontal"',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography sx={{ fontSize: 'xl', fontWeight: 'lg' }}>
            Alex Morrison
          </Typography>
          <Typography
            level="body-sm"
            textColor="text.tertiary"
            sx={{ fontWeight: 'lg' }}
          >
            Senior Journalist
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                Articles
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }}>34</Typography>
            </div>
            <div>
              <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                Followers
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }}>980</Typography>
            </div>
            <div>
              <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                Rating
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }}>8.9</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
```
</example>

:::info
Alternatively, you can use [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) to achieve the similar result.
You should check the [browser support](https://caniuse.com/css-container-queries) before using CSS Container Queries.
:::

### Instagram post

<example name="InstagramPost">
```tsx file="InstagramPost.tsx"
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

export default function InstagramPost() {
  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 300, '--Card-radius': (theme) => theme.vars.radius.xs }}
    >
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: '-2px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
            },
          }}
        >
          <Avatar
            size="sm"
            src="/static/logo.png"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
          />
        </Box>
        <Typography sx={{ fontWeight: 'lg' }}>MUI</Typography>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
          <MoreHoriz />
        </IconButton>
      </CardContent>
      <CardOverflow>
        <AspectRatio>
          <img src="/static/images/cards/yosemite.jpeg" alt="" loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <FavoriteBorder />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              sx={[
                {
                  borderRadius: '50%',
                  width: `max(${6 - index}px, 3px)`,
                  height: `max(${6 - index}px, 3px)`,
                },
                index === 0
                  ? { bgcolor: 'primary.solidBg' }
                  : { bgcolor: 'background.level3' },
              ]}
            />
          ))}
        </Box>
        <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardContent>
        <Link
          component="button"
          underline="none"
          textColor="text.primary"
          sx={{ fontSize: 'sm', fontWeight: 'lg' }}
        >
          8.1M Likes
        </Link>
        <Typography sx={{ fontSize: 'sm' }}>
          <Link
            component="button"
            color="neutral"
            textColor="text.primary"
            sx={{ fontWeight: 'lg' }}
          >
            MUI
          </Link>{' '}
          The React component library you always wanted
        </Typography>
        <Link
          component="button"
          underline="none"
          startDecorator="…"
          sx={{ fontSize: 'sm', color: 'text.tertiary' }}
        >
          more
        </Link>
        <Link
          component="button"
          underline="none"
          sx={{ fontSize: '10px', color: 'text.tertiary', my: 0.5 }}
        >
          2 DAYS AGO
        </Link>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          sx={{ flex: 1, px: 0, '--Input-focusedThickness': '0px' }}
        />
        <Link disabled underline="none" role="button">
          Post
        </Link>
      </CardContent>
    </Card>
  );
}
```
</example>

### Dribbble shot

<example name="DribbbleShot">
```tsx file="DribbbleShot.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';

export default function DribbbleShot() {
  return (
    <Card variant="plain" sx={{ width: 300, bgcolor: 'initial', p: 0 }}>
      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="4/3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
              srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
              loading="lazy"
              alt="Yosemite by Casey Horner"
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            opacity: 0,
            transition: '0.1s ease-in',
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <div>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                <Link
                  href="#dribbble-shot"
                  overlay
                  underline="none"
                  sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  Yosemite
                </Link>
              </Typography>
              <IconButton
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
              >
                <CreateNewFolder />
              </IconButton>
              <IconButton
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}
              >
                <Favorite />
              </IconButton>
            </Box>
          </div>
        </CardCover>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
          size="sm"
          sx={{ '--Avatar-size': '1.5rem' }}
        />
        <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
          National Park
        </Typography>
        <Chip
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{ borderRadius: 'sm', py: 0.25, px: 0.5 }}
        >
          Featured
        </Chip>
        <Link
          href="#dribbble-shot"
          level="body-xs"
          underline="none"
          startDecorator={<Favorite />}
          sx={{
            fontWeight: 'md',
            ml: 'auto',
            color: 'text.secondary',
            '&:hover': { color: 'danger.plainColor' },
          }}
        >
          117
        </Link>
        <Link
          href="#dribbble-shot"
          level="body-xs"
          underline="none"
          startDecorator={<Visibility />}
          sx={{
            fontWeight: 'md',
            color: 'text.secondary',
            '&:hover': { color: 'primary.plainColor' },
          }}
        >
          10.4k
        </Link>
      </Box>
    </Card>
  );
}
```
</example>

### Resizable container

This demo uses a technique similar to Heydon Pickering's [Flexbox Holy Albatross](https://heydonworks.com/article/the-flexbox-holy-albatross/) to create a stretchable Card that switches between vertical and horizontal alignment when its width passes a specified threshold—without using media queries to define breakpoints.
Try resizing it by clicking and dragging the bottom-right corner to see how it behaves.

<example name="ContainerResponsive">
```tsx file="ContainerResponsive.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

export default function ContainerResponsive() {
  return (
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          overflow: 'hidden',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: 'translateY(-2px)',
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })}
      >
        <AspectRatio
          variant="soft"
          sx={{
            flexGrow: 1,
            display: 'contents',
            '--AspectRatio-paddingBottom':
              'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 200 }}
        >
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography level="title-lg">
                <Link
                  href="#container-responsive"
                  overlay
                  underline="none"
                  sx={{
                    color: 'text.primary',
                    '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                  }}
                >
                  Yosemite National Park
                </Link>
              </Typography>
              <Typography level="body-sm">California, USA</Typography>
            </div>
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              sx={{ ml: 'auto', alignSelf: 'flex-start' }}
            >
              <FavoriteBorderRoundedIcon color="danger" />
            </IconButton>
          </Box>
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2262"
            />
          </AspectRatio>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar variant="soft" color="neutral">
              Y
            </Avatar>
            <div>
              <Typography level="body-xs">Designed by</Typography>
              <Typography level="body-sm">Nature itself</Typography>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
```
</example>

## Anatomy

The Card component and all of its supplementary components are composed of a single root `<div>`:

```html
<div class="MuiCard-root">
  <div class="MuiCardCover-root">
    <!-- optional Card Cover layer -->
  </div>
  <div class="MuiCardContent-root">
    <!-- optional Card Content layer -->
  </div>
  <div class="MuiCardOverflow-root">
    <!-- optional Card Overflow utility -->
  </div>
  <div class="MuiCardActions-root">
    <!-- optional Card Actions layer -->
  </div>
</div>
```
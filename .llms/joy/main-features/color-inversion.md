# Color inversion

Joy UI components can invert their colors to match with the parent's variant.

## Motivation

The Joy UI [global variants feature](https://mui.com/joy-ui/main-features/global-variants/) provides a consistent set of values for the `variant` prop.
But these variants can sometimes cause quirks when the same styles are applied to both parent and child components.
Check out the two demo cards below to see how things can go wrong:

<example name="ColorInversionMotivation">
```tsx file="ColorInversionMotivation.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ColorInversionMotivation() {
  const demo = (
    <Card sx={{ gap: 2, maxWidth: { xs: '100%', sm: 300 } }}>
      <Chip
        size="sm"
        variant="soft"
        sx={{ alignSelf: 'flex-start', borderRadius: 'xl' }}
      >
        New
      </Chip>
      <IconButton
        variant="outlined"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}
      >
        <BookmarkOutlinedIcon />
      </IconButton>
      <Typography level="title-lg" sx={{ fontWeight: 'lg' }}>
        Learn how to build super fast websites.
      </Typography>
      <Button variant="solid" endDecorator={<KeyboardArrowRightIcon />}>
        Read more
      </Button>
    </Card>
  );
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {/* Left: The global variants are applied to children only */}
      <Box sx={{ maxWidth: { xs: '100%', sm: 300 } }}>
        {demo}
        <Typography level="body-sm" sx={{ mt: 2, textAlign: 'center' }}>
          <b>One layer</b>
          <br />
          Global variants are applied only to the children.
        </Typography>
      </Box>
      {/* Right: The global variants are applied to both parent and children */}
      <Box sx={{ maxWidth: { xs: '100%', sm: 300 } }}>
        {React.cloneElement(demo, {
          variant: 'solid',
          color: 'primary',
        })}
        <Typography level="body-sm" sx={{ mt: 2, textAlign: 'center' }}>
          <b>Two layers</b>
          <br />
          Global variants are applied to the card <i>and</i> children.
        </Typography>
      </Box>
    </Box>
  );
}
```
</example>

- On the left, the Button variant is `solid`, while its parent Card is the default `outlined`, so the design works well.
- On the right, the `solid` variant is applied to both the Button and the Card, disrupting the design's hierarchy and contrast.

Joy UI's color inversion feature prevents this kind of situation from occurring, while still preserving the hierarchical meaning of the global variants themselves.

## Overview

When color inversion is enabled on a parent component, all children components invert their styles (regardless of their respective color props) to match the parent's background.
The inverted styles maintain the semantic meaning of their corresponding global variants—in the example below, the Button is still `solid` even though it's been inverted to contrast with its container.
If you change the Button's variant to `outlined`, you'll see that the design still works; but try removing the `invertedColors` prop from the parent Card, and you'll see how the design falls apart (and thus, why this feature is so useful):

<example name="ColorInversionOverview">
```tsx file="ColorInversionOverview.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ColorInversionOverview() {
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{ gap: 2, maxWidth: 300, boxShadow: 'md' }}
    >
      <Chip
        size="sm"
        variant="soft"
        sx={{ alignSelf: 'flex-start', borderRadius: 'xl' }}
      >
        New
      </Chip>
      <IconButton
        variant="outlined"
        size="sm"
        sx={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}
      >
        <BookmarkOutlinedIcon />
      </IconButton>
      <Typography level="h3">Learn how to build super fast websites.</Typography>
      <Button variant="solid" endDecorator={<KeyboardArrowRightIcon />}>
        Read more
      </Button>
    </Card>
  );
}
```
</example>

:::info
The color inversion feature is only available for `soft` and `solid` variants because the rest of the global variants don't have background by default.
:::

### Benefits

- Color inversion reduces a significant amount of styling effort. It handles all of the visual states (hover, active, and focus) on all the children.
- It makes your interface scalable. New components added to the area will just work.
- It works for both client-side and server-side rendering.
- It works for both light and dark mode.
- It can be disabled at any time without impacting the structure of the components.
- It is an opt-in feature. If you don't use it, the extra CSS variables won't be included in the production style sheet.
- Some children can be excluded from the color inversion, see ["skip color inversion on a child"](#skip-inversion-on-a-child) section.

### Trade-offs

- If the parent component contains just a few children, the size of the stylesheet generated may be significantly larger than it would be if you customized each child individually. (This may be inconsequential for overall performance.)
- It doesn't work with browsers that don't support [CSS variables](https://caniuse.com/css-variables).

## Usage

### Supported components

The following components accept the `invertedColors` prop when applied in conjunction with the `solid` or `soft` variants:

- [Alert](https://mui.com/joy-ui/react-alert/)
- [Card](https://mui.com/joy-ui/react-card/)
- [Drawer](https://mui.com/joy-ui/react-drawer/)
- [Modal Dialog](https://mui.com/joy-ui/react-modal/#modal-dialog)
- [Menu](https://mui.com/joy-ui/react-menu/)
- [Sheet](https://mui.com/joy-ui/react-sheet/)

<example name="ColorInversionSurface">
```tsx file="ColorInversionSurface.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';

export default function ColorInversionSurface() {
  const creditCard = (
    <Card
      size="lg"
      variant="solid"
      color="warning"
      invertedColors
      sx={{
        gap: 2,
        minWidth: 300,
        boxShadow: 'md',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <CardContent orientation="horizontal">
        <div>
          <Typography level="title-lg">$4,236</Typography>
          <Typography sx={{ fontSize: 'xs', fontFamily: 'code' }}>CREDIT</Typography>
        </div>
        <SvgIcon sx={{ ml: 'auto' }}>
          <svg
            width="50"
            height="39"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
              fill="currentColor"
            />
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              fill="#312ECB"
            />
          </svg>
        </SvgIcon>
      </CardContent>
      <Typography level="title-lg" sx={{ fontFamily: 'code' }}>
        •••• •••• •••• 1212
      </Typography>
      <CardContent orientation="horizontal" sx={{ justifyContent: 'space-between' }}>
        <div>
          <Typography sx={{ fontSize: 'xs', fontFamily: 'code' }}>
            CARD NAME
          </Typography>
          <Typography level="title-sm" sx={{ fontSize: 'sm' }}>
            JOHN DOE
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontSize: 'xs', textAlign: 'right', fontFamily: 'code' }}
          >
            EXPIRE
          </Typography>
          <Typography level="title-sm" sx={{ fontSize: 'sm', textAlign: 'right' }}>
            07/25
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
  return (
    <Box
      sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}
    >
      {creditCard}
      {React.cloneElement(creditCard, { variant: 'soft' })}
    </Box>
  );
}
```
</example>

### Exceptions

Color inversion does not affect the popup slot of the Autocomplete, Menu, or Tooltip components by default.
To enable it, set `disablePortal` to `"true"` using `slotProps` on the respective child component, as demonstrated below:

<example name="ColorInversionPopup">
```tsx file="ColorInversionPopup.tsx"
import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Autocomplete from '@mui/joy/Autocomplete';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Tooltip from '@mui/joy/Tooltip';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PaletteIcon from '@mui/icons-material/Palette';

// disable flip for this demo
// https://popper.js.org/docs/v2/modifiers/flip/
const modifiers = [
  {
    name: 'flip',
    options: {
      fallbackPlacements: ['bottom'],
    },
  },
];

export default function ColorInversionPopup() {
  const [color, setColor] = React.useState<ColorPaletteProp>('danger');
  const [menuButton, setMenuButton] = React.useState<HTMLElement | null>(null);
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Button
        variant="outlined"
        startDecorator={<PaletteIcon />}
        onClick={() => {
          const colors: ColorPaletteProp[] = [
            'primary',
            'neutral',
            'danger',
            'success',
            'warning',
          ];
          const nextColorIndex = colors.indexOf(color) + 1;
          setColor(colors[nextColorIndex] ?? colors[0]);
        }}
      >
        Change the color
      </Button>
      <Card
        orientation="horizontal"
        variant="solid"
        color={color}
        invertedColors
        sx={{
          minHeight: 240,
          zIndex: 0,
          p: 4,
          width: '100%',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexGrow: 1,
          gap: 6,
          borderRadius: 'sm',
        }}
      >
        <Autocomplete
          open
          placeholder="Combobox"
          options={films}
          sx={{ width: { xs: '100%', sm: 240 } }}
          slotProps={{
            listbox: { disablePortal: true, modifiers, sx: { maxHeight: 140 } },
          }}
        />
        <Button
          variant="soft"
          endDecorator={<KeyboardArrowDownIcon />}
          onClick={(event) => setMenuButton(event.currentTarget)}
        >
          Actions
        </Button>
        <Menu
          disablePortal
          modifiers={modifiers}
          anchorEl={menuButton}
          open={!!menuButton}
          onClose={() => setMenuButton(null)}
        >
          <MenuItem>New tab</MenuItem>
          <MenuItem>New window</MenuItem>
          <ListDivider />
          <MenuItem>Delete</MenuItem>
        </Menu>
        <Tooltip
          open
          variant="solid"
          title="Bookmark"
          disablePortal
          modifiers={modifiers}
        >
          <IconButton>
            <BookmarkOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Card>
    </Box>
  );
}

const films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
];
```
</example>

:::info
To learn more about the concept of component slots and slot props, visit the [Overriding component structure](https://mui.com/joy-ui/customization/overriding-component-structure/) guide.
:::

### Skip inversion on a child

When `invertedColors` is applied to a parent, you can add the `data-skip-inverted-colors` attribute to a child to prevent that child from being inverted.

<example name="ColorInversionSkip">
```tsx file="ColorInversionSkip.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import SvgIcon from '@mui/joy/SvgIcon';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';

export default function ColorInversionSkip() {
  return (
    <Card
      size="lg"
      variant="solid"
      color="neutral"
      invertedColors
      sx={{ maxWidth: 300, boxShadow: 'lg', borderRadius: 'xl' }}
    >
      <AspectRatio
        data-skip-inverted-colors
        variant="soft"
        color="success"
        ratio="1"
        sx={{ width: 48 }}
      >
        <div>
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <path d="M12 8v13" />
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
            </svg>
          </SvgIcon>
        </div>
      </AspectRatio>

      <Typography level="h3">Design Thinking</Typography>
      <Typography level="body-sm">
        How to apply design thinking to your problem in order to generate innovative
        and user-centric solutions.
      </Typography>

      <IconButton
        variant="plain"
        size="lg"
        sx={{ alignSelf: 'flex-end', borderRadius: '50%', mr: -1, my: -1 }}
      >
        <ArrowForward />
      </IconButton>
    </Card>
  );
}
```
</example>

### Apply color inversion to any parent

```js
import { applySolidInversion, applySoftInversion } from '@mui/joy/colorInversion';
```

If you need color inversion for a parent component that isn't [supported by default](#supported-components), you can use the `applySolidInversion` or `applySoftInversion` utilities to add it to any component that contains children.
(This is what the supported components use behind the scenes when the `invertedColors` prop is applied.)

The examples below show how to use these utilities with both the `sx` prop and the `styled` API:

#### With the sx prop

```jsx
<Box sx={[{ ...baseStyles }, applySolidInversion('neutral')]}>...</Box>
```

<example name="ColorInversionAnyParent">
```tsx file="ColorInversionAnyParent.tsx"
import * as React from 'react';
import { applySolidInversion } from '@mui/joy/colorInversion';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';

function Stat({
  description,
  value,
}: {
  description: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <Box sx={{ borderLeft: 3, borderColor: 'divider', px: 2, py: 0.5 }}>
      <Typography level="h3" component="div">
        {value}
      </Typography>
      <Typography level="title-sm" textColor="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}
export default function ColorInversionAnyParent() {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          alignItems: 'center',
          rowGap: 2,
          columnGap: 8,
          p: 4,
          borderRadius: 'sm',
          background: `linear-gradient(45deg, ${theme.vars.palette.neutral[800]}, ${theme.vars.palette.neutral[600]})`,
        }),
        applySolidInversion('neutral'),
      ]}
    >
      <div>
        <Typography sx={{ mb: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Button variant="soft">Learn more</Button>
      </div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
            sm: '1fr 1fr',
          },
          gap: 3,
        }}
      >
        <Stat value="4M" description="Weekly downloads" />
        <Stat value="87k" description="Stars on GitHub" />
        <Stat value="2.7k" description="Open source contributors" />
        <Stat value="18.4k" description="Followers on X" />
      </Box>
    </Box>
  );
}
```
</example>

#### With the styled API

```jsx
const Parent = styled('div')([{ ...baseStyles }, applySolidInversion('neutral')]);
```

<example name="ColorInversionAnyParentStyled">
```tsx file="ColorInversionAnyParentStyled.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import { applySolidInversion } from '@mui/joy/colorInversion';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';

const StyledBox = styled('div')(
  ({ theme }) => ({
    padding: 32,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    rowGap: 16,
    columnGap: 64,
    borderRadius: 8,
    background: `linear-gradient(45deg, ${theme.vars.palette.neutral[800]}, ${theme.vars.palette.neutral[600]})`,
  }),
  applySolidInversion('neutral'),
);

function Stat({
  description,
  value,
}: {
  description: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <Box sx={{ borderLeft: 3, borderColor: 'divider', px: 2, py: 0.5 }}>
      <Typography level="h3" component="div">
        {value}
      </Typography>
      <Typography level="title-sm" textColor="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}

export default function ColorInversionAnyParentStyled() {
  return (
    <StyledBox>
      <div>
        <Typography sx={{ mb: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Button variant="soft">Learn more</Button>
      </div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
            sm: '1fr 1fr',
          },
          gap: 3,
        }}
      >
        <Stat value="4M" description="Weekly downloads" />
        <Stat value="87k" description="Stars on GitHub" />
        <Stat value="2.7k" description="Open source contributors" />
        <Stat value="18.4k" description="Followers on X" />
      </Box>
    </StyledBox>
  );
}
```
</example>

## How it works

Color inversion adds CSS variables to the component using the `invertedColors` prop or the apply utilities. There's no [React context](https://react.dev/learn/passing-data-deeply-with-context) involved in this feature.

```jsx
<Sheet invertedColors variant="solid" color="neutral">

// The parent's style sheet
{
  // the values of these variables depends on the parent's variant and color.
  --variant-softColor: …;
  --variant-softBg: …;
  --variant-softHoverColor: …;
  --variant-softHoverBg: …;
  --variant-softActiveBg: …;
  … // other variants
  --joy-palette-text-primary: …;
  --joy-palette-text-secondary: …;
  --joy-palette-text-tertiary: …;
  --joy-palette-background-surface: …;
  … // other theme palette tokens
}
```

As a result, the children will use these CSS variables instead of the theme:

```jsx
// The children style sheet
// The values of these variables are inherited from the parent.
{
  color: var(--joy-palette-text-primary);
  background: var(--joy-palette-background-surface);
  …
}
```

## Common examples

### Header

<example name="ColorInversionHeader">
```tsx file="ColorInversionHeader.tsx"
import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Dropdown from '@mui/joy/Dropdown';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import AddIcon from '@mui/icons-material/Add';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function ColorInversionHeader() {
  const [color, setColor] = React.useState<ColorPaletteProp>('primary');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: 'sm' },
          minWidth: 'min-content',
        },
        color !== 'warning' &&
          ((theme) => ({
            background: `linear-gradient(to top, ${theme.vars.palette[color][600]}, ${theme.vars.palette[color][500]})`,
          })),
      ]}
    >
      <IconButton
        variant="soft"
        size="sm"
        onClick={() => {
          const colors: ColorPaletteProp[] = [
            'primary',
            'neutral',
            'danger',
            'success',
            'warning',
          ];
          const nextColorIndex = colors.indexOf(color) + 1;
          setColor(colors[nextColorIndex] ?? colors[0]);
        }}
      >
        <ColorLensRoundedIcon fontSize="small" />
      </IconButton>
      <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}>
        <Dropdown>
          <MenuButton
            sx={{ '--Button-radius': '1.5rem' }}
            variant="outlined"
            endDecorator={<KeyboardArrowDownIcon />}
          >
            Main
          </MenuButton>
          <Menu
            variant="outlined"
            placement="bottom-start"
            disablePortal
            size="sm"
            sx={{
              '--ListItemDecorator-size': '24px',
              '--ListItem-minHeight': '40px',
              '--ListDivider-gap': '4px',
              minWidth: 200,
            }}
          >
            <MenuItem>
              <ListItemDecorator>
                <BubbleChartIcon />
              </ListItemDecorator>
              Products
            </MenuItem>
            <ListDivider />
            <MenuItem>Pricing</MenuItem>
            <MenuItem>
              Case studies{' '}
              <Chip
                variant="outlined"
                size="sm"
                sx={(theme) => ({
                  ml: 'auto',
                  bgcolor: `rgba(${theme.vars.palette[color].mainChannel} / 0.4)`,
                })}
              >
                Beta
              </Chip>
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
      <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>
        <Button
          startDecorator={<AddIcon />}
          sx={{ display: { xs: 'none', md: 'inline-flex' } }}
        >
          New invoice
        </Button>
        <Input
          placeholder="Search"
          variant="soft"
          size="sm"
          endDecorator={
            <Typography
              component="span"
              variant="outlined"
              level="body-xs"
              sx={{ bgcolor: 'background.surface', mx: 0 }}
            >
              ⌘K
            </Typography>
          }
          sx={{
            '--Input-paddingInline': '12px',
            width: 160,
            display: { xs: 'none', lg: 'flex' },
          }}
        />
        <Badge badgeContent={2} variant="solid" color="danger">
          <IconButton variant="soft" sx={{ borderRadius: '50%' }}>
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </Box>
    </Sheet>
  );
}
```
</example>

### Footer

<example name="ColorInversionFooter">
```tsx file="ColorInversionFooter.tsx"
import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function ColorInversionFooter() {
  const [color, setColor] = React.useState<ColorPaletteProp>('neutral');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={[
        {
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: 'sm' },
        },
        color !== 'neutral' && {
          bgcolor: `${color}.800`,
        },
      ]}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors: ColorPaletteProp[] = [
              'primary',
              'neutral',
              'danger',
              'success',
              'warning',
            ];
            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
            <Typography level="body-xs">Blog post</Typography>
          </CardContent>
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>MUI Base</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
```
</example>

### Side navigation

<example name="ColorInversionNavigation">
```tsx file="ColorInversionNavigation.tsx"
import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Avatar from '@mui/joy/Avatar';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Tooltip from '@mui/joy/Tooltip';
import Option from '@mui/joy/Option';
import Sheet from '@mui/joy/Sheet';
import PieChart from '@mui/icons-material/PieChart';
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AddIcon from '@mui/icons-material/Add';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function ColorInversionNavigation() {
  const [color, setColor] = React.useState<ColorPaletteProp>('neutral');
  return (
    <Box sx={{ display: 'flex', borderRadius: 'sm', overflow: 'auto' }}>
      <Sheet
        variant="solid"
        invertedColors
        sx={[
          { p: 2 },
          color !== 'neutral' && {
            bgcolor: `${color}.700`,
          },
        ]}
      >
        <Select
          variant="soft"
          defaultValue="1"
          size="sm"
          color={color}
          startDecorator={
            <Sheet
              variant="solid"
              sx={{
                p: 0.75,
                borderRadius: '50%',
                lineHeight: 0,
                alignSelf: 'center',
              }}
            >
              <BubbleChartIcon fontSize="small" sx={{ m: 0 }} />
            </Sheet>
          }
          sx={{
            py: 1,
            bgcolor: 'transparent',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Option value="1">General team</Option>
          <Option value="2">Engineering team</Option>
        </Select>
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            flexGrow: 0,
            minWidth: 200,
          }}
        >
          <ListItemButton>
            <ListItemDecorator>
              <PieChart />
            </ListItemDecorator>
            Dashboard
          </ListItemButton>
          <ListItemButton selected variant="soft">
            <ListItemDecorator>
              <SmsIcon />
            </ListItemDecorator>
            Chat
            <Chip
              data-skip-inverted-colors
              size="sm"
              variant="soft"
              color={color}
              sx={{ ml: 'auto' }}
            >
              5
            </Chip>
          </ListItemButton>
          <ListItemButton>
            <ListItemDecorator>
              <PersonIcon />
            </ListItemDecorator>
            Team
          </ListItemButton>
          <ListItem nested>
            <ListSubheader>Shortcuts</ListSubheader>
            <List>
              <ListItemButton>Tasks</ListItemButton>
              <ListItemButton>Reports</ListItemButton>
            </List>
          </ListItem>
        </List>
        <Card
          variant="soft"
          orientation="horizontal"
          sx={{ mt: 2, display: 'flex', alignItems: 'center', borderRadius: 'sm' }}
        >
          <CircularProgress value={35} determinate thickness={8} size="lg">
            35%
          </CircularProgress>
          <CardContent sx={{ ml: 2 }}>
            <Chip
              size="sm"
              variant="outlined"
              sx={{ alignSelf: 'flex-start', mb: 1 }}
            >
              Active
            </Chip>
            <Typography sx={{ fontSize: 'xs' }}>Last update: 22/12/22</Typography>
          </CardContent>
        </Card>
      </Sheet>
      <Sheet
        variant="solid"
        invertedColors
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          bgcolor: `${color}.800`,
          '& .MuiBadge-root': { '--Badge-ringColor': '#FFF' },
          '& .MuiBadge-colorSuccess': { bgcolor: 'success.400' },
          '& button': {
            borderRadius: '50%',
            padding: 0,
            '--IconButton-size': '3rem',
          },
        }}
      >
        <Badge badgeContent="7" badgeInset="10%" size="sm">
          <IconButton>
            <Avatar src="/static/images/avatar/3.jpg" />
          </IconButton>
        </Badge>
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeInset="15%"
          color="success"
        >
          <IconButton>
            <Avatar src="/static/images/avatar/4.jpg" />
          </IconButton>
        </Badge>
        <Tooltip title="Add another chat" variant="soft">
          <IconButton sx={{ color: 'text.tertiary' }}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <IconButton
          onClick={() => {
            const colors: ColorPaletteProp[] = [
              'primary',
              'neutral',
              'danger',
              'success',
              'warning',
            ];
            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
          sx={{ mt: 'auto', color: 'text.tertiary' }}
        >
          <ColorLensRoundedIcon />
        </IconButton>
      </Sheet>
    </Box>
  );
}
```
</example>

### Marketing section

<example name="ColorInversionMarketing">
```tsx file="ColorInversionMarketing.tsx"
import * as React from 'react';
import { ColorPaletteProp, PaletteRange, useTheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import InvertColorsIcon from '@mui/icons-material/InvertColors';

/**
 * Design credit: https://flutter.dev/
 */

export default function ColorInversionMarketing() {
  const [color, setColor] = React.useState<ColorPaletteProp>('primary');
  const [solid, setSolid] = React.useState(true);
  const theme = useTheme();

  const shade = (x: keyof PaletteRange): string => theme.vars.palette[color][x];
  const color1 = solid ? shade(800) : shade(600);
  const color2 = solid ? shade(600) : shade(200);
  const color3 = shade(900);
  const gradient1 = `${color1}, ${color2} 65%`;
  const gradient2 = `${color1} 65%, ${color3}`;
  const textColor = { color: solid ? shade(50) : shade(700) };

  const buttonStyles = {
    borderRadius: 99,
    '&:hover': {
      '& .MuiButton-endDecorator': { transform: 'translate(4px, 0px)' },
    },
    '& span': { transition: '0.15s' },
  };

  return (
    <Sheet
      variant={solid ? 'solid' : 'soft'}
      color={color}
      invertedColors
      sx={[
        {
          flexGrow: 1,
          position: 'relative',
          display: 'flex',
          p: '6rem 3rem',
          borderRadius: 'md',
          overflow: 'clip',
          '&::after': {
            content: `""`,
            display: 'block',
            width: '20rem',
            height: '40rem',
            background: `linear-gradient(to top, ${gradient1}, ${gradient2})`,
            position: 'absolute',
            transform: 'rotate(-45deg)',
            top: { xs: '-80%', sm: '-95%', md: '-65%', lg: '-70%' },
            right: { xs: '-70%', sm: '-15%' },
          },
        },
        solid ? { bgcolor: shade(800) } : { bgcolor: shade(100) },
      ]}
    >
      <div>
        <Typography level="h1" component="h2" sx={textColor}>
          Get started
        </Typography>
        <Typography sx={{ mt: 1, mb: 2, ...textColor }}>
          Instant access to the power of the Joy UI library.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button
            endDecorator={<ArrowForwardIcon fontSize="md" />}
            sx={[
              { ...buttonStyles },
              solid
                ? { '&:active': { bgcolor: shade(200) } }
                : { '&:active': { bgcolor: shade(700) } },
            ]}
          >
            Install
          </Button>
          <Button
            variant="plain"
            endDecorator={<ArrowForwardIcon fontSize="md" />}
            sx={{ ...textColor, ...buttonStyles }}
          >
            See the docs
          </Button>
        </Box>
      </div>
      <Sheet
        sx={{
          zIndex: 1,
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          bgcolor: 'transparent',
          display: 'flex',
          gap: 2,
          '& button': { borderRadius: '50%' },
        }}
      >
        <IconButton variant="solid" onClick={() => setSolid((state) => !state)}>
          <InvertColorsIcon fontSize="xl" />
        </IconButton>
        <IconButton
          variant="soft"
          onClick={() => {
            const colors: ColorPaletteProp[] = [
              'primary',
              'neutral',
              'danger',
              'success',
              'warning',
            ];
            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="xl" />
        </IconButton>
      </Sheet>
    </Sheet>
  );
}
```
</example>
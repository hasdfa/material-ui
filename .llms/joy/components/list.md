---
productId: joy-ui
title: React List component
components: List, ListDivider, ListItem, ListItemButton, ListItemContent, ListItemDecorator, ListSubheader
githubLabel: 'component: list'
---

# Lists

Lists are organizational tools that enhance the readability and organization of content.

## Introduction

Lists present information in a concise, easy-to-follow format through a continuous, vertical index of text or images.

Joy UI Lists are implemented using a collection of related components:

- [List](#basics) - a wrapper for list items. Renders as a `<ul>` by default.
- [List Item](#basics) - a common list item. Renders as an `<li>` by default.
- [List Item Button](#interactive-list-items) - an action element to be used inside a list item.
- [List Item Decorator](#decorators) - a decorator of a list item, usually used to display an icon.
- [List Item Content](#ellipsis-content) - a container inside a list item, used to display text content.
- [List Divider](#divider) - a separator between list items.
- [List Subheader](#nested-list) - a label for a nested list.

<example name="ListUsage">
```jsx file="ListUsage.js"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import JoyUsageDemo, {
  prependLinesSpace,
} from 'docs/src/modules/components/JoyUsageDemo';

export default function ListUsage() {
  return (
    <JoyUsageDemo
      componentName="ListItemButton"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          options: ['plain', 'outlined', 'soft', 'solid'],
          defaultValue: 'plain',
        },
        {
          propName: 'color',
          knob: 'color',
          defaultValue: 'neutral',
        },
        {
          propName: 'selected',
          knob: 'switch',
          defaultValue: false,
        },
        {
          propName: 'disabled',
          knob: 'switch',
          defaultValue: false,
        },
        {
          propName: 'children',
          defaultValue: `<ListItemDecorator><Home /></ListItemDecorator>
  <ListItemContent>Home</ListItemContent>
  <KeyboardArrowRight />`,
        },
      ]}
      getCodeBlock={(code) => `<List>
  <ListItem>
${prependLinesSpace(code, 3)}
  </ListItem>
</List>`}
      renderDemo={(props) => (
        <List sx={{ width: 240, my: 5 }}>
          <ListItem>
            <ListItemButton {...props}>
              <ListItemDecorator>
                <HomeRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>Home</ListItemContent>
              <KeyboardArrowRight />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton {...props}>
              <ListItemDecorator>
                <ShoppingCartRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>Orders</ListItemContent>
              <KeyboardArrowRight />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
```

## Customization

### Variants

The List component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid`, `soft`, `outlined`, and `plain`.

### Sizes

The List component comes in three sizes: `sm`, `md`, and `lg`.
The size of the List determines its font size and density.

<example name="SizesList">
```tsx file="SizesList.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Home from '@mui/icons-material/Home';

export default function SizesList() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        flexWrap: 'wrap',
        '& > *': { minWidth: 0, flexBasis: 200 },
      }}
    >
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <Typography level="body-xs" sx={{ mb: 2 }}>
            <code>size=&quot;{size}&quot;</code>
          </Typography>
          <List
            size={size}
            variant="outlined"
            sx={{ maxWidth: 300, borderRadius: 'sm' }}
          >
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <Home />
                </ListItemDecorator>
                Home
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Projects</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Settings</ListItemButton>
            </ListItem>
          </List>
        </div>
      ))}
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

### Decorators

```jsx
import ListItemDecorator from '@mui/joy/ListItemDecorator';
```

Use the List Item Decorator component to add supporting icons or elements to the list item.

<example name="DecoratedList">
```tsx file="DecoratedList.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

export default function DecoratedList() {
  return (
    <div>
      <Typography
        id="decorated-list-demo"
        level="body-xs"
        sx={{ textTransform: 'uppercase', fontWeight: 'lg', mb: 1 }}
      >
        Ingredients
      </Typography>
      <List aria-labelledby="decorated-list-demo">
        <ListItem>
          <ListItemDecorator>🧅</ListItemDecorator> 1 red onion
        </ListItem>
        <ListItem>
          <ListItemDecorator>🍤</ListItemDecorator> 2 Shrimps
        </ListItem>
        <ListItem>
          <ListItemDecorator>🥓</ListItemDecorator> 120g bacon
        </ListItem>
      </List>
    </div>
  );
}
```
</example>

:::info
The List Item Decorator comes with a minimum set width that can be adjusted using the `--list-decorator-size` CSS variable within the List component.
:::

### Horizontal list

Use the `orientation="horizontal"` prop on the List component to display the List horizontally.

<example name="HorizontalList">
```tsx file="HorizontalList.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';

export default function HorizontalList() {
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
            <Home />
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Products
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Blog
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
```
</example>

:::warning
While nested lists will not work in a horizontal direction, you can create a custom pop-up component to achieve a similar effect (see the [Navigation menu](#navigation-menu) example).
:::

### Semantic elements

Use the `component` prop to control which HTML tag is rendered.

```js
<List component="ol">
```

The example below renders the List component as an HTML `<nav>` element.

<example name="NavList">
```tsx file="NavList.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Videocam from '@mui/icons-material/Videocam';
import Image from '@mui/icons-material/Image';

export default function NavList() {
  return (
    <List component="nav" sx={{ maxWidth: 320 }}>
      <ListItemButton>
        <ListItemDecorator>
          <Image />
        </ListItemDecorator>
        Add another image
      </ListItemButton>
      <ListItemButton>
        <ListItemDecorator>
          <Videocam />
        </ListItemDecorator>
        Add another video
      </ListItemButton>
    </List>
  );
}
```
</example>

:::info
The List Item component is optional in this case.
If used, it will automatically change the semantic element from the default `<li>` to `<div>`.
:::

### Marker

Use the `marker` prop with any valid [list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) value to add a marker to the list items.

<example name="MarkerList">
```tsx file="MarkerList.tsx"
import * as React from 'react';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';

export default function MarkerList() {
  const [type, setType] = React.useState<string | undefined>('disc');
  return (
    <Stack spacing={2}>
      <ToggleButtonGroup
        value={type}
        onChange={(event, newValue) => setType(newValue || undefined)}
      >
        <Button value="disc">disc</Button>
        <Button value="circle">circle</Button>
        <Button value="decimal">decimal</Button>
        <Button value="upper-roman">upper-roman</Button>
      </ToggleButtonGroup>
      <List marker={type}>
        <ListItem>The Shawshank Redemption</ListItem>
        <ListItem nested>
          <ListItem>Star Wars</ListItem>
          <List marker="circle">
            <ListItem>Episode I – The Phantom Menace</ListItem>
            <ListItem>Episode II – Attack of the Clones</ListItem>
            <ListItem>Episode III – Revenge of the Sith</ListItem>
          </List>
        </ListItem>
        <ListItem>The Lord of the Rings: The Two Towers</ListItem>
      </List>
    </Stack>
  );
}
```
</example>

:::success
For [numbered lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol), change the List component to `component="ol"`.

```js
<List component="ol" marker="decimal">
```

:::

### Ellipsis content

```jsx
import ListItemContent from '@mui/joy/ListItemContent';
```

When working with longer content in a List, you can use the List Item Content component in combination with `<Typography noWrap />` to display an ellipsis when the content exceeds the available space.
This can help to keep the List Items visually consistent and prevent text from overflowing outside of the List Item's container.

<example name="EllipsisList">
```tsx file="EllipsisList.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

export default function EllipsisList() {
  return (
    <Box sx={{ width: 320 }}>
      <Typography
        id="ellipsis-list-demo"
        level="body-xs"
        sx={{ textTransform: 'uppercase', letterSpacing: '0.15rem' }}
      >
        Inbox
      </Typography>
      <List
        aria-labelledby="ellipsis-list-demo"
        sx={{ '--ListItemDecorator-size': '56px' }}
      >
        <ListItem>
          <ListItemDecorator>
            <Avatar src="/static/images/avatar/1.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Brunch this weekend?</Typography>
            <Typography level="body-sm" noWrap>
              I&apos;ll be in your neighborhood doing errands this Tuesday.
            </Typography>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Avatar src="/static/images/avatar/2.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Summer BBQ</Typography>
            <Typography level="body-sm" noWrap>
              Wish I could come, but I&apos;m out of town this Friday.
            </Typography>
          </ListItemContent>
        </ListItem>
      </List>
    </Box>
  );
}
```
</example>

### Divider

```jsx
import ListDivider from '@mui/joy/ListDivider';
```

The List Divider component comes with four `inset` patterns:

- Default (no `inset` prop provided): stretches form one edge of the List to the other.
- `inset="gutter"`: from the start of List Item Decorator to the end of the content.
- `inset="startDecorator"`: from the start of List Item Decorator to the end of the edge of the container.
- `inset="startContent"`: from the start of the content to the edge of the container.

<example name="DividedList">
```tsx file="DividedList.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

export default function DividedList() {
  return (
    <Box
      sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}
    >
      {([undefined, 'gutter', 'startDecorator', 'startContent'] as const).map(
        (inset) => (
          <div key={inset || 'default'}>
            <Typography level="body-xs" sx={{ mb: 2 }}>
              <code>{inset ? `inset="${inset}"` : '(default)'}</code>
            </Typography>
            <List variant="outlined" sx={{ minWidth: 240, borderRadius: 'sm' }}>
              <ListItem>
                <ListItemDecorator>
                  <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                </ListItemDecorator>
                Mabel Boyle
              </ListItem>
              <ListDivider inset={inset} />
              <ListItem>
                <ListItemDecorator>
                  <Avatar size="sm" src="/static/images/avatar/2.jpg" />
                </ListItemDecorator>
                Boyd Burt
              </ListItem>
            </List>
          </div>
        ),
      )}
    </Box>
  );
}
```
</example>

If you're using a horizontal list, only `inset="gutter"` will work as the list divider.

<example name="HorizontalDividedList">
```tsx file="HorizontalDividedList.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

export default function HorizontalDividedList() {
  return (
    <List
      orientation="horizontal"
      variant="outlined"
      sx={{
        flexGrow: 0,
        mx: 'auto',
        '--ListItemDecorator-size': '48px',
        '--ListItem-paddingY': '1rem',
        borderRadius: 'sm',
      }}
    >
      <ListItem>
        <ListItemDecorator>
          <Avatar size="sm" src="/static/images/avatar/1.jpg" />
        </ListItemDecorator>
        Mabel Boyle
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem>
        <ListItemDecorator>
          <Avatar size="sm" src="/static/images/avatar/2.jpg" />
        </ListItemDecorator>
        Boyd Burt
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem>
        <ListItemDecorator>
          <Avatar size="sm" src="/static/images/avatar/3.jpg" />
        </ListItemDecorator>
        Adam Tris
      </ListItem>
    </List>
  );
}
```
</example>

### Sticky item

Use the List component as a child of the Sheet component to create "sticky" items.
On the item you wish to stick, you can then add the `sticky` prop.

The Sheet component automatically adjusts the `sticky` list item to have the same background so that content does not overflow when scrolling.

<example name="StickyList">
```tsx file="StickyList.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';

export default function StickyList() {
  return (
    <Sheet
      variant="outlined"
      sx={{ width: 320, maxHeight: 300, overflow: 'auto', borderRadius: 'sm' }}
    >
      <List>
        {[...Array(5)].map((_, categoryIndex) => (
          <ListItem nested key={categoryIndex}>
            <ListSubheader sticky>Category {categoryIndex + 1}</ListSubheader>
            <List>
              {[...Array(10)].map((__, index) => (
                <ListItem key={index}>
                  <ListItemButton>Subitem {index + 1}</ListItemButton>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Sheet>
  );
}
```
</example>

:::info
By default, this works on both light and dark modes.
:::

### Nested list

```jsx
import ListSubheader from '@mui/joy/ListSubheader';
```

You can create a nested list using the `nested` prop on a List Item.
This enables you to add a List Subheader as well as a new List component as children of the List Item.
The nested List will inherit its `size` as well as other CSS variables like `--List-radius` and `--ListItem-radius` from the root List component to keep the design consistent.
The layout and spacing of the nested List will remain independent.

<example name="NestedList">
```tsx file="NestedList.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Switch from '@mui/joy/Switch';

export default function NestedList() {
  const [small, setSmall] = React.useState(false);
  return (
    <div>
      <Switch
        size="sm"
        checked={small}
        onChange={(event) => setSmall(event.target.checked)}
        endDecorator={
          <Typography level="body-sm">Toggle small nested list</Typography>
        }
        sx={{ mb: 2 }}
      />
      <List
        variant="outlined"
        size={small ? 'sm' : undefined}
        sx={{ width: 200, borderRadius: 'sm' }}
      >
        <ListItem nested>
          <ListSubheader>Category 1</ListSubheader>
          <List>
            <ListItem>
              <ListItemButton>Subitem 1</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Subitem 2</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem nested>
          <ListSubheader>Category 2</ListSubheader>
          <List>
            <ListItem>
              <ListItemButton>Subitem 1</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Subitem 2</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </div>
  );
}
```
</example>

:::info
Nested lists will stick to the left of the root list, by default. If you need to add spacing to the start of the nested list you can use `--List-nestedInsetStart: ${value}`.

```js
<List sx={{ '--List-nestedInsetStart': '1rem' }}> {/* This is the root List */}
```

:::

### Interactive list items

```jsx
import ListItemButton from '@mui/joy/ListItemButton';
```

To make a List Item interactive, you can use List Item Button inside a List Item.

<example name="ActionableList">
```tsx file="ActionableList.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Info from '@mui/icons-material/Info';

export default function ActionableList() {
  return (
    <List sx={{ maxWidth: 320 }}>
      <ListItem>
        <ListItemButton onClick={() => alert('You clicked')}>
          <ListItemDecorator>
            <Info />
          </ListItemDecorator>
          Clickable item
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton component="a" href="#actionable">
          <ListItemDecorator>
            <OpenInNew />
          </ListItemDecorator>
          Open a new tab
        </ListItemButton>
      </ListItem>
    </List>
  );
}
```
</example>

To add a secondary action to the List Item Button, wrap it in a List Item component and then add the desired start or end action elements to it.

<example name="SecondaryList">
```tsx file="SecondaryList.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';

export default function SecondaryList() {
  return (
    <List sx={{ maxWidth: 300 }}>
      <ListItem
        startAction={
          <IconButton aria-label="Add" size="sm" variant="plain" color="neutral">
            <Add />
          </IconButton>
        }
      >
        <ListItemButton>Item 1</ListItemButton>
      </ListItem>
      <ListItem
        endAction={
          <IconButton aria-label="Delete" size="sm" color="danger">
            <Delete />
          </IconButton>
        }
      >
        <ListItemButton>Item 2</ListItemButton>
      </ListItem>
    </List>
  );
}
```
</example>

:::info
The List Item Button and the secondary action render as siblings so that the rendered semantic element is appropriately adjusted.

```js
<ul>                    {/* List */}
  <li>                  {/* ListItem */}
    <div role="button"> {/* ListItemButton */}
    <button>            {/* IconButton */}
```

:::

### Selected

Use the `selected` prop on the List Item Button component to indicate whether or not an item is currently selected.
When the item is selected, it applies `color="primary"` and a few extra styles—like font weight—to visually communicate the selected state.

<example name="SelectedList">
```tsx file="SelectedList.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Apps from '@mui/icons-material/Apps';

export default function SelectedList() {
  return (
    <List sx={{ maxWidth: 320 }}>
      <ListItem>
        <ListItemButton selected>
          <ListItemDecorator>
            <Home />
          </ListItemDecorator>
          Home
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <Apps />
          </ListItemDecorator>
          Apps
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator />
          Settings
        </ListItemButton>
      </ListItem>
    </List>
  );
}
```
</example>

:::info
A selected List Item Button does not apply `:hover` and `:active` global variant styles.
:::

## CSS variables playground

Play around with the CSS variables available to the List components to see how the design changes.
You can use these to customize the components with both the `sx` prop and the theme.

<example name="ListVariables">
```jsx file="ListVariables.js"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Home from '@mui/icons-material/Home';
import Apps from '@mui/icons-material/Apps';
import MoreVert from '@mui/icons-material/MoreVert';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function ListVariables() {
  return (
    <JoyVariablesDemo
      componentName="List"
      childrenAccepted
      data={[
        { var: '--List-padding', defaultValue: '0px' },
        { var: '--List-radius', defaultValue: '0px' },
        { var: '--List-gap', defaultValue: '0px' },
        { var: '--ListItem-minHeight', defaultValue: '40px' },
        { var: '--ListItem-paddingY', defaultValue: '6px' },
        { var: '--ListItem-paddingX', defaultValue: '12px' },
        { var: '--ListItemDecorator-size', defaultValue: '40px' },
        { var: '--ListDivider-gap', defaultValue: '6px' },
      ]}
      renderDemo={(sx) => (
        <List
          sx={(theme) => ({
            ...sx,
            width: 300,
            ...theme.variants.outlined.neutral,
          })}
        >
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Home />
              </ListItemDecorator>
              Home
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Apps />
              </ListItemDecorator>
              Products
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem nested>
            <ListItem>
              <Typography
                level="body-sm"
                startDecorator={
                  <Sheet
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: 'success.500',
                      borderRadius: '50%',
                    }}
                  />
                }
                sx={{ fontWeight: 'md' }}
              >
                Online people
              </Typography>
            </ListItem>
            <List>
              <ListItem
                endAction={
                  <IconButton variant="plain" color="neutral" size="sm">
                    <MoreVert />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                    <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                  </ListItemDecorator>
                  Mabel Boyle
                </ListItemButton>
              </ListItem>
              <ListDivider inset="startContent" />
              <ListItem
                endAction={
                  <IconButton variant="plain" color="neutral" size="sm">
                    <MoreVert />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                    <Avatar size="sm" src="/static/images/avatar/2.jpg" />
                  </ListItemDecorator>
                  Boyd Burt
                </ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      )}
    />
  );
}
```
</example>

## Common examples

### iOS settings

This example uses nested lists to split the settings into groups.

<example name="ExampleIOSList">
```tsx file="ExampleIOSList.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet, { sheetClasses } from '@mui/joy/Sheet';
import Switch, { switchClasses } from '@mui/joy/Switch';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded';
import Flight from '@mui/icons-material/Flight';
import Wifi from '@mui/icons-material/Wifi';
import Bluetooth from '@mui/icons-material/Bluetooth';
import Podcasts from '@mui/icons-material/Podcasts';

export default function ExampleIOSList() {
  return (
    <Sheet variant="soft" sx={{ width: 343, p: 2, borderRadius: 'sm' }}>
      <Typography
        level="h3"
        id="ios-example-demo"
        sx={{ fontSize: 'xl2', fontWeight: 'xl', mb: 1 }}
      >
        Settings
      </Typography>
      <List
        aria-labelledby="ios-example-demo"
        sx={(theme) => ({
          '& ul': {
            '--List-gap': '0px',
            bgcolor: 'background.surface',
            '& > li:first-child > [role="button"]': {
              borderTopRightRadius: 'var(--List-radius)',
              borderTopLeftRadius: 'var(--List-radius)',
            },
            '& > li:last-child > [role="button"]': {
              borderBottomRightRadius: 'var(--List-radius)',
              borderBottomLeftRadius: 'var(--List-radius)',
            },
          },
          '--List-radius': '8px',
          '--List-gap': '1rem',
          '--ListDivider-gap': '0px',
          '--ListItem-paddingY': '0.5rem',
          // override global variant tokens
          '--joy-palette-neutral-plainHoverBg': 'rgba(0 0 0 / 0.08)',
          '--joy-palette-neutral-plainActiveBg': 'rgba(0 0 0 / 0.12)',
          [theme.getColorSchemeSelector('light')]: {
            '--joy-palette-divider': 'rgba(0 0 0 / 0.08)',
          },
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-neutral-plainHoverBg': 'rgba(255 255 255 / 0.1)',
            '--joy-palette-neutral-plainActiveBg': 'rgba(255 255 255 / 0.16)',
          },
        })}
      >
        <ListItem nested>
          <List
            aria-label="Personal info"
            sx={{ '--ListItemDecorator-size': '72px' }}
          >
            <ListItem>
              <ListItemDecorator>
                <Avatar size="lg" sx={{ '--Avatar-size': '60px' }}>
                  MB
                </Avatar>
              </ListItemDecorator>
              <div>
                <Typography sx={{ fontSize: 'xl' }}>Murphy Bates</Typography>
                <Typography sx={{ fontSize: 'xs' }}>
                  Apple ID, iCloud, Media & Purchase
                </Typography>
              </div>
            </ListItem>
            <ListDivider inset="startContent" />
            <ListItem>
              <ListItemButton>
                <ListItemContent>iCloud+ Feature Updates</ListItemContent>
                <KeyboardArrowRight fontSize="xl3" />
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem nested>
          <ListItem
            sx={{
              bgcolor: 'background.surface',
              mb: 1,
              borderRadius: 'var(--List-radius)',
            }}
          >
            <ListItemButton
              aria-describedby="apple-tv-description"
              sx={{ borderRadius: 'var(--List-radius)' }}
            >
              Apple TV+ Free Year Available
            </ListItemButton>
          </ListItem>
          <Typography id="apple-tv-description" level="body-xs" aria-hidden>
            Included with your recent Apple device purchase. Must be accepted within
            90 days of activation.
          </Typography>
        </ListItem>
        <ListItem nested>
          <List
            aria-label="Network"
            sx={{
              [`& .${sheetClasses.root}`]: {
                p: 0.5,
                lineHeight: 0,
                borderRadius: 'sm',
              },
            }}
          >
            <ListItem>
              <ListItemDecorator>
                <Sheet variant="solid" color="warning">
                  <Flight />
                </Sheet>
              </ListItemDecorator>
              <ListItemContent htmlFor="airplane-mode" component="label">
                Airplane Mode
              </ListItemContent>
              <Switch
                id="airplane-mode"
                size="lg"
                color="success"
                sx={(theme) => ({
                  '--Switch-thumbShadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
                  '--Switch-thumbSize': '27px',
                  '--Switch-trackWidth': '51px',
                  '--Switch-trackHeight': '31px',
                  '--Switch-trackBackground': theme.vars.palette.background.level3,
                  [`& .${switchClasses.thumb}`]: {
                    transition: 'width 0.2s, left 0.2s',
                  },
                  '&:hover': {
                    '--Switch-trackBackground': theme.vars.palette.background.level3,
                  },
                  '&:active': {
                    '--Switch-thumbWidth': '32px',
                  },
                  [`&.${switchClasses.checked}`]: {
                    '--Switch-trackBackground': 'rgb(48 209 88)',
                    '&:hover': {
                      '--Switch-trackBackground': 'rgb(48 209 88)',
                    },
                  },
                })}
              />
            </ListItem>
            <ListDivider inset="startContent" />
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <Sheet variant="solid" color="primary">
                    <Wifi />
                  </Sheet>
                </ListItemDecorator>
                <ListItemContent>Wi-Fi</ListItemContent>
                <Typography
                  textColor="text.tertiary"
                  sx={{ mr: 'calc(-1 * var(--ListItem-gap))' }}
                >
                  Mars
                </Typography>
                <KeyboardArrowRight fontSize="xl3" />
              </ListItemButton>
            </ListItem>
            <ListDivider inset="startContent" />
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <Sheet variant="solid" color="primary">
                    <Bluetooth />
                  </Sheet>
                </ListItemDecorator>
                <ListItemContent>Bluetooth</ListItemContent>
                <Typography
                  textColor="text.tertiary"
                  sx={{ mr: 'calc(-1 * var(--ListItem-gap))' }}
                >
                  On
                </Typography>
                <KeyboardArrowRight fontSize="xl3" />
              </ListItemButton>
            </ListItem>
            <ListDivider inset="startContent" />
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <Sheet variant="solid" color="success">
                    <Podcasts />
                  </Sheet>
                </ListItemDecorator>
                <ListItemContent>Cellular</ListItemContent>
                <KeyboardArrowRight fontSize="xl3" />
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Sheet>
  );
}
```
</example>

### Gmail navigation

Inspired by Gmail's desktop navigation bar.

<example name="ExampleGmailList">
```tsx file="ExampleGmailList.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator, {
  listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import InboxIcon from '@mui/icons-material/Inbox';
import Label from '@mui/icons-material/Label';
import People from '@mui/icons-material/People';
import Info from '@mui/icons-material/Info';
import Star from '@mui/icons-material/Star';

export default function ExampleGmailList() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box sx={{ py: 2, pr: 2, width: 320 }}>
      <List
        aria-label="Sidebar"
        sx={{
          '--ListItem-paddingLeft': '0px',
          '--ListItemDecorator-size': '64px',
          '--ListItem-minHeight': '32px',
          '--List-nestedInsetStart': '13px',
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: 'flex-end',
            pr: '18px',
          },
          '& [role="button"]': {
            borderRadius: '0 20px 20px 0',
          },
        }}
      >
        <ListItem>
          <ListItemButton
            selected={index === 0}
            color={index === 0 ? 'primary' : undefined}
            onClick={() => setIndex(0)}
          >
            <ListItemDecorator>
              <InboxIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Inbox</ListItemContent>
            <Typography
              level="body-sm"
              sx={{ fontWeight: 'bold', color: 'inherit' }}
            >
              1,950
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 1}
            color={index === 1 ? 'neutral' : undefined}
            onClick={() => setIndex(1)}
          >
            <ListItemDecorator>
              <Star fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Starred</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem nested>
          <ListItemButton
            selected={index === 2}
            color={index === 2 ? 'success' : undefined}
            onClick={() => setIndex(2)}
          >
            <ListItemDecorator>
              <ArrowDropDown fontSize="lg" />
              <Label fontSize="lg" />
            </ListItemDecorator>
            Categories
          </ListItemButton>
          <List>
            <ListItem>
              <ListItemButton
                selected={index === 3}
                color={index === 3 ? 'primary' : undefined}
                onClick={() => setIndex(3)}
              >
                <ListItemDecorator>
                  <People fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Social</ListItemContent>
                <Typography level="body-sm">4,320</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={index === 4}
                color={index === 4 ? 'warning' : undefined}
                onClick={() => setIndex(4)}
              >
                <ListItemDecorator>
                  <Info fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Updates</ListItemContent>
                <Typography level="body-sm">22,252</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}
```
</example>

### Collapsible list

Inspired by the [Gatsby documentation](https://www.gatsbyjs.com/docs/) navbar.
This example uses the `startAction` prop to create a collapsible button.

<example name="ExampleCollapsibleList">
```tsx file="ExampleCollapsibleList.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function ExampleCollapsibleList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <Box sx={{ width: 320, pl: '24px' }}>
      <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
          '--joy-palette-primary-plainColor': '#8a4baf',
          '--joy-palette-neutral-plainHoverBg': 'transparent',
          '--joy-palette-neutral-plainActiveBg': 'transparent',
          '--joy-palette-primary-plainHoverBg': 'transparent',
          '--joy-palette-primary-plainActiveBg': 'transparent',
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-text-secondary': '#635e69',
            '--joy-palette-primary-plainColor': '#d48cff',
          },
          '--List-insetStart': '32px',
          '--ListItem-paddingY': '0px',
          '--ListItem-paddingRight': '16px',
          '--ListItem-paddingLeft': '21px',
          '--ListItem-startActionWidth': '0px',
          '--ListItem-startActionTranslateX': '-50%',
          [`& .${listItemButtonClasses.root}`]: {
            borderLeftColor: 'divider',
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            borderLeftColor: 'currentColor',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >
        <ListItem nested>
          <ListItem component="div" startAction={<ReceiptLong />}>
            <Typography level="body-xs" sx={{ textTransform: 'uppercase' }}>
              Documentation
            </Typography>
          </ListItem>
          <List sx={{ '--List-gap': '0px' }}>
            <ListItem>
              <ListItemButton selected>Overview</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ '--List-gap': '0px' }}>
          <ListItemButton>Quick Start</ListItemButton>
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen(!open)}
            >
              <KeyboardArrowDown
                sx={[
                  open ? { transform: 'initial' } : { transform: 'rotate(-90deg)' },
                ]}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={[
                open
                  ? { fontWeight: 'bold', color: 'text.primary' }
                  : { fontWeight: null, color: 'inherit' },
              ]}
            >
              Tutorial
            </Typography>
            <Typography component="span" level="body-xs">
              9
            </Typography>
          </ListItem>
          {open && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>Overview</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  0. Set Up Your Development Environment
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  1. Create and Deploy Your First Gatsby Site
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>2. Use and Style React components</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen2((bool) => !bool)}
            >
              <KeyboardArrowDown
                sx={[
                  open2 ? { transform: 'initial' } : { transform: 'rotate(-90deg)' },
                ]}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={[
                open2
                  ? { fontWeight: 'bold', color: 'text.primary' }
                  : { fontWeight: null, color: 'inherit' },
              ]}
            >
              How-to Guides
            </Typography>
            <Typography component="span" level="body-xs">
              39
            </Typography>
          </ListItem>
          {open2 && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>Overview</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Local Development</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Routing</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Styling</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </Box>
  );
}
```
</example>

### Navigation menu

Inspired by the [APG Navigation Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/) design pattern.
This example uses a combination of horizontal and vertical lists to form the navigation menu bar.

It also supports keyboard navigation, inspired by the [Roving UX](https://github.com/argyleink/roving-ux) technique.

<example name="ExampleNavigationMenu">
```tsx file="ExampleNavigationMenu.tsx"
import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import HomeRounded from '@mui/icons-material/HomeRounded';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Person from '@mui/icons-material/Person';
import Apps from '@mui/icons-material/Apps';
import FactCheck from '@mui/icons-material/FactCheck';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';

type Options = {
  initialActiveIndex: null | number;
  vertical: boolean;
  handlers?: {
    onKeyDown: (
      event: React.KeyboardEvent<HTMLAnchorElement>,
      fns: { setActiveIndex: React.Dispatch<React.SetStateAction<number | null>> },
    ) => void;
  };
};

const useRovingIndex = (options?: Options) => {
  const {
    initialActiveIndex = 0,
    vertical = false,
    handlers = {
      onKeyDown: () => {},
    },
  } = options || {};
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    initialActiveIndex!,
  );
  const targetRefs = React.useRef<Array<HTMLAnchorElement>>([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex! + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex! - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index: number) => ({
    ref: (ref: HTMLAnchorElement) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (event: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (Number.isInteger(activeIndex)) {
        if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
          focusNext();
        }
        if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
          focusPrevious();
        }
        handlers.onKeyDown?.(event, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};

type AboutMenuProps = {
  focusNext: () => void;
  focusPrevious: () => void;
  onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const AboutMenu = React.forwardRef(
  (
    { focusNext, focusPrevious, ...props }: AboutMenuProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
    const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
      initialActiveIndex: null,
      vertical: true,
      handlers: {
        onKeyDown: (event, fns) => {
          if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
            event.preventDefault();
          }
          if (event.key === 'Tab') {
            setAnchorEl(null);
            fns.setActiveIndex(null);
          }
          if (event.key === 'ArrowLeft') {
            setAnchorEl(null);
            focusPrevious();
          }
          if (event.key === 'ArrowRight') {
            setAnchorEl(null);
            focusNext();
          }
        },
      },
    });

    const open = Boolean(anchorEl);
    const id = open ? 'about-popper' : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? 'true' : 'false'}
            ref={ref}
            {...props}
            role="menuitem"
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={[open && ((theme) => theme.variants.plainHover.neutral)]}
          >
            About <KeyboardArrowDown />
          </ListItemButton>
          <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxShadow: 'md',
                borderRadius: 'sm',
                '--List-radius': '8px',
                '--List-padding': '4px',
                '--ListDivider-gap': '4px',
                '--ListItemDecorator-size': '32px',
              }}
            >
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                  <ListItemDecorator>
                    <Apps />
                  </ListItemDecorator>
                  Overview
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                  <ListItemDecorator>
                    <Person />
                  </ListItemDecorator>
                  Administration
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                  <ListItemDecorator>
                    <FactCheck />
                  </ListItemDecorator>
                  Facts
                </ListItemButton>
              </ListItem>
            </List>
          </Popper>
        </div>
      </ClickAwayListener>
    );
  },
);

type AdmissionsMenuProps = {
  focusNext: () => void;
  focusPrevious: () => void;
  onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const AdmissionsMenu = React.forwardRef(
  (
    { focusNext, focusPrevious, ...props }: AdmissionsMenuProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
    const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
      initialActiveIndex: null,
      vertical: true,
      handlers: {
        onKeyDown: (event, fns) => {
          if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
            event.preventDefault();
          }
          if (event.key === 'Tab') {
            setAnchorEl(null);
            fns.setActiveIndex(null);
          }
          if (event.key === 'ArrowLeft') {
            setAnchorEl(null);
            focusPrevious();
          }
          if (event.key === 'ArrowRight') {
            setAnchorEl(null);
            focusNext();
          }
        },
      },
    });

    const open = Boolean(anchorEl);
    const id = open ? 'admissions-popper' : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? 'true' : 'false'}
            ref={ref}
            {...props}
            role="menuitem"
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={[open && ((theme) => theme.variants.plainHover.neutral)]}
          >
            Admissions <KeyboardArrowDown />
          </ListItemButton>
          <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxShadow: 'md',
                borderRadius: 'sm',
                minWidth: 180,
                '--List-radius': '8px',
                '--List-padding': '4px',
                '--ListDivider-gap': '4px',
              }}
            >
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                  <ListItemContent>Apply</ListItemContent>
                  <Chip size="sm" variant="soft" color="danger">
                    Last 2 days!
                  </Chip>
                </ListItemButton>
              </ListItem>
              <ListDivider />
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                  Visit
                </ListItemButton>
              </ListItem>
              <ListItem
                role="none"
                endAction={
                  <IconButton variant="outlined" color="neutral" size="sm">
                    <BookmarkAdd />
                  </IconButton>
                }
              >
                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                  Photo tour
                </ListItemButton>
              </ListItem>
            </List>
          </Popper>
        </div>
      </ClickAwayListener>
    );
  },
);

export default function ExampleNavigationMenu() {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();
  return (
    <Box sx={{ minHeight: 190 }}>
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          '--List-radius': '8px',
          '--List-padding': '4px',
          '--List-gap': '8px',
          '--ListItem-gap': '0px',
        }}
      >
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            {...getTargetProps(0)}
            component="a"
            href="#navigation-menu"
          >
            <ListItemDecorator>
              <HomeRounded />
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <AboutMenu
            onMouseEnter={() => {
              setActiveIndex(1);
              targets[1].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(1)}
          />
        </ListItem>
        <ListItem role="none">
          <AdmissionsMenu
            onMouseEnter={() => {
              setActiveIndex(2);
              targets[2].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(2)}
          />
        </ListItem>
      </List>
    </Box>
  );
}
```
</example>

## Accessibility

To ensure that your List is accessible, here are some factors you should consider:

- Use the appropriate HTML semantic element for the list (for example `ol` or `ul`), to ensure that assistive technologies can correctly interpret the list structure.
- Make sure to use a meaningful name that describes the content of the list in the `aria-labelledby` prop.
- Use `role` attributes to provide additional information about the purpose of the list and its items.
  For example, use `role="list"` for the list and `role="listitem"` for each list item.

## Anatomy

The List component is composed of a root `<ul>` element with one or more child `<li>` elements rendered by the List Item component.
All components nested inside the List Item are optional.
The [List Divider](#divider) (when present) renders an `<li>` with `role="separator"`, while the [List Subheader](#nested-list) renders a `<div>`.

```html
<ul class="MuiList-root">
  <li class="MuiListItem-root">
    <div class="MuiListItemButton-root" role="button">
      <span class="MuiListItemDecorator-root">
        <!-- Icon for List Item Decorator -->
      </span>
      <div class="MuiListItemContent-root">
        <!-- List Item content -->
      </div>
    </div>
  </li>
</ul>
```
---
productId: joy-ui
title: React Breadcrumbs component
components: Breadcrumbs
githubLabel: 'component: breadcrumbs'
---

# Breadcrumbs

A breadcrumb trail is a navigational tool that helps users keep track of their location within an app.

## Introduction

The Breadcrumbs component consists of a list of links that show the user the hierarchy of a given page in relation to the app's structure.
It provides a simple visual aid for better context and ease of navigation between higher- and lower-level pages.

<example name="BreadcrumbsUsage">
```jsx file="BreadcrumbsUsage.js"
import * as React from 'react';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function BreadcrumbsUsage() {
  return (
    <JoyUsageDemo
      componentName="Breadcrumbs"
      data={[
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          propName: 'separator',
          knob: 'input',
          defaultValue: '/',
        },
        {
          propName: 'children',
          defaultValue: '<Link />\n  ...',
        },
      ]}
      renderDemo={(props) => (
        <Breadcrumbs {...props} aria-label="breadcrumbs">
          <Link
            // The `preventDefault` is for demonstration purposes, generally, you don't need it in your application
            onClick={(event) => event.preventDefault()}
            color="neutral"
            href="/"
          >
            MUI
          </Link>
          <Link
            // The `preventDefault` is for demonstration purposes, generally, you don't need it in your application
            onClick={(event) => event.preventDefault()}
            color="neutral"
            href="/joy-ui/getting-started/installation/"
          >
            Joy
          </Link>
          <Typography>Breadcrumbs</Typography>
        </Breadcrumbs>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Breadcrumbs from '@mui/joy/Breadcrumbs';
```

The Breadcrumbs component acts as a wrapper for navigation links.
It's designed to be used with the [Link and Typography components](#usage-with-link-and-typography), as shown below:

<example name="BasicBreadcrumbs">
```tsx file="BasicBreadcrumbs.tsx"
import * as React from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function BasicBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumbs">
      {['Home', 'TV Shows', 'Futurama', 'Characters'].map((item: string) => (
        <Link key={item} color="neutral" href="#basics">
          {item}
        </Link>
      ))}
      <Typography>Dr. Zoidberg</Typography>
    </Breadcrumbs>
  );
}
```
</example>

## Customization

### Sizes

The Breadcrumbs component comes in three sizes: `sm`, `md` (default), and `lg`:

<example name="BreadcrumbsSizes">
```tsx file="BreadcrumbsSizes.tsx"
import * as React from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

export default function BreadcrumbsSizes() {
  return (
    <Stack sx={{ display: 'flex', alignItems: 'center' }}>
      <Breadcrumbs separator="—" aria-label="breadcrumbs" size="sm">
        {['Home', 'TV Shows', 'Futurama', 'Characters'].map((item) => (
          <Link key={item} color="neutral" href="#sizes">
            {item}
          </Link>
        ))}

        <Typography>Dr. Zoidberg</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator="—" aria-label="breadcrumbs" size="md">
        {['Home', 'TV Shows', 'Futurama', 'Characters'].map((item) => (
          <Link key={item} color="neutral" href="#sizes">
            {item}
          </Link>
        ))}

        <Typography>Dr. Zoidberg</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator="—" aria-label="breadcrumbs" size="lg">
        {['Home', 'TV Shows', 'Futurama', 'Characters'].map((item) => (
          <Link key={item} color="neutral" href="#sizes">
            {item}
          </Link>
        ))}

        <Typography>Dr. Zoidberg</Typography>
      </Breadcrumbs>
    </Stack>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Separators

By default, the Breadcrumbs component inserts a forward slash (/) between each navigation item.
Use the `separator` prop to define a custom separator, which can be a character or a symbol as well as an icon:

<example name="SeparatorBreadcrumbs">
```tsx file="SeparatorBreadcrumbs.tsx"
import * as React from 'react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function SeparatorBreadcrumbs() {
  return (
    <Breadcrumbs separator={<KeyboardArrowLeft />} aria-label="breadcrumbs">
      <Typography>Amy</Typography>
      {['Characters', 'Futurama', 'TV Shows', 'Home'].map((item: string) => (
        <Link key={item} color="neutral" href="#separators">
          {item}
        </Link>
      ))}
    </Breadcrumbs>
  );
}
```
</example>

## Usage with Link and Typography

```jsx
import Link from '@mui/joy/Link';
```

```jsx
import Typography from '@mui/joy/Typography';
```

The Breadcrumbs component doesn't accept common Joy UI style props like `variant`, `color`, `startDecorator`, or `endDecorator`—but [Link](https://mui.com/joy-ui/react-link/) and [Typography](https://mui.com/joy-ui/react-typography/) do.
As such, most custom styles that affect the content should be applied directly to those components rather than Breadcrumbs.

The demo below shows how to add an icon to the Link with `startDecorator` and change the color with the `color` prop:

<example name="BreadcrumbsWithIcon">
```tsx file="BreadcrumbsWithIcon.tsx"
import PublicIcon from '@mui/icons-material/Public';
import * as React from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function BreadcrumbsWithIcon() {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumbs">
      <Link color="primary" href="/">
        <PublicIcon sx={{ mr: 0.5 }} />
        United States
      </Link>
      {['Springfield', 'Simpson'].map((item) => (
        <Link key={item} color="success" href="#usage-with-link-and-typography">
          {item}
        </Link>
      ))}

      <Typography>Homer</Typography>
    </Breadcrumbs>
  );
}
```
</example>

## CSS variables playground

Play around with the CSS variables available to the Breadcrumbs component to see how the design changes.
You can use these to customize the component with both the `sx` prop and the theme.

<example name="BreadcrumbsVariables">
```tsx file="BreadcrumbsVariables.tsx"
import * as React from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function BreadcrumbsVariables() {
  return (
    <JoyVariablesDemo
      componentName="Breadcrumbs"
      data={[
        {
          var: '--Breadcrumbs-gap',
          defaultValue: '4px',
        },
      ]}
      renderDemo={(sx) => (
        <Breadcrumbs sx={sx}>
          {['Menu 1', 'Menu 2'].map((item) => (
            <Link key={item} color="neutral" href="#css-variable-playground">
              {item}
            </Link>
          ))}

          <Typography>Menu 3</Typography>
        </Breadcrumbs>
      )}
    />
  );
}
```
</example>

## Common examples

### Condensed Breadcrumbs

When the page hierarchy is deeply nested, you may want to condense multiple levels into one.
The demo below only displays a few previous levels until you click the ellipsis to show the full hierarchy:

<example name="CondensedBreadcrumbs">
```tsx file="CondensedBreadcrumbs.tsx"
import FolderIcon from '@mui/icons-material/Folder';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

export default function CondensedBreadcrumbs() {
  const [condensed, setCondensed] = React.useState<boolean>(true);
  const [navigationItems, setNavigationItems] = React.useState<string[]>([
    'Programs',
    'Files',
    'Services',
  ]);

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumbs">
      {condensed ? (
        <Button
          size="sm"
          onClick={() => {
            setNavigationItems((prev) => ['Root', 'Home', ...prev]);
            setCondensed(false);
          }}
          variant="plain"
          color="primary"
        >
          •••
        </Button>
      ) : null}
      {navigationItems.map((item: string) => (
        <Link key={item} color="primary" href="#condensed-breadcrumbs">
          <FolderIcon sx={{ mr: 0.5 }} color="inherit" />
          {item}
        </Link>
      ))}
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <FolderIcon sx={{ mr: 0.5 }} />
        bablo.txt
      </Typography>
    </Breadcrumbs>
  );
}
```
</example>

### Condensed with Menu

```jsx
import Menu from '@mui/joy/Menu';
```

As an alternative to the behavior of the condensed demo above, consider adding a [Menu](https://mui.com/joy-ui/react-menu/) component to display the condensed links in a dropdown list:

<example name="BreadcrumbsWithMenu">
```tsx file="BreadcrumbsWithMenu.tsx"
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import * as React from 'react';

export default function BreadcrumbsWithMenu() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement> | null) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="with-menu-demo-breadcrumbs"
      >
        <MenuItem onClick={handleClose}>Breadcrumb 2</MenuItem>
        <MenuItem onClick={handleClose}>Breadcrumb 3</MenuItem>
        <MenuItem onClick={handleClose}>Breadcrumb 4</MenuItem>
      </Menu>
      <Breadcrumbs aria-label="breadcrumbs">
        <Link color="primary" href="#condensed-with-menu">
          Breadcrumb 1
        </Link>
        <Button size="sm" onClick={handleClick} variant="plain" color="primary">
          •••
        </Button>
        <Link color="primary" href="#condensed-with-menu">
          Breadcrumb 5
        </Link>
        <Link color="primary" href="#condensed-with-menu">
          Breadcrumb 6
        </Link>
      </Breadcrumbs>
    </React.Fragment>
  );
}
```
</example>

## Accessibility

Be sure to add an informative `aria-label` description to the Breadcrumbs component.

The following features, which follows [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/), are included to optimize the component's baseline accessibility:

- The set of links is structured using an ordered list (`<ol>`).
- Visual separators between links are hidden with `aria-hidden` to prevent screen readers from announcing them.
- A `<nav>` element with an `aria-label` identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it's easy to locate with assistive technology.
- The link to the current page has `aria-current` set to `page`.

## Anatomy

The Breadcrumbs component is composed of a root `<nav>` that wraps around an `<ol>`, with list items corresponding to the trail of links and their separators:

```html
<nav aria-label="breadcrumbs" class="MuiBreadcrumbs-root">
  <ol class="MuiBreadcrumbs-ol">
    <li class="MuiBreadcrumbs-li">
      <!-- Link or Typography -->
    </li>
    <li aria-hidden="true" class="MuiBreadcrumbs-separator">/</li>
    <li class="MuiBreadcrumbs-li css-1rqbcrs-MuiBreadcrumbs-ol">
      <!-- Link or Typography -->
    </li>
  </ol>
</nav>
```
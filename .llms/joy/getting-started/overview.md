---
title: Overview
---

# Joy UI - Overview

Joy UI is an open-source React component library that implements MUI's own design principles.

## Introduction

Joy UI is an open-source React component library that follows a lightly opinionated design direction, for a clean and modern UI that gives you plenty of room to customize the look and feel.

:::warning
Joy UI is in beta and _development is currently on hold_.
When starting a new project from scratch, we recommend Material UI over Joy UI because we can guarantee ongoing support.

Keep in mind that the maintainers are primarily focused on other projects and may not be able to respond in a timely manner to issues or pull requests related to Joy UI.
:::

## Why use Joy UI

Maintained by MUI, **Joy UI is an alternative to Material UI** for projects that **don't adhere to Material Design** guidelines as a design system starting point.

These two sister libraries feature many of the same components, with similarly designed component APIs and customization features.
Joy UI applies the decade of lessons learned in building and maintaining Material UI, for developers looking for sleek design, next-gen DX, and extensible components.

Learn more about why you should use Joy UI for your next project below.

### Beautiful out of the box

Joy UI follows a lightly opinionated design direction called Joy Design.
Simple and functional, it offers a thoughtfully crafted set of defaults to ensure that your next project looks and feels great before you even begin customizing.

For example, the [Order Dashboard template](https://mui.com/joy-ui/getting-started/templates/order-dashboard/) (pictured below) is minimally customized beyond defaults, to demonstrate how meticulously we've designed each component for consistency and cohesion across the UI:

<img src="/static/joy-ui/overview/order-dashboard.png" style="width: 814px; margin-top: 4px; margin-bottom: 8px;" alt="The Order Dashboard template, inspired by Untitled UI and built using Joy UI with very little customizations." width="1628" height="400" />

### Highly customizable

You should feel inspired and empowered to change, extend, and revamp Joy UI's appearance and behavior with ease.
Drawing from many years of experience maintaining Material UI, Joy UI applies new approaches to customization, enabling you to customize every piece of the components to match your unique design.

For example, the demo below shows how to customize the [List](https://mui.com/joy-ui/react-list/) component using built-in CSS variables to match the design of the [Gatsby documentation side nav](https://www.gatsbyjs.com/docs/):

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

### Developer experience

Joy UI draws its name from the idea that it should spark joy in the creative process of building apps.
Providing an unrivaled developer experience is at the heart of this.

For example, observe how each element of the [Input](https://mui.com/joy-ui/react-input/) component automatically calculates and adjusts its own dimensions relative to the border radius, saving you from the tedium of doing it yourself:

<example name="InputVariables">
```jsx file="InputVariables.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ListDivider from '@mui/joy/ListDivider';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

export default function InputVariables() {
  const [radius, setRadius] = React.useState(16);
  const [childHeight, setChildHeight] = React.useState(28);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Input
        size="md"
        placeholder="email@mui.com"
        endDecorator={
          <Button variant="soft" size="sm">
            Subscribe
          </Button>
        }
        sx={{
          '--Input-radius': `${radius}px`,
          '--Input-decoratorChildHeight': `${childHeight}px`,
        }}
      />
      <ListDivider component="hr" />
      <Box sx={{ mx: 'auto', display: 'flex', gap: 2 }}>
        <FormControl>
          <FormLabel>--Input-radius</FormLabel>
          <Input
            size="sm"
            type="number"
            value={radius}
            onChange={(event) => setRadius(event.target.valueAsNumber)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>--Input-decoratorChildHeight</FormLabel>
          <Input
            size="sm"
            type="number"
            value={childHeight}
            onChange={(event) => setChildHeight(event.target.valueAsNumber)}
          />
        </FormControl>
      </Box>
    </Box>
  );
}
```
</example>

### Accessibility

Joy UI components are built on top of [MUI Base's unstyled components and low-level hooks](https://mui.com/base-ui/getting-started/), giving you many accessibility features out of the box.
We strive to make all components accessible to end users who require assistive technology, and offer suggestions for optimizing accessibility throughout our documentation.

Joy UI's Form Control component automatically generates a unique ID that links the Input that it wraps with the Form Label and Form Helper Text components, ensuring that your app complies with this guideline:

<example name="InputField">
```tsx file="InputField.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

export default function InputField() {
  return (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input placeholder="Placeholder" />
      <FormHelperText>This is a helper text.</FormHelperText>
    </FormControl>
  );
}
```
</example>

## Start now

Get started with Joy UI today through some of these useful resources:
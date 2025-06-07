---
productId: material-ui
title: Detect click outside React component
components: ClickAwayListener
githubLabel: 'component: ClickAwayListener'
---

# Click-Away Listener

The Click-Away Listener component detects when a click event happens outside of its child element.

## Introduction

Click-Away Listener is a utility component that listens for click events outside of its child.
(Note that it only accepts _one_ child element.)
This is useful for components like the [Popper](https://mui.com/material-ui/react-popper/) which should close when the user clicks anywhere else in the document.
Click-Away Listener also supports the [Portal](https://mui.com/material-ui/react-portal/) component.

The demo below shows how to hide a menu dropdown when users click anywhere else on the page:

<example name="ClickAway">
```tsx file="ClickAway.tsx"
import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SxProps } from '@mui/system';

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <button type="button" onClick={handleClick}>
          Open menu dropdown
        </button>
        {open ? (
          <Box sx={styles}>
            Click me, I will stay visible until you click outside.
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
```
</example>

## Basics

### Import

```jsx
import ClickAwayListener from '@mui/material/ClickAwayListener';
```

## Customization

### Use with Portal

The following demo uses the [Portal](https://mui.com/material-ui/react-portal/) component to render the dropdown into a new subtree outside of the current DOM hierarchy:

<example name="PortalClickAway">
```tsx file="PortalClickAway.tsx"
import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Portal from '@mui/material/Portal';
import { SxProps } from '@mui/system';

export default function PortalClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: 'fixed',
    width: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <button type="button" onClick={handleClick}>
          Open menu dropdown
        </button>
        {open ? (
          <Portal>
            <Box sx={styles}>
              Click me, I will stay visible until you click outside.
            </Box>
          </Portal>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
```
</example>

### Listening for leading events

By default, the Click-Away Listener component responds to **trailing events**—the _end_ of a click or touch.

You can set the component to listen for **leading events** (the start of a click or touch) using the `mouseEvent` and `touchEvent` props, as shown in the following demo:

:::warning
When the component is set to listen for leading events, interactions with the scrollbar are ignored.
:::

<example name="LeadingClickAway">
```tsx file="LeadingClickAway.tsx"
import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SxProps } from '@mui/system';

export default function LeadingClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: 'relative' }}>
        <button type="button" onClick={handleClick}>
          Open menu dropdown
        </button>
        {open ? (
          <Box sx={styles}>
            Click me, I will stay visible until you click outside.
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
```
</example>

## Accessibility

By default, Click-Away Listener adds an `onClick` handler to its child.
This can result in screen readers announcing that the child is clickable, even though this `onClick` handler has no effect on the child itself.

To prevent this behavior, add `role="presentation"` to the child element:

```tsx
<ClickAwayListener>
  <div role="presentation">
    <h1>non-interactive heading</h1>
  </div>
</ClickAwayListener>
```

This is also required to fix a known issue in NVDA when using Firefox that prevents the announcement of alert messages—see [this GitHub issue](https://github.com/mui/material-ui/issues/29080) for details.
---
productId: material-ui
title: Backdrop React Component
components: Backdrop
githubLabel: 'component: backdrop'
githubSource: packages/mui-material/src/Backdrop
---

# Backdrop

The Backdrop component narrows the user's focus to a particular element on the screen.

The Backdrop signals a state change within the application and can be used for creating loaders, dialogs, and more.
In its simplest form, the Backdrop component will add a dimmed layer over your application.

## Example

The demo below shows a basic Backdrop with a Circular Progress component in the foreground to indicate a loading state.
After clicking **Show Backdrop**, you can click anywhere on the page to close it.

<example name="SimpleBackdrop">
```tsx file="SimpleBackdrop.tsx"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
```
</example>
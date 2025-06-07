---
productId: joy-ui
title: React Sheet component
components: Sheet
---

# Sheet

Sheet is a generic container that supports Joy UI's global variants.

## Introduction

The `Sheet` container is a generic container.
It's a sibling to the [`Box`](https://mui.com/system/react-box/) component, and equivalent to Material UI's [`Paper`](https://mui.com/material-ui/react-paper/), with the difference being that it supports Joy UI's global variants out of the box.

<example name="SheetUsage">
```jsx file="SheetUsage.js"
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function SheetUsage() {
  return (
    <JoyUsageDemo
      componentName="Sheet"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'plain',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },
        {
          propName: 'color',
          knob: 'color',
          defaultValue: 'neutral',
          options: ['neutral', 'primary', 'danger', 'info', 'success', 'warning'],
        },
      ]}
      renderDemo={(props) => (
        <Sheet
          {...props}
          sx={{
            width: 250,
            height: 200,
            m: 1,
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Sheet
        </Sheet>
      )}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Sheet from '@mui/joy/Sheet';

export default function MyApp() {
  return <Sheet>Holy sheet!</Sheet>;
}
```

### Basic usage

The `Sheet` component, in addition to the variants, also has access to the `color` prop, allowing you to use every palette of the theme.

<example name="SimpleSheet">
```tsx file="SimpleSheet.tsx"
import Sheet from '@mui/joy/Sheet';
import * as React from 'react';

export default function SimpleSheet() {
  return (
    <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
      Hello world!
    </Sheet>
  );
}
```
</example>
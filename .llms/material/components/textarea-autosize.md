---
productId: material-ui
title: Textarea Autosize React component
components: TextareaAutosize
githubLabel: 'component: TextareaAutosize'
---

# Textarea Autosize

The Textarea Autosize component automatically adjusts its height to match the length of the content within.

## Introduction

Textarea Autosize is a utility component that replaces the native `<textarea>` HTML.
Its height automatically adjusts as a response to keyboard inputs and window resizing events.

By default, an empty Textarea Autosize component renders as a single row, as shown in the following demo:

<example name="EmptyTextarea">
```tsx file="EmptyTextarea.tsx"
import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function EmptyTextarea() {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Empty"
      style={{ width: 200 }}
    />
  );
}
```
</example>

## Basics

### Import

```jsx
import TextareaAutosize from '@mui/material/TextareaAutosize';
```

### Minimum height

Use the `minRows` prop to define the minimum height of the component:

<example name="MinHeightTextarea">
```tsx file="MinHeightTextarea.tsx"
import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function MinHeightTextarea() {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Minimum 3 rows"
      style={{ width: 200 }}
    />
  );
}
```
</example>

### Maximum height

Use the `maxRows` prop to define the maximum height of the component:

<example name="MaxHeightTextarea">
```tsx file="MaxHeightTextarea.tsx"
import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function MaxHeightTextarea() {
  return (
    <TextareaAutosize
      maxRows={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
      style={{ width: 200 }}
    />
  );
}
```
</example>
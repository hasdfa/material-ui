# Masonry API

The Masonry component API documentation.

## Import

```
import Masonry from '@mui/lab/Masonry';
// or
import { Masonry } from '@mui/lab';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `columns` | `union` Array\| string><br>\| number<br>\| object<br>\| string | `4` | - |
| `component` | `elementType` | - | - |
| `defaultColumns` | `number` | - | - |
| `defaultHeight` | `number` | - | - |
| `defaultSpacing` | `number` | - | - |
| `sequential` | `bool` | `false` | - |
| `spacing` | `union` Array\| string><br>\| number<br>\| object<br>\| string | `1` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `root` | `MuiMasonry-root` | Styles applied to the root element. |
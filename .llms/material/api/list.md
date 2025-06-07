# List API

The List component API documentation.

## Import

```
import List from '@mui/material/List';
// or
import { List } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `dense` | `bool` | `false` | - |
| `disablePadding` | `bool` | `false` | - |
| `subheader` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLUListElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `dense` | `MuiList-dense` | Styles applied to the root element if dense. |
| `padding` | `MuiList-padding` | Styles applied to the root element unless \`disablePadding={true}\`. |
| `root` | `MuiList-root` | Styles applied to the root element. |
| `subheader` | `MuiList-subheader` | Styles applied to the root element if a \`subheader\` is provided. |
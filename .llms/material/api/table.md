# Table API

The Table component API documentation.

## Import

```
import Table from '@mui/material/Table';
// or
import { Table } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `padding` | `enum`'checkbox'<br>\| 'none'<br>\| 'normal' | `'normal'` | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `stickyHeader` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLTableElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `root` | `MuiTable-root` | Styles applied to the root element. |
| `stickyHeader` | `MuiTable-stickyHeader` | Styles applied to the root element if \`stickyHeader={true}\`. |
# TableRow API

The TableRow component API documentation.

## Import

```
import TableRow from '@mui/material/TableRow';
// or
import { TableRow } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `hover` | `bool` | `false` | - |
| `selected` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLTableRowElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `footer` | `MuiTableRow-footer` | Styles applied to the root element if table variant="footer". |
| `head` | `MuiTableRow-head` | Styles applied to the root element if table variant="head". |
| `hover` | `MuiTableRow-hover` | State class applied to the root element if \`hover={true}\`. |
| `root` | `MuiTableRow-root` | Styles applied to the root element. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\`. |
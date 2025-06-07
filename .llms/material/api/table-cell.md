# TableCell API

The TableCell component API documentation.

## Import

```
import TableCell from '@mui/material/TableCell';
// or
import { TableCell } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `align` | `enum`'center'<br>\| 'inherit'<br>\| 'justify'<br>\| 'left'<br>\| 'right' | `'inherit'` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `padding` | `enum`'checkbox'<br>\| 'none'<br>\| 'normal' | - | - |
| `scope` | `string` | - | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | - | - |
| `sortDirection` | `enum`'asc'<br>\| 'desc'<br>\| false | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'body'<br>\| 'footer'<br>\| 'head'<br>\| string | - | - |

:::info
The `ref` is forwarded to the HTMLTableCellElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `alignCenter` | `MuiTableCell-alignCenter` | Styles applied to the root element if \`align="center"\`. |
| `alignJustify` | `MuiTableCell-alignJustify` | Styles applied to the root element if \`align="justify"\`. |
| `alignLeft` | `MuiTableCell-alignLeft` | Styles applied to the root element if \`align="left"\`. |
| `alignRight` | `MuiTableCell-alignRight` | Styles applied to the root element if \`align="right"\`. |
| `body` | `MuiTableCell-body` | Styles applied to the root element if \`variant="body"\` or \`context.table.body\`. |
| `footer` | `MuiTableCell-footer` | Styles applied to the root element if \`variant="footer"\` or \`context.table.footer\`. |
| `head` | `MuiTableCell-head` | Styles applied to the root element if \`variant="head"\` or \`context.table.head\`. |
| `paddingCheckbox` | `MuiTableCell-paddingCheckbox` | Styles applied to the root element if \`padding="checkbox"\`. |
| `paddingNone` | `MuiTableCell-paddingNone` | Styles applied to the root element if \`padding="none"\`. |
| `root` | `MuiTableCell-root` | Styles applied to the root element. |
| `sizeMedium` | `MuiTableCell-sizeMedium` | Styles applied to the root element if \`size="medium"\`. |
| `sizeSmall` | `MuiTableCell-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
| `stickyHeader` | `MuiTableCell-stickyHeader` | Styles applied to the root element if \`context.table.stickyHeader={true}\`. |
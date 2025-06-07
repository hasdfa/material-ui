# TablePagination API

The TablePagination component API documentation.

## Import

```
import TablePagination from '@mui/material/TablePagination';
// or
import { TablePagination } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [TableCell](/material-ui/api/table-cell/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `count` | `custom` integer | - | - |
| `onPageChange` | `func` | - | - |
| `page` | `custom` integer | - | - |
| `rowsPerPage` | `custom` integer | - | - |
| `ActionsComponent` | `elementType` | `TablePaginationActions` | - |
| `backIconButtonProps` | `object` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `getItemAriaLabel` | `func` | ``function defaultGetAriaLabel(type) {<br>  return `Go to ${type} page`;<br>}`` | - |
| `labelDisplayedRows` | `func` | ``function defaultLabelDisplayedRows({ from, to, count }) {<br>  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;<br>}`` | - |
| `labelRowsPerPage` | `node` | `'Rows per page:'` | - |
| `nextIconButtonProps` | `object` | - | - |
| `onRowsPerPageChange` | `func` | - | - |
| `rowsPerPageOptions` | `arrayOf` Array\| { label: string, value: number }> | `[10, 25, 50, 100]` | - |
| `SelectProps` | `object` | `{}` | - |
| `showFirstButton` | `bool` | `false` | - |
| `showLastButton` | `bool` | `false` | - |
| `slotProps` | `shape`{ actions?: { firstButton?: object, firstButtonIcon?: object, lastButton?: object, lastButtonIcon?: object, nextButton?: object, nextButtonIcon?: object, previousButton?: object, previousButtonIcon?: object }, displayedRows?: func<br>\| object, menuItem?: func<br>\| object, root?: func<br>\| object, select?: object, selectLabel?: func<br>\| object, spacer?: func<br>\| object, toolbar?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ actions?: { firstButton?: elementType, firstButtonIcon?: elementType, lastButton?: elementType, lastButtonIcon?: elementType, nextButton?: elementType, nextButtonIcon?: elementType, previousButton?: elementType, previousButtonIcon?: elementType }, displayedRows?: elementType, menuItem?: elementType, root?: elementType, select?: elementType, selectLabel?: elementType, spacer?: elementType, toolbar?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLTableCellElement element.
:::

### Inheritance

The props of the [TableCell](/material-ui/api/table-cell/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `TableCell` | The component that renders the root slot.<br>\[Follow this guide\](https://mui.com/material-ui/api/table-cell/#props) to learn more about the requirements for this component. |
| `toolbar` | `Toolbar` | The component that renders the toolbar slot.<br>\[Follow this guide\](https://mui.com/material-ui/api/toolbar/#props) to learn more about the requirements for this component. |
| `spacer` | `'div'` | The tag that renders the spacer slot. |
| `selectLabel` | `'p'` | The tag that renders the selectLabel slot. |
| `select` | `Select` | The component that renders the select slot.<br>\[Follow this guide\](https://mui.com/material-ui/api/select/#props) to learn more about the requirements for this component. |
| `menuItem` | `MenuItem` | The component that renders the select slot.<br>\[Follow this guide\](https://mui.com/material-ui/api/menu-item/#props) to learn more about the requirements for this component. |
| `displayedRows` | `'p'` | The tag that renders the displayedRows slot. |
| `actions` | `undefined` | The slots that passed to the actions slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `input` | `MuiTablePagination-input` | Styles applied to the Select component \`root\` element. |
| `selectIcon` | `MuiTablePagination-selectIcon` | Styles applied to the Select component \`icon\` class. |
| `selectRoot` | `MuiTablePagination-selectRoot` | Styles applied to the Select component \`root\` element. |
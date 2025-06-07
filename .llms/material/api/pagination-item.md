# PaginationItem API

The PaginationItem component API documentation.

## Import

```
import PaginationItem from '@mui/material/PaginationItem';
// or
import { PaginationItem } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `classes` | `object` | - | - |
| `color` | `union`'primary'<br>\| 'secondary'<br>\| 'standard'<br>\| string | `'standard'` | - |
| `component` | `elementType` | - | - |
| `components` | `shape`{ first?: elementType, last?: elementType, next?: elementType, previous?: elementType } | `{}` | - |
| `disabled` | `bool` | `false` | - |
| `page` | `node` | - | - |
| `selected` | `bool` | `false` | - |
| `shape` | `enum`'circular'<br>\| 'rounded' | `'circular'` | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| 'large'<br>\| string | `'medium'` | - |
| `slotProps` | `shape`{ first?: func<br>\| object, last?: func<br>\| object, next?: func<br>\| object, previous?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ first?: elementType, last?: elementType, next?: elementType, previous?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `type` | `enum`'end-ellipsis'<br>\| 'first'<br>\| 'last'<br>\| 'next'<br>\| 'page'<br>\| 'previous'<br>\| 'start-ellipsis' | `'page'` | - |
| `variant` | `union`'outlined'<br>\| 'text'<br>\| string | `'text'` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `first` | `undefined` |  |
| `last` | `undefined` |  |
| `next` | `undefined` |  |
| `previous` | `undefined` |  |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorPrimary` | `MuiPaginationItem-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiPaginationItem-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `ellipsis` | `MuiPaginationItem-ellipsis` | Styles applied to the root element if \`type="start-ellipsis"\` or \`type="end-ellipsis"\`. |
| `firstLast` | `MuiPaginationItem-firstLast` | Styles applied to the root element if \`type="first"\` or type="last". |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if keyboard focused. |
| `icon` | `MuiPaginationItem-icon` | Styles applied to the icon to display. |
| `outlined` | `MuiPaginationItem-outlined` | Styles applied to the root element if \`variant="outlined"\`. |
| `outlinedPrimary` | `MuiPaginationItem-outlinedPrimary` | Styles applied to the root element if \`variant="outlined"\` and \`color="primary"\`. |
| `outlinedSecondary` | `MuiPaginationItem-outlinedSecondary` | Styles applied to the root element if \`variant="outlined"\` and \`color="secondary"\`. |
| `page` | `MuiPaginationItem-page` | Styles applied to the root element if \`type="page"\`. |
| `previousNext` | `MuiPaginationItem-previousNext` | Styles applied to the root element if \`type="previous"\` or type="next". |
| `root` | `MuiPaginationItem-root` | Styles applied to the root element. |
| `rounded` | `MuiPaginationItem-rounded` | Styles applied to the root element if \`rounded="true"\`. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\`. |
| `sizeLarge` | `MuiPaginationItem-sizeLarge` | Styles applied to the root element if \`size="large"\`. |
| `sizeSmall` | `MuiPaginationItem-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
| `text` | `MuiPaginationItem-text` | Styles applied to the root element if \`variant="text"\`. |
| `textPrimary` | `MuiPaginationItem-textPrimary` | Styles applied to the root element if \`variant="text"\` and \`color="primary"\`. |
| `textSecondary` | `MuiPaginationItem-textSecondary` | Styles applied to the root element if \`variant="text"\` and \`color="secondary"\`. |
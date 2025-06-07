# TableSortLabel API

The TableSortLabel component API documentation.

## Import

```
import TableSortLabel from '@mui/material/TableSortLabel';
// or
import { TableSortLabel } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `direction` | `enum`'asc'<br>\| 'desc' | `'asc'` | - |
| `hideSortIcon` | `bool` | `false` | - |
| `IconComponent` | `elementType` | `ArrowDownwardIcon` | - |
| `slotProps` | `shape`{ icon?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ icon?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `span` | The component that renders the root slot. |
| `icon` | `ArrowDownwardIcon` | The component that renders the icon slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `active` | `Mui-active` | State class applied to the root element if \`active={true}\`. |
| `directionAsc` | `MuiTableSortLabel-directionAsc` | Styles applied to the root element if \`direction="asc"\`. |
| `directionDesc` | `MuiTableSortLabel-directionDesc` | Styles applied to the root element if \`direction="desc"\`. |
| `iconDirectionAsc` | `MuiTableSortLabel-iconDirectionAsc` | Styles applied to the icon component if \`direction="asc"\`. |
| `iconDirectionDesc` | `MuiTableSortLabel-iconDirectionDesc` | Styles applied to the icon component if \`direction="desc"\`. |
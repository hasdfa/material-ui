# ListItemText API

The ListItemText component API documentation.

## Import

```
import ListItemText from '@mui/material/ListItemText';
// or
import { ListItemText } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `disableTypography` | `bool` | `false` | - |
| `inset` | `bool` | `false` | - |
| `primary` | `node` | - | - |
| `primaryTypographyProps` | `object` | - | - |
| `secondary` | `node` | - | - |
| `secondaryTypographyProps` | `object` | - | - |
| `slotProps` | `shape`{ primary?: func<br>\| object, root?: func<br>\| object, secondary?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ primary?: elementType, root?: elementType, secondary?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root slot. |
| `primary` | `Typography` | The component that renders the primary slot. |
| `secondary` | `Typography` | The component that renders the secondary slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `dense` | `MuiListItemText-dense` | Styles applied to the Typography component if dense. |
| `inset` | `MuiListItemText-inset` | Styles applied to the root element if \`inset={true}\`. |
| `multiline` | `MuiListItemText-multiline` | Styles applied to the Typography component if primary and secondary are set. |
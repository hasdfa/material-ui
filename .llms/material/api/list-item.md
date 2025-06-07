# ListItem API

The ListItem component API documentation.

## Import

```
import ListItem from '@mui/material/ListItem';
// or
import { ListItem } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignItems` | `enum`'center'<br>\| 'flex-start' | `'center'` | - |
| `children` | `custom` node | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `components` | `shape`{ Root?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ root?: object } | `{}` | - |
| `ContainerComponent` | `custom` element type | `'li'` | - |
| `ContainerProps` | `object` | `{}` | - |
| `dense` | `bool` | `false` | - |
| `disableGutters` | `bool` | `false` | - |
| `disablePadding` | `bool` | `false` | - |
| `divider` | `bool` | `false` | - |
| `secondaryAction` | `node` | - | - |
| `slotProps` | `shape`{ root?: object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `alignItemsFlexStart` | `MuiListItem-alignItemsFlexStart` | Styles applied to the component element if \`alignItems="flex-start"\`. |
| `container` | `MuiListItem-container` | Styles applied to the container element if \`children\` includes \`ListItemSecondaryAction\`. |
| `dense` | `MuiListItem-dense` | Styles applied to the component element if dense. |
| `divider` | `MuiListItem-divider` | Styles applied to the inner \`component\` element if \`divider={true}\`. |
| `gutters` | `MuiListItem-gutters` | Styles applied to the inner \`component\` element unless \`disableGutters={true}\`. |
| `padding` | `MuiListItem-padding` | Styles applied to the root element unless \`disablePadding={true}\`. |
| `root` | `MuiListItem-root` | Styles applied to the (normally root) \`component\` element. May be wrapped by a \`container\`. |
| `secondaryAction` | `MuiListItem-secondaryAction` | Styles applied to the component element if \`children\` includes \`ListItemSecondaryAction\`. |
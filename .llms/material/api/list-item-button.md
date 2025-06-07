# ListItemButton API

The ListItemButton component API documentation.

## Import

```
import ListItemButton from '@mui/material/ListItemButton';
// or
import { ListItemButton } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignItems` | `enum`'center'<br>\| 'flex-start' | `'center'` | - |
| `autoFocus` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `dense` | `bool` | `false` | - |
| `disabled` | `bool` | `false` | - |
| `disableGutters` | `bool` | `false` | - |
| `divider` | `bool` | `false` | - |
| `focusVisibleClassName` | `string` | - | - |
| `selected` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `alignItemsFlexStart` | `MuiListItemButton-alignItemsFlexStart` | Styles applied to the component element if \`alignItems="flex-start"\`. |
| `dense` | `MuiListItemButton-dense` | Styles applied to the component element if dense. |
| `disabled` | `Mui-disabled` | State class applied to the inner \`component\` element if \`disabled={true}\`. |
| `divider` | `MuiListItemButton-divider` | Styles applied to the inner \`component\` element if \`divider={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the \`component\`'s \`focusVisibleClassName\` prop. |
| `gutters` | `MuiListItemButton-gutters` | Styles applied to the inner \`component\` element unless \`disableGutters={true}\`. |
| `root` | `MuiListItemButton-root` | Styles applied to the root element. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\`. |
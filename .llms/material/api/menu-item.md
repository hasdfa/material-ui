# MenuItem API

The MenuItem component API documentation.

## Import

```
import MenuItem from '@mui/material/MenuItem';
// or
import { MenuItem } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoFocus` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `dense` | `bool` | `false` | - |
| `disableGutters` | `bool` | `false` | - |
| `divider` | `bool` | `false` | - |
| `focusVisibleClassName` | `string` | - | - |
| `selected` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `dense` | `MuiMenuItem-dense` | Styles applied to the root element if dense. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `divider` | `MuiMenuItem-divider` | Styles applied to the root element if \`divider={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if keyboard focused. |
| `gutters` | `MuiMenuItem-gutters` | Styles applied to the inner \`component\` element unless \`disableGutters={true}\`. |
| `root` | `MuiMenuItem-root` | Styles applied to the root element. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\`. |
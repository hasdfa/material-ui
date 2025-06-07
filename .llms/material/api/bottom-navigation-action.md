# BottomNavigationAction API

The BottomNavigationAction component API documentation.

## Import

```
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// or
import { BottomNavigationAction } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` unsupportedProp | - | - |
| `classes` | `object` | - | - |
| `icon` | `node` | - | - |
| `label` | `node` | - | - |
| `showLabel` | `bool` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `iconOnly` | `MuiBottomNavigationAction-iconOnly` | State class applied to the root element if \`showLabel={false}\` and not selected. |
| `label` | `MuiBottomNavigationAction-label` | Styles applied to the label's span element. |
| `root` | `MuiBottomNavigationAction-root` | Styles applied to the root element. |
| `selected` | `Mui-selected` | State class applied to the root element if selected. |
# ToggleButton API

The ToggleButton component API documentation.

## Import

```
import ToggleButton from '@mui/material/ToggleButton';
// or
import { ToggleButton } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `any` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'standard'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'standard'` | - |
| `disabled` | `bool` | `false` | - |
| `disableFocusRipple` | `bool` | `false` | - |
| `disableRipple` | `bool` | `false` | - |
| `fullWidth` | `bool` | `false` | - |
| `onChange` | `func` | - | - |
| `onClick` | `func` | - | - |
| `selected` | `bool` | - | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| 'large'<br>\| string | `'medium'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `fullWidth` | `MuiToggleButton-fullWidth` | Styles applied to the root element if \`fullWidth={true}\`. |
| `primary` | `MuiToggleButton-primary` | State class applied to the root element if \`color="primary"\`. |
| `root` | `MuiToggleButton-root` | Styles applied to the root element. |
| `secondary` | `MuiToggleButton-secondary` | State class applied to the root element if \`color="secondary"\`. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\`. |
| `sizeLarge` | `MuiToggleButton-sizeLarge` | Styles applied to the root element if \`size="large"\`. |
| `sizeMedium` | `MuiToggleButton-sizeMedium` | Styles applied to the root element if \`size="medium"\`. |
| `sizeSmall` | `MuiToggleButton-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
| `standard` | `MuiToggleButton-standard` | State class applied to the root element if \`color="standard"\`. |
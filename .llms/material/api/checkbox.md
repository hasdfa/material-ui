# Checkbox API

The Checkbox component API documentation.

## Import

```
import Checkbox from '@mui/material/Checkbox';
// or
import { Checkbox } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `bool` | - | - |
| `checkedIcon` | `node` | `` | - |
| `classes` | `object` | - | - |
| `color` | `union`'default'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `defaultChecked` | `bool` | - | - |
| `disabled` | `bool` | `false` | - |
| `disableRipple` | `bool` | `false` | - |
| `icon` | `node` | `` | - |
| `id` | `string` | - | - |
| `indeterminate` | `bool` | `false` | - |
| `indeterminateIcon` | `node` | `` | - |
| `inputProps` | `object` | - | - |
| `onChange` | `func` | - | - |
| `required` | `bool` | `false` | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `slotProps` | `shape`{ input?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ input?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `SwitchBase` | The component that renders the root slot. |
| `input` | `SwitchBase's input` | The component that renders the input slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `checked` | `Mui-checked` | State class applied to the root element if \`checked={true}\`. |
| `colorPrimary` | `MuiCheckbox-colorPrimary` | State class applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiCheckbox-colorSecondary` | State class applied to the root element if \`color="secondary"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `indeterminate` | `MuiCheckbox-indeterminate` | State class applied to the root element if \`indeterminate={true}\`. |
| `sizeMedium` | `MuiCheckbox-sizeMedium` | State class applied to the root element if \`size="medium"\`. |
| `sizeSmall` | `MuiCheckbox-sizeSmall` | State class applied to the root element if \`size="small"\`. |
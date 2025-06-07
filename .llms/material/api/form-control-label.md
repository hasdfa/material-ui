# FormControlLabel API

The FormControlLabel component API documentation.

## Import

```
import FormControlLabel from '@mui/material/FormControlLabel';
// or
import { FormControlLabel } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `control` | `element` | - | - |
| `checked` | `bool` | - | - |
| `classes` | `object` | - | - |
| `componentsProps` | `shape`{ typography?: object } | `{}` | - |
| `disabled` | `bool` | - | - |
| `disableTypography` | `bool` | - | - |
| `inputRef` | `custom` ref | - | - |
| `label` | `node` | - | - |
| `labelPlacement` | `enum`'bottom'<br>\| 'end'<br>\| 'start'<br>\| 'top' | `'end'` | - |
| `onChange` | `func` | - | - |
| `required` | `bool` | - | - |
| `slotProps` | `shape`{ typography?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ typography?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |

:::info
The `ref` is forwarded to the HTMLLabelElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `typography` | `Typography` | The component that renders the label.<br>This is unused if \`disableTypography\` is true. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `asterisk` | `MuiFormControlLabel-asterisk` | Styles applied to the asterisk element. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `label` | `MuiFormControlLabel-label` | Styles applied to the label's Typography component. |
| `labelPlacementBottom` | `MuiFormControlLabel-labelPlacementBottom` | Styles applied to the root element if \`labelPlacement="bottom"\`. |
| `labelPlacementStart` | `MuiFormControlLabel-labelPlacementStart` | Styles applied to the root element if \`labelPlacement="start"\`. |
| `labelPlacementTop` | `MuiFormControlLabel-labelPlacementTop` | Styles applied to the root element if \`labelPlacement="top"\`. |
| `required` | `Mui-required` | State class applied to the root element if \`required={true}\`. |
| `root` | `MuiFormControlLabel-root` | Styles applied to the root element. |
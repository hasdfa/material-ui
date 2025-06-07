# FormLabel API

The FormLabel component API documentation.

## Import

```
import FormLabel from '@mui/material/FormLabel';
// or
import { FormLabel } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'error'<br>\| 'info'<br>\| 'primary'<br>\| 'secondary'<br>\| 'success'<br>\| 'warning'<br>\| string | - | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | - | - |
| `error` | `bool` | - | - |
| `filled` | `bool` | - | - |
| `focused` | `bool` | - | - |
| `required` | `bool` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLabelElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `asterisk` | `MuiFormLabel-asterisk` | Styles applied to the asterisk element. |
| `colorSecondary` | `MuiFormLabel-colorSecondary` | Styles applied to the root element if the color is secondary. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `filled` | `MuiFormLabel-filled` | State class applied to the root element if \`filled={true}\`. |
| `focused` | `Mui-focused` | State class applied to the root element if \`focused={true}\`. |
| `required` | `Mui-required` | State class applied to the root element if \`required={true}\`. |
| `root` | `MuiFormLabel-root` | Styles applied to the root element. |
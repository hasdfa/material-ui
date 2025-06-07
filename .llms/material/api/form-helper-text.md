# FormHelperText API

The FormHelperText component API documentation.

## Import

```
import FormHelperText from '@mui/material/FormHelperText';
// or
import { FormHelperText } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | - | - |
| `error` | `bool` | - | - |
| `filled` | `bool` | - | - |
| `focused` | `bool` | - | - |
| `margin` | `enum`'dense' | - | - |
| `required` | `bool` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'filled'<br>\| 'outlined'<br>\| 'standard'<br>\| string | - | - |

:::info
The `ref` is forwarded to the HTMLParagraphElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `contained` | `MuiFormHelperText-contained` | Styles applied to the root element if \`variant="filled"\` or \`variant="outlined"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `filled` | `MuiFormHelperText-filled` | State class applied to the root element if \`filled={true}\`. |
| `focused` | `Mui-focused` | State class applied to the root element if \`focused={true}\`. |
| `required` | `Mui-required` | State class applied to the root element if \`required={true}\`. |
| `root` | `MuiFormHelperText-root` | Styles applied to the root element. |
| `sizeSmall` | `MuiFormHelperText-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
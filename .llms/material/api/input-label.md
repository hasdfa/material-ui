# InputLabel API

The InputLabel component API documentation.

## Import

```
import InputLabel from '@mui/material/InputLabel';
// or
import { InputLabel } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [FormLabel](/material-ui/api/form-label/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'error'<br>\| 'info'<br>\| 'primary'<br>\| 'secondary'<br>\| 'success'<br>\| 'warning'<br>\| string | - | - |
| `disableAnimation` | `bool` | `false` | - |
| `disabled` | `bool` | - | - |
| `error` | `bool` | - | - |
| `focused` | `bool` | - | - |
| `margin` | `enum`'dense' | - | - |
| `required` | `bool` | - | - |
| `shrink` | `bool` | - | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `enum`'filled'<br>\| 'outlined'<br>\| 'standard' | - | - |

:::info
The `ref` is forwarded to the HTMLLabelElement element.
:::

### Inheritance

The props of the [FormLabel](/material-ui/api/form-label/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `animated` | `MuiInputLabel-animated` | Styles applied to the input element unless \`disableAnimation={true}\`. |
| `asterisk` | `MuiInputLabel-asterisk` | State class applied to the asterisk element. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `filled` | `MuiInputLabel-filled` | Styles applied to the root element if \`variant="filled"\`. |
| `focused` | `Mui-focused` | State class applied to the root element if \`focused={true}\`. |
| `formControl` | `MuiInputLabel-formControl` | Styles applied to the root element if the component is a descendant of \`FormControl\`. |
| `outlined` | `MuiInputLabel-outlined` | Styles applied to the root element if \`variant="outlined"\`. |
| `required` | `Mui-required` | State class applied to the root element if \`required={true}\`. |
| `root` | `MuiInputLabel-root` | Styles applied to the root element. |
| `shrink` | `MuiInputLabel-shrink` | Styles applied to the input element if \`shrink={true}\`. |
| `sizeSmall` | `MuiInputLabel-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
| `standard` | `MuiInputLabel-standard` | Styles applied to the root element if \`variant="standard"\`. |
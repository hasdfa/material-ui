# FormControl API

The FormControl component API documentation.

## Import

```
import FormControl from '@mui/material/FormControl';
// or
import { FormControl } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `error` | `bool` | `false` | - |
| `focused` | `bool` | - | - |
| `fullWidth` | `bool` | `false` | - |
| `hiddenLabel` | `bool` | `false` | - |
| `margin` | `enum`'dense'<br>\| 'none'<br>\| 'normal' | `'none'` | - |
| `required` | `bool` | `false` | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `enum`'filled'<br>\| 'outlined'<br>\| 'standard' | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `fullWidth` | `MuiFormControl-fullWidth` | Styles applied to the root element if \`fullWidth={true}\`. |
| `marginDense` | `MuiFormControl-marginDense` | Styles applied to the root element if \`margin="dense"\`. |
| `marginNormal` | `MuiFormControl-marginNormal` | Styles applied to the root element if \`margin="normal"\`. |
| `root` | `MuiFormControl-root` | Styles applied to the root element. |
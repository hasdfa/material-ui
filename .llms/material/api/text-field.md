# TextField API

The TextField component API documentation.

## Import

```
import TextField from '@mui/material/TextField';
// or
import { TextField } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [FormControl](/material-ui/api/form-control/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoComplete` | `string` | - | - |
| `autoFocus` | `bool` | `false` | - |
| `classes` | `object` | - | - |
| `color` | `union`'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `defaultValue` | `any` | - | - |
| `disabled` | `bool` | `false` | - |
| `error` | `bool` | `false` | - |
| `FormHelperTextProps` | `object` | - | - |
| `fullWidth` | `bool` | `false` | - |
| `helperText` | `node` | - | - |
| `id` | `string` | - | - |
| `InputLabelProps` | `object` | - | - |
| `inputProps` | `object` | - | - |
| `InputProps` | `object` | - | - |
| `inputRef` | `custom` ref | - | - |
| `label` | `node` | - | - |
| `margin` | `enum`'dense'<br>\| 'none'<br>\| 'normal' | `'none'` | - |
| `maxRows` | `union` number<br>\| string | - | - |
| `minRows` | `union` number<br>\| string | - | - |
| `multiline` | `bool` | `false` | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `placeholder` | `string` | - | - |
| `required` | `bool` | `false` | - |
| `rows` | `union` number<br>\| string | - | - |
| `select` | `bool` | `false` | - |
| `SelectProps` | `object` | - | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `slotProps` | `shape`{ formHelperText?: func<br>\| object, htmlInput?: func<br>\| object, input?: func<br>\| object, inputLabel?: func<br>\| object, select?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ formHelperText?: elementType, htmlInput?: elementType, input?: elementType, inputLabel?: elementType, root?: elementType, select?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `type` | `string` | - | - |
| `value` | `any` | - | - |
| `variant` | `enum`'filled'<br>\| 'outlined'<br>\| 'standard' | `'outlined'` | - |

:::info
The `ref` is forwarded to the root element.
:::

### Inheritance

The props of the [FormControl](/material-ui/api/form-control/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `FormControl` | The component that renders the root. |
| `input` | `OutlinedInput` | The component that renders the input. |
| `inputLabel` | `InputLabel` | The component that renders the input's label. |
| `htmlInput` | `'input'` | The html input element. |
| `formHelperText` | `FormHelperText` | The component that renders the helper text. |
| `select` | `Select` | The component that renders the select. |
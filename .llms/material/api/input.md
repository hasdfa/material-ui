# Input API

The Input component API documentation.

## Import

```
import Input from '@mui/material/Input';
// or
import { Input } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [InputBase](/material-ui/api/input-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoComplete` | `string` | - | - |
| `autoFocus` | `bool` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'primary'<br>\| 'secondary'<br>\| string | - | - |
| `components` | `shape`{ Input?: elementType, Root?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ input?: object, root?: object } | `{}` | - |
| `defaultValue` | `any` | - | - |
| `disabled` | `bool` | - | - |
| `disableUnderline` | `bool` | `false` | - |
| `endAdornment` | `node` | - | - |
| `error` | `bool` | - | - |
| `fullWidth` | `bool` | `false` | - |
| `id` | `string` | - | - |
| `inputComponent` | `elementType` | `'input'` | - |
| `inputProps` | `object` | `{}` | - |
| `inputRef` | `custom` ref | - | - |
| `margin` | `enum`'dense'<br>\| 'none' | - | - |
| `maxRows` | `union` number<br>\| string | - | - |
| `minRows` | `union` number<br>\| string | - | - |
| `multiline` | `bool` | `false` | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `placeholder` | `string` | - | - |
| `readOnly` | `bool` | - | - |
| `required` | `bool` | - | - |
| `rows` | `union` number<br>\| string | - | - |
| `slotProps` | `shape`{ input?: object, root?: object } | `{}` | - |
| `slots` | `shape`{ input?: elementType, root?: elementType } | `{}` | - |
| `startAdornment` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `type` | `string` | `'text'` | - |
| `value` | `any` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [InputBase](/material-ui/api/input-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorSecondary` | `MuiInput-colorSecondary` | Styles applied to the root element if color secondary. |
| `disabled` | `Mui-disabled` | Styles applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `focused` | `Mui-focused` | Styles applied to the root element if the component is focused. |
| `formControl` | `MuiInput-formControl` | Styles applied to the root element if the component is a descendant of \`FormControl\`. |
| `fullWidth` | `MuiInput-fullWidth` | Styles applied to the root element if \`fullWidth={true}\`. |
| `input` | `MuiInput-input` | Styles applied to the input element. |
| `inputAdornedEnd` | `MuiInput-inputAdornedEnd` | Styles applied to the input element if \`endAdornment\` is provided. |
| `inputAdornedStart` | `MuiInput-inputAdornedStart` | Styles applied to the input element if \`startAdornment\` is provided. |
| `inputMultiline` | `MuiInput-inputMultiline` | Styles applied to the input element if \`multiline={true}\`. |
| `inputSizeSmall` | `MuiInput-inputSizeSmall` | Styles applied to the input element if \`size="small"\`. |
| `inputTypeSearch` | `MuiInput-inputTypeSearch` | Styles applied to the input element if \`type="search"\`. |
| `multiline` | `MuiInput-multiline` | Styles applied to the root element if \`multiline={true}\`. |
| `root` | `MuiInput-root` | Styles applied to the root element. |
| `sizeSmall` | `MuiInput-sizeSmall` | Styles applied to the input element if \`size="small"\`. |
| `underline` | `MuiInput-underline` | Styles applied to the root element unless \`disableUnderline={true}\`. |
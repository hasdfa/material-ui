# OutlinedInput API

The OutlinedInput component API documentation.

## Import

```
import OutlinedInput from '@mui/material/OutlinedInput';
// or
import { OutlinedInput } from '@mui/material';
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
| `defaultValue` | `any` | - | - |
| `disabled` | `bool` | - | - |
| `endAdornment` | `node` | - | - |
| `error` | `bool` | - | - |
| `fullWidth` | `bool` | `false` | - |
| `id` | `string` | - | - |
| `inputComponent` | `elementType` | `'input'` | - |
| `inputProps` | `object` | `{}` | - |
| `inputRef` | `custom` ref | - | - |
| `label` | `node` | - | - |
| `margin` | `enum`'dense'<br>\| 'none' | - | - |
| `maxRows` | `union` number<br>\| string | - | - |
| `minRows` | `union` number<br>\| string | - | - |
| `multiline` | `bool` | `false` | - |
| `name` | `string` | - | - |
| `notched` | `bool` | - | - |
| `onChange` | `func` | - | - |
| `placeholder` | `string` | - | - |
| `readOnly` | `bool` | - | - |
| `required` | `bool` | - | - |
| `rows` | `union` number<br>\| string | - | - |
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
| `adornedEnd` | `MuiOutlinedInput-adornedEnd` | Styles applied to the root element if \`endAdornment\` is provided. |
| `adornedStart` | `MuiOutlinedInput-adornedStart` | Styles applied to the root element if \`startAdornment\` is provided. |
| `colorSecondary` | `MuiOutlinedInput-colorSecondary` | Styles applied to the root element if the color is secondary. |
| `disabled` | `Mui-disabled` | Styles applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `focused` | `Mui-focused` | Styles applied to the root element if the component is focused. |
| `input` | `MuiOutlinedInput-input` | Styles applied to the input element. |
| `inputAdornedEnd` | `MuiOutlinedInput-inputAdornedEnd` | Styles applied to the input element if \`endAdornment\` is provided. |
| `inputAdornedStart` | `MuiOutlinedInput-inputAdornedStart` | Styles applied to the input element if \`startAdornment\` is provided. |
| `inputMultiline` | `MuiOutlinedInput-inputMultiline` | Styles applied to the input element if \`multiline={true}\`. |
| `inputSizeSmall` | `MuiOutlinedInput-inputSizeSmall` | Styles applied to the input element if \`size="small"\`. |
| `inputTypeSearch` | `MuiOutlinedInput-inputTypeSearch` | Styles applied to the input element if \`type="search"\`. |
| `multiline` | `MuiOutlinedInput-multiline` | Styles applied to the root element if \`multiline={true}\`. |
| `notchedOutline` | `MuiOutlinedInput-notchedOutline` | Styles applied to the NotchedOutline element. |
| `root` | `MuiOutlinedInput-root` | Styles applied to the root element. |
| `sizeSmall` | `MuiOutlinedInput-sizeSmall` | Styles applied to the input element if \`size="small"\`. |
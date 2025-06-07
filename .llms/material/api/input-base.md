# InputBase API

The InputBase component API documentation.

## Import

```
import InputBase from '@mui/material/InputBase';
// or
import { InputBase } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoComplete` | `string` | - | - |
| `autoFocus` | `bool` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | - | - |
| `components` | `shape`{ Input?: elementType, Root?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ input?: object, root?: object } | `{}` | - |
| `defaultValue` | `any` | - | - |
| `disabled` | `bool` | - | - |
| `disableInjectingGlobalStyles` | `bool` | `false` | - |
| `endAdornment` | `node` | - | - |
| `error` | `bool` | - | - |
| `fullWidth` | `bool` | `false` | - |
| `id` | `string` | - | - |
| `inputComponent` | `custom` element type | `'input'` | - |
| `inputProps` | `object` | `{}` | - |
| `inputRef` | `custom` ref | - | - |
| `margin` | `enum`'dense'<br>\| 'none' | - | - |
| `maxRows` | `union` number<br>\| string | - | - |
| `minRows` | `union` number<br>\| string | - | - |
| `multiline` | `bool` | `false` | - |
| `name` | `string` | - | - |
| `onBlur` | `func` | - | - |
| `onChange` | `func` | - | - |
| `onInvalid` | `func` | - | - |
| `placeholder` | `string` | - | - |
| `readOnly` | `bool` | - | - |
| `required` | `bool` | - | - |
| `rows` | `union` number<br>\| string | - | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | - | - |
| `slotProps` | `shape`{ input?: object, root?: object } | `{}` | - |
| `slots` | `shape`{ input?: elementType, root?: elementType } | `{}` | - |
| `startAdornment` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `type` | `string` | `'text'` | - |
| `value` | `any` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `adornedEnd` | `MuiInputBase-adornedEnd` | Styles applied to the root element if \`endAdornment\` is provided. |
| `adornedStart` | `MuiInputBase-adornedStart` | Styles applied to the root element if \`startAdornment\` is provided. |
| `colorSecondary` | `MuiInputBase-colorSecondary` | Styles applied to the root element if the color is secondary. |
| `disabled` | `Mui-disabled` | Styles applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `focused` | `Mui-focused` | Styles applied to the root element if the component is focused. |
| `formControl` | `MuiInputBase-formControl` | Styles applied to the root element if the component is a descendant of \`FormControl\`. |
| `fullWidth` | `MuiInputBase-fullWidth` | Styles applied to the root element if \`fullWidth={true}\`. |
| `hiddenLabel` | `MuiInputBase-hiddenLabel` | Styles applied to the root element if \`hiddenLabel={true}\`. |
| `input` | `MuiInputBase-input` | Styles applied to the input element. |
| `inputAdornedEnd` | `MuiInputBase-inputAdornedEnd` | Styles applied to the input element if \`endAdornment\` is provided. |
| `inputAdornedStart` | `MuiInputBase-inputAdornedStart` | Styles applied to the input element if \`startAdornment\` is provided. |
| `inputHiddenLabel` | `MuiInputBase-inputHiddenLabel` | Styles applied to the input element if \`hiddenLabel={true}\`. |
| `inputMultiline` | `MuiInputBase-inputMultiline` | Styles applied to the input element if \`multiline={true}\`. |
| `inputSizeSmall` | `MuiInputBase-inputSizeSmall` | Styles applied to the input element if \`size="small"\`. |
| `inputTypeSearch` | `MuiInputBase-inputTypeSearch` |  |
| `multiline` | `MuiInputBase-multiline` | Styles applied to the root element if \`multiline={true}\`. |
| `readOnly` | `Mui-readOnly` | State class applied to the root element if \`readOnly={true}\`. |
| `root` | `MuiInputBase-root` | Styles applied to the root element. |
| `sizeSmall` | `MuiInputBase-sizeSmall` | Styles applied to the input element if \`size="small"\`. |
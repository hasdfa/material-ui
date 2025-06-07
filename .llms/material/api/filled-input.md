# FilledInput API

The FilledInput component API documentation.

## Import

```
import FilledInput from '@mui/material/FilledInput';
// or
import { FilledInput } from '@mui/material';
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
| `hiddenLabel` | `bool` | `false` | - |
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
| `adornedEnd` | `MuiFilledInput-adornedEnd` | Styles applied to the root element if \`endAdornment\` is provided. |
| `adornedStart` | `MuiFilledInput-adornedStart` | Styles applied to the root element if \`startAdornment\` is provided. |
| `colorSecondary` | `MuiFilledInput-colorSecondary` | Styles applied to the root element if color secondary. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `focused` | `Mui-focused` | State class applied to the root element if the component is focused. |
| `hiddenLabel` | `MuiFilledInput-hiddenLabel` | Styles applied to the root element if \`hiddenLabel={true}\`. |
| `input` | `MuiFilledInput-input` | Styles applied to the input element. |
| `multiline` | `MuiFilledInput-multiline` | Styles applied to the root element if \`multiline={true}\`. |
| `root` | `MuiFilledInput-root` | Styles applied to the root element. |
| `sizeSmall` | `MuiFilledInput-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
| `underline` | `MuiFilledInput-underline` | Styles applied to the root element unless \`disableUnderline={true}\`. |
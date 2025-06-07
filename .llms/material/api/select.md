# Select API

The Select component API documentation.

## Import

```
import Select from '@mui/material/Select';
// or
import { Select } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [OutlinedInput](/material-ui/api/outlined-input/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoWidth` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `classes` | `object` | `{}` | - |
| `defaultOpen` | `bool` | `false` | - |
| `defaultValue` | `any` | - | - |
| `displayEmpty` | `bool` | `false` | - |
| `IconComponent` | `elementType` | `ArrowDropDownIcon` | - |
| `id` | `string` | - | - |
| `input` | `element` | - | - |
| `inputProps` | `object` | - | - |
| `label` | `node` | - | - |
| `labelId` | `string` | - | - |
| `MenuProps` | `object` | - | - |
| `multiple` | `bool` | `false` | - |
| `native` | `bool` | `false` | - |
| `onChange` | `func` | - | - |
| `onClose` | `func` | - | - |
| `onOpen` | `func` | - | - |
| `open` | `bool` | - | - |
| `renderValue` | `func` | - | - |
| `SelectDisplayProps` | `object` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `union`''<br>\| any | - | - |
| `variant` | `enum`'filled'<br>\| 'outlined'<br>\| 'standard' | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [OutlinedInput](/material-ui/api/outlined-input/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the select component \`disabled\` class. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `filled` | `MuiSelect-filled` | Styles applied to the select component if \`variant="filled"\`. |
| `focused` | `Mui-focused` | Styles applied to the select component if it is focused. |
| `icon` | `MuiSelect-icon` | Styles applied to the icon component. |
| `iconFilled` | `MuiSelect-iconFilled` | Styles applied to the icon component if \`variant="filled"\`. |
| `iconOpen` | `MuiSelect-iconOpen` | Styles applied to the icon component if the popup is open. |
| `iconOutlined` | `MuiSelect-iconOutlined` | Styles applied to the icon component if \`variant="outlined"\`. |
| `iconStandard` | `MuiSelect-iconStandard` | Styles applied to the icon component if \`variant="standard"\`. |
| `multiple` | `MuiSelect-multiple` | Styles applied to the select component if \`multiple={true}\`. |
| `nativeInput` | `MuiSelect-nativeInput` | Styles applied to the underlying native input component. |
| `outlined` | `MuiSelect-outlined` | Styles applied to the select component if \`variant="outlined"\`. |
| `root` | `MuiSelect-root` | Styles applied to the root element. |
| `select` | `MuiSelect-select` | Styles applied to the select component \`select\` class. |
| `standard` | `MuiSelect-standard` | Styles applied to the select component if \`variant="standard"\`. |
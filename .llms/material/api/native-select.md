# NativeSelect API

The NativeSelect component API documentation.

## Import

```
import NativeSelect from '@mui/material/NativeSelect';
// or
import { NativeSelect } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Input](/material-ui/api/input/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | `{}` | - |
| `IconComponent` | `elementType` | `ArrowDropDownIcon` | - |
| `input` | `element` | `` | - |
| `inputProps` | `object` | - | - |
| `onChange` | `func` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |
| `variant` | `enum`'filled'<br>\| 'outlined'<br>\| 'standard' | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Input](/material-ui/api/input/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the select component \`disabled\` class. |
| `error` | `Mui-error` | State class applied to the select component \`error\` class. |
| `filled` | `MuiNativeSelect-filled` | Styles applied to the select component if \`variant="filled"\`. |
| `icon` | `MuiNativeSelect-icon` | Styles applied to the icon component. |
| `iconFilled` | `MuiNativeSelect-iconFilled` | Styles applied to the icon component if \`variant="filled"\`. |
| `iconOpen` | `MuiNativeSelect-iconOpen` | Styles applied to the icon component if the popup is open. |
| `iconOutlined` | `MuiNativeSelect-iconOutlined` | Styles applied to the icon component if \`variant="outlined"\`. |
| `iconStandard` | `MuiNativeSelect-iconStandard` | Styles applied to the icon component if \`variant="standard"\`. |
| `multiple` | `MuiNativeSelect-multiple` | Styles applied to the select component if \`multiple={true}\`. |
| `nativeInput` | `MuiNativeSelect-nativeInput` | Styles applied to the underlying native input component. |
| `outlined` | `MuiNativeSelect-outlined` | Styles applied to the select component if \`variant="outlined"\`. |
| `root` | `MuiNativeSelect-root` | Styles applied to the root element. |
| `select` | `MuiNativeSelect-select` | Styles applied to the select component \`select\` class. |
| `standard` | `MuiNativeSelect-standard` | Styles applied to the select component if \`variant="standard"\`. |
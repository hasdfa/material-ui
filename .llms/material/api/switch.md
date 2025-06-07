# Switch API

The Switch component API documentation.

## Import

```
import Switch from '@mui/material/Switch';
// or
import { Switch } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [IconButton](/material-ui/api/icon-button/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `bool` | - | - |
| `checkedIcon` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'default'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `defaultChecked` | `bool` | - | - |
| `disabled` | `bool` | - | - |
| `disableRipple` | `bool` | `false` | - |
| `edge` | `enum`'end'<br>\| 'start'<br>\| false | `false` | - |
| `icon` | `node` | - | - |
| `id` | `string` | - | - |
| `inputProps` | `object` | - | - |
| `inputRef` | `custom` ref | - | - |
| `onChange` | `func` | - | - |
| `required` | `bool` | `false` | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `slotProps` | `shape`{ input?: func<br>\| object, root?: func<br>\| object, switchBase?: func<br>\| object, thumb?: func<br>\| object, track?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ input?: elementType, root?: elementType, switchBase?: elementType, thumb?: elementType, track?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

### Inheritance

The props of the [IconButton](/material-ui/api/icon-button/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'span'` | The component that renders the root slot. |
| `track` | `'span'` | The component that renders the track slot. |
| `thumb` | `'span'` | The component that renders the thumb slot. |
| `switchBase` | `SwitchBase` | The component that renders the switchBase slot. |
| `input` | `SwitchBaseInput` | The component that renders the switchBase's input slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `checked` | `Mui-checked` | State class applied to the internal \`SwitchBase\` component's \`checked\` class. |
| `colorPrimary` | `MuiSwitch-colorPrimary` | Styles applied to the internal SwitchBase component's root element if \`color="primary"\`. |
| `colorSecondary` | `MuiSwitch-colorSecondary` | Styles applied to the internal SwitchBase component's root element if \`color="secondary"\`. |
| `disabled` | `Mui-disabled` | State class applied to the internal SwitchBase component's disabled class. |
| `edgeEnd` | `MuiSwitch-edgeEnd` | Styles applied to the root element if \`edge="end"\`. |
| `edgeStart` | `MuiSwitch-edgeStart` | Styles applied to the root element if \`edge="start"\`. |
| `sizeMedium` | `MuiSwitch-sizeMedium` | Styles applied to the root element if \`size="medium"\`. |
| `sizeSmall` | `MuiSwitch-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
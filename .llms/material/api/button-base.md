# ButtonBase API

The ButtonBase component API documentation.

## Import

```
import ButtonBase from '@mui/material/ButtonBase';
// or
import { ButtonBase } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `custom` ref | - | - |
| `centerRipple` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `custom` element type | - | - |
| `disabled` | `bool` | `false` | - |
| `disableRipple` | `bool` | `false` | - |
| `disableTouchRipple` | `bool` | `false` | - |
| `focusRipple` | `bool` | `false` | - |
| `focusVisibleClassName` | `string` | - | - |
| `LinkComponent` | `elementType` | `'a'` | - |
| `onFocusVisible` | `func` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TouchRippleProps` | `object` | - | - |
| `touchRippleRef` | `union` func<br>\| { current?: { pulsate: func, start: func, stop: func } } | - | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if keyboard focused. |
| `root` | `MuiButtonBase-root` | Styles applied to the root element. |
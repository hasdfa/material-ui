# InputAdornment API

The InputAdornment component API documentation.

## Import

```
import InputAdornment from '@mui/material/InputAdornment';
// or
import { InputAdornment } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `enum`'end'<br>\| 'start' | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `disablePointerEvents` | `bool` | `false` | - |
| `disableTypography` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `enum`'filled'<br>\| 'outlined'<br>\| 'standard' | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disablePointerEvents` | `MuiInputAdornment-disablePointerEvents` | Styles applied to the root element if \`disablePointerEvents={true}\`. |
| `filled` | `MuiInputAdornment-filled` | Styles applied to the root element if \`variant="filled"\`. |
| `hiddenLabel` | `MuiInputAdornment-hiddenLabel` | Styles applied if the adornment is used inside . |
| `outlined` | `MuiInputAdornment-outlined` | Styles applied to the root element if \`variant="outlined"\`. |
| `positionEnd` | `MuiInputAdornment-positionEnd` | Styles applied to the root element if \`position="end"\`. |
| `positionStart` | `MuiInputAdornment-positionStart` | Styles applied to the root element if \`position="start"\`. |
| `root` | `MuiInputAdornment-root` | Styles applied to the root element. |
| `sizeSmall` | `MuiInputAdornment-sizeSmall` | Styles applied if the adornment is used inside . |
| `standard` | `MuiInputAdornment-standard` | Styles applied to the root element if \`variant="standard"\`. |
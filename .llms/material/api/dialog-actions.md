# DialogActions API

The DialogActions component API documentation.

## Import

```
import DialogActions from '@mui/material/DialogActions';
// or
import { DialogActions } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `disableSpacing` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `root` | `MuiDialogActions-root` | Styles applied to the root element. |
| `spacing` | `MuiDialogActions-spacing` | Styles applied to the root element unless \`disableSpacing={true}\`. |
# Toolbar API

The Toolbar component API documentation.

## Import

```
import Toolbar from '@mui/material/Toolbar';
// or
import { Toolbar } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `disableGutters` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'dense'<br>\| 'regular'<br>\| string | `'regular'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `dense` | `MuiToolbar-dense` | Styles applied to the root element if \`variant="dense"\`. |
| `gutters` | `MuiToolbar-gutters` | Styles applied to the root element unless \`disableGutters={true}\`. |
| `regular` | `MuiToolbar-regular` | Styles applied to the root element if \`variant="regular"\`. |
| `root` | `MuiToolbar-root` | Styles applied to the root element. |
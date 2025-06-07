# SnackbarContent API

The SnackbarContent component API documentation.

## Import

```
import SnackbarContent from '@mui/material/SnackbarContent';
// or
import { SnackbarContent } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Paper](/material-ui/api/paper/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `node` | - | - |
| `classes` | `object` | - | - |
| `message` | `node` | - | - |
| `role` | `string` | `'alert'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Paper](/material-ui/api/paper/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `action` | `MuiSnackbarContent-action` | Styles applied to the action wrapper element if \`action\` is provided. |
| `message` | `MuiSnackbarContent-message` | Styles applied to the message wrapper element. |
| `root` | `MuiSnackbarContent-root` | Styles applied to the root element. |
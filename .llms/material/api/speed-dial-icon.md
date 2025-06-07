# SpeedDialIcon API

The SpeedDialIcon component API documentation.

## Import

```
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// or
import { SpeedDialIcon } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `classes` | `object` | - | - |
| `icon` | `node` | - | - |
| `openIcon` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `icon` | `MuiSpeedDialIcon-icon` | Styles applied to the icon component. |
| `iconOpen` | `MuiSpeedDialIcon-iconOpen` | Styles applied to the icon component if \`open={true}\`. |
| `iconWithOpenIconOpen` | `MuiSpeedDialIcon-iconWithOpenIconOpen` | Styles applied to the icon when an \`openIcon\` is provided and if \`open={true}\`. |
| `openIcon` | `MuiSpeedDialIcon-openIcon` | Styles applied to the \`openIcon\` if provided. |
| `openIconOpen` | `MuiSpeedDialIcon-openIconOpen` | Styles applied to the \`openIcon\` if provided and if \`open={true}\`. |
| `root` | `MuiSpeedDialIcon-root` | Styles applied to the root element. |
# SpeedDialAction API

The SpeedDialAction component API documentation.

## Import

```
import SpeedDialAction from '@mui/material/SpeedDialAction';
// or
import { SpeedDialAction } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Tooltip](/material-ui/api/tooltip/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `classes` | `object` | - | - |
| `delay` | `number` | `0` | - |
| `FabProps` | `object` | `{}` | - |
| `icon` | `node` | - | - |
| `id` | `string` | - | - |
| `open` | `bool` | - | - |
| `slotProps` | `shape`{ fab?: func<br>\| object, staticTooltip?: func<br>\| object, staticTooltipLabel?: func<br>\| object, tooltip?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ fab?: elementType, staticTooltip?: elementType, staticTooltipLabel?: elementType, tooltip?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TooltipClasses` | `object` | - | - |
| `tooltipOpen` | `bool` | `false` | - |
| `tooltipPlacement` | `enum`'auto-end'<br>\| 'auto-start'<br>\| 'auto'<br>\| 'bottom-end'<br>\| 'bottom-start'<br>\| 'bottom'<br>\| 'left-end'<br>\| 'left-start'<br>\| 'left'<br>\| 'right-end'<br>\| 'right-start'<br>\| 'right'<br>\| 'top-end'<br>\| 'top-start'<br>\| 'top' | `'left'` | - |
| `tooltipTitle` | `node` | - | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [Tooltip](/material-ui/api/tooltip/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `fab` | `Fab` | The component that renders the fab. |
| `tooltip` | `Tooltip` | The component that renders the tooltip. |
| `staticTooltip` | `'span'` | The component that renders the static tooltip. |
| `staticTooltipLabel` | `'span'` | The component that renders the static tooltip label. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `fabClosed` | `MuiSpeedDialAction-fabClosed` | Styles applied to the Fab component if \`open={false}\`. |
| `staticTooltipClosed` | `MuiSpeedDialAction-staticTooltipClosed` | Styles applied to the root element if \`tooltipOpen={true}\` and \`open={false}\`. |
| `tooltipPlacementLeft` | `MuiSpeedDialAction-tooltipPlacementLeft` | Styles applied to the root element if \`tooltipOpen={true}\` and \`tooltipPlacement="left"\`\` |
| `tooltipPlacementRight` | `MuiSpeedDialAction-tooltipPlacementRight` | Styles applied to the root element if \`tooltipOpen={true}\` and \`tooltipPlacement="right"\`\` |
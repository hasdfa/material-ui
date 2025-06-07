# SpeedDial API

The SpeedDial component API documentation.

## Import

```
import SpeedDial from '@mui/material/SpeedDial';
// or
import { SpeedDial } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `direction` | `enum`'down'<br>\| 'left'<br>\| 'right'<br>\| 'up' | `'up'` | - |
| `FabProps` | `object` | `{}` | - |
| `hidden` | `bool` | `false` | - |
| `icon` | `node` | - | - |
| `onClose` | `func` | - | - |
| `onOpen` | `func` | - | - |
| `open` | `bool` | - | - |
| `openIcon` | `node` | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType, transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TransitionComponent` | `elementType` | ``Zoom<br>* @deprecated Use `slots.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)`` | - |
| `transitionDuration` | `union` number<br>\| { appear?: number, enter?: number, exit?: number } | `{<br>  enter: theme.transitions.duration.enteringScreen,<br>  exit: theme.transitions.duration.leavingScreen,<br>}` | - |
| `TransitionProps` | `object` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root slot. |
| `transition` | `Zoom` | The component that renders the transition.<br>\[Follow this guide\](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `actions` | `MuiSpeedDial-actions` | Styles applied to the actions (\`children\` wrapper) element. |
| `actionsClosed` | `MuiSpeedDial-actionsClosed` | Styles applied to the actions (\`children\` wrapper) element if \`open={false}\`. |
| `directionDown` | `MuiSpeedDial-directionDown` | Styles applied to the root element if direction="down" |
| `directionLeft` | `MuiSpeedDial-directionLeft` | Styles applied to the root element if direction="left" |
| `directionRight` | `MuiSpeedDial-directionRight` | Styles applied to the root element if direction="right" |
| `directionUp` | `MuiSpeedDial-directionUp` | Styles applied to the root element if direction="up" |
| `fab` | `MuiSpeedDial-fab` | Styles applied to the Fab component. |
# Tooltip API

The Tooltip component API documentation.

## Import

```
import Tooltip from '@mui/material/Tooltip';
// or
import { Tooltip } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` element | - | - |
| `arrow` | `bool` | `false` | - |
| `classes` | `object` | - | - |
| `components` | `shape`{ Arrow?: elementType, Popper?: elementType, Tooltip?: elementType, Transition?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ arrow?: object, popper?: object, tooltip?: object, transition?: object } | `{}` | - |
| `describeChild` | `bool` | `false` | - |
| `disableFocusListener` | `bool` | `false` | - |
| `disableHoverListener` | `bool` | `false` | - |
| `disableInteractive` | `bool` | `false` | - |
| `disableTouchListener` | `bool` | `false` | - |
| `enterDelay` | `number` | `100` | - |
| `enterNextDelay` | `number` | `0` | - |
| `enterTouchDelay` | `number` | `700` | - |
| `followCursor` | `bool` | `false` | - |
| `id` | `string` | - | - |
| `leaveDelay` | `number` | `0` | - |
| `leaveTouchDelay` | `number` | `1500` | - |
| `onClose` | `func` | - | - |
| `onOpen` | `func` | - | - |
| `open` | `bool` | - | - |
| `placement` | `enum`'auto-end'<br>\| 'auto-start'<br>\| 'auto'<br>\| 'bottom-end'<br>\| 'bottom-start'<br>\| 'bottom'<br>\| 'left-end'<br>\| 'left-start'<br>\| 'left'<br>\| 'right-end'<br>\| 'right-start'<br>\| 'right'<br>\| 'top-end'<br>\| 'top-start'<br>\| 'top' | `'bottom'` | - |
| `PopperComponent` | `elementType` | - | - |
| `PopperProps` | `object` | `{}` | - |
| `slotProps` | `shape`{ arrow?: func<br>\| object, popper?: func<br>\| object, tooltip?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ arrow?: elementType, popper?: elementType, tooltip?: elementType, transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `title` | `node` | - | - |
| `TransitionComponent` | `elementType` | - | - |
| `TransitionProps` | `object` | `{}` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `popper` | `Popper` | The component used for the popper. |
| `transition` | `Grow` | The component used for the transition.<br>\[Follow this guide\](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |
| `tooltip` | `undefined` | The component used for the tooltip. |
| `arrow` | `undefined` | The component used for the arrow. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `popperArrow` | `MuiTooltip-popperArrow` | Styles applied to the Popper component if \`arrow={true}\`. |
| `popperClose` | `MuiTooltip-popperClose` | Styles applied to the Popper component unless the tooltip is open. |
| `popperInteractive` | `MuiTooltip-popperInteractive` | Styles applied to the Popper component unless \`disableInteractive={true}\`. |
| `tooltipArrow` | `MuiTooltip-tooltipArrow` | Styles applied to the tooltip (label wrapper) element if \`arrow={true}\`. |
| `tooltipPlacementBottom` | `MuiTooltip-tooltipPlacementBottom` | Styles applied to the tooltip (label wrapper) element if \`placement\` contains "bottom". |
| `tooltipPlacementLeft` | `MuiTooltip-tooltipPlacementLeft` | Styles applied to the tooltip (label wrapper) element if \`placement\` contains "left". |
| `tooltipPlacementRight` | `MuiTooltip-tooltipPlacementRight` | Styles applied to the tooltip (label wrapper) element if \`placement\` contains "right". |
| `tooltipPlacementTop` | `MuiTooltip-tooltipPlacementTop` | Styles applied to the tooltip (label wrapper) element if \`placement\` contains "top". |
| `touch` | `MuiTooltip-touch` | Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. |
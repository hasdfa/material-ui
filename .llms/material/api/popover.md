# Popover API

The Popover component API documentation.

## Import

```
import Popover from '@mui/material/Popover';
// or
import { Popover } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Modal](/material-ui/api/modal/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `bool` | - | - |
| `action` | `custom` ref | - | - |
| `anchorEl` | `custom` HTML element<br>\| func | - | - |
| `anchorOrigin` | `shape`{ horizontal: 'center'<br>\| 'left'<br>\| 'right'<br>\| number, vertical: 'bottom'<br>\| 'center'<br>\| 'top'<br>\| number } | `{<br>  vertical: 'top',<br>  horizontal: 'left',<br>}` | - |
| `anchorPosition` | `shape`{ left: number, top: number } | - | - |
| `anchorReference` | `enum`'anchorEl'<br>\| 'anchorPosition'<br>\| 'none' | `'anchorEl'` | - |
| `BackdropComponent` | `elementType` | `styled(Backdrop, {<br>  name: 'MuiModal',<br>  slot: 'Backdrop',<br>  overridesResolver: (props, styles) => {<br>    return styles.backdrop;<br>  },<br>})({<br>  zIndex: -1,<br>})` | - |
| `BackdropProps` | `object` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `container` | `union` HTML element<br>\| func | - | - |
| `disableScrollLock` | `bool` | `false` | - |
| `elevation` | `custom` integer | `8` | - |
| `marginThreshold` | `number` | `16` | - |
| `onClose` | `func` | - | - |
| `PaperProps` | `shape`{ component?: element type } | `{}` | - |
| `slotProps` | `shape`{ backdrop?: func<br>\| object, paper?: func<br>\| object, root?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ backdrop?: elementType, paper?: elementType, root?: elementType, transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `transformOrigin` | `shape`{ horizontal: 'center'<br>\| 'left'<br>\| 'right'<br>\| number, vertical: 'bottom'<br>\| 'center'<br>\| 'top'<br>\| number } | `{<br>  vertical: 'top',<br>  horizontal: 'left',<br>}` | - |
| `TransitionComponent` | `elementType` | `Grow` | - |
| `transitionDuration` | `union`'auto'<br>\| number<br>\| { appear?: number, enter?: number, exit?: number } | `'auto'` | - |
| `TransitionProps` | `object` | `{}` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Modal](/material-ui/api/modal/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `Modal` | The component used for the root slot. |
| `paper` | `Paper` | The component used for the paper slot. |
| `transition` | `Grow` | The component used for the transition slot. |
| `backdrop` | `Backdrop` | The component used for the backdrop slot. |
# Snackbar API

The Snackbar component API documentation.

## Import

```
import Snackbar from '@mui/material/Snackbar';
// or
import { Snackbar } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `node` | - | - |
| `anchorOrigin` | `shape`{ horizontal: 'center'<br>\| 'left'<br>\| 'right', vertical: 'bottom'<br>\| 'top' } | `{ vertical: 'bottom', horizontal: 'left' }` | - |
| `autoHideDuration` | `number` | `null` | - |
| `children` | `element` | - | - |
| `classes` | `object` | - | - |
| `ClickAwayListenerProps` | `object` | - | - |
| `ContentProps` | `object` | - | - |
| `disableWindowBlurListener` | `bool` | `false` | - |
| `key` | `custom` any | - | - |
| `message` | `node` | - | - |
| `onClose` | `func` | - | - |
| `open` | `bool` | - | - |
| `resumeHideDuration` | `number` | - | - |
| `slotProps` | `shape`{ clickAwayListener?: func<br>\| { children: element, disableReactTree?: bool, mouseEvent?: 'onClick'<br>\| 'onMouseDown'<br>\| 'onMouseUp'<br>\| 'onPointerDown'<br>\| 'onPointerUp'<br>\| false, onClickAway?: func, touchEvent?: 'onTouchEnd'<br>\| 'onTouchStart'<br>\| false }, content?: func<br>\| object, root?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ clickAwayListener?: elementType, content?: elementType, root?: elementType, transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TransitionComponent` | `elementType` | `Grow` | - |
| `transitionDuration` | `union` number<br>\| { appear?: number, enter?: number, exit?: number } | `{<br>  enter: theme.transitions.duration.enteringScreen,<br>  exit: theme.transitions.duration.leavingScreen,<br>}` | - |
| `TransitionProps` | `object` | `{}` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root slot. |
| `content` | `SnackbarContent` | The component that renders the content slot. |
| `clickAwayListener` | `ClickAwayListener` | The component that renders the clickAwayListener slot. |
| `transition` | `Grow` | The component that renders the transition.<br>\[Follow this guide\](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `anchorOriginBottomCenter` | `MuiSnackbar-anchorOriginBottomCenter` | Styles applied to the root element if \`anchorOrigin={{ 'bottom', 'center' }}\`. |
| `anchorOriginBottomLeft` | `MuiSnackbar-anchorOriginBottomLeft` | Styles applied to the root element if \`anchorOrigin={{ 'bottom', 'left' }}\`. |
| `anchorOriginBottomRight` | `MuiSnackbar-anchorOriginBottomRight` | Styles applied to the root element if \`anchorOrigin={{ 'bottom', 'right' }}\`. |
| `anchorOriginTopCenter` | `MuiSnackbar-anchorOriginTopCenter` | Styles applied to the root element if \`anchorOrigin={{ 'top', 'center' }}\`. |
| `anchorOriginTopLeft` | `MuiSnackbar-anchorOriginTopLeft` | Styles applied to the root element if \`anchorOrigin={{ 'top', 'left' }}\`. |
| `anchorOriginTopRight` | `MuiSnackbar-anchorOriginTopRight` | Styles applied to the root element if \`anchorOrigin={{ 'top', 'right' }}\`. |
# SwipeableDrawer API

The SwipeableDrawer component API documentation.

## Import

```
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// or
import { SwipeableDrawer } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Drawer](/material-ui/api/drawer/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `onClose` | `func` | - | - |
| `onOpen` | `func` | - | - |
| `allowSwipeInChildren` | `union` func<br>\| bool | `false` | - |
| `children` | `node` | - | - |
| `disableBackdropTransition` | `bool` | `false` | - |
| `disableDiscovery` | `bool` | `false` | - |
| `disableSwipeToOpen` | `bool` | `typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)` | - |
| `hysteresis` | `number` | `0.52` | - |
| `minFlingVelocity` | `number` | `450` | - |
| `open` | `bool` | `false` | - |
| `slotProps` | `shape`{ backdrop?: func<br>\| object, docked?: func<br>\| object, paper?: func<br>\| object, root?: func<br>\| object, swipeArea?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ backdrop?: elementType, docked?: elementType, paper?: elementType, root?: elementType, swipeArea?: elementType, transition?: elementType } | `{}` | - |
| `SwipeAreaProps` | `object` | - | - |
| `swipeAreaWidth` | `number` | `20` | - |
| `transitionDuration` | `union` number<br>\| { appear?: number, enter?: number, exit?: number } | `{<br>  enter: theme.transitions.duration.enteringScreen,<br>  exit: theme.transitions.duration.leavingScreen,<br>}` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Drawer](/material-ui/api/drawer/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `swipeArea` | `div` | The component used for the swipeArea slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `anchorBottom` | `MuiDrawer-anchorBottom` | Styles applied to the root element if \`anchor="bottom"\`. |
| `anchorLeft` | `MuiDrawer-anchorLeft` | Styles applied to the root element if \`anchor="left"\`. |
| `anchorRight` | `MuiDrawer-anchorRight` | Styles applied to the root element if \`anchor="right"\`. |
| `anchorTop` | `MuiDrawer-anchorTop` | Styles applied to the root element if \`anchor="top"\`. |
| `docked` | `MuiDrawer-docked` | Styles applied to the root element if \`variant="permanent or persistent"\`. |
| `modal` | `MuiDrawer-modal` | Styles applied to the Modal component. |
| `paper` | `MuiDrawer-paper` | Styles applied to the Paper component. |
| `paperAnchorBottom` | `MuiDrawer-paperAnchorBottom` | Styles applied to the Paper component if \`anchor="bottom"\`. |
| `paperAnchorDockedBottom` | `MuiDrawer-paperAnchorDockedBottom` | Styles applied to the Paper component if \`anchor="bottom"\` and \`variant\` is not "temporary". |
| `paperAnchorDockedLeft` | `MuiDrawer-paperAnchorDockedLeft` | Styles applied to the Paper component if \`anchor="left"\` and \`variant\` is not "temporary". |
| `paperAnchorDockedRight` | `MuiDrawer-paperAnchorDockedRight` | Styles applied to the Paper component if \`anchor="right"\` and \`variant\` is not "temporary". |
| `paperAnchorDockedTop` | `MuiDrawer-paperAnchorDockedTop` | Styles applied to the Paper component if \`anchor="top"\` and \`variant\` is not "temporary". |
| `paperAnchorLeft` | `MuiDrawer-paperAnchorLeft` | Styles applied to the Paper component if \`anchor="left"\`. |
| `paperAnchorRight` | `MuiDrawer-paperAnchorRight` | Styles applied to the Paper component if \`anchor="right"\`. |
| `paperAnchorTop` | `MuiDrawer-paperAnchorTop` | Styles applied to the Paper component if \`anchor="top"\`. |
| `root` | `MuiDrawer-root` | Styles applied to the root element. |
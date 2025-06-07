# Drawer API

The Drawer component API documentation.

## Import

```
import Drawer from '@mui/material/Drawer';
// or
import { Drawer } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `anchor` | `enum`'bottom'<br>\| 'left'<br>\| 'right'<br>\| 'top' | `'left'` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `elevation` | `custom` integer | `16` | - |
| `hideBackdrop` | `bool` | `false` | - |
| `ModalProps` | `object` | `{}` | - |
| `onClose` | `func` | - | - |
| `open` | `bool` | `false` | - |
| `PaperProps` | `object` | `{}` | - |
| `SlideProps` | `object` | - | - |
| `slotProps` | `shape`{ backdrop?: func<br>\| object, docked?: func<br>\| object, paper?: func<br>\| object, root?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ backdrop?: elementType, docked?: elementType, paper?: elementType, root?: elementType, transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `transitionDuration` | `union` number<br>\| { appear?: number, enter?: number, exit?: number } | `{<br>  enter: theme.transitions.duration.enteringScreen,<br>  exit: theme.transitions.duration.leavingScreen,<br>}` | - |
| `variant` | `enum`'permanent'<br>\| 'persistent'<br>\| 'temporary' | `'temporary'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `Modal` | The component used for the root when the variant is \`temporary\`. |
| `backdrop` | `Backdrop` | The component used for the Modal backdrop. |
| `docked` | `div` | The component used for the root element when the variant is \`permanent\` or \`persistent\`. |
| `paper` | `Paper` | The component used for the paper. |
| `transition` | `Slide` | The component used for the transition.<br>\[Follow this guide\](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `anchorBottom` | `MuiDrawer-anchorBottom` | Styles applied to the root element if \`anchor="bottom"\`. |
| `anchorLeft` | `MuiDrawer-anchorLeft` | Styles applied to the root element if \`anchor="left"\`. |
| `anchorRight` | `MuiDrawer-anchorRight` | Styles applied to the root element if \`anchor="right"\`. |
| `anchorTop` | `MuiDrawer-anchorTop` | Styles applied to the root element if \`anchor="top"\`. |
| `modal` | `MuiDrawer-modal` | Styles applied to the Modal component. |
| `paperAnchorBottom` | `MuiDrawer-paperAnchorBottom` | Styles applied to the Paper component if \`anchor="bottom"\`. |
| `paperAnchorDockedBottom` | `MuiDrawer-paperAnchorDockedBottom` | Styles applied to the Paper component if \`anchor="bottom"\` and \`variant\` is not "temporary". |
| `paperAnchorDockedLeft` | `MuiDrawer-paperAnchorDockedLeft` | Styles applied to the Paper component if \`anchor="left"\` and \`variant\` is not "temporary". |
| `paperAnchorDockedRight` | `MuiDrawer-paperAnchorDockedRight` | Styles applied to the Paper component if \`anchor="right"\` and \`variant\` is not "temporary". |
| `paperAnchorDockedTop` | `MuiDrawer-paperAnchorDockedTop` | Styles applied to the Paper component if \`anchor="top"\` and \`variant\` is not "temporary". |
| `paperAnchorLeft` | `MuiDrawer-paperAnchorLeft` | Styles applied to the Paper component if \`anchor="left"\`. |
| `paperAnchorRight` | `MuiDrawer-paperAnchorRight` | Styles applied to the Paper component if \`anchor="right"\`. |
| `paperAnchorTop` | `MuiDrawer-paperAnchorTop` | Styles applied to the Paper component if \`anchor="top"\`. |
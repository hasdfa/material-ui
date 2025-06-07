# Dialog API

The Dialog component API documentation.

## Import

```
import Dialog from '@mui/material/Dialog';
// or
import { Dialog } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Modal](/material-ui/api/modal/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `bool` | - | - |
| `aria-describedby` | `string` | - | - |
| `aria-labelledby` | `string` | - | - |
| `aria-modal` | `union`'false'<br>\| 'true'<br>\| bool | `true` | - |
| `BackdropComponent` | `elementType` | `styled(Backdrop, {<br>  name: 'MuiModal',<br>  slot: 'Backdrop',<br>  overridesResolver: (props, styles) => {<br>    return styles.backdrop;<br>  },<br>})({<br>  zIndex: -1,<br>})` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `disableEscapeKeyDown` | `bool` | `false` | - |
| `fullScreen` | `bool` | `false` | - |
| `fullWidth` | `bool` | `false` | - |
| `maxWidth` | `union`'xs'<br>\| 'sm'<br>\| 'md'<br>\| 'lg'<br>\| 'xl'<br>\| false<br>\| string | `'sm'` | - |
| `onClose` | `func` | - | - |
| `PaperComponent` | `elementType` | `Paper` | - |
| `PaperProps` | `object` | `{}` | - |
| `scroll` | `enum`'body'<br>\| 'paper' | `'paper'` | - |
| `slotProps` | `shape`{ backdrop?: func<br>\| object, container?: func<br>\| object, paper?: func<br>\| object, root?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ backdrop?: elementType, container?: elementType, paper?: elementType, root?: elementType, transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TransitionComponent` | `elementType` | `Fade` | - |
| `transitionDuration` | `union` number<br>\| { appear?: number, enter?: number, exit?: number } | `{<br>  enter: theme.transitions.duration.enteringScreen,<br>  exit: theme.transitions.duration.leavingScreen,<br>}` | - |
| `TransitionProps` | `object` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Modal](/material-ui/api/modal/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `transition` | `Collapse` | The component that renders the transition.<br>\[Follow this guide\](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |
| `paper` | `Paper` | The component that renders the paper. |
| `container` | `undefined` | The component that renders the container. |
| `backdrop` | `undefined` | The component that renders the backdrop. |
| `root` | `undefined` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `paperFullScreen` | `MuiDialog-paperFullScreen` | Styles applied to the Paper component if \`fullScreen={true}\`. |
| `paperFullWidth` | `MuiDialog-paperFullWidth` | Styles applied to the Paper component if \`fullWidth={true}\`. |
| `paperScrollBody` | `MuiDialog-paperScrollBody` | Styles applied to the Paper component if \`scroll="body"\`. |
| `paperScrollPaper` | `MuiDialog-paperScrollPaper` | Styles applied to the Paper component if \`scroll="paper"\`. |
| `paperWidthFalse` | `MuiDialog-paperWidthFalse` | Styles applied to the Paper component if \`maxWidth=false\`. |
| `paperWidthLg` | `MuiDialog-paperWidthLg` | Styles applied to the Paper component if \`maxWidth="lg"\`. |
| `paperWidthMd` | `MuiDialog-paperWidthMd` | Styles applied to the Paper component if \`maxWidth="md"\`. |
| `paperWidthSm` | `MuiDialog-paperWidthSm` | Styles applied to the Paper component if \`maxWidth="sm"\`. |
| `paperWidthXl` | `MuiDialog-paperWidthXl` | Styles applied to the Paper component if \`maxWidth="xl"\`. |
| `paperWidthXs` | `MuiDialog-paperWidthXs` | Styles applied to the Paper component if \`maxWidth="xs"\`. |
| `scrollBody` | `MuiDialog-scrollBody` | Styles applied to the container element if \`scroll="body"\`. |
| `scrollPaper` | `MuiDialog-scrollPaper` | Styles applied to the container element if \`scroll="paper"\`. |
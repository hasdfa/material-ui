# Menu API

The Menu component API documentation.

## Import

```
import Menu from '@mui/material/Menu';
// or
import { Menu } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Popover](/material-ui/api/popover/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `bool` | - | - |
| `anchorEl` | `union` HTML element<br>\| func | - | - |
| `autoFocus` | `bool` | `true` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `disableAutoFocusItem` | `bool` | `false` | - |
| `MenuListProps` | `object` | `{}` | - |
| `onClose` | `func` | - | - |
| `PopoverClasses` | `object` | - | - |
| `slotProps` | `shape`{ backdrop?: func<br>\| object, list?: func<br>\| object, paper?: func<br>\| object, root?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ backdrop?: elementType, list?: elementType, paper?: elementType, root?: elementType, transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `transitionDuration` | `union`'auto'<br>\| number<br>\| { appear?: number, enter?: number, exit?: number } | `'auto'` | - |
| `TransitionProps` | `object` | `{}` | - |
| `variant` | `enum`'menu'<br>\| 'selectedMenu' | `'selectedMenu'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Popover](/material-ui/api/popover/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `Modal` | The component used for the popper. |
| `paper` | `Paper` | The component used for the paper. |
| `list` | `MenuList` | The component used for the list. |
| `transition` | `Grow` | The component used for the transition slot. |
| `backdrop` | `Backdrop` | The component used for the backdrop slot. |
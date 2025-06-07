# Slide API

The Slide component API documentation.

## Import

```
import Slide from '@mui/material/Slide';
// or
import { Slide } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` element | - | - |
| `addEndListener` | `func` | - | - |
| `appear` | `bool` | `true` | - |
| `container` | `custom` HTML element<br>\| func | - | - |
| `direction` | `enum`'down'<br>\| 'left'<br>\| 'right'<br>\| 'up' | `'down'` | - |
| `easing` | `union`{ enter?: string, exit?: string }<br>\| string | `{<br>  enter: theme.transitions.easing.easeOut,<br>  exit: theme.transitions.easing.sharp,<br>}` | - |
| `in` | `bool` | - | - |
| `timeout` | `union` number<br>\| { appear?: number, enter?: number, exit?: number } | `{<br>  enter: theme.transitions.duration.enteringScreen,<br>  exit: theme.transitions.duration.leavingScreen,<br>}` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props) component are also available.
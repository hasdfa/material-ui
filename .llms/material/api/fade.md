# Fade API

The Fade component API documentation.

## Import

```
import Fade from '@mui/material/Fade';
// or
import { Fade } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` element | - | - |
| `addEndListener` | `func` | - | - |
| `appear` | `bool` | `true` | - |
| `easing` | `union`{ enter?: string, exit?: string }<br>\| string | - | - |
| `in` | `bool` | - | - |
| `timeout` | `union` number<br>\| { appear?: number, enter?: number, exit?: number } | `{<br>  enter: theme.transitions.duration.enteringScreen,<br>  exit: theme.transitions.duration.leavingScreen,<br>}` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props) component are also available.
# Grow API

The Grow component API documentation.

## Import

```
import Grow from '@mui/material/Grow';
// or
import { Grow } from '@mui/material';
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
| `timeout` | `union`'auto'<br>\| number<br>\| { appear?: number, enter?: number, exit?: number } | `'auto'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props) component are also available.
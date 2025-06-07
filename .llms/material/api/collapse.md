# Collapse API

The Collapse component API documentation.

## Import

```
import Collapse from '@mui/material/Collapse';
// or
import { Collapse } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `addEndListener` | `func` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `collapsedSize` | `union` number<br>\| string | `'0px'` | - |
| `component` | `custom` element type | - | - |
| `easing` | `union`{ enter?: string, exit?: string }<br>\| string | - | - |
| `in` | `bool` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'vertical'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `timeout` | `union`'auto'<br>\| number<br>\| { appear?: number, enter?: number, exit?: number } | `duration.standard` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `entered` | `MuiCollapse-entered` | Styles applied to the root element when the transition has entered. |
| `hidden` | `MuiCollapse-hidden` | Styles applied to the root element when the transition has exited and \`collapsedSize\` = 0px. |
| `horizontal` | `MuiCollapse-horizontal` | State class applied to the root element if \`orientation="horizontal"\`. |
| `root` | `MuiCollapse-root` | Styles applied to the root element. |
| `wrapper` | `MuiCollapse-wrapper` | Styles applied to the outer wrapper element. |
| `wrapperInner` | `MuiCollapse-wrapperInner` | Styles applied to the inner wrapper element. |
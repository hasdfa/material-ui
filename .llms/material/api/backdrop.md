# Backdrop API

The Backdrop component API documentation.

## Import

```
import Backdrop from '@mui/material/Backdrop';
// or
import { Backdrop } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Fade](/material-ui/api/fade/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `bool` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `components` | `shape`{ Root?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ root?: object } | `{}` | - |
| `invisible` | `bool` | `false` | - |
| `slotProps` | `shape`{ root?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType, transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TransitionComponent` | `elementType` | `Fade` | - |
| `transitionDuration` | `union` number<br>\| { appear?: number, enter?: number, exit?: number } | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Fade](/material-ui/api/fade/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `transition` | `Fade` | The component that renders the transition.<br>\[Follow this guide\](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `invisible` | `MuiBackdrop-invisible` | Styles applied to the root element if \`invisible={true}\`. |
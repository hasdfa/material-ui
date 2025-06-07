# Accordion API

The Accordion component API documentation.

## Import

```
import Accordion from '@mui/material/Accordion';
// or
import { Accordion } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Paper](/material-ui/api/paper/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` node | - | - |
| `classes` | `object` | - | - |
| `defaultExpanded` | `bool` | `false` | - |
| `disabled` | `bool` | `false` | - |
| `disableGutters` | `bool` | `false` | - |
| `expanded` | `bool` | - | - |
| `onChange` | `func` | - | - |
| `slotProps` | `shape`{ heading?: func<br>\| object, root?: func<br>\| object, transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ heading?: elementType, root?: elementType, transition?: elementType } | `{}` | - |
| `square` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TransitionComponent` | `elementType` | - | - |
| `TransitionProps` | `object` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Paper](/material-ui/api/paper/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `Paper` | The component that renders the root. |
| `heading` | `'h3'` | The component that renders the heading. |
| `transition` | `Collapse` | The component that renders the transition.<br>\[Follow this guide\](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `expanded` | `Mui-expanded` | State class applied to the root element if \`expanded={true}\`. |
| `gutters` | `MuiAccordion-gutters` | Styles applied to the root element unless \`disableGutters={true}\`. |
| `region` | `MuiAccordion-region` | Styles applied to the region element, the container of the children. |
| `rounded` | `MuiAccordion-rounded` | Styles applied to the root element unless \`square={true}\`. |
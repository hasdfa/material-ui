# StepContent API

The StepContent component API documentation.

## Import

```
import StepContent from '@mui/material/StepContent';
// or
import { StepContent } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `slotProps` | `shape`{ transition?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ transition?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TransitionComponent` | `elementType` | `Collapse` | - |
| `transitionDuration` | `union`'auto'<br>\| number<br>\| { appear?: number, enter?: number, exit?: number } | `'auto'` | - |
| `TransitionProps` | `object` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `transition` | `Collapse` | The component that renders the transition slot.<br>\[Follow this guide\](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `last` | `MuiStepContent-last` | Styles applied to the root element if \`last={true}\` (controlled by \`Step\`). |
| `root` | `MuiStepContent-root` | Styles applied to the root element. |
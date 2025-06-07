# StepLabel API

The StepLabel component API documentation.

## Import

```
import StepLabel from '@mui/material/StepLabel';
// or
import { StepLabel } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `componentsProps` | `shape`{ label?: object } | `{}` | - |
| `error` | `bool` | `false` | - |
| `icon` | `node` | - | - |
| `optional` | `node` | - | - |
| `slotProps` | `shape`{ label?: func<br>\| object, root?: func<br>\| object, stepIcon?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ label?: elementType, root?: elementType, stepIcon?: elementType } | `{}` | - |
| `StepIconComponent` | `elementType` | - | - |
| `StepIconProps` | `object` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `span` | The component that renders the root. |
| `label` | `span` | The component that renders the label. |
| `stepIcon` | `undefined` | The component to render in place of the \[\`StepIcon\`\](https://mui.com/material-ui/api/step-icon/). |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `active` | `Mui-active` | State class applied to the label element if \`active={true}\`. |
| `alternativeLabel` | `MuiStepLabel-alternativeLabel` | State class applied to the root and icon container and label if \`alternativeLabel={true}\`. |
| `completed` | `Mui-completed` | State class applied to the label element if \`completed={true}\`. |
| `disabled` | `Mui-disabled` | State class applied to the root and label elements if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root and label elements if \`error={true}\`. |
| `horizontal` | `MuiStepLabel-horizontal` | Styles applied to the root element if \`orientation="horizontal"\`. |
| `iconContainer` | `MuiStepLabel-iconContainer` | Styles applied to the \`icon\` container element. |
| `labelContainer` | `MuiStepLabel-labelContainer` | Styles applied to the container element which wraps label and \`optional\`. |
| `vertical` | `MuiStepLabel-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
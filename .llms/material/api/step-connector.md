# StepConnector API

The StepConnector component API documentation.

## Import

```
import StepConnector from '@mui/material/StepConnector';
// or
import { StepConnector } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `classes` | `object` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `active` | `Mui-active` | State class applied to the root element if \`active={true}\`. |
| `alternativeLabel` | `MuiStepConnector-alternativeLabel` | Styles applied to the root element if \`alternativeLabel={true}\`. |
| `completed` | `Mui-completed` | State class applied to the root element if \`completed={true}\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `horizontal` | `MuiStepConnector-horizontal` | Styles applied to the root element if \`orientation="horizontal"\`. |
| `line` | `MuiStepConnector-line` | Styles applied to the line element. |
| `lineHorizontal` | `MuiStepConnector-lineHorizontal` | Styles applied to the line element if \`orientation="horizontal"\`. |
| `lineVertical` | `MuiStepConnector-lineVertical` | Styles applied to the line element if \`orientation="vertical"\`. |
| `root` | `MuiStepConnector-root` | Styles applied to the root element. |
| `vertical` | `MuiStepConnector-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
# Stepper API

The Stepper component API documentation.

## Import

```
import Stepper from '@mui/material/Stepper';
// or
import { Stepper } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeStep` | `custom` integer | `0` | - |
| `alternativeLabel` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `connector` | `element` | `` | - |
| `nonLinear` | `bool` | `false` | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `alternativeLabel` | `MuiStepper-alternativeLabel` | Styles applied to the root element if \`alternativeLabel={true}\`. |
| `horizontal` | `MuiStepper-horizontal` | Styles applied to the root element if \`orientation="horizontal"\`. |
| `nonLinear` | `MuiStepper-nonLinear` | Styles applied to the root element if \`nonLinear={true}\`. |
| `root` | `MuiStepper-root` | Styles applied to the root element. |
| `vertical` | `MuiStepper-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
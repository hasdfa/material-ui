# StepButton API

The StepButton component API documentation.

## Import

```
import StepButton from '@mui/material/StepButton';
// or
import { StepButton } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `icon` | `node` | - | - |
| `optional` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `horizontal` | `MuiStepButton-horizontal` | Styles applied to the root element if \`orientation="horizontal"\`. |
| `root` | `MuiStepButton-root` | Styles applied to the root element. |
| `touchRipple` | `MuiStepButton-touchRipple` | Styles applied to the \`ButtonBase\` touch-ripple. |
| `vertical` | `MuiStepButton-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
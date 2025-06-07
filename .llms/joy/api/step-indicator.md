# StepIndicator API

The StepIndicator component API documentation.

## Import

```
import StepIndicator from '@mui/joy/StepIndicator';
// or
import { StepIndicator } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'soft'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiStepIndicator-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiStepIndicator-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiStepIndicator-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiStepIndicator-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiStepIndicator-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiStepIndicator-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `horizontal` | `MuiStepIndicator-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `variantOutlined` | `MuiStepIndicator-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiStepIndicator-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiStepIndicator-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiStepIndicator-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiStepIndicator-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
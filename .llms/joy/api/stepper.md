# Stepper API

The Stepper component API documentation.

## Import

```
import Stepper from '@mui/joy/Stepper';
// or
import { Stepper } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `component` | `elementType` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `size` | `union`'lg'<br>\| 'md'<br>\| 'sm'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLOListElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'ol'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `horizontal` | `MuiStepper-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `sizeLg` | `MuiStepper-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiStepper-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiStepper-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `vertical` | `MuiStepper-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
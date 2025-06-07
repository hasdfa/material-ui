# MobileStepper API

The MobileStepper component API documentation.

## Import

```
import MobileStepper from '@mui/material/MobileStepper';
// or
import { MobileStepper } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Paper](/material-ui/api/paper/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `steps` | `custom` integer | - | - |
| `activeStep` | `custom` integer | `0` | - |
| `backButton` | `node` | - | - |
| `classes` | `object` | - | - |
| `LinearProgressProps` | `object` | - | - |
| `nextButton` | `node` | - | - |
| `position` | `enum`'bottom'<br>\| 'static'<br>\| 'top' | `'bottom'` | - |
| `slotProps` | `shape`{ dot?: func<br>\| object, dots?: func<br>\| object, progress?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ dot?: elementType, dots?: elementType, progress?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `enum`'dots'<br>\| 'progress'<br>\| 'text' | `'dots'` | - |

:::info
The `ref` is forwarded to the root element.
:::

### Inheritance

The props of the [Paper](/material-ui/api/paper/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `Paper` | The component that renders the root slot. |
| `progress` | `LinearProgress` | The component that renders the progress slot. |
| `dots` | `'div'` | The component that renders the dots slot. |
| `dot` | `'div'` | The component that renders the dot slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `dotActive` | `MuiMobileStepper-dotActive` | Styles applied to a dot if \`variant="dots"\` and this is the active step. |
| `positionBottom` | `MuiMobileStepper-positionBottom` | Styles applied to the root element if \`position="bottom"\`. |
| `positionStatic` | `MuiMobileStepper-positionStatic` | Styles applied to the root element if \`position="static"\`. |
| `positionTop` | `MuiMobileStepper-positionTop` | Styles applied to the root element if \`position="top"\`. |
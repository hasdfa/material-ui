# StepIcon API

The StepIcon component API documentation.

## Import

```
import StepIcon from '@mui/material/StepIcon';
// or
import { StepIcon } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [SvgIcon](/material-ui/api/svg-icon/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `bool` | `false` | - |
| `classes` | `object` | - | - |
| `completed` | `bool` | `false` | - |
| `error` | `bool` | `false` | - |
| `icon` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the SVGSVGElement element.
:::

### Inheritance

The props of the [SvgIcon](/material-ui/api/svg-icon/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `active` | `Mui-active` | State class applied to the root element if \`active={true}\`. |
| `completed` | `Mui-completed` | State class applied to the root element if \`completed={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `root` | `MuiStepIcon-root` | Styles applied to the root element. |
| `text` | `MuiStepIcon-text` | Styles applied to the SVG text element. |
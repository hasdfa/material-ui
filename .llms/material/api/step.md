# Step API

The Step component API documentation.

## Import

```
import Step from '@mui/material/Step';
// or
import { Step } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `bool` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `completed` | `bool` | - | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | - | - |
| `expanded` | `bool` | `false` | - |
| `index` | `custom` integer | - | - |
| `last` | `bool` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `alternativeLabel` | `MuiStep-alternativeLabel` | Styles applied to the root element if \`alternativeLabel={true}\`. |
| `completed` | `Mui-completed` | State class applied to the root element if \`completed={true}\`. |
| `horizontal` | `MuiStep-horizontal` | Styles applied to the root element if \`orientation="horizontal"\`. |
| `root` | `MuiStep-root` | Styles applied to the root element. |
| `vertical` | `MuiStep-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
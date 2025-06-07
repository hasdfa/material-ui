# ToggleButtonGroup API

The ToggleButtonGroup component API documentation.

## Import

```
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// or
import { ToggleButtonGroup } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'standard'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'standard'` | - |
| `disabled` | `bool` | `false` | - |
| `exclusive` | `bool` | `false` | - |
| `fullWidth` | `bool` | `false` | - |
| `onChange` | `func` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| 'large'<br>\| string | `'medium'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `firstButton` | `MuiToggleButtonGroup-firstButton` | Styles applied to the first button in the toggle button group. |
| `fullWidth` | `MuiToggleButtonGroup-fullWidth` | Styles applied to the root element if \`fullWidth={true}\`. |
| `grouped` | `MuiToggleButtonGroup-grouped` | Styles applied to the children. |
| `groupedHorizontal` | `MuiToggleButtonGroup-groupedHorizontal` | Styles applied to the children if \`orientation="horizontal"\`. |
| `groupedVertical` | `MuiToggleButtonGroup-groupedVertical` | Styles applied to the children if \`orientation="vertical"\`. |
| `horizontal` | `MuiToggleButtonGroup-horizontal` | Styles applied to the root element if \`orientation="horizontal"\`. |
| `lastButton` | `MuiToggleButtonGroup-lastButton` | Styles applied to the last button in the toggle button group. |
| `middleButton` | `MuiToggleButtonGroup-middleButton` | Styles applied to buttons in the middle of the toggle button group. |
| `root` | `MuiToggleButtonGroup-root` | Styles applied to the root element. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\`. |
| `vertical` | `MuiToggleButtonGroup-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
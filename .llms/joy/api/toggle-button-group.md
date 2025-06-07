# ToggleButtonGroup API

The ToggleButtonGroup component API documentation.

## Import

```
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
// or
import { ToggleButtonGroup } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `buttonFlex` | `union` number<br>\| string | - | - |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'info'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `onChange` | `func` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `size` | `enum`'sm'<br>\| 'md'<br>\| 'lg' | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `spacing` | `union` Array\| string><br>\| number<br>\| { lg?: number<br>\| string, md?: number<br>\| string, sm?: number<br>\| string, xl?: number<br>\| string, xs?: number<br>\| string }<br>\| string | `0` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `union` Array<br>\| string | - | - |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'outlined'` | - |

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
| `colorContext` | `MuiToggleButtonGroup-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiToggleButtonGroup-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiToggleButtonGroup-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiToggleButtonGroup-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiToggleButtonGroup-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiToggleButtonGroup-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `horizontal` | `MuiToggleButtonGroup-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `sizeLg` | `MuiToggleButtonGroup-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiToggleButtonGroup-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiToggleButtonGroup-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiToggleButtonGroup-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiToggleButtonGroup-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiToggleButtonGroup-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiToggleButtonGroup-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiToggleButtonGroup-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
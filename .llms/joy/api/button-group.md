# ButtonGroup API

The ButtonGroup component API documentation.

## Import

```
import ButtonGroup from '@mui/joy/ButtonGroup';
// or
import { ButtonGroup } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `buttonFlex` | `union` number<br>\| string | - | - |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `size` | `union`'lg'<br>\| 'md'<br>\| 'sm'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `spacing` | `union` Array\| string><br>\| number<br>\| { lg?: number<br>\| string, md?: number<br>\| string, sm?: number<br>\| string, xl?: number<br>\| string, xs?: number<br>\| string }<br>\| string | `0` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
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
| `colorContext` | `MuiButtonGroup-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiButtonGroup-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiButtonGroup-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiButtonGroup-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiButtonGroup-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiButtonGroup-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `horizontal` | `MuiButtonGroup-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `sizeLg` | `MuiButtonGroup-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiButtonGroup-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiButtonGroup-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiButtonGroup-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiButtonGroup-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiButtonGroup-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiButtonGroup-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiButtonGroup-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
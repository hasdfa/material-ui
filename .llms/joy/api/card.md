# Card API

The Card component API documentation.

## Import

```
import Card from '@mui/joy/Card';
// or
import { Card } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `invertedColors` | `bool` | `false` | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'vertical'` | - |
| `size` | `union`'lg'<br>\| 'md'<br>\| 'sm'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
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
| `colorContext` | `MuiCard-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiCard-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiCard-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiCard-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiCard-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiCard-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `horizontal` | `MuiCard-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `sizeLg` | `MuiCard-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiCard-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiCard-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiCard-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiCard-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiCard-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiCard-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiCard-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
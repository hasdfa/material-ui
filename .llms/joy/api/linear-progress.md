# LinearProgress API

The LinearProgress component API documentation.

## Import

```
import LinearProgress from '@mui/joy/LinearProgress';
// or
import { LinearProgress } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `component` | `elementType` | - | - |
| `determinate` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `thickness` | `number` | - | - |
| `value` | `number` | `determinate ? 0 : 25` | - |
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
| `colorContext` | `MuiLinearProgress-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiLinearProgress-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiLinearProgress-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiLinearProgress-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiLinearProgress-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiLinearProgress-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `determinate` | `MuiLinearProgress-determinate` | Class name applied to the root element if \`determinate\` is true. |
| `sizeLg` | `MuiLinearProgress-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiLinearProgress-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiLinearProgress-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiLinearProgress-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiLinearProgress-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiLinearProgress-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiLinearProgress-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
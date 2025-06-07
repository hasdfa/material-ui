# CircularProgress API

The CircularProgress component API documentation.

## Import

```
import CircularProgress from '@mui/joy/CircularProgress';
// or
import { CircularProgress } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `component` | `elementType` | - | - |
| `determinate` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ progress?: func<br>\| object, root?: func<br>\| object, svg?: func<br>\| object, track?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ progress?: elementType, root?: elementType, svg?: elementType, track?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `thickness` | `number` | - | - |
| `value` | `number` | `determinate ? 0 : 25` | - |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'soft'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'span'` | The component that renders the root. |
| `svg` | `'svg'` | The component that renders the svg. |
| `track` | `'circle'` | The component that renders the track. |
| `progress` | `'circle'` | The component that renders the progress. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiCircularProgress-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiCircularProgress-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiCircularProgress-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiCircularProgress-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiCircularProgress-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiCircularProgress-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `determinate` | `MuiCircularProgress-determinate` | Class name applied to the root element if \`determinate\` is true. |
| `sizeLg` | `MuiCircularProgress-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiCircularProgress-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiCircularProgress-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiCircularProgress-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiCircularProgress-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiCircularProgress-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiCircularProgress-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
# CardOverflow API

The CardOverflow component API documentation.

## Import

```
import CardOverflow from '@mui/joy/CardOverflow';
// or
import { CardOverflow } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

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
| `colorContext` | `MuiCardOverflow-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiCardOverflow-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiCardOverflow-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiCardOverflow-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiCardOverflow-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiCardOverflow-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `variantOutlined` | `MuiCardOverflow-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiCardOverflow-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiCardOverflow-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiCardOverflow-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
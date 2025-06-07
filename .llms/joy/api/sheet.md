# Sheet API

The Sheet component API documentation.

## Import

```
import Sheet from '@mui/joy/Sheet';
// or
import { Sheet } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `invertedColors` | `bool` | `false` | - |
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
| `colorContext` | `MuiSheet-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiSheet-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiSheet-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiSheet-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiSheet-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiSheet-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `variantOutlined` | `MuiSheet-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiSheet-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiSheet-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiSheet-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
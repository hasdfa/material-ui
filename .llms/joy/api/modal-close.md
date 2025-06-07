# ModalClose API

The ModalClose component API documentation.

## Import

```
import ModalClose from '@mui/joy/ModalClose';
// or
import { ModalClose } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'button'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiModalClose-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiModalClose-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiModalClose-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiModalClose-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiModalClose-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiModalClose-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sizeLg` | `MuiModalClose-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiModalClose-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiModalClose-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiModalClose-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiModalClose-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiModalClose-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiModalClose-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
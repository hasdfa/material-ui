# ModalDialog API

The ModalDialog component API documentation.

## Import

```
import ModalDialog from '@mui/joy/ModalDialog';
// or
import { ModalDialog } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `invertedColors` | `bool` | `false` | - |
| `layout` | `union`'center'<br>\| 'fullscreen'<br>\| string | `'center'` | - |
| `maxWidth` | `union` number<br>\| string | - | - |
| `minWidth` | `union` number<br>\| string | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'vertical'` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
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
| `colorContext` | `MuiModalDialog-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiModalDialog-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiModalDialog-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiModalDialog-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiModalDialog-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiModalDialog-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `layoutCenter` | `MuiModalDialog-layoutCenter` | Class name applied to the root element if \`layout="center"\`. |
| `layoutFullscreen` | `MuiModalDialog-layoutFullscreen` | Class name applied to the root element if \`layout="fullscreen"\`. |
| `sizeLg` | `MuiModalDialog-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiModalDialog-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiModalDialog-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiModalDialog-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiModalDialog-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiModalDialog-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiModalDialog-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
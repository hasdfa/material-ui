# Alert API

The Alert component API documentation.

## Import

```
import Alert from '@mui/joy/Alert';
// or
import { Alert } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `endDecorator` | `node` | - | - |
| `invertedColors` | `bool` | `false` | - |
| `role` | `string` | `'alert'` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ endDecorator?: func<br>\| object, root?: func<br>\| object, startDecorator?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ endDecorator?: elementType, root?: elementType, startDecorator?: elementType } | `{}` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'soft'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `startDecorator` | `'span'` | The component that renders the start decorator. |
| `endDecorator` | `'span'` | The component that renders the end decorator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiAlert-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiAlert-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiAlert-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiAlert-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiAlert-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiAlert-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sizeLg` | `MuiAlert-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiAlert-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiAlert-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiAlert-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiAlert-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiAlert-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiAlert-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
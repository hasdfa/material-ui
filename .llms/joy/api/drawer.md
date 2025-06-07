# Drawer API

The Drawer component API documentation.

## Import

```
import Drawer from '@mui/joy/Drawer';
// or
import { Drawer } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `bool` | - | - |
| `anchor` | `enum`'bottom'<br>\| 'left'<br>\| 'right'<br>\| 'top' | `'left'` | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `container` | `union` HTML element<br>\| func | - | - |
| `disableAutoFocus` | `bool` | `false` | - |
| `disableEnforceFocus` | `bool` | `false` | - |
| `disableEscapeKeyDown` | `bool` | `false` | - |
| `disablePortal` | `bool` | `false` | - |
| `disableRestoreFocus` | `bool` | `false` | - |
| `disableScrollLock` | `bool` | `false` | - |
| `hideBackdrop` | `bool` | `false` | - |
| `invertedColors` | `bool` | `false` | - |
| `onClose` | `func` | - | - |
| `size` | `enum`'sm'<br>\| 'md'<br>\| 'lg' | `'md'` | - |
| `slotProps` | `shape`{ backdrop?: func<br>\| object, content?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ backdrop?: elementType, content?: elementType, root?: elementType } | `{}` | - |
| `variant` | `enum`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid' | `'plain'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `backdrop` | `'div'` | The component that renders the backdrop. |
| `content` | `'div'` | The component that renders the content of the drawer. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiDrawer-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiDrawer-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiDrawer-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiDrawer-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiDrawer-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiDrawer-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `hidden` | `MuiDrawer-hidden` | Class name applied to the root element when open is false. |
| `sizeLg` | `MuiDrawer-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiDrawer-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiDrawer-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiDrawer-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiDrawer-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiDrawer-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiDrawer-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
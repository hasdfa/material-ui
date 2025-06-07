# Modal API

The Modal component API documentation.

## Import

```
import Modal from '@mui/joy/Modal';
// or
import { Modal } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` element | - | - |
| `open` | `bool` | - | - |
| `component` | `elementType` | - | - |
| `container` | `union` HTML element<br>\| func | - | - |
| `disableAutoFocus` | `bool` | `false` | - |
| `disableEnforceFocus` | `bool` | `false` | - |
| `disableEscapeKeyDown` | `bool` | `false` | - |
| `disablePortal` | `bool` | `false` | - |
| `disableRestoreFocus` | `bool` | `false` | - |
| `disableScrollLock` | `bool` | `false` | - |
| `hideBackdrop` | `bool` | `false` | - |
| `keepMounted` | `bool` | `false` | - |
| `onClose` | `func` | - | - |
| `slotProps` | `shape`{ backdrop?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ backdrop?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `backdrop` | `'div'` | The component that renders the backdrop. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `hidden` | `MuiModal-hidden` | Class name applied to the root element when open is false. |
# Popper API

The Popper component API documentation.

## Import

```
import Popper from '@mui/material/Popper';
// or
import { Popper } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `bool` | - | - |
| `anchorEl` | `union` HTML element<br>\| object<br>\| func | - | - |
| `children` | `union` node<br>\| func | - | - |
| `component` | `elementType` | - | - |
| `components` | `shape`{ Root?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `container` | `union` HTML element<br>\| func | - | - |
| `disablePortal` | `bool` | `false` | - |
| `keepMounted` | `bool` | `false` | - |
| `modifiers` | `arrayOf` Array<{ data?: object, effect?: func, enabled?: bool, fn?: func, name?: any, options?: object, phase?: 'afterMain'<br>\| 'afterRead'<br>\| 'afterWrite'<br>\| 'beforeMain'<br>\| 'beforeRead'<br>\| 'beforeWrite'<br>\| 'main'<br>\| 'read'<br>\| 'write', requires?: Array, requiresIfExists?: Array }> | - | - |
| `placement` | `enum`'auto-end'<br>\| 'auto-start'<br>\| 'auto'<br>\| 'bottom-end'<br>\| 'bottom-start'<br>\| 'bottom'<br>\| 'left-end'<br>\| 'left-start'<br>\| 'left'<br>\| 'right-end'<br>\| 'right-start'<br>\| 'right'<br>\| 'top-end'<br>\| 'top-start'<br>\| 'top' | `'bottom'` | - |
| `popperOptions` | `shape`{ modifiers?: array, onFirstUpdate?: func, placement?: 'auto-end'<br>\| 'auto-start'<br>\| 'auto'<br>\| 'bottom-end'<br>\| 'bottom-start'<br>\| 'bottom'<br>\| 'left-end'<br>\| 'left-start'<br>\| 'left'<br>\| 'right-end'<br>\| 'right-start'<br>\| 'right'<br>\| 'top-end'<br>\| 'top-start'<br>\| 'top', strategy?: 'absolute'<br>\| 'fixed' } | `{}` | - |
| `popperRef` | `custom` ref | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `transition` | `bool` | `false` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `root` | `MuiPopper-root` | Class name applied to the root element. |
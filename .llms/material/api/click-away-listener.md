# ClickAwayListener API

The ClickAwayListener component API documentation.

## Import

```
import ClickAwayListener from '@mui/material/ClickAwayListener';
// or
import { ClickAwayListener } from '@mui/material';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` element | - | - |
| `onClickAway` | `func` | - | - |
| `disableReactTree` | `bool` | `false` | - |
| `mouseEvent` | `enum`'onClick'<br>\| 'onMouseDown'<br>\| 'onMouseUp'<br>\| 'onPointerDown'<br>\| 'onPointerUp'<br>\| false | `'onClick'` | - |
| `touchEvent` | `enum`'onTouchEnd'<br>\| 'onTouchStart'<br>\| false | `'onTouchEnd'` | - |

:::info
The `ref` is forwarded to the root element.
:::
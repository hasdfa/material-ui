# Divider API

The Divider component API documentation.

## Import

```
import Divider from '@mui/joy/Divider';
// or
import { Divider } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `component` | `elementType` | - | - |
| `inset` | `union`'none'<br>\| 'context'<br>\| string | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLHRElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'hr'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `horizontal` | `MuiDivider-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `insetContext` | `MuiDivider-insetContext` | Class name applied to the root element if \`inset="context"\`. |
| `insetNone` | `MuiDivider-insetNone` | Class name applied to the root element if \`inset="none"\`. |
| `vertical` | `MuiDivider-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
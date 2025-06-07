# ListDivider API

The ListDivider component API documentation.

## Import

```
import ListDivider from '@mui/joy/ListDivider';
// or
import { ListDivider } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `component` | `elementType` | - | - |
| `inset` | `union`'context'<br>\| 'gutter'<br>\| 'startDecorator'<br>\| 'startContent'<br>\| string | `'context'` | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'li'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `horizontal` | `MuiListDivider-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `insetGutter` | `MuiListDivider-insetGutter` | Class name applied to the root element if \`inset="gutter"\`. |
| `insetStartContent` | `MuiListDivider-insetStartContent` | Class name applied to the root element if \`inset="startContent"\`. |
| `insetStartDecorator` | `MuiListDivider-insetStartDecorator` | Class name applied to the root element if \`inset="startDecorator"\`. |
| `vertical` | `MuiListDivider-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
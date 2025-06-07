# Accordion API

The Accordion component API documentation.

## Import

```
import Accordion from '@mui/joy/Accordion';
// or
import { Accordion } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `accordionId` | `string` | - | - |
| `children` | `node` | - | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `defaultExpanded` | `bool` | `false` | - |
| `disabled` | `bool` | `false` | - |
| `expanded` | `bool` | - | - |
| `onChange` | `func` | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `enum`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid' | `'plain'` | - |

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
| `disabled` | `Mui-disabled` | Class name applied to the root element if \`disabled\` is true. |
| `expanded` | `Mui-expanded` | Class name applied to the root element if \`expanded\` is true. |
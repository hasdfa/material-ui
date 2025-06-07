# AccordionSummary API

The AccordionSummary component API documentation.

## Import

```
import AccordionSummary from '@mui/joy/AccordionSummary';
// or
import { AccordionSummary } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `indicator` | `node` | `` | - |
| `slotProps` | `shape`{ button?: func<br>\| object, indicator?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ button?: elementType, indicator?: elementType, root?: elementType } | `{}` | - |
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
| `button` | `'button'` | The component that renders the button. |
| `indicator` | `'span'` | The component that renders the indicator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | Class name applied when the accordion is disabled. |
| `expanded` | `Mui-expanded` | Class name applied when the accordion is expanded. |
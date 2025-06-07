# AccordionActions API

The AccordionActions component API documentation.

## Import

```
import AccordionActions from '@mui/material/AccordionActions';
// or
import { AccordionActions } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `disableSpacing` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `root` | `MuiAccordionActions-root` | Styles applied to the root element. |
| `spacing` | `MuiAccordionActions-spacing` | Styles applied to the root element unless \`disableSpacing={true}\`. |
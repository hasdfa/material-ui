# AccordionSummary API

The AccordionSummary component API documentation.

## Import

```
import AccordionSummary from '@mui/material/AccordionSummary';
// or
import { AccordionSummary } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `expandIcon` | `node` | - | - |
| `focusVisibleClassName` | `string` | - | - |
| `slotProps` | `shape`{ content?: func<br>\| object, expandIconWrapper?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ content?: elementType, expandIconWrapper?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `ButtonBase` | The component that renders the root slot. |
| `content` | `div` | The component that renders the content slot. |
| `expandIconWrapper` | `div` | The component that renders the expand icon wrapper slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `contentGutters` | `MuiAccordionSummary-contentGutters` | Styles applied to the children wrapper element unless \`disableGutters={true}\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `expanded` | `Mui-expanded` | State class applied to the root element, children wrapper element and \`IconButton\` component if \`expanded={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the ButtonBase root element if the button is keyboard focused. |
| `gutters` | `MuiAccordionSummary-gutters` | Styles applied to the root element unless \`disableGutters={true}\`. |
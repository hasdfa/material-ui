# AccordionGroup API

The AccordionGroup component API documentation.

## Import

```
import AccordionGroup from '@mui/joy/AccordionGroup';
// or
import { AccordionGroup } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disableDivider` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `transition` | `union`{ expanded: string, initial: string }<br>\| string | `'0.2s ease'` | - |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

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
| `colorContext` | `MuiAccordionGroup-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiAccordionGroup-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiAccordionGroup-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiAccordionGroup-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiAccordionGroup-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiAccordionGroup-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sizeLg` | `MuiAccordionGroup-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiAccordionGroup-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiAccordionGroup-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiAccordionGroup-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiAccordionGroup-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiAccordionGroup-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiAccordionGroup-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
# RadioGroup API

The RadioGroup component API documentation.

## Import

```
import RadioGroup from '@mui/joy/RadioGroup';
// or
import { RadioGroup } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | - |
| `color` | `union`'danger'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `defaultValue` | `any` | - | - |
| `disableIcon` | `bool` | `false` | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'vertical'` | - |
| `overlay` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |
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
| `colorDanger` | `MuiRadioGroup-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiRadioGroup-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiRadioGroup-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiRadioGroup-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiRadioGroup-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `horizontal` | `MuiRadioGroup-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `sizeLg` | `MuiRadioGroup-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiRadioGroup-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiRadioGroup-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiRadioGroup-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiRadioGroup-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiRadioGroup-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiRadioGroup-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiRadioGroup-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
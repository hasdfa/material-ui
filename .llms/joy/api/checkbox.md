# Checkbox API

The Checkbox component API documentation.

## Import

```
import Checkbox from '@mui/joy/Checkbox';
// or
import { Checkbox } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `bool` | - | - |
| `checkedIcon` | `node` | `` | - |
| `className` | `string` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `defaultChecked` | `bool` | - | - |
| `disabled` | `bool` | - | - |
| `disableIcon` | `bool` | `false` | - |
| `indeterminate` | `bool` | `false` | - |
| `indeterminateIcon` | `node` | `` | - |
| `label` | `node` | - | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `overlay` | `bool` | `false` | - |
| `readOnly` | `bool` | - | - |
| `required` | `bool` | - | - |
| `size` | `enum`'sm'<br>\| 'md'<br>\| 'lg' | `'md'` | - |
| `slotProps` | `shape`{ action?: func<br>\| object, checkbox?: func<br>\| object, input?: func<br>\| object, label?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ action?: elementType, checkbox?: elementType, input?: elementType, label?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `uncheckedIcon` | `node` | - | - |
| `value` | `union` Array<br>\| number<br>\| string | - | - |
| `variant` | `enum`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid' | `'solid'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'span'` | The component that renders the root. |
| `checkbox` | `'span'` | The component that renders the checkbox. |
| `action` | `'span'` | The component that renders the action. |
| `input` | `'input'` | The component that renders the input. |
| `label` | `'label'` | The component that renders the label. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `checked` | `Mui-checked` | State class applied to the input component's \`checked\` class. |
| `colorContext` | `MuiCheckbox-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiCheckbox-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiCheckbox-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiCheckbox-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiCheckbox-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiCheckbox-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the input component's disabled class. |
| `focusVisible` | `Mui-focusVisible` | Class name applied to the root element if the switch has visible focus |
| `indeterminate` | `MuiCheckbox-indeterminate` | State class applied to the root element if \`indeterminate={true}\`. |
| `sizeLg` | `MuiCheckbox-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiCheckbox-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiCheckbox-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiCheckbox-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantSoft` | `MuiCheckbox-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiCheckbox-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
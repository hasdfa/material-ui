# Radio API

The Radio component API documentation.

## Import

```
import Radio from '@mui/joy/Radio';
// or
import { Radio } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `bool` | - | - |
| `checkedIcon` | `node` | - | - |
| `className` | `string` | - | - |
| `color` | `union`'danger'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `defaultChecked` | `bool` | - | - |
| `disabled` | `bool` | - | - |
| `disableIcon` | `bool` | `false` | - |
| `label` | `node` | - | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `overlay` | `bool` | `false` | - |
| `readOnly` | `bool` | - | - |
| `required` | `bool` | - | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ action?: func<br>\| object, icon?: func<br>\| object, input?: func<br>\| object, label?: func<br>\| object, radio?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ action?: elementType, icon?: elementType, input?: elementType, label?: elementType, radio?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `uncheckedIcon` | `node` | - | - |
| `value` | `any` | - | - |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'span'` | The component that renders the root. |
| `radio` | `'span'` | The component that renders the radio. |
| `icon` | `'span'` | The component that renders the icon. |
| `action` | `'span'` | The component that renders the action. |
| `input` | `'input'` | The component that renders the input. |
| `label` | `'label'` | The component that renders the label. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `checked` | `Mui-checked` | State class applied to the root, action slots if \`checked\`. |
| `colorContext` | `MuiRadio-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiRadio-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiRadio-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiRadio-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiRadio-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiRadio-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root, action slots if \`disabled\`. |
| `focusVisible` | `Mui-focusVisible` | Class name applied to the root element if the switch has visible focus |
| `sizeLg` | `MuiRadio-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiRadio-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiRadio-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiRadio-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantSoft` | `MuiRadio-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiRadio-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
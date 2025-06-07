# Switch API

The Switch component API documentation.

## Import

```
import Switch from '@mui/joy/Switch';
// or
import { Switch } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `bool` | - | - |
| `color` | `union`'danger'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `defaultChecked` | `bool` | - | - |
| `disabled` | `bool` | - | - |
| `endDecorator` | `union` node<br>\| func | - | - |
| `onChange` | `func` | - | - |
| `readOnly` | `bool` | - | - |
| `required` | `bool` | - | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ action?: func<br>\| object, endDecorator?: func<br>\| object, input?: func<br>\| object, root?: func<br>\| object, startDecorator?: func<br>\| object, thumb?: func<br>\| object, track?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ action?: elementType, endDecorator?: elementType, input?: elementType, root?: elementType, startDecorator?: elementType, thumb?: elementType, track?: elementType } | `{}` | - |
| `startDecorator` | `union` node<br>\| func | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'solid'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `thumb` | `'span'` | The component that renders the thumb. |
| `action` | `'div'` | The component that renders the action. |
| `input` | `'input'` | The component that renders the input. |
| `track` | `'span'` | The component that renders the track. |
| `startDecorator` | `'span'` | The component that renders the start decorator. |
| `endDecorator` | `'span'` | The component that renders the end decorator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `checked` | `Mui-checked` | State class applied to the root \`checked\` class. |
| `colorContext` | `MuiSwitch-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiSwitch-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorPrimary` | `MuiSwitch-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiSwitch-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiSwitch-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root disabled class. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if the switch has visible focus |
| `readOnly` | `Mui-readOnly` | Class name applied to the root element if the switch is read-only |
| `sizeLg` | `MuiSwitch-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiSwitch-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiSwitch-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiSwitch-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantSoft` | `MuiSwitch-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiSwitch-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
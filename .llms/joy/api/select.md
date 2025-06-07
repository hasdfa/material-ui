# Select API

The Select component API documentation.

## Import

```
import Select from '@mui/joy/Select';
// or
import { Select } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `union` func<br>\| { current?: { focusVisible: func } } | - | - |
| `autoFocus` | `bool` | `false` | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `defaultListboxOpen` | `bool` | `false` | - |
| `defaultValue` | `any` | - | - |
| `disabled` | `bool` | `false` | - |
| `endDecorator` | `node` | - | - |
| `getSerializedValue` | `func` | - | - |
| `indicator` | `node` | - | - |
| `listboxId` | `string` | - | - |
| `listboxOpen` | `bool` | `undefined` | - |
| `multiple` | `bool` | - | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `onClose` | `func` | - | - |
| `onListboxOpenChange` | `func` | - | - |
| `placeholder` | `node` | - | - |
| `renderValue` | `func` | - | - |
| `required` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | - | - |
| `slots` | `shape`{ button?: elementType, endDecorator?: elementType, indicator?: elementType, listbox?: elementType, root?: elementType, startDecorator?: elementType } | `{}` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `button` | `'button'` | The component that renders the button. |
| `startDecorator` | `'span'` | The component that renders the start decorator. |
| `endDecorator` | `'span'` | The component that renders the end decorator. |
| `indicator` | `'span'` | The component that renders the indicator. |
| `listbox` | `'ul'` | The component that renders the listbox. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiSelect-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiSelect-colorDanger` | Class name applied to the root slot if \`color="danger"\`. |
| `colorNeutral` | `MuiSelect-colorNeutral` | Class name applied to the root slot if \`color="neutral"\`. |
| `colorPrimary` | `MuiSelect-colorPrimary` | Class name applied to the root slot if \`color="primary"\`. |
| `colorSuccess` | `MuiSelect-colorSuccess` | Class name applied to the root slot if \`color="success"\`. |
| `colorWarning` | `MuiSelect-colorWarning` | Class name applied to the root slot if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root slot if \`disabled={true}\`. |
| `expanded` | `Mui-expanded` | State class applied to the root slot if listbox open. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the SelectBase root slot if the button is keyboard focused. |
| `multiple` | `MuiSelect-multiple` | Class name applied to the root slot if \`multiple=true\` |
| `popper` | `MuiSelect-popper` | Class name applied to the popper slot. |
| `sizeLg` | `MuiSelect-sizeLg` | Class name applied to the root slot if \`size="lg"\`. |
| `sizeMd` | `MuiSelect-sizeMd` | Class name applied to the root slot if \`size="md"\`. |
| `sizeSm` | `MuiSelect-sizeSm` | Class name applied to the root slot if \`size="sm"\`. |
| `variantOutlined` | `MuiSelect-variantOutlined` | Class name applied to the root slot if \`variant="outlined"\`. |
| `variantPlain` | `MuiSelect-variantPlain` | Class name applied to the root slot if \`variant="plain"\`. |
| `variantSoft` | `MuiSelect-variantSoft` | Class name applied to the root slot if \`variant="soft"\`. |
| `variantSolid` | `MuiSelect-variantSolid` | Class name applied to the root slot if \`variant="solid"\`. |
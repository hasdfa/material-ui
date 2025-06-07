# Rating API

The Rating component API documentation.

## Import

```
import Rating from '@mui/material/Rating';
// or
import { Rating } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `defaultValue` | `number` | `null` | - |
| `disabled` | `bool` | `false` | - |
| `emptyIcon` | `node` | `` | - |
| `emptyLabelText` | `node` | `'Empty'` | - |
| `getLabelText` | `func` | ``function defaultLabelText(value) {<br>  return `${value || '0'} Star${value !== 1 ? 's' : ''}`;<br>}`` | - |
| `highlightSelectedOnly` | `bool` | `false` | - |
| `icon` | `node` | `` | - |
| `IconContainerComponent` | `elementType` | `function IconContainer(props) {<br>  const { value, ...other } = props;<br>  return ;<br>}` | - |
| `max` | `number` | `5` | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `onChangeActive` | `func` | - | - |
| `precision` | `custom` number | `1` | - |
| `readOnly` | `bool` | `false` | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| 'large'<br>\| string | `'medium'` | - |
| `slotProps` | `shape`{ decimal?: func<br>\| object, icon?: func<br>\| object, label?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ decimal?: elementType, icon?: elementType, label?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `number` | - | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'span'` | The component used for the root slot. |
| `label` | `'label'` | The component used for the label slot. |
| `icon` | `'span'` | The component used for the icon slot. |
| `decimal` | `'span'` | The component used fo r the decimal slot. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if keyboard focused. |
| `iconActive` | `MuiRating-iconActive` | Styles applied to the icon wrapping elements when active. |
| `iconEmpty` | `MuiRating-iconEmpty` | Styles applied to the icon wrapping elements when empty. |
| `iconFilled` | `MuiRating-iconFilled` | Styles applied to the icon wrapping elements when filled. |
| `iconFocus` | `MuiRating-iconFocus` | Styles applied to the icon wrapping elements when focus. |
| `iconHover` | `MuiRating-iconHover` | Styles applied to the icon wrapping elements when hover. |
| `labelEmptyValueActive` | `MuiRating-labelEmptyValueActive` | Styles applied to the label of the "no value" input when it is active. |
| `readOnly` | `Mui-readOnly` | Styles applied to the root element if \`readOnly={true}\`. |
| `sizeLarge` | `MuiRating-sizeLarge` | Styles applied to the root element if \`size="large"\`. |
| `sizeMedium` | `MuiRating-sizeMedium` | Styles applied to the root element if \`size="medium"\`. |
| `sizeSmall` | `MuiRating-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
| `visuallyHidden` | `MuiRating-visuallyHidden` | Visually hide an element. |
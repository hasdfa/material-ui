# ListItem API

The ListItem component API documentation.

## Import

```
import ListItem from '@mui/joy/ListItem';
// or
import { ListItem } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `endAction` | `node` | - | - |
| `nested` | `bool` | `false` | - |
| `slotProps` | `shape`{ endAction?: func<br>\| object, root?: func<br>\| object, startAction?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ endAction?: elementType, root?: elementType, startAction?: elementType } | `{}` | - |
| `startAction` | `node` | - | - |
| `sticky` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'li'` | The component that renders the root. |
| `startAction` | `'div'` | The component that renders the start action. |
| `endAction` | `'div'` | The component that renders the end action. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiListItem-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiListItem-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiListItem-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiListItem-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiListItem-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiListItem-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `nested` | `MuiListItem-nested` | Class name applied to the root element, if nested={true}. |
| `nesting` | `MuiListItem-nesting` | Class name applied to the root element, if it is under a nested list item. |
| `sticky` | `MuiListItem-sticky` | Class name applied to the root element, if sticky={true}. |
| `variantOutlined` | `MuiListItem-variantOutlined` | State class applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiListItem-variantPlain` | State class applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiListItem-variantSoft` | State class applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiListItem-variantSolid` | State class applied to the root element if \`variant="solid"\`. |
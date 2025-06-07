# AvatarGroup API

The AvatarGroup component API documentation.

## Import

```
import AvatarGroup from '@mui/material/AvatarGroup';
// or
import { AvatarGroup } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `componentsProps` | `shape`{ additionalAvatar?: object } | - | - |
| `max` | `custom` number | `5` | - |
| `renderSurplus` | `func` | - | - |
| `slotProps` | `shape`{ additionalAvatar?: object, surplus?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ surplus?: elementType } | `{}` | - |
| `spacing` | `union`'medium'<br>\| 'small'<br>\| number | `'medium'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `total` | `number` | `children.length` | - |
| `variant` | `union`'circular'<br>\| 'rounded'<br>\| 'square'<br>\| string | `'circular'` | - |

:::info
The `ref` is forwarded to the root element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `surplus` | `undefined` |  |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `avatar` | `MuiAvatarGroup-avatar` | Styles applied to the avatar elements. |
| `root` | `MuiAvatarGroup-root` | Styles applied to the root element. |
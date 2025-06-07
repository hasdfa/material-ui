# Avatar API

The Avatar component API documentation.

## Import

```
import Avatar from '@mui/joy/Avatar';
// or
import { Avatar } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alt` | `string` | - | - |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `size` | `union`'lg'<br>\| 'md'<br>\| 'sm'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ fallback?: func<br>\| object, img?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ fallback?: elementType, img?: elementType, root?: elementType } | `{}` | - |
| `src` | `string` | - | - |
| `srcSet` | `string` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'soft'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `img` | `'img'` | The component that renders the img. |
| `fallback` | `'svg'` | The component that renders the fallback. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiAvatar-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiAvatar-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiAvatar-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiAvatar-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiAvatar-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiAvatar-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sizeLg` | `MuiAvatar-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiAvatar-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiAvatar-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiAvatar-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantSoft` | `MuiAvatar-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiAvatar-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
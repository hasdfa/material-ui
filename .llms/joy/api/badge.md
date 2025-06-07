# Badge API

The Badge component API documentation.

## Import

```
import Badge from '@mui/joy/Badge';
// or
import { Badge } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `anchorOrigin` | `shape`{ horizontal: 'left'<br>\| 'right', vertical: 'bottom'<br>\| 'top' } | `{<br>  vertical: 'top',<br>  horizontal: 'right',<br>}` | - |
| `badgeContent` | `node` | `''` | - |
| `badgeInset` | `union` number<br>\| string | `0` | - |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `component` | `elementType` | - | - |
| `invisible` | `bool` | `false` | - |
| `max` | `number` | `99` | - |
| `showZero` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ badge?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ badge?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'solid'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'span'` | The component that renders the root. |
| `badge` | `'span'` | The component that renders the badge. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `anchorOriginBottomLeft` | `MuiBadge-anchorOriginBottomLeft` | Class name applied to the badge \`span\` element if \`anchorOrigin={{ 'bottom', 'left' }}\`. |
| `anchorOriginBottomRight` | `MuiBadge-anchorOriginBottomRight` | Class name applied to the badge \`span\` element if \`anchorOrigin={{ 'bottom', 'right' }}\`. |
| `anchorOriginTopLeft` | `MuiBadge-anchorOriginTopLeft` | Class name applied to the badge \`span\` element if \`anchorOrigin={{ 'top', 'left' }}\`. |
| `anchorOriginTopRight` | `MuiBadge-anchorOriginTopRight` | Class name applied to the badge \`span\` element if \`anchorOrigin={{ 'top', 'right' }}\`. |
| `colorContext` | `MuiBadge-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiBadge-colorDanger` | Class name applied to the badge \`span\` element if \`color="danger"\`. |
| `colorNeutral` | `MuiBadge-colorNeutral` | Class name applied to the badge \`span\` element if \`color="neutral"\`. |
| `colorPrimary` | `MuiBadge-colorPrimary` | Class name applied to the badge \`span\` element if \`color="primary"\`. |
| `colorSuccess` | `MuiBadge-colorSuccess` | Class name applied to the badge \`span\` element if \`color="success"\`. |
| `colorWarning` | `MuiBadge-colorWarning` | Class name applied to the badge \`span\` element if \`color="warning"\`. |
| `invisible` | `MuiBadge-invisible` | State class applied to the badge \`span\` element if \`invisible={true}\`. |
| `locationInside` | `MuiBadge-locationInside` | State class applied to the badge \`span\` element if \`location="inside"\`. |
| `locationOutside` | `MuiBadge-locationOutside` | State class applied to the badge \`span\` element if \`location="outside"\`. |
| `sizeLg` | `MuiBadge-sizeLg` | Class name applied to the badge \`span\` element if \`size="lg"\`. |
| `sizeMd` | `MuiBadge-sizeMd` | Class name applied to the badge \`span\` element if \`size="md"\`. |
| `sizeSm` | `MuiBadge-sizeSm` | Class name applied to the badge \`span\` element if \`size="sm"\`. |
| `variantOutlined` | `MuiBadge-variantOutlined` | Class name applied to the badge \`span\` element if \`variant="outlined"\`. |
| `variantPlain` | `MuiBadge-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiBadge-variantSoft` | Class name applied to the badge \`span\` element if \`variant="soft"\`. |
| `variantSolid` | `MuiBadge-variantSolid` | Class name applied to the badge \`span\` element if \`variant="solid"\`. |
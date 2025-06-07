# Badge API

The Badge component API documentation.

## Import

```
import Badge from '@mui/material/Badge';
// or
import { Badge } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `anchorOrigin` | `shape`{ horizontal?: 'left'<br>\| 'right', vertical?: 'bottom'<br>\| 'top' } | `{<br>  vertical: 'top',<br>  horizontal: 'right',<br>}` | - |
| `badgeContent` | `node` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'default'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'default'` | - |
| `component` | `elementType` | - | - |
| `components` | `shape`{ Badge?: elementType, Root?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ badge?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `invisible` | `bool` | `false` | - |
| `max` | `number` | `99` | - |
| `overlap` | `enum`'circular'<br>\| 'rectangular' | `'rectangular'` | - |
| `showZero` | `bool` | `false` | - |
| `slotProps` | `shape`{ badge?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ badge?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'dot'<br>\| 'standard'<br>\| string | `'standard'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `anchorOriginBottomLeft` | `MuiBadge-anchorOriginBottomLeft` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'bottom', 'left' }}\`. |
| `anchorOriginBottomLeftCircular` | `MuiBadge-anchorOriginBottomLeftCircular` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'bottom', 'left' }} overlap="circular"\`. |
| `anchorOriginBottomLeftRectangular` | `MuiBadge-anchorOriginBottomLeftRectangular` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'bottom', 'left' }} overlap="rectangular"\`. |
| `anchorOriginBottomRight` | `MuiBadge-anchorOriginBottomRight` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'bottom', 'right' }}\`. |
| `anchorOriginBottomRightCircular` | `MuiBadge-anchorOriginBottomRightCircular` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'bottom', 'right' }} overlap="circular"\`. |
| `anchorOriginBottomRightRectangular` | `MuiBadge-anchorOriginBottomRightRectangular` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'bottom', 'right' }} overlap="rectangular"\`. |
| `anchorOriginTopLeft` | `MuiBadge-anchorOriginTopLeft` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'top', 'left' }}\`. |
| `anchorOriginTopLeftCircular` | `MuiBadge-anchorOriginTopLeftCircular` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'top', 'left' }} overlap="circular"\`. |
| `anchorOriginTopLeftRectangular` | `MuiBadge-anchorOriginTopLeftRectangular` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'top', 'left' }} overlap="rectangular"\`. |
| `anchorOriginTopRight` | `MuiBadge-anchorOriginTopRight` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'top', 'right' }}\`. |
| `anchorOriginTopRightCircular` | `MuiBadge-anchorOriginTopRightCircular` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'top', 'right' }} overlap="circular"\`. |
| `anchorOriginTopRightRectangular` | `MuiBadge-anchorOriginTopRightRectangular` | Styles applied to the badge \`span\` element if \`anchorOrigin={{ 'top', 'right' }} overlap="rectangular"\`. |
| `badge` | `MuiBadge-badge` | Styles applied to the badge \`span\` element. |
| `colorError` | `MuiBadge-colorError` | Styles applied to the badge \`span\` element if \`color="error"\`. |
| `colorInfo` | `MuiBadge-colorInfo` | Styles applied to the badge \`span\` element if \`color="info"\`. |
| `colorPrimary` | `MuiBadge-colorPrimary` | Styles applied to the badge \`span\` element if \`color="primary"\`. |
| `colorSecondary` | `MuiBadge-colorSecondary` | Styles applied to the badge \`span\` element if \`color="secondary"\`. |
| `colorSuccess` | `MuiBadge-colorSuccess` | Styles applied to the badge \`span\` element if \`color="success"\`. |
| `colorWarning` | `MuiBadge-colorWarning` | Styles applied to the badge \`span\` element if \`color="warning"\`. |
| `dot` | `MuiBadge-dot` | Styles applied to the badge \`span\` element if \`variant="dot"\`. |
| `invisible` | `MuiBadge-invisible` | State class applied to the badge \`span\` element if \`invisible={true}\`. |
| `overlapCircular` | `MuiBadge-overlapCircular` | Styles applied to the badge \`span\` element if \`overlap="circular"\`. |
| `overlapRectangular` | `MuiBadge-overlapRectangular` | Styles applied to the badge \`span\` element if \`overlap="rectangular"\`. |
| `root` | `MuiBadge-root` | Styles applied to the root element. |
| `standard` | `MuiBadge-standard` | Styles applied to the badge \`span\` element if \`variant="standard"\`. |
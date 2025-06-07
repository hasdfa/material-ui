# Chip API

The Chip component API documentation.

## Import

```
import Chip from '@mui/material/Chip';
// or
import { Chip } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `avatar` | `element` | - | - |
| `children` | `custom` unsupportedProp | - | - |
| `classes` | `object` | - | - |
| `clickable` | `bool` | - | - |
| `color` | `union`'default'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'default'` | - |
| `component` | `elementType` | - | - |
| `deleteIcon` | `element` | - | - |
| `disabled` | `bool` | `false` | - |
| `icon` | `element` | - | - |
| `label` | `node` | - | - |
| `onDelete` | `func` | - | - |
| `size` | `union`'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `skipFocusWhenDisabled` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'filled'<br>\| 'outlined'<br>\| string | `'filled'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `avatar` | `MuiChip-avatar` | Styles applied to the avatar element. |
| `avatarColorPrimary` | `MuiChip-avatarColorPrimary` | Styles applied to the avatar element if \`color="primary"\`. |
| `avatarColorSecondary` | `MuiChip-avatarColorSecondary` | Styles applied to the avatar element if \`color="secondary"\`. |
| `avatarMedium` | `MuiChip-avatarMedium` | Styles applied to the avatar element if \`size="medium"\`. |
| `avatarSmall` | `MuiChip-avatarSmall` | Styles applied to the avatar element if \`size="small"\`. |
| `clickable` | `MuiChip-clickable` | Styles applied to the root element if \`onClick\` is defined or \`clickable={true}\`. |
| `clickableColorPrimary` | `MuiChip-clickableColorPrimary` | Styles applied to the root element if \`onClick\` and \`color="primary"\` is defined or \`clickable={true}\`. |
| `clickableColorSecondary` | `MuiChip-clickableColorSecondary` | Styles applied to the root element if \`onClick\` and \`color="secondary"\` is defined or \`clickable={true}\`. |
| `colorDefault` | `MuiChip-colorDefault` | Styles applied to the root element if \`color="default"\`. |
| `colorError` | `MuiChip-colorError` | Styles applied to the root element if \`color="error"\`. |
| `colorInfo` | `MuiChip-colorInfo` | Styles applied to the root element if \`color="info"\`. |
| `colorPrimary` | `MuiChip-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiChip-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `colorSuccess` | `MuiChip-colorSuccess` | Styles applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiChip-colorWarning` | Styles applied to the root element if \`color="warning"\`. |
| `deletable` | `MuiChip-deletable` | Styles applied to the root element if \`onDelete\` is defined. |
| `deletableColorPrimary` | `MuiChip-deletableColorPrimary` | Styles applied to the root element if \`onDelete\` and \`color="primary"\` is defined. |
| `deletableColorSecondary` | `MuiChip-deletableColorSecondary` | Styles applied to the root element if \`onDelete\` and \`color="secondary"\` is defined. |
| `deleteIcon` | `MuiChip-deleteIcon` | Styles applied to the deleteIcon element. |
| `deleteIconColorPrimary` | `MuiChip-deleteIconColorPrimary` | Styles applied to the deleteIcon element if \`color="primary"\`. |
| `deleteIconColorSecondary` | `MuiChip-deleteIconColorSecondary` | Styles applied to the deleteIcon element if \`color="secondary"\`. |
| `deleteIconFilledColorPrimary` | `MuiChip-deleteIconFilledColorPrimary` | Styles applied to the deleteIcon element if \`color="primary"\` and \`variant="filled"\`. |
| `deleteIconFilledColorSecondary` | `MuiChip-deleteIconFilledColorSecondary` | Styles applied to the deleteIcon element if \`color="secondary"\` and \`variant="filled"\`. |
| `deleteIconMedium` | `MuiChip-deleteIconMedium` | Styles applied to the deleteIcon element if \`size="medium"\`. |
| `deleteIconOutlinedColorPrimary` | `MuiChip-deleteIconOutlinedColorPrimary` | Styles applied to the deleteIcon element if \`color="primary"\` and \`variant="outlined"\`. |
| `deleteIconOutlinedColorSecondary` | `MuiChip-deleteIconOutlinedColorSecondary` | Styles applied to the deleteIcon element if \`color="secondary"\` and \`variant="outlined"\`. |
| `deleteIconSmall` | `MuiChip-deleteIconSmall` | Styles applied to the deleteIcon element if \`size="small"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `filled` | `MuiChip-filled` | Styles applied to the root element if \`variant="filled"\`. |
| `filledPrimary` | `MuiChip-filledPrimary` | Styles applied to the root element if \`variant="filled"\` and \`color="primary"\`. |
| `filledSecondary` | `MuiChip-filledSecondary` | Styles applied to the root element if \`variant="filled"\` and \`color="secondary"\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if keyboard focused. |
| `icon` | `MuiChip-icon` | Styles applied to the icon element. |
| `iconColorPrimary` | `MuiChip-iconColorPrimary` | Styles applied to the icon element if \`color="primary"\`. |
| `iconColorSecondary` | `MuiChip-iconColorSecondary` | Styles applied to the icon element if \`color="secondary"\`. |
| `iconMedium` | `MuiChip-iconMedium` | Styles applied to the icon element if \`size="medium"\`. |
| `iconSmall` | `MuiChip-iconSmall` | Styles applied to the icon element if \`size="small"\`. |
| `label` | `MuiChip-label` | Styles applied to the label \`span\` element. |
| `labelMedium` | `MuiChip-labelMedium` | Styles applied to the label \`span\` element if \`size="medium"\`. |
| `labelSmall` | `MuiChip-labelSmall` | Styles applied to the label \`span\` element if \`size="small"\`. |
| `outlined` | `MuiChip-outlined` | Styles applied to the root element if \`variant="outlined"\`. |
| `outlinedPrimary` | `MuiChip-outlinedPrimary` | Styles applied to the root element if \`variant="outlined"\` and \`color="primary"\`. |
| `outlinedSecondary` | `MuiChip-outlinedSecondary` | Styles applied to the root element if \`variant="outlined"\` and \`color="secondary"\`. |
| `root` | `MuiChip-root` | Styles applied to the root element. |
| `sizeMedium` | `MuiChip-sizeMedium` | Styles applied to the root element if \`size="medium"\`. |
| `sizeSmall` | `MuiChip-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
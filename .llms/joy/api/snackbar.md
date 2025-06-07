# Snackbar API

The Snackbar component API documentation.

## Import

```
import Snackbar from '@mui/joy/Snackbar';
// or
import { Snackbar } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `bool` | - | - |
| `anchorOrigin` | `shape`{ horizontal: 'center'<br>\| 'left'<br>\| 'right', vertical: 'bottom'<br>\| 'top' } | `{ vertical: 'bottom', horizontal: 'right' }` | - |
| `animationDuration` | `number` | `300` | - |
| `autoHideDuration` | `number` | `null` | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disableWindowBlurListener` | `bool` | `false` | - |
| `endDecorator` | `node` | - | - |
| `invertedColors` | `bool` | `false` | - |
| `key` | `custom` any | - | - |
| `onClose` | `func` | - | - |
| `onUnmount` | `func` | - | - |
| `resumeHideDuration` | `number` | - | - |
| `size` | `enum`'sm'<br>\| 'md'<br>\| 'lg' | `'md'` | - |
| `slotProps` | `shape`{ clickAway?: func<br>\| { children: element, disableReactTree?: bool, mouseEvent?: 'onClick'<br>\| 'onMouseDown'<br>\| 'onMouseUp'<br>\| 'onPointerDown'<br>\| 'onPointerUp'<br>\| false, onClickAway: func, touchEvent?: 'onTouchEnd'<br>\| 'onTouchStart'<br>\| false }, endDecorator?: func<br>\| object, root?: func<br>\| object, startDecorator?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ clickAway?: elementType, endDecorator?: elementType, root?: elementType, startDecorator?: elementType } | `{}` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `enum`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid' | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `startDecorator` | `'span'` | The component that renders the start decorator. |
| `endDecorator` | `'span'` | The component that renders the end decorator. |
| `clickAway` | `ClickAwayListener` | The component that renders the click away. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `anchorOriginBottomCenter` | `MuiSnackbar-anchorOriginBottomCenter` | Styles applied to the root element if \`anchorOrigin={{ 'bottom', 'center' }}\`. |
| `anchorOriginBottomLeft` | `MuiSnackbar-anchorOriginBottomLeft` | Styles applied to the root element if \`anchorOrigin={{ 'bottom', 'left' }}\`. |
| `anchorOriginBottomRight` | `MuiSnackbar-anchorOriginBottomRight` | Styles applied to the root element if \`anchorOrigin={{ 'bottom', 'right' }}\`. |
| `anchorOriginTopCenter` | `MuiSnackbar-anchorOriginTopCenter` | Styles applied to the root element if \`anchorOrigin={{ 'top', 'center' }}\`. |
| `anchorOriginTopLeft` | `MuiSnackbar-anchorOriginTopLeft` | Styles applied to the root element if \`anchorOrigin={{ 'top', 'left' }}\`. |
| `anchorOriginTopRight` | `MuiSnackbar-anchorOriginTopRight` | Styles applied to the root element if \`anchorOrigin={{ 'top', 'right' }}\`. |
| `colorDanger` | `MuiSnackbar-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiSnackbar-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiSnackbar-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiSnackbar-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiSnackbar-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sizeLg` | `MuiSnackbar-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiSnackbar-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiSnackbar-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiSnackbar-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiSnackbar-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiSnackbar-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiSnackbar-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
# Alert API

The Alert component API documentation.

## Import

```
import Alert from '@mui/material/Alert';
// or
import { Alert } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Paper](/material-ui/api/paper/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `node` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `closeText` | `string` | `'Close'` | - |
| `color` | `union`'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | - | - |
| `components` | `shape`{ CloseButton?: elementType, CloseIcon?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ closeButton?: object, closeIcon?: object } | `{}` | - |
| `icon` | `node` | - | - |
| `iconMapping` | `shape`{ error?: node, info?: node, success?: node, warning?: node } | - | - |
| `onClose` | `func` | - | - |
| `role` | `string` | `'alert'` | - |
| `severity` | `union`'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'success'` | - |
| `slotProps` | `shape`{ action?: func<br>\| object, closeButton?: func<br>\| object, closeIcon?: func<br>\| object, icon?: func<br>\| object, message?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ action?: elementType, closeButton?: elementType, closeIcon?: elementType, icon?: elementType, message?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'filled'<br>\| 'outlined'<br>\| 'standard'<br>\| string | `'standard'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Paper](/material-ui/api/paper/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `Paper` | The component that renders the root slot. |
| `icon` | `div` | The component that renders the icon slot. |
| `message` | `div` | The component that renders the message slot. |
| `action` | `div` | The component that renders the action slot. |
| `closeButton` | `IconButton` | The component that renders the close button. |
| `closeIcon` | `svg` | The component that renders the close icon. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorError` | `MuiAlert-colorError` | Styles applied to the root element if \`color="error"\`. |
| `colorInfo` | `MuiAlert-colorInfo` | Styles applied to the root element if \`color="info"\`. |
| `colorSuccess` | `MuiAlert-colorSuccess` | Styles applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiAlert-colorWarning` | Styles applied to the root element if \`color="warning"\`. |
| `filled` | `MuiAlert-filled` | Styles applied to the root element if \`variant="filled"\`. |
| `filledError` | `MuiAlert-filledError` | Styles applied to the root element if \`variant="filled"\` and \`color="error"\`. |
| `filledInfo` | `MuiAlert-filledInfo` | Styles applied to the root element if \`variant="filled"\` and \`color="info"\`. |
| `filledSuccess` | `MuiAlert-filledSuccess` | Styles applied to the root element if \`variant="filled"\` and \`color="success"\`. |
| `filledWarning` | `MuiAlert-filledWarning` | Styles applied to the root element if \`variant="filled"\` and \`color="warning"\` |
| `outlined` | `MuiAlert-outlined` | Styles applied to the root element if \`variant="outlined"\`. |
| `outlinedError` | `MuiAlert-outlinedError` | Styles applied to the root element if \`variant="outlined"\` and \`color="error"\`. |
| `outlinedInfo` | `MuiAlert-outlinedInfo` | Styles applied to the root element if \`variant="outlined"\` and \`color="info"\`. |
| `outlinedSuccess` | `MuiAlert-outlinedSuccess` | Styles applied to the root element if \`variant="outlined"\` and \`color="success"\`. |
| `outlinedWarning` | `MuiAlert-outlinedWarning` | Styles applied to the root element if \`variant="outlined"\` and \`color="warning"\`. |
| `standard` | `MuiAlert-standard` | Styles applied to the root element if \`variant="standard"\`. |
| `standardError` | `MuiAlert-standardError` | Styles applied to the root element if \`variant="standard"\` and \`color="error"\`. |
| `standardInfo` | `MuiAlert-standardInfo` | Styles applied to the root element if \`variant="standard"\` and \`color="info"\`. |
| `standardSuccess` | `MuiAlert-standardSuccess` | Styles applied to the root element if \`variant="standard"\` and \`color="success"\`. |
| `standardWarning` | `MuiAlert-standardWarning` | Styles applied to the root element if \`variant="standard"\` and \`color="warning"\`. |
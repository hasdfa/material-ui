# Button API

The Button component API documentation.

## Import

```
import Button from '@mui/material/Button';
// or
import { Button } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'inherit'<br>\| 'primary'<br>\| 'secondary'<br>\| 'success'<br>\| 'error'<br>\| 'info'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `disableElevation` | `bool` | `false` | - |
| `disableFocusRipple` | `bool` | `false` | - |
| `disableRipple` | `bool` | `false` | - |
| `endIcon` | `node` | - | - |
| `fullWidth` | `bool` | `false` | - |
| `href` | `string` | - | - |
| `loading` | `bool` | `null` | - |
| `loadingIndicator` | `node` | `` | - |
| `loadingPosition` | `enum`'center'<br>\| 'end'<br>\| 'start' | `'center'` | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| 'large'<br>\| string | `'medium'` | - |
| `startIcon` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'contained'<br>\| 'outlined'<br>\| 'text'<br>\| string | `'text'` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorError` | `MuiButton-colorError` | Styles applied to the root element if \`color="error"\`. |
| `colorInfo` | `MuiButton-colorInfo` | Styles applied to the root element if \`color="info"\`. |
| `colorInherit` | `MuiButton-colorInherit` | Styles applied to the root element if \`color="inherit"\`. |
| `colorPrimary` | `MuiButton-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiButton-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `colorSuccess` | `MuiButton-colorSuccess` | Styles applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiButton-colorWarning` | Styles applied to the root element if \`color="warning"\`. |
| `contained` | `MuiButton-contained` | Styles applied to the root element if \`variant="contained"\`. |
| `containedError` | `MuiButton-containedError` | Styles applied to the root element if \`variant="contained"\` and \`color="error"\`. |
| `containedInfo` | `MuiButton-containedInfo` | Styles applied to the root element if \`variant="contained"\` and \`color="info"\`. |
| `containedInherit` | `MuiButton-containedInherit` | Styles applied to the root element if \`variant="contained"\` and \`color="inherit"\`. |
| `containedPrimary` | `MuiButton-containedPrimary` | Styles applied to the root element if \`variant="contained"\` and \`color="primary"\`. |
| `containedSecondary` | `MuiButton-containedSecondary` | Styles applied to the root element if \`variant="contained"\` and \`color="secondary"\`. |
| `containedSizeLarge` | `MuiButton-containedSizeLarge` | Styles applied to the root element if \`size="large"\` and \`variant="contained"\`. |
| `containedSizeMedium` | `MuiButton-containedSizeMedium` | Styles applied to the root element if \`size="medium"\` and \`variant="contained"\`. |
| `containedSizeSmall` | `MuiButton-containedSizeSmall` | Styles applied to the root element if \`size="small"\` and \`variant="contained"\`. |
| `containedSuccess` | `MuiButton-containedSuccess` | Styles applied to the root element if \`variant="contained"\` and \`color="success"\`. |
| `containedWarning` | `MuiButton-containedWarning` | Styles applied to the root element if \`variant="contained"\` and \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `disableElevation` | `MuiButton-disableElevation` | Styles applied to the root element if \`disableElevation={true}\`. |
| `endIcon` | `MuiButton-endIcon` | Styles applied to the endIcon element if supplied. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the ButtonBase root element if the button is keyboard focused. |
| `fullWidth` | `MuiButton-fullWidth` | Styles applied to the root element if \`fullWidth={true}\`. |
| `icon` | `MuiButton-icon` | Styles applied to the icon element if supplied |
| `iconSizeLarge` | `MuiButton-iconSizeLarge` | Styles applied to the icon element if supplied and \`size="large"\`. |
| `iconSizeMedium` | `MuiButton-iconSizeMedium` | Styles applied to the icon element if supplied and \`size="medium"\`. |
| `iconSizeSmall` | `MuiButton-iconSizeSmall` | Styles applied to the icon element if supplied and \`size="small"\`. |
| `loading` | `MuiButton-loading` | Styles applied to the root element if \`loading={true}\`. |
| `loadingIconPlaceholder` | `MuiButton-loadingIconPlaceholder` | Styles applied to the loadingIconPlaceholder element. |
| `loadingIndicator` | `MuiButton-loadingIndicator` | Styles applied to the loadingIndicator element. |
| `loadingPositionCenter` | `MuiButton-loadingPositionCenter` | Styles applied to the root element if \`loadingPosition="center"\`. |
| `loadingPositionEnd` | `MuiButton-loadingPositionEnd` | Styles applied to the root element if \`loadingPosition="end"\`. |
| `loadingPositionStart` | `MuiButton-loadingPositionStart` | Styles applied to the root element if \`loadingPosition="start"\`. |
| `loadingWrapper` | `MuiButton-loadingWrapper` | Styles applied to the loadingWrapper element. |
| `outlined` | `MuiButton-outlined` | Styles applied to the root element if \`variant="outlined"\`. |
| `outlinedError` | `MuiButton-outlinedError` | Styles applied to the root element if \`variant="outlined"\` and \`color="error"\`. |
| `outlinedInfo` | `MuiButton-outlinedInfo` | Styles applied to the root element if \`variant="outlined"\` and \`color="info"\`. |
| `outlinedInherit` | `MuiButton-outlinedInherit` | Styles applied to the root element if \`variant="outlined"\` and \`color="inherit"\`. |
| `outlinedPrimary` | `MuiButton-outlinedPrimary` | Styles applied to the root element if \`variant="outlined"\` and \`color="primary"\`. |
| `outlinedSecondary` | `MuiButton-outlinedSecondary` | Styles applied to the root element if \`variant="outlined"\` and \`color="secondary"\`. |
| `outlinedSizeLarge` | `MuiButton-outlinedSizeLarge` | Styles applied to the root element if \`size="large"\` and \`variant="outlined"\`. |
| `outlinedSizeMedium` | `MuiButton-outlinedSizeMedium` | Styles applied to the root element if \`size="medium"\` and \`variant="outlined"\`. |
| `outlinedSizeSmall` | `MuiButton-outlinedSizeSmall` | Styles applied to the root element if \`size="small"\` and \`variant="outlined"\`. |
| `outlinedSuccess` | `MuiButton-outlinedSuccess` | Styles applied to the root element if \`variant="outlined"\` and \`color="success"\`. |
| `outlinedWarning` | `MuiButton-outlinedWarning` | Styles applied to the root element if \`variant="outlined"\` and \`color="warning"\`. |
| `root` | `MuiButton-root` | Styles applied to the root element. |
| `sizeLarge` | `MuiButton-sizeLarge` | Styles applied to the root element if \`size="large"\`. |
| `sizeMedium` | `MuiButton-sizeMedium` | Styles applied to the root element if \`size="medium"\`. |
| `sizeSmall` | `MuiButton-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
| `startIcon` | `MuiButton-startIcon` | Styles applied to the startIcon element if supplied. |
| `text` | `MuiButton-text` | Styles applied to the root element if \`variant="text"\`. |
| `textError` | `MuiButton-textError` | Styles applied to the root element if \`variant="text"\` and \`color="error"\`. |
| `textInfo` | `MuiButton-textInfo` | Styles applied to the root element if \`variant="text"\` and \`color="info"\`. |
| `textInherit` | `MuiButton-textInherit` | Styles applied to the root element if \`variant="text"\` and \`color="inherit"\`. |
| `textPrimary` | `MuiButton-textPrimary` | Styles applied to the root element if \`variant="text"\` and \`color="primary"\`. |
| `textSecondary` | `MuiButton-textSecondary` | Styles applied to the root element if \`variant="text"\` and \`color="secondary"\`. |
| `textSizeLarge` | `MuiButton-textSizeLarge` | Styles applied to the root element if \`size="large"\` and \`variant="text"\`. |
| `textSizeMedium` | `MuiButton-textSizeMedium` | Styles applied to the root element if \`size="medium"\` and \`variant="text"\`. |
| `textSizeSmall` | `MuiButton-textSizeSmall` | Styles applied to the root element if \`size="small"\` and \`variant="text"\`. |
| `textSuccess` | `MuiButton-textSuccess` | Styles applied to the root element if \`variant="text"\` and \`color="success"\`. |
| `textWarning` | `MuiButton-textWarning` | Styles applied to the root element if \`variant="text"\` and \`color="warning"\`. |
# Fab API

The Fab component API documentation.

## Import

```
import Fab from '@mui/material/Fab';
// or
import { Fab } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'default'<br>\| 'error'<br>\| 'info'<br>\| 'inherit'<br>\| 'primary'<br>\| 'secondary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'default'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `disableFocusRipple` | `bool` | `false` | - |
| `disableRipple` | `bool` | - | - |
| `href` | `string` | - | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| 'large'<br>\| string | `'large'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'circular'<br>\| 'extended'<br>\| string | `'circular'` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `circular` | `MuiFab-circular` | Styles applied to the root element if \`variant="circular"\`. |
| `colorInherit` | `MuiFab-colorInherit` | Styles applied to the root element if \`color="inherit"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `extended` | `MuiFab-extended` | Styles applied to the root element if \`variant="extended"\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the ButtonBase root element if the button is keyboard focused. |
| `primary` | `MuiFab-primary` | Styles applied to the root element if \`color="primary"\`. |
| `root` | `MuiFab-root` | Styles applied to the root element. |
| `secondary` | `MuiFab-secondary` | Styles applied to the root element if \`color="secondary"\`. |
| `sizeMedium` | `MuiFab-sizeMedium` | Styles applied to the root element if \`size="medium"\`\`. |
| `sizeSmall` | `MuiFab-sizeSmall` | Styles applied to the root element if \`size="small"\`\`. |
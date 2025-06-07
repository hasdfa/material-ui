# AppBar API

The AppBar component API documentation.

## Import

```
import AppBar from '@mui/material/AppBar';
// or
import { AppBar } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Paper](/material-ui/api/paper/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'default'<br>\| 'inherit'<br>\| 'primary'<br>\| 'secondary'<br>\| 'transparent'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `enableColorOnDark` | `bool` | `false` | - |
| `position` | `enum`'absolute'<br>\| 'fixed'<br>\| 'relative'<br>\| 'static'<br>\| 'sticky' | `'fixed'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLElement element.
:::

### Inheritance

The props of the [Paper](/material-ui/api/paper/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorDefault` | `MuiAppBar-colorDefault` | Styles applied to the root element if \`color="default"\`. |
| `colorError` | `MuiAppBar-colorError` | Styles applied to the root element if \`color="error"\`. |
| `colorInfo` | `MuiAppBar-colorInfo` | Styles applied to the root element if \`color="info"\`. |
| `colorInherit` | `MuiAppBar-colorInherit` | Styles applied to the root element if \`color="inherit"\`. |
| `colorPrimary` | `MuiAppBar-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiAppBar-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `colorSuccess` | `MuiAppBar-colorSuccess` | Styles applied to the root element if \`color="success"\`. |
| `colorTransparent` | `MuiAppBar-colorTransparent` | Styles applied to the root element if \`color="transparent"\`. |
| `colorWarning` | `MuiAppBar-colorWarning` | Styles applied to the root element if \`color="warning"\`. |
| `positionAbsolute` | `MuiAppBar-positionAbsolute` | Styles applied to the root element if \`position="absolute"\`. |
| `positionFixed` | `MuiAppBar-positionFixed` | Styles applied to the root element if \`position="fixed"\`. |
| `positionRelative` | `MuiAppBar-positionRelative` | Styles applied to the root element if \`position="relative"\`. |
| `positionStatic` | `MuiAppBar-positionStatic` | Styles applied to the root element if \`position="static"\`. |
| `positionSticky` | `MuiAppBar-positionSticky` | Styles applied to the root element if \`position="sticky"\`. |
| `root` | `MuiAppBar-root` | Styles applied to the root element. |
# Link API

The Link component API documentation.

## Import

```
import Link from '@mui/material/Link';
// or
import { Link } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Typography](/material-ui/api/typography/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'primary'<br>\| 'secondary'<br>\| 'success'<br>\| 'error'<br>\| 'info'<br>\| 'warning'<br>\| 'textPrimary'<br>\| 'textSecondary'<br>\| 'textDisabled'<br>\| string | `'primary'` | - |
| `component` | `custom` element type | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TypographyClasses` | `object` | - | - |
| `underline` | `enum`'always'<br>\| 'hover'<br>\| 'none' | `'always'` | - |
| `variant` | `union`'body1'<br>\| 'body2'<br>\| 'button'<br>\| 'caption'<br>\| 'h1'<br>\| 'h2'<br>\| 'h3'<br>\| 'h4'<br>\| 'h5'<br>\| 'h6'<br>\| 'inherit'<br>\| 'overline'<br>\| 'subtitle1'<br>\| 'subtitle2'<br>\| string | `'inherit'` | - |

:::info
The `ref` is forwarded to the HTMLAnchorElement element.
:::

### Inheritance

The props of the [Typography](/material-ui/api/typography/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `button` | `MuiLink-button` | Styles applied to the root element if \`component="button"\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if the link is keyboard focused. |
| `root` | `MuiLink-root` | Styles applied to the root element. |
| `underlineAlways` | `MuiLink-underlineAlways` | Styles applied to the root element if \`underline="always"\`. |
| `underlineHover` | `MuiLink-underlineHover` | Styles applied to the root element if \`underline="hover"\`. |
| `underlineNone` | `MuiLink-underlineNone` | Styles applied to the root element if \`underline="none"\`. |
# SvgIcon API

The SvgIcon component API documentation.

## Import

```
import SvgIcon from '@mui/material/SvgIcon';
// or
import { SvgIcon } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'inherit'<br>\| 'action'<br>\| 'disabled'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'inherit'` | - |
| `component` | `elementType` | - | - |
| `fontSize` | `union`'inherit'<br>\| 'large'<br>\| 'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `htmlColor` | `string` | - | - |
| `inheritViewBox` | `bool` | `false` | - |
| `shapeRendering` | `string` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `titleAccess` | `string` | - | - |
| `viewBox` | `string` | `'0 0 24 24'` | - |

:::info
The `ref` is forwarded to the SVGSVGElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorAction` | `MuiSvgIcon-colorAction` | Styles applied to the root element if \`color="action"\`. |
| `colorDisabled` | `MuiSvgIcon-colorDisabled` | Styles applied to the root element if \`color="disabled"\`. |
| `colorError` | `MuiSvgIcon-colorError` | Styles applied to the root element if \`color="error"\`. |
| `colorPrimary` | `MuiSvgIcon-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiSvgIcon-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `fontSizeInherit` | `MuiSvgIcon-fontSizeInherit` | Styles applied to the root element if \`fontSize="inherit"\`. |
| `fontSizeLarge` | `MuiSvgIcon-fontSizeLarge` | Styles applied to the root element if \`fontSize="large"\`. |
| `fontSizeMedium` | `MuiSvgIcon-fontSizeMedium` | Styles applied to the root element if \`fontSize="medium"\`. |
| `fontSizeSmall` | `MuiSvgIcon-fontSizeSmall` | Styles applied to the root element if \`fontSize="small"\`. |
| `root` | `MuiSvgIcon-root` | Styles applied to the root element. |
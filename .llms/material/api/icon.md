# Icon API

The Icon component API documentation.

## Import

```
import Icon from '@mui/material/Icon';
// or
import { Icon } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `baseClassName` | `string` | `'material-icons'` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'inherit'<br>\| 'action'<br>\| 'disabled'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'inherit'` | - |
| `component` | `elementType` | - | - |
| `fontSize` | `union`'inherit'<br>\| 'large'<br>\| 'medium'<br>\| 'small'<br>\| string | `'medium'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorAction` | `MuiIcon-colorAction` | Styles applied to the root element if \`color="action"\`. |
| `colorDisabled` | `MuiIcon-colorDisabled` | Styles applied to the root element if \`color="disabled"\`. |
| `colorError` | `MuiIcon-colorError` | Styles applied to the root element if \`color="error"\`. |
| `colorPrimary` | `MuiIcon-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiIcon-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `fontSizeInherit` | `MuiIcon-fontSizeInherit` | Styles applied to the root element if \`fontSize="inherit"\`. |
| `fontSizeLarge` | `MuiIcon-fontSizeLarge` | Styles applied to the root element if \`fontSize="large"\`. |
| `fontSizeSmall` | `MuiIcon-fontSizeSmall` | Styles applied to the root element if \`fontSize="small"\`. |
| `root` | `MuiIcon-root` | Styles applied to the root element. |
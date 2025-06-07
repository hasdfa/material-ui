# IconButton API

The IconButton component API documentation.

## Import

```
import IconButton from '@mui/material/IconButton';
// or
import { IconButton } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` node | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'inherit'<br>\| 'default'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'default'` | - |
| `disabled` | `bool` | `false` | - |
| `disableFocusRipple` | `bool` | `false` | - |
| `disableRipple` | `bool` | `false` | - |
| `edge` | `enum`'end'<br>\| 'start'<br>\| false | `false` | - |
| `loading` | `bool` | `null` | - |
| `loadingIndicator` | `node` | `` | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| 'large'<br>\| string | `'medium'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorError` | `MuiIconButton-colorError` | Styles applied to the root element if \`color="error"\`. |
| `colorInfo` | `MuiIconButton-colorInfo` | Styles applied to the root element if \`color="info"\`. |
| `colorInherit` | `MuiIconButton-colorInherit` | Styles applied to the root element if \`color="inherit"\`. |
| `colorPrimary` | `MuiIconButton-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiIconButton-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `colorSuccess` | `MuiIconButton-colorSuccess` | Styles applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiIconButton-colorWarning` | Styles applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `edgeEnd` | `MuiIconButton-edgeEnd` | Styles applied to the root element if \`edge="end"\`. |
| `edgeStart` | `MuiIconButton-edgeStart` | Styles applied to the root element if \`edge="start"\`. |
| `loading` | `MuiIconButton-loading` | Styles applied to the root element if \`loading={true}\`. |
| `loadingIndicator` | `MuiIconButton-loadingIndicator` | Styles applied to the loadingIndicator element. |
| `loadingWrapper` | `MuiIconButton-loadingWrapper` | Styles applied to the loadingWrapper element. |
| `root` | `MuiIconButton-root` | Styles applied to the root element. |
| `sizeLarge` | `MuiIconButton-sizeLarge` | Styles applied to the root element if \`size="large"\`. |
| `sizeMedium` | `MuiIconButton-sizeMedium` | Styles applied to the root element if \`size="medium"\`. |
| `sizeSmall` | `MuiIconButton-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
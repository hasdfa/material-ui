# Typography API

The Typography component API documentation.

## Import

```
import Typography from '@mui/material/Typography';
// or
import { Typography } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `align` | `enum`'center'<br>\| 'inherit'<br>\| 'justify'<br>\| 'left'<br>\| 'right' | `'inherit'` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'primary'<br>\| 'secondary'<br>\| 'success'<br>\| 'error'<br>\| 'info'<br>\| 'warning'<br>\| 'textPrimary'<br>\| 'textSecondary'<br>\| 'textDisabled'<br>\| string | - | - |
| `component` | `elementType` | - | - |
| `gutterBottom` | `bool` | `false` | - |
| `noWrap` | `bool` | `false` | - |
| `paragraph` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'body1'<br>\| 'body2'<br>\| 'button'<br>\| 'caption'<br>\| 'h1'<br>\| 'h2'<br>\| 'h3'<br>\| 'h4'<br>\| 'h5'<br>\| 'h6'<br>\| 'inherit'<br>\| 'overline'<br>\| 'subtitle1'<br>\| 'subtitle2'<br>\| string | `'body1'` | - |
| `variantMapping` | `object` | `{<br>  h1: 'h1',<br>  h2: 'h2',<br>  h3: 'h3',<br>  h4: 'h4',<br>  h5: 'h5',<br>  h6: 'h6',<br>  subtitle1: 'h6',<br>  subtitle2: 'h6',<br>  body1: 'p',<br>  body2: 'p',<br>  inherit: 'p',<br>}` | - |

The component is styled using the `Typography` CSS class.

:::info
The `ref` is forwarded to the HTMLParagraphElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `alignCenter` | `MuiTypography-alignCenter` | Styles applied to the root element if \`align="center"\`. |
| `alignJustify` | `MuiTypography-alignJustify` | Styles applied to the root element if \`align="justify"\`. |
| `alignLeft` | `MuiTypography-alignLeft` | Styles applied to the root element if \`align="left"\`. |
| `alignRight` | `MuiTypography-alignRight` | Styles applied to the root element if \`align="right"\`. |
| `body1` | `MuiTypography-body1` | Styles applied to the root element if \`variant="body1"\`. |
| `body2` | `MuiTypography-body2` | Styles applied to the root element if \`variant="body2"\`. |
| `button` | `MuiTypography-button` | Styles applied to the root element if \`variant="button"\`. |
| `caption` | `MuiTypography-caption` | Styles applied to the root element if \`variant="caption"\`. |
| `gutterBottom` | `MuiTypography-gutterBottom` | Styles applied to the root element if \`gutterBottom={true}\`. |
| `h1` | `MuiTypography-h1` | Styles applied to the root element if \`variant="h1"\`. |
| `h2` | `MuiTypography-h2` | Styles applied to the root element if \`variant="h2"\`. |
| `h3` | `MuiTypography-h3` | Styles applied to the root element if \`variant="h3"\`. |
| `h4` | `MuiTypography-h4` | Styles applied to the root element if \`variant="h4"\`. |
| `h5` | `MuiTypography-h5` | Styles applied to the root element if \`variant="h5"\`. |
| `h6` | `MuiTypography-h6` | Styles applied to the root element if \`variant="h6"\`. |
| `inherit` | `MuiTypography-inherit` | Styles applied to the root element if \`variant="inherit"\`. |
| `noWrap` | `MuiTypography-noWrap` | Styles applied to the root element if \`nowrap={true}\`. |
| `overline` | `MuiTypography-overline` | Styles applied to the root element if \`variant="overline"\`. |
| `paragraph` | `MuiTypography-paragraph` | Styles applied to the root element if \`paragraph={true}\`. |
| `root` | `MuiTypography-root` | Styles applied to the root element. |
| `subtitle1` | `MuiTypography-subtitle1` | Styles applied to the root element if \`variant="subtitle1"\`. |
| `subtitle2` | `MuiTypography-subtitle2` | Styles applied to the root element if \`variant="subtitle2"\`. |
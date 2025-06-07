# CardActionArea API

The CardActionArea component API documentation.

## Import

```
import CardActionArea from '@mui/material/CardActionArea';
// or
import { CardActionArea } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
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
| `focusHighlight` | `MuiCardActionArea-focusHighlight` | Styles applied to the overlay that covers the action area when it is keyboard focused. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the ButtonBase root element if the action area is keyboard focused. |
| `root` | `MuiCardActionArea-root` | Styles applied to the root element. |
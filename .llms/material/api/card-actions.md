# CardActions API

The CardActions component API documentation.

## Import

```
import CardActions from '@mui/material/CardActions';
// or
import { CardActions } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `disableSpacing` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `root` | `MuiCardActions-root` | Styles applied to the root element. |
| `spacing` | `MuiCardActions-spacing` | Styles applied to the root element unless \`disableSpacing={true}\`. |
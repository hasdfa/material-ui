# CardMedia API

The CardMedia component API documentation.

## Import

```
import CardMedia from '@mui/material/CardMedia';
// or
import { CardMedia } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` node | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `image` | `string` | - | - |
| `src` | `string` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `img` | `MuiCardMedia-img` | Styles applied to the root element if \`component="picture or img"\`. |
| `media` | `MuiCardMedia-media` | Styles applied to the root element if \`component="video, audio, picture, iframe, or img"\`. |
| `root` | `MuiCardMedia-root` | Styles applied to the root element. |
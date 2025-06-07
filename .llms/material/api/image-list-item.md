# ImageListItem API

The ImageListItem component API documentation.

## Import

```
import ImageListItem from '@mui/material/ImageListItem';
// or
import { ImageListItem } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `cols` | `custom` integer | `1` | - |
| `component` | `elementType` | - | - |
| `rows` | `custom` integer | `1` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `img` | `MuiImageListItem-img` | Styles applied to an \`img\` element to ensure it covers the item. |
| `masonry` | `MuiImageListItem-masonry` | Styles applied to the root element if \`variant="masonry"\`. |
| `quilted` | `MuiImageListItem-quilted` | Styles applied to the root element if \`variant="quilted"\`. |
| `root` | `MuiImageListItem-root` | Styles applied to the root element. |
| `standard` | `MuiImageListItem-standard` | Styles applied to the root element if \`variant="standard"\`. |
| `woven` | `MuiImageListItem-woven` | Styles applied to the root element if \`variant="woven"\`. |
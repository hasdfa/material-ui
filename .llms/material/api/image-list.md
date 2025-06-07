# ImageList API

The ImageList component API documentation.

## Import

```
import ImageList from '@mui/material/ImageList';
// or
import { ImageList } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `cols` | `custom` integer | `2` | - |
| `component` | `elementType` | - | - |
| `gap` | `number` | `4` | - |
| `rowHeight` | `union`'auto'<br>\| number | `'auto'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'masonry'<br>\| 'quilted'<br>\| 'standard'<br>\| 'woven'<br>\| string | `'standard'` | - |

:::info
The `ref` is forwarded to the HTMLUListElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `masonry` | `MuiImageList-masonry` | Styles applied to the root element if \`variant="masonry"\`. |
| `quilted` | `MuiImageList-quilted` | Styles applied to the root element if \`variant="quilted"\`. |
| `root` | `MuiImageList-root` | Styles applied to the root element. |
| `standard` | `MuiImageList-standard` | Styles applied to the root element if \`variant="standard"\`. |
| `woven` | `MuiImageList-woven` | Styles applied to the root element if \`variant="woven"\`. |
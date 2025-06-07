# ImageListItemBar API

The ImageListItemBar component API documentation.

## Import

```
import ImageListItemBar from '@mui/material/ImageListItemBar';
// or
import { ImageListItemBar } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `actionIcon` | `node` | - | - |
| `actionPosition` | `enum`'left'<br>\| 'right' | `'right'` | - |
| `classes` | `object` | - | - |
| `position` | `enum`'below'<br>\| 'bottom'<br>\| 'top' | `'bottom'` | - |
| `subtitle` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `title` | `node` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `actionIcon` | `MuiImageListItemBar-actionIcon` | Styles applied to the actionIcon if supplied. |
| `actionIconActionPosLeft` | `MuiImageListItemBar-actionIconActionPosLeft` | Styles applied to the actionIcon if \`actionPosition="left"\`. |
| `actionPositionLeft` | `MuiImageListItemBar-actionPositionLeft` | Styles applied to the action container element if \`actionPosition="left"\`. |
| `actionPositionRight` | `MuiImageListItemBar-actionPositionRight` | Styles applied to the action container element if \`actionPosition="right"\`. |
| `positionBelow` | `MuiImageListItemBar-positionBelow` | Styles applied to the root element if \`position="below"\`. |
| `positionBottom` | `MuiImageListItemBar-positionBottom` | Styles applied to the root element if \`position="bottom"\`. |
| `positionTop` | `MuiImageListItemBar-positionTop` | Styles applied to the root element if \`position="top"\`. |
| `root` | `MuiImageListItemBar-root` | Styles applied to the root element. |
| `subtitle` | `MuiImageListItemBar-subtitle` | Styles applied to the subtitle container element. |
| `title` | `MuiImageListItemBar-title` | Styles applied to the title container element. |
| `titleWrap` | `MuiImageListItemBar-titleWrap` | Styles applied to the title and subtitle container element. |
| `titleWrapActionPosLeft` | `MuiImageListItemBar-titleWrapActionPosLeft` | Styles applied to the container element if \`actionPosition="left"\`. |
| `titleWrapActionPosRight` | `MuiImageListItemBar-titleWrapActionPosRight` | Styles applied to the container element if \`actionPosition="right"\`. |
| `titleWrapBelow` | `MuiImageListItemBar-titleWrapBelow` | Styles applied to the title and subtitle container element if \`position="below"\`. |
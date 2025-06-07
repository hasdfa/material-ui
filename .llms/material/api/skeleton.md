# Skeleton API

The Skeleton component API documentation.

## Import

```
import Skeleton from '@mui/material/Skeleton';
// or
import { Skeleton } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `enum`'pulse'<br>\| 'wave'<br>\| false | `'pulse'` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `height` | `union` number<br>\| string | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'circular'<br>\| 'rectangular'<br>\| 'rounded'<br>\| 'text'<br>\| string | `'text'` | - |
| `width` | `union` number<br>\| string | - | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `circular` | `MuiSkeleton-circular` | Styles applied to the root element if \`variant="circular"\`. |
| `fitContent` | `MuiSkeleton-fitContent` | Styles applied when the component is passed children and no width. |
| `heightAuto` | `MuiSkeleton-heightAuto` | Styles applied when the component is passed children and no height. |
| `pulse` | `MuiSkeleton-pulse` | Styles applied to the root element if \`animation="pulse"\`. |
| `rectangular` | `MuiSkeleton-rectangular` | Styles applied to the root element if \`variant="rectangular"\`. |
| `root` | `MuiSkeleton-root` | Styles applied to the root element. |
| `rounded` | `MuiSkeleton-rounded` | Styles applied to the root element if \`variant="rounded"\`. |
| `text` | `MuiSkeleton-text` | Styles applied to the root element if \`variant="text"\`. |
| `wave` | `MuiSkeleton-wave` | Styles applied to the root element if \`animation="wave"\`. |
| `withChildren` | `MuiSkeleton-withChildren` | Styles applied when the component is passed children. |
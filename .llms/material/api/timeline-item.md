# TimelineItem API

The TimelineItem component API documentation.

## Import

```
import TimelineItem from '@mui/lab/TimelineItem';
// or
import { TimelineItem } from '@mui/lab';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `position` | `enum`'alternate-reverse'<br>\| 'alternate'<br>\| 'left'<br>\| 'right' | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `missingOppositeContent` | `MuiTimelineItem-missingOppositeContent` | Styles applied to the root element if TimelineOppositeContent isn't provided. |
| `positionAlternate` | `MuiTimelineItem-positionAlternate` | Styles applied to the root element if \`position="alternate"\`. |
| `positionAlternateReverse` | `MuiTimelineItem-positionAlternateReverse` | Styles applied to the root element if \`position="alternate-reverse"\`. |
| `positionLeft` | `MuiTimelineItem-positionLeft` | Styles applied to the root element if \`position="left"\`. |
| `positionRight` | `MuiTimelineItem-positionRight` | Styles applied to the root element if \`position="right"\`. |
| `root` | `MuiTimelineItem-root` | Styles applied to the root element. |
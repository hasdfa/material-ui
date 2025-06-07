# TimelineContent API

The TimelineContent component API documentation.

## Import

```
import TimelineContent from '@mui/lab/TimelineContent';
// or
import { TimelineContent } from '@mui/lab';
```

## Props

Any other props supplied will be provided to the root element ( [Typography](/material-ui/api/typography/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Typography](/material-ui/api/typography/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `positionAlternate` | `MuiTimelineContent-positionAlternate` | Styles applied to the root element if \`position="alternate"\`. |
| `positionAlternateReverse` | `MuiTimelineContent-positionAlternateReverse` | Styles applied to the root element if \`position="alternate-reverse"\`. |
| `positionLeft` | `MuiTimelineContent-positionLeft` | Styles applied to the root element if \`position="left"\`. |
| `positionRight` | `MuiTimelineContent-positionRight` | Styles applied to the root element if \`position="right"\`. |
| `root` | `MuiTimelineContent-root` | Styles applied to the root element. |
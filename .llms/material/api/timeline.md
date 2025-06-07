# Timeline API

The Timeline component API documentation.

## Import

```
import Timeline from '@mui/lab/Timeline';
// or
import { Timeline } from '@mui/lab';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `className` | `string` | - | - |
| `position` | `enum`'alternate-reverse'<br>\| 'alternate'<br>\| 'left'<br>\| 'right' | `'right'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLUListElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `positionAlternate` | `MuiTimeline-positionAlternate` | Styles applied to the root element if \`position="alternate"\`. |
| `positionAlternateReverse` | `MuiTimeline-positionAlternateReverse` | Styles applied to the root element if \`position="alternate-reverse"\`. |
| `positionLeft` | `MuiTimeline-positionLeft` | Styles applied to the root element if \`position="left"\`. |
| `positionRight` | `MuiTimeline-positionRight` | Styles applied to the root element if \`position="right"\`. |
| `root` | `MuiTimeline-root` | Styles applied to the root element. |
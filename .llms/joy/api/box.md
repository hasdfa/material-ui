# Box API

The Box component API documentation.

## Import

```
import Box from '@mui/joy/Box';
// or
import { Box } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `component` | `elementType` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

The component is styled using the `Box` CSS class.

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `root` | `MuiBox-root` | Class name applied to the root element. |
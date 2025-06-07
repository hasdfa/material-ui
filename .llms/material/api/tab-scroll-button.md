# TabScrollButton API

The TabScrollButton component API documentation.

## Import

```
import TabScrollButton from '@mui/material/TabScrollButton';
// or
import { TabScrollButton } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `enum`'left'<br>\| 'right' | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `disabled` | `bool` | `false` | - |
| `slotProps` | `shape`{ endScrollButtonIcon?: func<br>\| object, startScrollButtonIcon?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ EndScrollButtonIcon?: elementType, StartScrollButtonIcon?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `root` | `MuiTabScrollButton-root` | Styles applied to the root element. |
| `vertical` | `MuiTabScrollButton-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
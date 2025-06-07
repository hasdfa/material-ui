# CardActions API

The CardActions component API documentation.

## Import

```
import CardActions from '@mui/joy/CardActions';
// or
import { CardActions } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `buttonFlex` | `union` number<br>\| string | - | - |
| `children` | `node` | - | - |
| `component` | `elementType` | - | - |
| `orientation` | `enum`'horizontal-reverse'<br>\| 'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
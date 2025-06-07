# Stack API

The Stack component API documentation.

## Import

```
import Stack from '@mui/joy/Stack';
// or
import { Stack } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `component` | `elementType` | - | - |
| `direction` | `union`'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row'<br>\| Array<'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row'><br>\| object | `'column'` | - |
| `divider` | `node` | - | - |
| `spacing` | `union` Array\| string><br>\| number<br>\| object<br>\| string | `0` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `useFlexGap` | `bool` | `false` | - |

The component is styled using the `Stack` CSS class.

:::info
The `ref` is forwarded to the HTMLElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
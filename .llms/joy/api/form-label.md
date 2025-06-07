# FormLabel API

The FormLabel component API documentation.

## Import

```
import FormLabel from '@mui/joy/FormLabel';
// or
import { FormLabel } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `component` | `elementType` | - | - |
| `required` | `bool` | - | - |
| `slotProps` | `shape`{ asterisk?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ asterisk?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLabelElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'label'` | The component that renders the root. |
| `asterisk` | `'span'` | The component that renders the asterisk. |
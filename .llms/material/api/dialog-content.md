# DialogContent API

The DialogContent component API documentation.

## Import

```
import DialogContent from '@mui/material/DialogContent';
// or
import { DialogContent } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `dividers` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `dividers` | `MuiDialogContent-dividers` | Styles applied to the root element if \`dividers={true}\`. |
| `root` | `MuiDialogContent-root` | Styles applied to the root element. |
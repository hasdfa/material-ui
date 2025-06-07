# PigmentStack API

The PigmentStack component API documentation.

## Import

```
import PigmentStack from '@mui/material/PigmentStack';
// or
import { PigmentStack } from '@mui/material';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `direction` | `union`'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row'<br>\| Array<'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row'><br>\| { lg?: 'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row', md?: 'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row', sm?: 'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row', xl?: 'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row', xs?: 'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row' } | `'column'` | - |
| `divider` | `node` | - | - |
| `spacing` | `union` Array\| string><br>\| number<br>\| { lg?: number<br>\| string, md?: number<br>\| string, sm?: number<br>\| string, xl?: number<br>\| string, xs?: number<br>\| string }<br>\| string | `0` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the root element.
:::
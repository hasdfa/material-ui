# Grid API

The Grid component API documentation.

## Import

```
import Grid from '@mui/material/Grid';
// or
import { Grid } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `columns` | `union` Array<br>\| number<br>\| object | `12` | - |
| `columnSpacing` | `union` Array\| string><br>\| number<br>\| object<br>\| string | - | - |
| `container` | `bool` | `false` | - |
| `direction` | `union`'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row'<br>\| Array<'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row'><br>\| object | `'row'` | - |
| `offset` | `union` string<br>\| number<br>\| Array\| number><br>\| object | - | - |
| `rowSpacing` | `union` Array\| string><br>\| number<br>\| object<br>\| string | - | - |
| `size` | `union` string<br>\| bool<br>\| number<br>\| Array\| bool<br>\| number><br>\| object | - | - |
| `spacing` | `union` Array\| string><br>\| number<br>\| object<br>\| string | `0` | - |
| `wrap` | `enum`'nowrap'<br>\| 'wrap-reverse'<br>\| 'wrap' | `'wrap'` | - |

The component is styled using the `Grid` CSS class.

:::info
The `ref` is forwarded to the HTMLElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `container` | `MuiGrid-container` | Styles applied to the root element if \`container={true}\`. |
| `root` | `MuiGrid-root` | Styles applied to the root element. |
# FormGroup API

The FormGroup component API documentation.

## Import

```
import FormGroup from '@mui/material/FormGroup';
// or
import { FormGroup } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `row` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `root` | `MuiFormGroup-root` | Styles applied to the root element. |
| `row` | `MuiFormGroup-row` | Styles applied to the root element if \`row={true}\`. |
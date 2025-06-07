# RadioGroup API

The RadioGroup component API documentation.

## Import

```
import RadioGroup from '@mui/material/RadioGroup';
// or
import { RadioGroup } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [FormGroup](/material-ui/api/form-group/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `defaultValue` | `any` | - | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `value` | `any` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [FormGroup](/material-ui/api/form-group/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `root` | `MuiRadioGroup-root` | Styles applied to the root element. |
| `row` | `MuiRadioGroup-row` | Styles applied to the root element if \`row={true}\`. |
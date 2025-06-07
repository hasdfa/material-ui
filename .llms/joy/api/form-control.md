# FormControl API

The FormControl component API documentation.

## Import

```
import FormControl from '@mui/joy/FormControl';
// or
import { FormControl } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | - | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `error` | `bool` | `false` | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'vertical'` | - |
| `required` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
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

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorDanger` | `MuiFormControl-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiFormControl-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiFormControl-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiFormControl-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiFormControl-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | Class name applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `horizontal` | `MuiFormControl-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `sizeLg` | `MuiFormControl-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiFormControl-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiFormControl-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `vertical` | `MuiFormControl-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
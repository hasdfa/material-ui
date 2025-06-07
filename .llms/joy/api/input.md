# Input API

The Input component API documentation.

## Import

```
import Input from '@mui/joy/Input';
// or
import { Input } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `endDecorator` | `node` | - | - |
| `error` | `bool` | `false` | - |
| `fullWidth` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `input` | `'input'` | The component that renders the input. |
| `startDecorator` | `'div'` | The component that renders the start decorator. |
| `endDecorator` | `'div'` | The component that renders the end decorator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiInput-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiInput-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiInput-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiInput-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiInput-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiInput-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | Class name applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `focused` | `Mui-focused` | Class name applied to the root element if the component is focused. |
| `formControl` | `MuiInput-formControl` | Class name applied to the root element if the component is a descendant of \`FormControl\`. |
| `fullWidth` | `MuiInput-fullWidth` | Class name applied to the root element if \`fullWidth={true}\`. |
| `sizeLg` | `MuiInput-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiInput-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiInput-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiInput-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiInput-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiInput-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiInput-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
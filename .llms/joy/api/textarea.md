# Textarea API

The Textarea component API documentation.

## Import

```
import Textarea from '@mui/joy/Textarea';
// or
import { Textarea } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `endDecorator` | `node` | - | - |
| `error` | `bool` | `false` | - |
| `maxRows` | `union` number<br>\| string | - | - |
| `minRows` | `union` number<br>\| string | `1` | - |
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
| `textarea` | `'textarea'` | The component that renders the textarea. |
| `startDecorator` | `'div'` | The component that renders the start decorator. |
| `endDecorator` | `'div'` | The component that renders the end decorator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiTextarea-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiTextarea-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiTextarea-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiTextarea-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiTextarea-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiTextarea-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | Class name applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `focused` | `Mui-focused` | Class name applied to the root element if the component is focused. |
| `formControl` | `MuiTextarea-formControl` | Class name applied to the root element if the component is a descendant of \`FormControl\`. |
| `sizeLg` | `MuiTextarea-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiTextarea-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiTextarea-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiTextarea-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiTextarea-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiTextarea-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
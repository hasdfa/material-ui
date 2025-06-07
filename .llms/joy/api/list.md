# List API

The List component API documentation.

## Import

```
import List from '@mui/joy/List';
// or
import { List } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `marker` | `string` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'vertical'` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |
| `wrap` | `bool` | `false` | - |

:::info
The `ref` is forwarded to the HTMLUListElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'ul'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiList-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiList-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiList-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiList-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiList-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiList-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `horizontal` | `MuiList-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `nesting` | `MuiList-nesting` | Class name applied to the root element if wrapped with nested context. |
| `scoped` | `MuiList-scoped` | Class name applied to the root element if \`scoped\` is true. |
| `sizeLg` | `MuiList-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiList-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiList-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiList-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiList-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiList-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiList-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiList-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
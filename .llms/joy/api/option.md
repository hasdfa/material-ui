# Option API

The Option component API documentation.

## Import

```
import Option from '@mui/joy/Option';
// or
import { Option } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `any` | - | - |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `disabled` | `bool` | `false` | - |
| `label` | `union` element<br>\| string | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

:::info
The `ref` is forwarded to the root element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'li'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiOption-colorContext` | Class name applied to the root element if \`color="context"\`. |
| `colorDanger` | `MuiOption-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiOption-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiOption-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiOption-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiOption-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `highlighted` | `MuiOption-highlighted` | State class applied to the root element if the option is highlighted. |
| `selected` | `Mui-selected` | State class applied to the root element if the option is selected. |
| `variantOutlined` | `MuiOption-variantOutlined` | State class applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiOption-variantPlain` | State class applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiOption-variantSoft` | State class applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiOption-variantSolid` | State class applied to the root element if \`variant="solid"\`. |
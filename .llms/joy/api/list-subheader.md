# ListSubheader API

The ListSubheader component API documentation.

## Import

```
import ListSubheader from '@mui/joy/ListSubheader';
// or
import { ListSubheader } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | - | - |
| `component` | `elementType` | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sticky` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | - | - |

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
| `colorContext` | `MuiListSubheader-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiListSubheader-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiListSubheader-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiListSubheader-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiListSubheader-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiListSubheader-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sticky` | `MuiListSubheader-sticky` | Class name applied to the root element, if sticky={true}. |
| `variantOutlined` | `MuiListSubheader-variantOutlined` | State class applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiListSubheader-variantPlain` | State class applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiListSubheader-variantSoft` | State class applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiListSubheader-variantSolid` | State class applied to the root element if \`variant="solid"\`. |
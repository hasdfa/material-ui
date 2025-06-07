# ListItemButton API

The ListItemButton component API documentation.

## Import

```
import ListItemButton from '@mui/joy/ListItemButton';
// or
import { ListItemButton } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `union` func<br>\| { current?: { focusVisible: func } } | - | - |
| `autoFocus` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `focusVisibleClassName` | `string` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `selected` | `bool` | `false` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

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
| `colorContext` | `MuiListItemButton-colorContext` | Class name applied to the root element if \`color="context"\`. |
| `colorDanger` | `MuiListItemButton-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiListItemButton-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiListItemButton-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiListItemButton-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiListItemButton-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the inner \`component\` element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the \`component\`'s \`focusVisibleClassName\` prop. |
| `horizontal` | `MuiListItemButton-horizontal` | Class name applied to the root element, if \`orientation="horizontal"\`. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\`. |
| `variantOutlined` | `MuiListItemButton-variantOutlined` | State class applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiListItemButton-variantPlain` | State class applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiListItemButton-variantSoft` | State class applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiListItemButton-variantSolid` | State class applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiListItemButton-vertical` | Class name applied to the root element, if \`orientation="vertical"\`. |
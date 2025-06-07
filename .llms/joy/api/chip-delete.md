# ChipDelete API

The ChipDelete component API documentation.

## Import

```
import ChipDelete from '@mui/joy/ChipDelete';
// or
import { ChipDelete } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | - | - |
| `onDelete` | `func` | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'button'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiChipDelete-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiChipDelete-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiChipDelete-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiChipDelete-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiChipDelete-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiChipDelete-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if keyboard focused. |
| `variantOutlined` | `MuiChipDelete-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiChipDelete-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiChipDelete-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiChipDelete-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
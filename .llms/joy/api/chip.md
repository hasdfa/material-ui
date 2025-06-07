# Chip API

The Chip component API documentation.

## Import

```
import Chip from '@mui/joy/Chip';
// or
import { Chip } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `endDecorator` | `node` | - | - |
| `onClick` | `func` | - | - |
| `size` | `union`'lg'<br>\| 'md'<br>\| 'sm'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ action?: func<br>\| object, endDecorator?: func<br>\| object, label?: func<br>\| object, root?: func<br>\| object, startDecorator?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ action?: elementType, endDecorator?: elementType, label?: elementType, root?: elementType, startDecorator?: elementType } | `{}` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'soft'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `label` | `'span'` | The component that renders the label. |
| `action` | `'button'` | The component that renders the action. |
| `startDecorator` | `'span'` | The component that renders the start decorator. |
| `endDecorator` | `'span'` | The component that renders the end decorator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiChip-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiChip-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiChip-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiChip-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiChip-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiChip-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if keyboard focused. |
| `labelLg` | `MuiChip-labelLg` | Class name applied to the label \`span\` element if \`size="lg"\`. |
| `labelMd` | `MuiChip-labelMd` | Class name applied to the label \`span\` element if \`size="md"\`. |
| `labelSm` | `MuiChip-labelSm` | Class name applied to the label \`span\` element if \`size="sm"\`. |
| `sizeLg` | `MuiChip-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiChip-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiChip-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiChip-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiChip-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiChip-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiChip-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
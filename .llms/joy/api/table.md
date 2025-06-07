# Table API

The Table component API documentation.

## Import

```
import Table from '@mui/joy/Table';
// or
import { Table } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `borderAxis` | `union`'both'<br>\| 'bothBetween'<br>\| 'none'<br>\| 'x'<br>\| 'xBetween'<br>\| 'y'<br>\| 'yBetween'<br>\| string | `'xBetween'` | - |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `hoverRow` | `bool` | `false` | - |
| `noWrap` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `stickyFooter` | `bool` | `false` | - |
| `stickyHeader` | `bool` | `false` | - |
| `stripe` | `union`'odd'<br>\| 'even'<br>\| string | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

:::info
The `ref` is forwarded to the HTMLTableElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'table'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `borderAxisBoth` | `MuiTable-borderAxisBoth` | Class name applied to the root element if \`borderAxis="both"\`. |
| `borderAxisBothBetween` | `MuiTable-borderAxisBothBetween` | Class name applied to the root element if \`borderAxis="bothBetween"\`. |
| `borderAxisNone` | `MuiTable-borderAxisNone` | Class name applied to the root element if \`borderAxis="none"\`. |
| `borderAxisX` | `MuiTable-borderAxisX` | Class name applied to the root element if \`borderAxis="x"\`. |
| `borderAxisXBetween` | `MuiTable-borderAxisXBetween` | Class name applied to the root element if \`borderAxis="xBetween"\`. |
| `borderAxisY` | `MuiTable-borderAxisY` | Class name applied to the root element if \`borderAxis="y"\`. |
| `borderAxisYBetween` | `MuiTable-borderAxisYBetween` | Class name applied to the root element if \`borderAxis="yBetween"\`. |
| `colorContext` | `MuiTable-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiTable-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiTable-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiTable-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiTable-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiTable-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `hoverRow` | `MuiTable-hoverRow` | Class name applied to the root element if \`hoverRow\` is true. |
| `noWrap` | `MuiTable-noWrap` | Class name applied to the root element if \`noWrap\` is true. |
| `sizeLg` | `MuiTable-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiTable-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiTable-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `stickyFooter` | `MuiTable-stickyFooter` | Class name applied to the root element if \`stickyFooter\` is true. |
| `stickyHeader` | `MuiTable-stickyHeader` | Class name applied to the root element if \`stickyHeader\` is true. |
| `variantOutlined` | `MuiTable-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiTable-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiTable-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiTable-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
# TabList API

The TabList component API documentation.

## Import

```
import TabList from '@mui/joy/TabList';
// or
import { TabList } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disableUnderline` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sticky` | `enum`'bottom'<br>\| 'top' | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `tabFlex` | `union` number<br>\| string | - | - |
| `underlinePlacement` | `enum`'bottom'<br>\| 'left'<br>\| 'right'<br>\| 'top' | `orientation === 'horizontal' ? 'bottom' : 'right'` | - |
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
| `colorContext` | `MuiTabList-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiTabList-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiTabList-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiTabList-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiTabList-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiTabList-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sizeLg` | `MuiTabList-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiTabList-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiTabList-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiTabList-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiTabList-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiTabList-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiTabList-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
# Tabs API

The Tabs component API documentation.

## Import

```
import Tabs from '@mui/joy/Tabs';
// or
import { Tabs } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `defaultValue` | `union` number<br>\| string | - | - |
| `direction` | `enum`'ltr'<br>\| 'rtl' | `'ltr'` | - |
| `onChange` | `func` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `selectionFollowsFocus` | `bool` | - | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `union` number<br>\| string | - | - |
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
| `colorContext` | `MuiTabs-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiTabs-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiTabs-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiTabs-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiTabs-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiTabs-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `horizontal` | `MuiTabs-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `sizeLg` | `MuiTabs-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiTabs-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiTabs-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiTabs-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiTabs-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiTabs-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiTabs-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiTabs-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
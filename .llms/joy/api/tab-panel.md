# TabPanel API

The TabPanel component API documentation.

## Import

```
import TabPanel from '@mui/joy/TabPanel';
// or
import { TabPanel } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `keepMounted` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `union` number<br>\| string | `0` | - |
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
| `colorContext` | `MuiTabPanel-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiTabPanel-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiTabPanel-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiTabPanel-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiTabPanel-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiTabPanel-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `hidden` | `MuiTabPanel-hidden` | Class name applied to the root element if the tab is not active. |
| `horizontal` | `MuiTabPanel-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `sizeLg` | `MuiTabPanel-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiTabPanel-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiTabPanel-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiTabPanel-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiTabPanel-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiTabPanel-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiTabPanel-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiTabPanel-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
# Tab API

The Tab component API documentation.

## Import

```
import Tab from '@mui/joy/Tab';
// or
import { Tab } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `union` func<br>\| { current?: { focusVisible: func } } | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `disableIndicator` | `bool` | `false` | - |
| `indicatorInset` | `bool` | `false` | - |
| `indicatorPlacement` | `enum`'bottom'<br>\| 'left'<br>\| 'right'<br>\| 'top' | `row ? 'bottom' : 'right'` | - |
| `onChange` | `func` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `union` number<br>\| string | - | - |
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
| `colorContext` | `MuiTab-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiTab-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiTab-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiTab-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiTab-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiTab-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | Class name applied to the root element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | Class name applied to the root element when its focus is visible. |
| `horizontal` | `MuiTab-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `selected` | `Mui-selected` | Class name applied to the root element when it is selected. |
| `variantOutlined` | `MuiTab-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiTab-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiTab-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiTab-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
| `vertical` | `MuiTab-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
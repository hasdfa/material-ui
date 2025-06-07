# Step API

The Step component API documentation.

## Import

```
import Step from '@mui/joy/Step';
// or
import { Step } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `completed` | `bool` | `false` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `indicator` | `node` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `slotProps` | `shape`{ indicator?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ indicator?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'li'` | The component that renders the root. |
| `indicator` | `'div'` | The component that renders the indicator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `active` | `Mui-active` | Class name applied to the root element if \`active\` is true. |
| `completed` | `Mui-completed` | Class name applied to the root element if \`completed\` is true. |
| `disabled` | `Mui-disabled` | Class name applied to the root element if \`disabled\` is true. |
| `horizontal` | `MuiStep-horizontal` | Class name applied to the root element if \`orientation="horizontal"\`. |
| `vertical` | `MuiStep-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
# TabPanel API

The TabPanel component API documentation.

## Import

```
import TabPanel from '@mui/lab/TabPanel';
// or
import { TabPanel } from '@mui/lab';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `union` number<br>\| string | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `keepMounted` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `hidden` | `MuiTabPanel-hidden` | State class applied to the root \`div\` element if \`hidden={true}\`. |
| `root` | `MuiTabPanel-root` | Styles applied to the root element. |
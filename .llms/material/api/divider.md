# Divider API

The Divider component API documentation.

## Import

```
import Divider from '@mui/material/Divider';
// or
import { Divider } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `absolute` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `flexItem` | `bool` | `false` | - |
| `light` | `bool` | `false` | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `textAlign` | `enum`'center'<br>\| 'left'<br>\| 'right' | `'center'` | - |
| `variant` | `union`'fullWidth'<br>\| 'inset'<br>\| 'middle'<br>\| string | `'fullWidth'` | - |

:::info
The `ref` is forwarded to the HTMLHRElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `absolute` | `MuiDivider-absolute` | Styles applied to the root element if \`absolute={true}\`. |
| `flexItem` | `MuiDivider-flexItem` | Styles applied to the root element if \`flexItem={true}\`. |
| `fullWidth` | `MuiDivider-fullWidth` | Styles applied to the root element if \`variant="fullWidth"\`. |
| `inset` | `MuiDivider-inset` | Styles applied to the root element if \`variant="inset"\`. |
| `light` | `MuiDivider-light` | Styles applied to the root element if \`light={true}\`. |
| `middle` | `MuiDivider-middle` | Styles applied to the root element if \`variant="middle"\`. |
| `root` | `MuiDivider-root` | Styles applied to the root element. |
| `textAlignLeft` | `MuiDivider-textAlignLeft` | Styles applied to the root element if \`textAlign="left" orientation="horizontal"\`. |
| `textAlignRight` | `MuiDivider-textAlignRight` | Styles applied to the root element if \`textAlign="right" orientation="horizontal"\`. |
| `vertical` | `MuiDivider-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
| `withChildren` | `MuiDivider-withChildren` | Styles applied to the root element if divider have text. |
| `withChildrenVertical` | `MuiDivider-withChildrenVertical` | Styles applied to the root element if divider have text and \`orientation="vertical"\`. |
| `wrapper` | `MuiDivider-wrapper` | Styles applied to the span children element if \`orientation="horizontal"\`. |
| `wrapperVertical` | `MuiDivider-wrapperVertical` | Styles applied to the span children element if \`orientation="vertical"\`. |
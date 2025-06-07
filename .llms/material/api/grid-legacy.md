# GridLegacy API

:::warning
This component is deprecated
:::

The GridLegacy component API documentation.

## Import

```
import GridLegacy from '@mui/material/GridLegacy';
// or
import { GridLegacy } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `columns` | `union` Array<br>\| number<br>\| object | `12` | - |
| `columnSpacing` | `union` Array\| string><br>\| number<br>\| object<br>\| string | - | - |
| `component` | `elementType` | - | - |
| `container` | `bool` | `false` | - |
| `direction` | `union`'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row'<br>\| Array<'column-reverse'<br>\| 'column'<br>\| 'row-reverse'<br>\| 'row'><br>\| object | `'row'` | - |
| `item` | `bool` | `false` | - |
| `lg` | `union`'auto'<br>\| number<br>\| bool | `false` | - |
| `md` | `union`'auto'<br>\| number<br>\| bool | `false` | - |
| `rowSpacing` | `union` Array\| string><br>\| number<br>\| object<br>\| string | - | - |
| `sm` | `union`'auto'<br>\| number<br>\| bool | `false` | - |
| `spacing` | `union` Array\| string><br>\| number<br>\| object<br>\| string | `0` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `wrap` | `enum`'nowrap'<br>\| 'wrap-reverse'<br>\| 'wrap' | `'wrap'` | - |
| `xl` | `union`'auto'<br>\| number<br>\| bool | `false` | - |
| `xs` | `union`'auto'<br>\| number<br>\| bool | `false` | - |
| `zeroMinWidth` | `bool` | `false` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `container` | `MuiGridLegacy-container` | Styles applied to the root element if \`container={true}\`. |
| `direction-xs-column` | `MuiGridLegacy-direction-xs-column` | Styles applied to the root element if \`direction="column"\`. |
| `direction-xs-column-reverse` | `MuiGridLegacy-direction-xs-column-reverse` | Styles applied to the root element if \`direction="column-reverse"\`. |
| `direction-xs-row-reverse` | `MuiGridLegacy-direction-xs-row-reverse` | Styles applied to the root element if \`direction="row-reverse"\`. |
| `grid-xs-1` | `MuiGridLegacy-grid-xs-1` |  |
| `grid-xs-10` | `MuiGridLegacy-grid-xs-10` |  |
| `grid-xs-11` | `MuiGridLegacy-grid-xs-11` |  |
| `grid-xs-12` | `MuiGridLegacy-grid-xs-12` |  |
| `grid-xs-2` | `MuiGridLegacy-grid-xs-2` |  |
| `grid-xs-3` | `MuiGridLegacy-grid-xs-3` |  |
| `grid-xs-4` | `MuiGridLegacy-grid-xs-4` |  |
| `grid-xs-5` | `MuiGridLegacy-grid-xs-5` |  |
| `grid-xs-6` | `MuiGridLegacy-grid-xs-6` |  |
| `grid-xs-7` | `MuiGridLegacy-grid-xs-7` |  |
| `grid-xs-8` | `MuiGridLegacy-grid-xs-8` |  |
| `grid-xs-9` | `MuiGridLegacy-grid-xs-9` |  |
| `grid-xs-auto` | `MuiGridLegacy-grid-xs-auto` |  |
| `grid-xs-true` | `MuiGridLegacy-grid-xs-true` |  |
| `item` | `MuiGridLegacy-item` | Styles applied to the root element if \`item={true}\`. |
| `root` | `MuiGridLegacy-root` | Styles applied to the root element. |
| `spacing-xs-1` | `MuiGridLegacy-spacing-xs-1` |  |
| `spacing-xs-10` | `MuiGridLegacy-spacing-xs-10` |  |
| `spacing-xs-2` | `MuiGridLegacy-spacing-xs-2` |  |
| `spacing-xs-3` | `MuiGridLegacy-spacing-xs-3` |  |
| `spacing-xs-4` | `MuiGridLegacy-spacing-xs-4` |  |
| `spacing-xs-5` | `MuiGridLegacy-spacing-xs-5` |  |
| `spacing-xs-6` | `MuiGridLegacy-spacing-xs-6` |  |
| `spacing-xs-7` | `MuiGridLegacy-spacing-xs-7` |  |
| `spacing-xs-8` | `MuiGridLegacy-spacing-xs-8` |  |
| `spacing-xs-9` | `MuiGridLegacy-spacing-xs-9` |  |
| `wrap-xs-nowrap` | `MuiGridLegacy-wrap-xs-nowrap` | Styles applied to the root element if \`wrap="nowrap"\`. |
| `wrap-xs-wrap-reverse` | `MuiGridLegacy-wrap-xs-wrap-reverse` | Styles applied to the root element if \`wrap="reverse"\`. |
| `zeroMinWidth` | `MuiGridLegacy-zeroMinWidth` | Styles applied to the root element if \`zeroMinWidth={true}\`. |
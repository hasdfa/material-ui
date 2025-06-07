# ListSubheader API

The ListSubheader component API documentation.

## Import

```
import ListSubheader from '@mui/material/ListSubheader';
// or
import { ListSubheader } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `enum`'default'<br>\| 'inherit'<br>\| 'primary' | `'default'` | - |
| `component` | `elementType` | - | - |
| `disableGutters` | `bool` | `false` | - |
| `disableSticky` | `bool` | `false` | - |
| `inset` | `bool` | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorInherit` | `MuiListSubheader-colorInherit` | Styles applied to the root element if \`color="inherit"\`. |
| `colorPrimary` | `MuiListSubheader-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `gutters` | `MuiListSubheader-gutters` | Styles applied to the inner \`component\` element unless \`disableGutters={true}\`. |
| `inset` | `MuiListSubheader-inset` | Styles applied to the root element if \`inset={true}\`. |
| `root` | `MuiListSubheader-root` | Styles applied to the root element. |
| `sticky` | `MuiListSubheader-sticky` | Styles applied to the root element unless \`disableSticky={true}\`. |
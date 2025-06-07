# MenuList API

The MenuList component API documentation.

## Import

```
import MenuList from '@mui/material/MenuList';
// or
import { MenuList } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [List](/material-ui/api/list/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoFocus` | `bool` | `false` | - |
| `autoFocusItem` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `disabledItemsFocusable` | `bool` | `false` | - |
| `disableListWrap` | `bool` | `false` | - |
| `variant` | `enum`'menu'<br>\| 'selectedMenu' | `'selectedMenu'` | - |

:::info
The `ref` is forwarded to the HTMLUListElement element.
:::

### Inheritance

The props of the [List](/material-ui/api/list/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `dense` | `MuiMenuList-dense` | Styles applied to the root element if dense. |
| `padding` | `MuiMenuList-padding` | Styles applied to the root element unless \`disablePadding={true}\`. |
| `root` | `MuiMenuList-root` | Styles applied to the root element. |
| `subheader` | `MuiMenuList-subheader` | Styles applied to the root element if a \`subheader\` is provided. |
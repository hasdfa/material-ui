# Breadcrumbs API

The Breadcrumbs component API documentation.

## Import

```
import Breadcrumbs from '@mui/material/Breadcrumbs';
// or
import { Breadcrumbs } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Typography](/material-ui/api/typography/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `expandText` | `string` | `'Show path'` | - |
| `itemsAfterCollapse` | `custom` integer | `1` | - |
| `itemsBeforeCollapse` | `custom` integer | `1` | - |
| `maxItems` | `custom` integer | `8` | - |
| `separator` | `node` | `'/'` | - |
| `slotProps` | `shape`{ collapsedIcon?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ CollapsedIcon?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLElement element.
:::

### Inheritance

The props of the [Typography](/material-ui/api/typography/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `li` | `MuiBreadcrumbs-li` | Styles applied to the li element. |
| `ol` | `MuiBreadcrumbs-ol` | Styles applied to the ol element. |
| `root` | `MuiBreadcrumbs-root` | Styles applied to the root element. |
| `separator` | `MuiBreadcrumbs-separator` | Styles applied to the separator element. |
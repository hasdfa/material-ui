# Breadcrumbs API

The Breadcrumbs component API documentation.

## Import

```
import Breadcrumbs from '@mui/joy/Breadcrumbs';
// or
import { Breadcrumbs } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `component` | `elementType` | - | - |
| `separator` | `node` | `'/'` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ li?: func<br>\| object, ol?: func<br>\| object, root?: func<br>\| object, separator?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ li?: elementType, ol?: elementType, root?: elementType, separator?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'nav'` | The component that renders the root. |
| `ol` | `'ol'` | The component that renders the ol. |
| `li` | `'li'` | The component that renders the li. |
| `separator` | `'li'` | The component that renders the separator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `sizeLg` | `MuiBreadcrumbs-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiBreadcrumbs-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiBreadcrumbs-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
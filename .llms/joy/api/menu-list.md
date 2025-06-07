# MenuList API

The MenuList component API documentation.

## Import

```
import MenuList from '@mui/joy/MenuList';
// or
import { MenuList } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `actions` | `custom` ref | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `onItemsChange` | `func` | - | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLUListElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'ul'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiMenuList-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiMenuList-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiMenuList-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiMenuList-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiMenuList-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiMenuList-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sizeLg` | `MuiMenuList-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiMenuList-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiMenuList-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiMenuList-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiMenuList-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiMenuList-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiMenuList-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
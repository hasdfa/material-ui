# Menu API

The Menu component API documentation.

## Import

```
import Menu from '@mui/joy/Menu';
// or
import { Menu } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element ( [Popper](/base-ui/react-popper/components-api/#popper)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `actions` | `custom` ref | - | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disablePortal` | `bool` | `false` | - |
| `invertedColors` | `bool` | `false` | - |
| `keepMounted` | `bool` | `false` | - |
| `modifiers` | `arrayOf` Array<{ data?: object, effect?: func, enabled?: bool, fn?: func, name?: any, options?: object, phase?: 'afterMain'<br>\| 'afterRead'<br>\| 'afterWrite'<br>\| 'beforeMain'<br>\| 'beforeRead'<br>\| 'beforeWrite'<br>\| 'main'<br>\| 'read'<br>\| 'write', requires?: Array, requiresIfExists?: Array }> | - | - |
| `onClose` | `func` | - | - |
| `onItemsChange` | `func` | - | - |
| `open` | `bool` | `false` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLUListElement element.
:::

### Inheritance

The props of the [Popper](/base-ui/react-popper/components-api/#popper) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'ul'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiMenu-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiMenu-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiMenu-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiMenu-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiMenu-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiMenu-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `expanded` | `Mui-expanded` | Class name applied to the root element when the menu open. |
| `listbox` | `MuiMenu-listbox` | Class name applied to the listbox element. |
| `sizeLg` | `MuiMenu-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiMenu-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiMenu-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiMenu-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiMenu-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiMenu-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiMenu-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
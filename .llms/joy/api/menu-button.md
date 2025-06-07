# MenuButton API

The MenuButton component API documentation.

## Import

```
import MenuButton from '@mui/joy/MenuButton';
// or
import { MenuButton } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `union`'danger'<br>\| 'info'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `endDecorator` | `node` | - | - |
| `fullWidth` | `bool` | `false` | - |
| `loading` | `bool` | `false` | - |
| `loadingIndicator` | `node` | `` | - |
| `loadingPosition` | `enum`'center'<br>\| 'end'<br>\| 'start' | `'center'` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ endDecorator?: func<br>\| object, loadingIndicatorCenter?: func<br>\| object, root?: func<br>\| object, startDecorator?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ endDecorator?: elementType, loadingIndicatorCenter?: elementType, root?: elementType, startDecorator?: elementType } | `{}` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'button'` | The component that renders the root. |
| `startDecorator` | `'span'` | The component that renders the start decorator. |
| `endDecorator` | `'span'` | The component that renders the end decorator. |
| `loadingIndicatorCenter` | `'span'` | The component that renders the loading indicator center. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiMenuButton-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiMenuButton-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorInfo` | `MuiMenuButton-colorInfo` | Class name applied to the root element if \`color="info"\`. |
| `colorNeutral` | `MuiMenuButton-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiMenuButton-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiMenuButton-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiMenuButton-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `fullWidth` | `MuiMenuButton-fullWidth` | Class name applied to the root element if \`fullWidth={true}\`. |
| `loading` | `MuiMenuButton-loading` | Class name applied to the root element if \`loading={true}\`. |
| `sizeLg` | `MuiMenuButton-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiMenuButton-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiMenuButton-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiMenuButton-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiMenuButton-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiMenuButton-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiMenuButton-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
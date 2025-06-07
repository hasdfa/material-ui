# IconButton API

The IconButton component API documentation.

## Import

```
import IconButton from '@mui/joy/IconButton';
// or
import { IconButton } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `union` func<br>\| { current?: { focusVisible: func } } | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `focusVisibleClassName` | `string` | - | - |
| `loading` | `bool` | `false` | - |
| `loadingIndicator` | `node` | `` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ loadingIndicator?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ loadingIndicator?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'button'` | The component that renders the root. |
| `loadingIndicator` | `'span'` | The component that renders the loading indicator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiIconButton-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiIconButton-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiIconButton-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiIconButton-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiIconButton-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiIconButton-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if the button is keyboard focused. |
| `loading` | `MuiIconButton-loading` | Class name applied to the root element if \`loading={true}\`. |
| `sizeLg` | `MuiIconButton-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiIconButton-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiIconButton-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiIconButton-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiIconButton-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiIconButton-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiIconButton-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
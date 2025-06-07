# Button API

The Button component API documentation.

## Import

```
import Button from '@mui/joy/Button';
// or
import { Button } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `union` func<br>\| { current?: { focusVisible: func } } | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
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
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'solid'` | - |

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
| `colorContext` | `MuiButton-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiButton-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiButton-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiButton-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiButton-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiButton-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the ButtonBase root element if the button is keyboard focused. |
| `fullWidth` | `MuiButton-fullWidth` | Class name applied to the root element if \`fullWidth={true}\`. |
| `loading` | `MuiButton-loading` | Class name applied to the root element if \`loading={true}\`. |
| `sizeLg` | `MuiButton-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiButton-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiButton-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiButton-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiButton-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiButton-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiButton-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
# AutocompleteOption API

The AutocompleteOption component API documentation.

## Import

```
import AutocompleteOption from '@mui/joy/AutocompleteOption';
// or
import { AutocompleteOption } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'contained'<br>\| 'light'<br>\| 'outlined'<br>\| 'text'<br>\| string | `'plain'` | - |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'li'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiAutocompleteOption-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiAutocompleteOption-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiAutocompleteOption-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiAutocompleteOption-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiAutocompleteOption-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiAutocompleteOption-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `focused` | `Mui-focused` | State class applied to the root element if focused. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the \`component\`'s \`focusVisibleClassName\` prop. |
| `variantOutlined` | `MuiAutocompleteOption-variantOutlined` | State class applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiAutocompleteOption-variantPlain` | State class applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiAutocompleteOption-variantSoft` | State class applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiAutocompleteOption-variantSolid` | State class applied to the root element if \`variant="solid"\`. |
# AutocompleteListbox API

The AutocompleteListbox component API documentation.

## Import

```
import AutocompleteListbox from '@mui/joy/AutocompleteListbox';
// or
import { AutocompleteListbox } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `size` | `enum`'sm'<br>\| 'md'<br>\| 'lg' | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'contained'<br>\| 'light'<br>\| 'outlined'<br>\| 'text'<br>\| string | `'outlined'` | - |

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
| `colorContext` | `MuiAutocompleteListbox-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiAutocompleteListbox-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiAutocompleteListbox-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiAutocompleteListbox-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiAutocompleteListbox-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiAutocompleteListbox-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `sizeLg` | `MuiAutocompleteListbox-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiAutocompleteListbox-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiAutocompleteListbox-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiAutocompleteListbox-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiAutocompleteListbox-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiAutocompleteListbox-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiAutocompleteListbox-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
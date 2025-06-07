# Autocomplete API

The Autocomplete component API documentation.

## Import

```
import Autocomplete from '@mui/joy/Autocomplete';
// or
import { Autocomplete } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `array` | - | - |
| `aria-describedby` | `string` | - | - |
| `aria-label` | `string` | - | - |
| `aria-labelledby` | `string` | - | - |
| `autoComplete` | `bool` | `false` | - |
| `autoFocus` | `bool` | - | - |
| `autoHighlight` | `bool` | `false` | - |
| `autoSelect` | `bool` | `false` | - |
| `blurOnSelect` | `union`'mouse'<br>\| 'touch'<br>\| bool | `false` | - |
| `clearIcon` | `node` | `` | - |
| `clearOnBlur` | `bool` | `!props.freeSolo` | - |
| `clearOnEscape` | `bool` | `false` | - |
| `clearText` | `string` | `'Clear'` | - |
| `closeText` | `string` | `'Close'` | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | `'neutral'` | - |
| `defaultValue` | `custom` any | `props.multiple ? [] : null` | - |
| `disableClearable` | `bool` | `false` | - |
| `disableCloseOnSelect` | `bool` | `false` | - |
| `disabled` | `bool` | `false` | - |
| `disabledItemsFocusable` | `bool` | `false` | - |
| `disableListWrap` | `bool` | `false` | - |
| `endDecorator` | `node` | - | - |
| `error` | `bool` | `false` | - |
| `filterOptions` | `func` | `createFilterOptions()` | - |
| `filterSelectedOptions` | `bool` | `false` | - |
| `forcePopupIcon` | `union`'auto'<br>\| bool | `'auto'` | - |
| `freeSolo` | `bool` | `false` | - |
| `getLimitTagsText` | `func` | ``(more: string | number) => `+${more}` `` | - |
| `getOptionDisabled` | `func` | - | - |
| `getOptionKey` | `func` | - | - |
| `getOptionLabel` | `func` | `(option) => option.label ?? option` | - |
| `groupBy` | `func` | - | - |
| `handleHomeEndKeys` | `bool` | `!props.freeSolo` | - |
| `id` | `string` | - | - |
| `includeInputInList` | `bool` | `false` | - |
| `inputValue` | `string` | - | - |
| `isOptionEqualToValue` | `func` | - | - |
| `limitTags` | `custom` integer | `-1` | - |
| `loading` | `bool` | `false` | - |
| `loadingText` | `node` | `'Loading…'` | - |
| `multiple` | `bool` | `false` | - |
| `name` | `string` | - | - |
| `noOptionsText` | `node` | `'No options'` | - |
| `onChange` | `func` | - | - |
| `onClose` | `func` | - | - |
| `onHighlightChange` | `func` | - | - |
| `onInputChange` | `func` | - | - |
| `onOpen` | `func` | - | - |
| `open` | `bool` | - | - |
| `openOnFocus` | `bool` | `false` | - |
| `openText` | `string` | `'Open'` | - |
| `placeholder` | `string` | - | - |
| `popupIcon` | `node` | `` | - |
| `readOnly` | `bool` | `false` | - |
| `renderGroup` | `func` | - | - |
| `renderOption` | `func` | - | - |
| `renderTags` | `func` | - | - |
| `required` | `bool` | - | - |
| `selectOnFocus` | `bool` | `!props.freeSolo` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ clearIndicator?: func<br>\| object, endDecorator?: func<br>\| object, input?: func<br>\| object, limitTag?: func<br>\| object, listbox?: func<br>\| object, loading?: func<br>\| object, noOptions?: func<br>\| object, option?: func<br>\| object, popupIndicator?: func<br>\| object, root?: func<br>\| object, startDecorator?: func<br>\| object, wrapper?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ clearIndicator?: elementType, endDecorator?: elementType, input?: elementType, limitTag?: elementType, listbox?: elementType, loading?: elementType, noOptions?: elementType, option?: elementType, popupIndicator?: elementType, root?: elementType, startDecorator?: elementType, wrapper?: elementType } | `{}` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `type` | `string` | - | - |
| `value` | `custom` any | - | - |
| `variant` | `enum`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid' | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `wrapper` | `'div'` | The component that renders the wrapper. |
| `input` | `'input'` | The component that renders the input. |
| `startDecorator` | `'div'` | The component that renders the start decorator. |
| `endDecorator` | `'div'` | The component that renders the end decorator. |
| `clearIndicator` | `'button'` | The component that renders the clear indicator. |
| `popupIndicator` | `'button'` | The component that renders the popup indicator. |
| `listbox` | `'ul'` | The component that renders the listbox. |
| `option` | `'li'` | The component that renders the option. |
| `loading` | `'li'` | The component that renders the loading. |
| `noOptions` | `'li'` | The component that renders the no-options. |
| `limitTag` | `'div'` | The component that renders the limit tag. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiAutocomplete-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiAutocomplete-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiAutocomplete-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiAutocomplete-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiAutocomplete-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiAutocomplete-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | Class name applied to the root element if \`disabled={true}\`. |
| `error` | `Mui-error` | State class applied to the root element if \`error={true}\`. |
| `focused` | `Mui-focused` | Class name applied to the root element if the component is focused. |
| `formControl` | `MuiAutocomplete-formControl` | Class name applied to the root element if the component is a descendant of \`FormControl\`. |
| `hasClearIcon` | `MuiAutocomplete-hasClearIcon` | Class name applied when the clear icon is rendered. |
| `hasPopupIcon` | `MuiAutocomplete-hasPopupIcon` | Class name applied when the popup icon is rendered. |
| `multiple` | `MuiAutocomplete-multiple` | Class name applied to the wrapper element if \`multiple={true}\`. |
| `popupIndicatorOpen` | `MuiAutocomplete-popupIndicatorOpen` | Class name applied to the popup indicator if the popup is open. |
| `sizeLg` | `MuiAutocomplete-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiAutocomplete-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiAutocomplete-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `variantOutlined` | `MuiAutocomplete-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiAutocomplete-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiAutocomplete-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiAutocomplete-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
# Autocomplete API

The Autocomplete component API documentation.

## Import

```
import Autocomplete from '@mui/material/Autocomplete';
// or
import { Autocomplete } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `array` | - | - |
| `renderInput` | `func` | - | - |
| `autoComplete` | `bool` | `false` | - |
| `autoHighlight` | `bool` | `false` | - |
| `autoSelect` | `bool` | `false` | - |
| `blurOnSelect` | `union`'mouse'<br>\| 'touch'<br>\| bool | `false` | - |
| `ChipProps` | `object` | - | - |
| `classes` | `object` | - | - |
| `clearIcon` | `node` | `` | - |
| `clearOnBlur` | `bool` | `!props.freeSolo` | - |
| `clearOnEscape` | `bool` | `false` | - |
| `clearText` | `string` | `'Clear'` | - |
| `closeText` | `string` | `'Close'` | - |
| `componentsProps` | `shape`{ clearIndicator?: object, paper?: object, popper?: object, popupIndicator?: object } | - | - |
| `defaultValue` | `custom` any | `props.multiple ? [] : null` | - |
| `disableClearable` | `bool` | `false` | - |
| `disableCloseOnSelect` | `bool` | `false` | - |
| `disabled` | `bool` | `false` | - |
| `disabledItemsFocusable` | `bool` | `false` | - |
| `disableListWrap` | `bool` | `false` | - |
| `disablePortal` | `bool` | `false` | - |
| `filterOptions` | `func` | `createFilterOptions()` | - |
| `filterSelectedOptions` | `bool` | `false` | - |
| `forcePopupIcon` | `union`'auto'<br>\| bool | `'auto'` | - |
| `freeSolo` | `bool` | `false` | - |
| `fullWidth` | `bool` | `false` | - |
| `getLimitTagsText` | `func` | ``(more) => `+${more}` `` | - |
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
| `ListboxComponent` | `elementType` | `'ul'` | - |
| `ListboxProps` | `object` | - | - |
| `loading` | `bool` | `false` | - |
| `loadingText` | `node` | `'Loading…'` | - |
| `multiple` | `bool` | `false` | - |
| `noOptionsText` | `node` | `'No options'` | - |
| `onChange` | `func` | - | - |
| `onClose` | `func` | - | - |
| `onHighlightChange` | `func` | - | - |
| `onInputChange` | `func` | - | - |
| `onOpen` | `func` | - | - |
| `open` | `bool` | - | - |
| `openOnFocus` | `bool` | `false` | - |
| `openText` | `string` | `'Open'` | - |
| `PaperComponent` | `elementType` | `Paper` | - |
| `PopperComponent` | `elementType` | `Popper` | - |
| `popupIcon` | `node` | `` | - |
| `readOnly` | `bool` | `false` | - |
| `renderGroup` | `func` | - | - |
| `renderOption` | `func` | - | - |
| `renderTags` | `func` | - | - |
| `selectOnFocus` | `bool` | `!props.freeSolo` | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| string | `'medium'` | - |
| `slotProps` | `shape`{ chip?: func<br>\| object, clearIndicator?: func<br>\| object, listbox?: func<br>\| object, paper?: func<br>\| object, popper?: func<br>\| object, popupIndicator?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ listbox?: elementType, paper?: elementType, popper?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `custom` any | - | - |

:::info
The `ref` is forwarded to the root element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `listbox` | `'ul'` | The component used to render the listbox. |
| `paper` | `Paper` | The component used to render the body of the popup. |
| `popper` | `Popper` | The component used to position the popup. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `clearIndicator` | `MuiAutocomplete-clearIndicator` | Styles applied to the clear indicator. |
| `endAdornment` | `MuiAutocomplete-endAdornment` | Styles applied to the endAdornment element. |
| `expanded` | `Mui-expanded` | State class applied to the root element if the listbox is displayed. |
| `focused` | `Mui-focused` | State class applied to the root element if focused. |
| `focusVisible` | `Mui-focusVisible` | Styles applied to the option elements if they are keyboard focused. |
| `fullWidth` | `MuiAutocomplete-fullWidth` | Styles applied to the root element if \`fullWidth={true}\`. |
| `groupLabel` | `MuiAutocomplete-groupLabel` | Styles applied to the group's label elements. |
| `groupUl` | `MuiAutocomplete-groupUl` | Styles applied to the group's ul elements. |
| `hasClearIcon` | `MuiAutocomplete-hasClearIcon` | Styles applied when the clear icon is rendered. |
| `hasPopupIcon` | `MuiAutocomplete-hasPopupIcon` | Styles applied when the popup icon is rendered. |
| `input` | `MuiAutocomplete-input` | Styles applied to the input element. |
| `inputFocused` | `MuiAutocomplete-inputFocused` | Styles applied to the input element if the input is focused. |
| `inputRoot` | `MuiAutocomplete-inputRoot` | Styles applied to the Input element. |
| `loading` | `MuiAutocomplete-loading` | Styles applied to the loading wrapper. |
| `noOptions` | `MuiAutocomplete-noOptions` | Styles applied to the no option wrapper. |
| `option` | `MuiAutocomplete-option` | Styles applied to the option elements. |
| `popperDisablePortal` | `MuiAutocomplete-popperDisablePortal` | Styles applied to the popper element if \`disablePortal={true}\`. |
| `popupIndicator` | `MuiAutocomplete-popupIndicator` | Styles applied to the popup indicator. |
| `popupIndicatorOpen` | `MuiAutocomplete-popupIndicatorOpen` | Styles applied to the popup indicator if the popup is open. |
| `root` | `MuiAutocomplete-root` | Styles applied to the root element. |
| `tag` | `MuiAutocomplete-tag` | Styles applied to the tag elements, for example the chips. |
| `tagSizeMedium` | `MuiAutocomplete-tagSizeMedium` | Styles applied to the tag elements, for example the chips if \`size="medium"\`. |
| `tagSizeSmall` | `MuiAutocomplete-tagSizeSmall` | Styles applied to the tag elements, for example the chips if \`size="small"\`. |
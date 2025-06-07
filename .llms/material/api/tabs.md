# Tabs API

The Tabs component API documentation.

## Import

```
import Tabs from '@mui/material/Tabs';
// or
import { Tabs } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `custom` ref | - | - |
| `allowScrollButtonsMobile` | `bool` | `false` | - |
| `aria-label` | `string` | - | - |
| `aria-labelledby` | `string` | - | - |
| `centered` | `bool` | `false` | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `indicatorColor` | `union`'primary'<br>\| 'secondary'<br>\| string | `'primary'` | - |
| `onChange` | `func` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `ScrollButtonComponent` | `elementType` | `TabScrollButton` | - |
| `scrollButtons` | `enum`'auto'<br>\| false<br>\| true | `'auto'` | - |
| `selectionFollowsFocus` | `bool` | - | - |
| `slotProps` | `shape`{ endScrollButtonIcon?: func<br>\| object, indicator?: func<br>\| object, list?: func<br>\| object, root?: func<br>\| object, scrollbar?: func<br>\| object, scrollButtons?: func<br>\| object, scroller?: func<br>\| object, startScrollButtonIcon?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ endScrollButtonIcon?: elementType, EndScrollButtonIcon?: elementType, indicator?: elementType, list?: elementType, root?: elementType, scrollbar?: elementType, scrollButtons?: elementType, scroller?: elementType, startScrollButtonIcon?: elementType, StartScrollButtonIcon?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `TabIndicatorProps` | `object` | `{}` | - |
| `TabScrollButtonProps` | `object` | `{}` | - |
| `textColor` | `enum`'inherit'<br>\| 'primary'<br>\| 'secondary' | `'primary'` | - |
| `value` | `any` | - | - |
| `variant` | `enum`'fullWidth'<br>\| 'scrollable'<br>\| 'standard' | `'standard'` | - |
| `visibleScrollbar` | `bool` | `false` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `div` | The component used for the popper. |
| `scroller` | `div` | The component used for the scroller. |
| `list` | `div` | The component used for the flex container. |
| `scrollbar` | `ScrollbarSize` | The component used for the scroller. |
| `indicator` | `span` | The component used for the tab indicator. |
| `scrollButtons` | `TabScrollButton` | The component used for the scroll button. |
| `startScrollButtonIcon` | `KeyboardArrowLeft` | The component used for the start scroll button icon. |
| `endScrollButtonIcon` | `KeyboardArrowRight` | The component used for the end scroll button icon. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `centered` | `MuiTabs-centered` | Styles applied to the flex container element if \`centered={true}\` & \`!variant="scrollable"\`. |
| `fixed` | `MuiTabs-fixed` | Styles applied to the tablist element if \`!variant="scrollable"\`. |
| `flexContainer` | `MuiTabs-flexContainer` |  |
| `flexContainerVertical` | `MuiTabs-flexContainerVertical` |  |
| `hideScrollbar` | `MuiTabs-hideScrollbar` | Styles applied to the tablist element if \`variant="scrollable"\` and \`visibleScrollbar={false}\`. |
| `scrollableX` | `MuiTabs-scrollableX` | Styles applied to the tablist element if \`variant="scrollable"\` and \`orientation="horizontal"\`. |
| `scrollableY` | `MuiTabs-scrollableY` | Styles applied to the tablist element if \`variant="scrollable"\` and \`orientation="vertical"\`. |
| `scrollButtonsHideMobile` | `MuiTabs-scrollButtonsHideMobile` | Styles applied to the ScrollButtonComponent component if \`allowScrollButtonsMobile={true}\`. |
| `vertical` | `MuiTabs-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
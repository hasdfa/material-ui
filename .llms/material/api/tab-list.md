# TabList API

The TabList component API documentation.

## Import

```
import TabList from '@mui/lab/TabList';
// or
import { TabList } from '@mui/lab';
```

## Props

Any other props supplied will be provided to the root element ( [Tabs](/material-ui/api/tabs/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Tabs](/material-ui/api/tabs/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `centered` | `MuiTabList-centered` | Styles applied to the flex container element if \`centered={true}\` & \`!variant="scrollable"\`. |
| `fixed` | `MuiTabList-fixed` | Styles applied to the tablist element if \`!variant="scrollable"\`. |
| `flexContainer` | `MuiTabList-flexContainer` |  |
| `flexContainerVertical` | `MuiTabList-flexContainerVertical` |  |
| `hideScrollbar` | `MuiTabList-hideScrollbar` | Styles applied to the tablist element if \`variant="scrollable"\` and \`visibleScrollbar={false}\`. |
| `indicator` | `MuiTabList-indicator` | Styles applied to the TabIndicator component. |
| `list` | `MuiTabList-list` | Styles applied to the list element. |
| `root` | `MuiTabList-root` | Styles applied to the root element. |
| `scrollableX` | `MuiTabList-scrollableX` | Styles applied to the tablist element if \`variant="scrollable"\` and \`orientation="horizontal"\`. |
| `scrollableY` | `MuiTabList-scrollableY` | Styles applied to the tablist element if \`variant="scrollable"\` and \`orientation="vertical"\`. |
| `scrollButtons` | `MuiTabList-scrollButtons` | Styles applied to the ScrollButtonComponent component. |
| `scrollButtonsHideMobile` | `MuiTabList-scrollButtonsHideMobile` | Styles applied to the ScrollButtonComponent component if \`allowScrollButtonsMobile={true}\`. |
| `scroller` | `MuiTabList-scroller` | Styles applied to the tablist element. |
| `vertical` | `MuiTabList-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
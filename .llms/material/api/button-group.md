# ButtonGroup API

The ButtonGroup component API documentation.

## Import

```
import ButtonGroup from '@mui/material/ButtonGroup';
// or
import { ButtonGroup } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'inherit'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `disableElevation` | `bool` | `false` | - |
| `disableFocusRipple` | `bool` | `false` | - |
| `disableRipple` | `bool` | `false` | - |
| `fullWidth` | `bool` | `false` | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| 'large'<br>\| string | `'medium'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'contained'<br>\| 'outlined'<br>\| 'text'<br>\| string | `'outlined'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorPrimary` | `MuiButtonGroup-colorPrimary` | Styles applied to the root element if \`color="primary"\` |
| `colorSecondary` | `MuiButtonGroup-colorSecondary` | Styles applied to the root element if \`color="secondary"\` |
| `contained` | `MuiButtonGroup-contained` | Styles applied to the root element if \`variant="contained"\`. |
| `disabled` | `Mui-disabled` | State class applied to the child elements if \`disabled={true}\`. |
| `disableElevation` | `MuiButtonGroup-disableElevation` | Styles applied to the root element if \`disableElevation={true}\`. |
| `firstButton` | `MuiButtonGroup-firstButton` | Styles applied to the first button in the button group. |
| `fullWidth` | `MuiButtonGroup-fullWidth` | Styles applied to the root element if \`fullWidth={true}\`. |
| `grouped` | `MuiButtonGroup-grouped` | Styles applied to the children. |
| `groupedContained` | `MuiButtonGroup-groupedContained` | Styles applied to the children if \`variant="contained"\`. |
| `groupedContainedHorizontal` | `MuiButtonGroup-groupedContainedHorizontal` | Styles applied to the children if \`variant="contained"\` and \`orientation="horizontal"\`. |
| `groupedContainedPrimary` | `MuiButtonGroup-groupedContainedPrimary` | Styles applied to the children if \`variant="contained"\` and \`color="primary"\`. |
| `groupedContainedSecondary` | `MuiButtonGroup-groupedContainedSecondary` | Styles applied to the children if \`variant="contained"\` and \`color="secondary"\`. |
| `groupedContainedVertical` | `MuiButtonGroup-groupedContainedVertical` | Styles applied to the children if \`variant="contained"\` and \`orientation="vertical"\`. |
| `groupedHorizontal` | `MuiButtonGroup-groupedHorizontal` | Styles applied to the children if \`orientation="horizontal"\`. |
| `groupedOutlined` | `MuiButtonGroup-groupedOutlined` | Styles applied to the children if \`variant="outlined"\`. |
| `groupedOutlinedHorizontal` | `MuiButtonGroup-groupedOutlinedHorizontal` | Styles applied to the children if \`variant="outlined"\` and \`orientation="horizontal"\`. |
| `groupedOutlinedPrimary` | `MuiButtonGroup-groupedOutlinedPrimary` | Styles applied to the children if \`variant="outlined"\` and \`color="primary"\`. |
| `groupedOutlinedSecondary` | `MuiButtonGroup-groupedOutlinedSecondary` | Styles applied to the children if \`variant="outlined"\` and \`color="secondary"\`. |
| `groupedOutlinedVertical` | `MuiButtonGroup-groupedOutlinedVertical` | Styles applied to the children if \`variant="outlined"\` and \`orientation="vertical"\`. |
| `groupedText` | `MuiButtonGroup-groupedText` | Styles applied to the children if \`variant="text"\`. |
| `groupedTextHorizontal` | `MuiButtonGroup-groupedTextHorizontal` | Styles applied to the children if \`variant="text"\` and \`orientation="horizontal"\`. |
| `groupedTextPrimary` | `MuiButtonGroup-groupedTextPrimary` | Styles applied to the children if \`variant="text"\` and \`color="primary"\`. |
| `groupedTextSecondary` | `MuiButtonGroup-groupedTextSecondary` | Styles applied to the children if \`variant="text"\` and \`color="secondary"\`. |
| `groupedTextVertical` | `MuiButtonGroup-groupedTextVertical` | Styles applied to the children if \`variant="text"\` and \`orientation="vertical"\`. |
| `groupedVertical` | `MuiButtonGroup-groupedVertical` | Styles applied to the children if \`orientation="vertical"\`. |
| `horizontal` | `MuiButtonGroup-horizontal` | Styles applied to the root element if \`orientation="horizontal"\`. |
| `lastButton` | `MuiButtonGroup-lastButton` | Styles applied to the last button in the button group. |
| `middleButton` | `MuiButtonGroup-middleButton` | Styles applied to buttons in the middle of the button group. |
| `outlined` | `MuiButtonGroup-outlined` | Styles applied to the root element if \`variant="outlined"\`. |
| `root` | `MuiButtonGroup-root` | Styles applied to the root element. |
| `text` | `MuiButtonGroup-text` | Styles applied to the root element if \`variant="text"\`. |
| `vertical` | `MuiButtonGroup-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
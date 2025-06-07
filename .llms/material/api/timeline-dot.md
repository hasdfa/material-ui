# TimelineDot API

The TimelineDot component API documentation.

## Import

```
import TimelineDot from '@mui/lab/TimelineDot';
// or
import { TimelineDot } from '@mui/lab';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'error'<br>\| 'grey'<br>\| 'info'<br>\| 'inherit'<br>\| 'primary'<br>\| 'secondary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'grey'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'filled'<br>\| 'outlined'<br>\| string | `'filled'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `filled` | `MuiTimelineDot-filled` | Styles applied to the root element if \`variant="filled"\`. |
| `filledGrey` | `MuiTimelineDot-filledGrey` | Styles applied to the root element if \`color="grey"\` and \`variant="filled"\`. |
| `filledPrimary` | `MuiTimelineDot-filledPrimary` | Styles applied to the root element if \`color="primary"\` and \`variant="filled"\`. |
| `filledSecondary` | `MuiTimelineDot-filledSecondary` | Styles applied to the root element if \`color="secondary"\` and \`variant="filled"\`. |
| `outlined` | `MuiTimelineDot-outlined` | Styles applied to the root element if \`variant="outlined"\`. |
| `outlinedGrey` | `MuiTimelineDot-outlinedGrey` | Styles applied to the root element if \`color="grey"\` and \`variant="outlined"\`. |
| `outlinedPrimary` | `MuiTimelineDot-outlinedPrimary` | Styles applied to the root element if \`color="primary"\` and \`variant="outlined"\`. |
| `outlinedSecondary` | `MuiTimelineDot-outlinedSecondary` | Styles applied to the root element if \`color="secondary"\` and \`variant="outlined"\`. |
| `root` | `MuiTimelineDot-root` | Styles applied to the root element. |
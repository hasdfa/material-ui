# CircularProgress API

The CircularProgress component API documentation.

## Import

```
import CircularProgress from '@mui/material/CircularProgress';
// or
import { CircularProgress } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `classes` | `object` | - | - |
| `color` | `union`'inherit'<br>\| 'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `disableShrink` | `custom` bool | `false` | - |
| `size` | `union` number<br>\| string | `40` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `thickness` | `number` | `3.6` | - |
| `value` | `number` | `0` | - |
| `variant` | `enum`'determinate'<br>\| 'indeterminate' | `'indeterminate'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `circle` | `MuiCircularProgress-circle` | Styles applied to the \`circle\` svg path. |
| `circleDeterminate` | `MuiCircularProgress-circleDeterminate` | Styles applied to the \`circle\` svg path if \`variant="determinate"\`. |
| `circleDisableShrink` | `MuiCircularProgress-circleDisableShrink` | Styles applied to the \`circle\` svg path if \`disableShrink={true}\`. |
| `circleIndeterminate` | `MuiCircularProgress-circleIndeterminate` | Styles applied to the \`circle\` svg path if \`variant="indeterminate"\`. |
| `colorPrimary` | `MuiCircularProgress-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiCircularProgress-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `determinate` | `MuiCircularProgress-determinate` | Styles applied to the root element if \`variant="determinate"\`. |
| `indeterminate` | `MuiCircularProgress-indeterminate` | Styles applied to the root element if \`variant="indeterminate"\`. |
| `root` | `MuiCircularProgress-root` | Styles applied to the root element. |
| `svg` | `MuiCircularProgress-svg` | Styles applied to the svg element. |
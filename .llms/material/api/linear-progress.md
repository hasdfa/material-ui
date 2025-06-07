# LinearProgress API

The LinearProgress component API documentation.

## Import

```
import LinearProgress from '@mui/material/LinearProgress';
// or
import { LinearProgress } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `classes` | `object` | - | - |
| `color` | `union`'inherit'<br>\| 'primary'<br>\| 'secondary'<br>\| string | `'primary'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `number` | - | - |
| `valueBuffer` | `number` | - | - |
| `variant` | `enum`'buffer'<br>\| 'determinate'<br>\| 'indeterminate'<br>\| 'query' | `'indeterminate'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `bar` | `MuiLinearProgress-bar` | Styles applied to the layered bar1 and bar2 elements. |
| `bar1` | `MuiLinearProgress-bar1` | Styles applied to the bar1 element. |
| `bar1Buffer` | `MuiLinearProgress-bar1Buffer` | Styles applied to the bar1 element if \`variant="buffer"\`. |
| `bar1Determinate` | `MuiLinearProgress-bar1Determinate` | Styles applied to the bar1 element if \`variant="determinate"\`. |
| `bar1Indeterminate` | `MuiLinearProgress-bar1Indeterminate` | Styles applied to the bar1 element if \`variant="indeterminate or query"\`. |
| `bar2` | `MuiLinearProgress-bar2` | Styles applied to the bar2 element. |
| `bar2Buffer` | `MuiLinearProgress-bar2Buffer` | Styles applied to the bar2 element if \`variant="buffer"\`. |
| `bar2Indeterminate` | `MuiLinearProgress-bar2Indeterminate` | Styles applied to the bar2 element if \`variant="indeterminate or query"\`. |
| `barColorPrimary` | `MuiLinearProgress-barColorPrimary` | Styles applied to the bar elements if \`color="primary"\`; bar2 if \`variant\` not "buffer". |
| `barColorSecondary` | `MuiLinearProgress-barColorSecondary` | Styles applied to the bar elements if \`color="secondary"\`; bar2 if \`variant\` not "buffer". |
| `buffer` | `MuiLinearProgress-buffer` | Styles applied to the root element if \`variant="buffer"\`. |
| `colorPrimary` | `MuiLinearProgress-colorPrimary` | Styles applied to the root and bar2 element if \`color="primary"\`; bar2 if \`variant="buffer"\`. |
| `colorSecondary` | `MuiLinearProgress-colorSecondary` | Styles applied to the root and bar2 elements if \`color="secondary"\`; bar2 if \`variant="buffer"\`. |
| `dashed` | `MuiLinearProgress-dashed` | Styles applied to the additional bar element if \`variant="buffer"\`. |
| `dashedColorPrimary` | `MuiLinearProgress-dashedColorPrimary` | Styles applied to the additional bar element if \`variant="buffer"\` and \`color="primary"\`. |
| `dashedColorSecondary` | `MuiLinearProgress-dashedColorSecondary` | Styles applied to the additional bar element if \`variant="buffer"\` and \`color="secondary"\`. |
| `determinate` | `MuiLinearProgress-determinate` | Styles applied to the root element if \`variant="determinate"\`. |
| `indeterminate` | `MuiLinearProgress-indeterminate` | Styles applied to the root element if \`variant="indeterminate"\`. |
| `query` | `MuiLinearProgress-query` | Styles applied to the root element if \`variant="query"\`. |
| `root` | `MuiLinearProgress-root` | Styles applied to the root element. |
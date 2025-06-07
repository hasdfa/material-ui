# Card API

The Card component API documentation.

## Import

```
import Card from '@mui/material/Card';
// or
import { Card } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [Paper](/material-ui/api/paper/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `raised` | `custom` bool | `false` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

### Inheritance

The props of the [Paper](/material-ui/api/paper/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `root` | `MuiCard-root` | Styles applied to the root element. |
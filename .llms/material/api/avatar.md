# Avatar API

The Avatar component API documentation.

## Import

```
import Avatar from '@mui/material/Avatar';
// or
import { Avatar } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alt` | `string` | - | - |
| `children` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `imgProps` | `object` | - | - |
| `sizes` | `string` | - | - |
| `slotProps` | `shape`{ img?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ img?: elementType } | `{}` | - |
| `src` | `string` | - | - |
| `srcSet` | `string` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'circular'<br>\| 'rounded'<br>\| 'square'<br>\| string | `'circular'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `img` | `Collapse` | The component that renders the transition.<br>\[Follow this guide\](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `circular` | `MuiAvatar-circular` | Styles applied to the root element if \`variant="circular"\`. |
| `colorDefault` | `MuiAvatar-colorDefault` | Styles applied to the root element if not \`src\` or \`srcSet\`. |
| `fallback` | `MuiAvatar-fallback` | Styles applied to the fallback icon |
| `root` | `MuiAvatar-root` | Styles applied to the root element. |
| `rounded` | `MuiAvatar-rounded` | Styles applied to the root element if \`variant="rounded"\`. |
| `square` | `MuiAvatar-square` | Styles applied to the root element if \`variant="square"\`. |
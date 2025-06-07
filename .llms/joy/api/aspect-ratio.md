# AspectRatio API

The AspectRatio component API documentation.

## Import

```
import AspectRatio from '@mui/joy/AspectRatio';
// or
import { AspectRatio } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `flex` | `bool` | `false` | - |
| `maxHeight` | `union` number<br>\| string | - | - |
| `minHeight` | `union` number<br>\| string | - | - |
| `objectFit` | `enum`'-moz-initial'<br>\| 'contain'<br>\| 'cover'<br>\| 'fill'<br>\| 'inherit'<br>\| 'initial'<br>\| 'none'<br>\| 'revert-layer'<br>\| 'revert'<br>\| 'scale-down'<br>\| 'unset' | `'cover'` | - |
| `ratio` | `union` number<br>\| string | `'16 / 9'` | - |
| `slotProps` | `shape`{ content?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ content?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'soft'` | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `content` | `'div'` | The component that renders the content. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiAspectRatio-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiAspectRatio-colorDanger` | Class name applied to the content element if \`color="danger"\`. |
| `colorNeutral` | `MuiAspectRatio-colorNeutral` | Class name applied to the content element if \`color="neutral"\`. |
| `colorPrimary` | `MuiAspectRatio-colorPrimary` | Class name applied to the content element if \`color="primary"\`. |
| `colorSuccess` | `MuiAspectRatio-colorSuccess` | Class name applied to the content element if \`color="success"\`. |
| `colorWarning` | `MuiAspectRatio-colorWarning` | Class name applied to the content element if \`color="warning"\`. |
| `variantOutlined` | `MuiAspectRatio-variantOutlined` | Class name applied to the content element if \`variant="outlined"\`. |
| `variantPlain` | `MuiAspectRatio-variantPlain` | Class name applied to the content element if \`variant="plain"\`. |
| `variantSoft` | `MuiAspectRatio-variantSoft` | Class name applied to the content element if \`variant="soft"\`. |
| `variantSolid` | `MuiAspectRatio-variantSolid` | Class name applied to the content element if \`variant="solid"\`. |
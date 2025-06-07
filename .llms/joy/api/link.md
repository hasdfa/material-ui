# Link API

The Link component API documentation.

## Import

```
import Link from '@mui/joy/Link';
// or
import { Link } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `component` | `elementType` | - | - |
| `disabled` | `bool` | `false` | - |
| `endDecorator` | `node` | - | - |
| `level` | `union`'body1'<br>\| 'body2'<br>\| 'body3'<br>\| 'h1'<br>\| 'h2'<br>\| 'h3'<br>\| 'h4'<br>\| 'h5'<br>\| 'h6'<br>\| 'inherit'<br>\| string | `'body-md'` | - |
| `overlay` | `bool` | `false` | - |
| `slotProps` | `shape`{ endDecorator?: func<br>\| object, root?: func<br>\| object, startDecorator?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ endDecorator?: elementType, root?: elementType, startDecorator?: elementType } | `{}` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `textColor` | `any` | - | - |
| `underline` | `enum`'always'<br>\| 'hover'<br>\| 'none' | `'hover'` | - |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'plain'` | - |

:::info
The `ref` is forwarded to the HTMLAnchorElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'a'` | The component that renders the root. |
| `startDecorator` | `'span'` | The component that renders the start decorator. |
| `endDecorator` | `'span'` | The component that renders the end decorator. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `body-lg` | `MuiLink-body-lg` | Class name applied to the root element if \`level="body-lg"\`. |
| `body-md` | `MuiLink-body-md` | Class name applied to the root element if \`level="body-md"\`. |
| `body-sm` | `MuiLink-body-sm` | Class name applied to the root element if \`level="body-sm"\`. |
| `body-xs` | `MuiLink-body-xs` | Class name applied to the root element if \`level="body-xs"\`. |
| `colorContext` | `MuiLink-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiLink-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiLink-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiLink-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiLink-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiLink-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the root element if the link is keyboard focused. |
| `h1` | `MuiLink-h1` | Class name applied to the root element if \`level="h1"\`. |
| `h2` | `MuiLink-h2` | Class name applied to the root element if \`level="h2"\`. |
| `h3` | `MuiLink-h3` | Class name applied to the root element if \`level="h3"\`. |
| `h4` | `MuiLink-h4` | Class name applied to the root element if \`level="h4"\`. |
| `title-lg` | `MuiLink-title-lg` | Class name applied to the root element if \`level="title-lg"\`. |
| `title-md` | `MuiLink-title-md` | Class name applied to the root element if \`level="title-md"\`. |
| `title-sm` | `MuiLink-title-sm` | Class name applied to the root element if \`level="title-sm"\`. |
| `underlineAlways` | `MuiLink-underlineAlways` | Class name applied to the root element if \`underline="always"\`. |
| `underlineHover` | `MuiLink-underlineHover` | Class name applied to the root element if \`underline="hover"\`. |
| `underlineNone` | `MuiLink-underlineNone` | Class name applied to the root element if \`underline="none"\`. |
| `variantOutlined` | `MuiLink-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiLink-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiLink-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiLink-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
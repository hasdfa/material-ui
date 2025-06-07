# Typography API

The Typography component API documentation.

## Import

```
import Typography from '@mui/joy/Typography';
// or
import { Typography } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | - | - |
| `component` | `elementType` | - | - |
| `endDecorator` | `node` | - | - |
| `gutterBottom` | `bool` | `false` | - |
| `level` | `union`'h1'<br>\| 'h2'<br>\| 'h3'<br>\| 'h4'<br>\| 'title-lg'<br>\| 'title-md'<br>\| 'title-sm'<br>\| 'body-lg'<br>\| 'body-md'<br>\| 'body-sm'<br>\| 'body-xs'<br>\| 'inherit'<br>\| string | `'body-md'` | - |
| `levelMapping` | `object` | `{<br>  h1: 'h1',<br>  h2: 'h2',<br>  h3: 'h3',<br>  h4: 'h4',<br>  'title-lg': 'p',<br>  'title-md': 'p',<br>  'title-sm': 'p',<br>  'body-lg': 'p',<br>  'body-md': 'p',<br>  'body-sm': 'p',<br>  'body-xs': 'span',<br>  inherit: 'p',<br>}` | - |
| `noWrap` | `bool` | `false` | - |
| `slotProps` | `shape`{ endDecorator?: func<br>\| object, root?: func<br>\| object, startDecorator?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ endDecorator?: elementType, root?: elementType, startDecorator?: elementType } | `{}` | - |
| `startDecorator` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `textColor` | `any` | - | - |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | - | - |

The component is styled using the `Typography` CSS class.

:::info
The `ref` is forwarded to the HTMLParagraphElement element.
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
| `body-lg` | `MuiTypography-body-lg` | Class name applied to the root element if \`level="body-lg"\`. |
| `body-md` | `MuiTypography-body-md` | Class name applied to the root element if \`level="body-md"\`. |
| `body-sm` | `MuiTypography-body-sm` | Class name applied to the root element if \`level="body-sm"\`. |
| `body-xs` | `MuiTypography-body-xs` | Class name applied to the root element if \`level="body-xs"\`. |
| `colorContext` | `MuiTypography-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiTypography-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiTypography-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiTypography-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiTypography-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiTypography-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `gutterBottom` | `MuiTypography-gutterBottom` | Class name applied to the root element if \`gutterBottom={true}\`. |
| `h1` | `MuiTypography-h1` | Class name applied to the root element if \`level="h1"\`. |
| `h2` | `MuiTypography-h2` | Class name applied to the root element if \`level="h2"\`. |
| `h3` | `MuiTypography-h3` | Class name applied to the root element if \`level="h3"\`. |
| `h4` | `MuiTypography-h4` | Class name applied to the root element if \`level="h4"\`. |
| `noWrap` | `MuiTypography-noWrap` | Class name applied to the root element if \`nowrap={true}\`. |
| `title-lg` | `MuiTypography-title-lg` | Class name applied to the root element if \`level="title-lg"\`. |
| `title-md` | `MuiTypography-title-md` | Class name applied to the root element if \`level="title-md"\`. |
| `title-sm` | `MuiTypography-title-sm` | Class name applied to the root element if \`level="title-sm"\`. |
| `variantOutlined` | `MuiTypography-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiTypography-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiTypography-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiTypography-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
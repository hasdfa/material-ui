# DialogTitle API

The DialogTitle component API documentation.

## Import

```
import DialogTitle from '@mui/joy/DialogTitle';
// or
import { DialogTitle } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | - | - |
| `component` | `elementType` | - | - |
| `level` | `enum`'body-lg'<br>\| 'body-md'<br>\| 'body-sm'<br>\| 'body-xs'<br>\| 'h1'<br>\| 'h2'<br>\| 'h3'<br>\| 'h4'<br>\| 'inherit'<br>\| 'title-lg'<br>\| 'title-md'<br>\| 'title-sm' | `{ sm: 'title-md', md: 'title-lg', lg: 'h4' }` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `enum`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid' | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `body-lg` | `MuiDialogTitle-body-lg` | Class name applied to the root element if \`level="body-lg"\`. |
| `body-md` | `MuiDialogTitle-body-md` | Class name applied to the root element if \`level="body-md"\`. |
| `body-sm` | `MuiDialogTitle-body-sm` | Class name applied to the root element if \`level="body-sm"\`. |
| `body-xs` | `MuiDialogTitle-body-xs` | Class name applied to the root element if \`level="body-xs"\`. |
| `colorContext` | `MuiDialogTitle-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiDialogTitle-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiDialogTitle-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiDialogTitle-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiDialogTitle-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiDialogTitle-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `h1` | `MuiDialogTitle-h1` | Class name applied to the root element if \`level="h1"\`. |
| `h2` | `MuiDialogTitle-h2` | Class name applied to the root element if \`level="h2"\`. |
| `h3` | `MuiDialogTitle-h3` | Class name applied to the root element if \`level="h3"\`. |
| `h4` | `MuiDialogTitle-h4` | Class name applied to the root element if \`level="h4"\`. |
| `title-lg` | `MuiDialogTitle-title-lg` | Class name applied to the root element if \`level="title-lg"\`. |
| `title-md` | `MuiDialogTitle-title-md` | Class name applied to the root element if \`level="title-md"\`. |
| `title-sm` | `MuiDialogTitle-title-sm` | Class name applied to the root element if \`level="title-sm"\`. |
| `variantOutlined` | `MuiDialogTitle-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiDialogTitle-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiDialogTitle-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiDialogTitle-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
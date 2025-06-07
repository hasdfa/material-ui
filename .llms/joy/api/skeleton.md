# Skeleton API

The Skeleton component API documentation.

## Import

```
import Skeleton from '@mui/joy/Skeleton';
// or
import { Skeleton } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `enum`'pulse'<br>\| 'wave'<br>\| false | `'pulse'` | - |
| `children` | `node` | - | - |
| `component` | `elementType` | - | - |
| `height` | `union` Array\| string><br>\| number<br>\| { lg?: number<br>\| string, md?: number<br>\| string, sm?: number<br>\| string, xl?: number<br>\| string, xs?: number<br>\| string }<br>\| string | - | - |
| `level` | `union`'h1'<br>\| 'h2'<br>\| 'h3'<br>\| 'h4'<br>\| 'title-lg'<br>\| 'title-md'<br>\| 'title-sm'<br>\| 'body-lg'<br>\| 'body-md'<br>\| 'body-sm'<br>\| 'body-xs'<br>\| 'inherit'<br>\| string | `variant === 'text' ? 'body-md' : 'inherit'` | - |
| `loading` | `bool` | `true` | - |
| `overlay` | `bool` | `false` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `variant` | `union`'circular'<br>\| 'inline'<br>\| 'overlay'<br>\| 'rectangular'<br>\| 'text'<br>\| string | `'overlay'` | - |
| `width` | `union` Array\| string><br>\| number<br>\| { lg?: number<br>\| string, md?: number<br>\| string, sm?: number<br>\| string, xl?: number<br>\| string, xs?: number<br>\| string }<br>\| string | - | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'span'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `body-lg` | `MuiSkeleton-body-lg` | Class name applied to the root element if \`level="body-lg"\`. |
| `body-md` | `MuiSkeleton-body-md` | Class name applied to the root element if \`level="body-md"\`. |
| `body-sm` | `MuiSkeleton-body-sm` | Class name applied to the root element if \`level="body-sm"\`. |
| `body-xs` | `MuiSkeleton-body-xs` | Class name applied to the root element if \`level="body-xs"\`. |
| `h1` | `MuiSkeleton-h1` | Class name applied to the root element if \`level="h1"\`. |
| `h2` | `MuiSkeleton-h2` | Class name applied to the root element if \`level="h2"\`. |
| `h3` | `MuiSkeleton-h3` | Class name applied to the root element if \`level="h3"\`. |
| `h4` | `MuiSkeleton-h4` | Class name applied to the root element if \`level="h4"\`. |
| `title-lg` | `MuiSkeleton-title-lg` | Class name applied to the root element if \`level="title-lg"\`. |
| `title-md` | `MuiSkeleton-title-md` | Class name applied to the root element if \`level="title-md"\`. |
| `title-sm` | `MuiSkeleton-title-sm` | Class name applied to the root element if \`level="title-sm"\`. |
| `variantCircular` | `MuiSkeleton-variantCircular` | Class name applied to the root element if \`variant="circular"\`. |
| `variantInline` | `MuiSkeleton-variantInline` | Class name applied to the root element if \`variant="inline"\`. |
| `variantOverlay` | `MuiSkeleton-variantOverlay` | Class name applied to the root element if \`variant="overlay"\`. |
| `variantRectangular` | `MuiSkeleton-variantRectangular` | Class name applied to the root element if \`variant="rectangular"\`. |
| `variantText` | `MuiSkeleton-variantText` | Class name applied to the root element if \`variant="text"\`. |
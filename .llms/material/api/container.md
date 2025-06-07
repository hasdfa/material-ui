# Container API

The Container component API documentation.

## Import

```
import Container from '@mui/material/Container';
// or
import { Container } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `disableGutters` | `bool` | `false` | - |
| `fixed` | `bool` | `false` | - |
| `maxWidth` | `union`'xs'<br>\| 'sm'<br>\| 'md'<br>\| 'lg'<br>\| 'xl'<br>\| false<br>\| string | `'lg'` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |

:::info
The `ref` is forwarded to the HTMLElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disableGutters` | `MuiContainer-disableGutters` | Styles applied to the root element if \`disableGutters={true}\`. |
| `fixed` | `MuiContainer-fixed` | Styles applied to the root element if \`fixed={true}\`. |
| `maxWidthLg` | `MuiContainer-maxWidthLg` | Styles applied to the root element if \`maxWidth="lg"\`. |
| `maxWidthMd` | `MuiContainer-maxWidthMd` | Styles applied to the root element if \`maxWidth="md"\`. |
| `maxWidthSm` | `MuiContainer-maxWidthSm` | Styles applied to the root element if \`maxWidth="sm"\`. |
| `maxWidthXl` | `MuiContainer-maxWidthXl` | Styles applied to the root element if \`maxWidth="xl"\`. |
| `maxWidthXs` | `MuiContainer-maxWidthXs` | Styles applied to the root element if \`maxWidth="xs"\`. |
| `root` | `MuiContainer-root` | Styles applied to the root element. |
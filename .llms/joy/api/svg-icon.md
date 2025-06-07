# SvgIcon API

The SvgIcon component API documentation.

## Import

```
import SvgIcon from '@mui/joy/SvgIcon';
// or
import { SvgIcon } from '@mui/joy';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |
| `color` | `union`'danger'<br>\| 'inherit'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | - | - |
| `component` | `elementType` | - | - |
| `fontSize` | `union`'inherit'<br>\| 'lg'<br>\| 'md'<br>\| 'sm'<br>\| 'xl'<br>\| 'xl2'<br>\| 'xl3'<br>\| 'xl4'<br>\| 'xs'<br>\| string | - | - |
| `htmlColor` | `string` | - | - |
| `inheritViewBox` | `bool` | `false` | - |
| `shapeRendering` | `string` | - | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `titleAccess` | `string` | - | - |
| `viewBox` | `string` | `'0 0 24 24'` | - |

:::info
The `ref` is forwarded to the SVGSVGElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'svg'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorDanger` | `MuiSvgIcon-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorInherit` | `MuiSvgIcon-colorInherit` | Class name applied to the root element if \`color="inherit"\`. |
| `colorNeutral` | `MuiSvgIcon-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiSvgIcon-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiSvgIcon-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiSvgIcon-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `fontSizeInherit` | `MuiSvgIcon-fontSizeInherit` | Class name applied to the root element if \`fontSize="inherit"\`. |
| `fontSizeLg` | `MuiSvgIcon-fontSizeLg` | Class name applied to the root element if \`fontSize="lg"\`. |
| `fontSizeMd` | `MuiSvgIcon-fontSizeMd` | Class name applied to the root element if \`fontSize="md"\`. |
| `fontSizeSm` | `MuiSvgIcon-fontSizeSm` | Class name applied to the root element if \`fontSize="sm"\`. |
| `fontSizeXl` | `MuiSvgIcon-fontSizeXl` | Class name applied to the root element if \`fontSize="xl"\`. |
| `fontSizeXl2` | `MuiSvgIcon-fontSizeXl2` | Class name applied to the root element if \`fontSize="xl2"\`. |
| `fontSizeXl3` | `MuiSvgIcon-fontSizeXl3` | Class name applied to the root element if \`fontSize="xl3"\`. |
| `fontSizeXl4` | `MuiSvgIcon-fontSizeXl4` | Class name applied to the root element if \`fontSize="xl4"\`. |
| `fontSizeXs` | `MuiSvgIcon-fontSizeXs` | Class name applied to the root element if \`fontSize="xs"\`. |
| `sizeLg` | `MuiSvgIcon-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiSvgIcon-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiSvgIcon-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
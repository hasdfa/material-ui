# MenuItem API

The MenuItem component API documentation.

## Import

```
import MenuItem from '@mui/joy/MenuItem';
// or
import { MenuItem } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `node` | - | - |

:::info
The `ref` is forwarded to the HTMLLIElement element.
:::

### Inheritance

The props of the [ListItemButton](/joy-ui/api/list-item-button/) component are also available.

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiMenuItem-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiMenuItem-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiMenuItem-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiMenuItem-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiMenuItem-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiMenuItem-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the inner \`component\` element if \`disabled={true}\`. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the \`component\`'s \`focusVisibleClassName\` prop. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\`. |
| `variantOutlined` | `MuiMenuItem-variantOutlined` | State class applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiMenuItem-variantPlain` | State class applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiMenuItem-variantSoft` | State class applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiMenuItem-variantSolid` | State class applied to the root element if \`variant="solid"\`. |
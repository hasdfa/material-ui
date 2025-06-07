# Tab API

The Tab component API documentation.

## Import

```
import Tab from '@mui/material/Tab';
// or
import { Tab } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element ( [ButtonBase](/material-ui/api/button-base/)).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `custom` unsupportedProp | - | - |
| `classes` | `object` | - | - |
| `disabled` | `bool` | `false` | - |
| `disableFocusRipple` | `bool` | `false` | - |
| `disableRipple` | `bool` | `false` | - |
| `icon` | `union` element<br>\| string | - | - |
| `iconPosition` | `enum`'bottom'<br>\| 'end'<br>\| 'start'<br>\| 'top' | `'top'` | - |
| `label` | `node` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `value` | `any` | - | - |
| `wrapped` | `bool` | `false` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

### Inheritance

The props of the [ButtonBase](/material-ui/api/button-base/) component are also available.

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `disabled` | `Mui-disabled` | State class applied to the root element if \`disabled={true}\` (controlled by the Tabs component). |
| `fullWidth` | `MuiTab-fullWidth` | Styles applied to the root element if \`fullWidth={true}\` (controlled by the Tabs component). |
| `icon` | `MuiTab-icon` | Styles applied to the \`icon\` HTML element if both \`icon\` and \`label\` are provided. |
| `iconWrapper` | `MuiTab-iconWrapper` | Styles applied to the \`icon\` HTML element if both \`icon\` and \`label\` are provided. |
| `labelIcon` | `MuiTab-labelIcon` | Styles applied to the root element if both \`icon\` and \`label\` are provided. |
| `root` | `MuiTab-root` | Styles applied to the root element. |
| `selected` | `Mui-selected` | State class applied to the root element if \`selected={true}\` (controlled by the Tabs component). |
| `textColorInherit` | `MuiTab-textColorInherit` | Styles applied to the root element if the parent \[\`Tabs\`\](/material-ui/api/tabs/) has \`textColor="inherit"\`. |
| `textColorPrimary` | `MuiTab-textColorPrimary` | Styles applied to the root element if the parent \[\`Tabs\`\](/material-ui/api/tabs/) has \`textColor="primary"\`. |
| `textColorSecondary` | `MuiTab-textColorSecondary` | Styles applied to the root element if the parent \[\`Tabs\`\](/material-ui/api/tabs/) has \`textColor="secondary"\`. |
| `wrapped` | `MuiTab-wrapped` | Styles applied to the root element if \`wrapped={true}\`. |
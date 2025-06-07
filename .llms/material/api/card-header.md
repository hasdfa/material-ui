# CardHeader API

The CardHeader component API documentation.

## Import

```
import CardHeader from '@mui/material/CardHeader';
// or
import { CardHeader } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `node` | - | - |
| `avatar` | `node` | - | - |
| `classes` | `object` | - | - |
| `component` | `elementType` | - | - |
| `disableTypography` | `bool` | `false` | - |
| `slotProps` | `shape`{ action?: func<br>\| object, avatar?: func<br>\| object, content?: func<br>\| object, root?: func<br>\| object, subheader?: func<br>\| object, title?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ action?: elementType, avatar?: elementType, content?: elementType, root?: elementType, subheader?: elementType, title?: elementType } | `{}` | - |
| `subheader` | `node` | - | - |
| `subheaderTypographyProps` | `object` | - | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `title` | `node` | - | - |
| `titleTypographyProps` | `object` | - | - |

:::info
The `ref` is forwarded to the HTMLDivElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root slot. |
| `avatar` | `'div'` | The component that renders the avatar slot. |
| `action` | `'div'` | The component that renders the action slot. |
| `content` | `'div'` | The component that renders the content slot. |
| `title` | `Typography` | The component that renders the title slot (as long as disableTypography is not \`true\`).<br>\[Follow this guide\](https://mui.com/material-ui/api/typography/#props) to learn more about the requirements for this component. |
| `subheader` | `Typography` | The component that renders the subheader slot (as long as disableTypography is not \`true\`).<br>\[Follow this guide\](https://mui.com/material-ui/api/typography/#props) to learn more about the requirements for this component. |
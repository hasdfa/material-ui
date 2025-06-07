# Tooltip API

The Tooltip component API documentation.

## Import

```
import Tooltip from '@mui/joy/Tooltip';
// or
import { Tooltip } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `element` | - | - |
| `arrow` | `bool` | `false` | - |
| `color` | `enum`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning' | `'neutral'` | - |
| `component` | `elementType` | - | - |
| `describeChild` | `bool` | `false` | - |
| `direction` | `enum`'ltr'<br>\| 'rtl' | `'ltr'` | - |
| `disableFocusListener` | `bool` | `false` | - |
| `disableHoverListener` | `bool` | `false` | - |
| `disableInteractive` | `bool` | `false` | - |
| `disablePortal` | `bool` | `false` | - |
| `disableTouchListener` | `bool` | `false` | - |
| `enterDelay` | `number` | `100` | - |
| `enterNextDelay` | `number` | `0` | - |
| `enterTouchDelay` | `number` | `700` | - |
| `followCursor` | `bool` | `false` | - |
| `id` | `string` | - | - |
| `keepMounted` | `bool` | `false` | - |
| `leaveDelay` | `number` | `0` | - |
| `leaveTouchDelay` | `number` | `1500` | - |
| `modifiers` | `arrayOf` Array<{ data?: object, effect?: func, enabled?: bool, fn?: func, name?: any, options?: object, phase?: 'afterMain'<br>\| 'afterRead'<br>\| 'afterWrite'<br>\| 'beforeMain'<br>\| 'beforeRead'<br>\| 'beforeWrite'<br>\| 'main'<br>\| 'read'<br>\| 'write', requires?: Array, requiresIfExists?: Array }> | - | - |
| `onClose` | `func` | - | - |
| `onOpen` | `func` | - | - |
| `open` | `bool` | - | - |
| `placement` | `enum`'bottom-end'<br>\| 'bottom-start'<br>\| 'bottom'<br>\| 'left-end'<br>\| 'left-start'<br>\| 'left'<br>\| 'right-end'<br>\| 'right-start'<br>\| 'right'<br>\| 'top-end'<br>\| 'top-start'<br>\| 'top' | `'bottom'` | - |
| `size` | `enum`'sm'<br>\| 'md'<br>\| 'lg' | `'md'` | - |
| `slotProps` | `shape`{ arrow?: func<br>\| object, root?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ arrow?: elementType, root?: elementType } | `{}` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `title` | `node` | - | - |
| `variant` | `enum`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid' | `'solid'` | - |

:::info
The `ref` is forwarded to the HTMLButtonElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'div'` | The component that renders the root. |
| `arrow` | `'span'` | The component that renders the arrow. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `colorContext` | `MuiTooltip-colorContext` | Class name applied to the root element when color inversion is triggered. |
| `colorDanger` | `MuiTooltip-colorDanger` | Class name applied to the root element if \`color="danger"\`. |
| `colorNeutral` | `MuiTooltip-colorNeutral` | Class name applied to the root element if \`color="neutral"\`. |
| `colorPrimary` | `MuiTooltip-colorPrimary` | Class name applied to the root element if \`color="primary"\`. |
| `colorSuccess` | `MuiTooltip-colorSuccess` | Class name applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiTooltip-colorWarning` | Class name applied to the root element if \`color="warning"\`. |
| `placementBottom` | `MuiTooltip-placementBottom` | Class name applied to the root element if \`placement\` contains "bottom". |
| `placementLeft` | `MuiTooltip-placementLeft` | Class name applied to the root element if \`placement\` contains "left". |
| `placementRight` | `MuiTooltip-placementRight` | Class name applied to the root element if \`placement\` contains "right". |
| `placementTop` | `MuiTooltip-placementTop` | Class name applied to the root element if \`placement\` contains "top". |
| `sizeLg` | `MuiTooltip-sizeLg` | Class name applied to the root element if \`size="lg"\`. |
| `sizeMd` | `MuiTooltip-sizeMd` | Class name applied to the root element if \`size="md"\`. |
| `sizeSm` | `MuiTooltip-sizeSm` | Class name applied to the root element if \`size="sm"\`. |
| `tooltipArrow` | `MuiTooltip-tooltipArrow` | Class name applied to the root element if \`arrow={true}\`. |
| `touch` | `MuiTooltip-touch` | Class name applied to the root element if the tooltip is opened by touch. |
| `variantOutlined` | `MuiTooltip-variantOutlined` | Class name applied to the root element if \`variant="outlined"\`. |
| `variantPlain` | `MuiTooltip-variantPlain` | Class name applied to the root element if \`variant="plain"\`. |
| `variantSoft` | `MuiTooltip-variantSoft` | Class name applied to the root element if \`variant="soft"\`. |
| `variantSolid` | `MuiTooltip-variantSolid` | Class name applied to the root element if \`variant="solid"\`. |
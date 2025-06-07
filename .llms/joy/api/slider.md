# Slider API

The Slider component API documentation.

## Import

```
import Slider from '@mui/joy/Slider';
// or
import { Slider } from '@mui/joy';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-label` | `string` | - | - |
| `aria-valuetext` | `string` | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'danger'<br>\| 'neutral'<br>\| 'primary'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `component` | `elementType` | - | - |
| `defaultValue` | `union` Array<br>\| number | - | - |
| `disabled` | `bool` | `false` | - |
| `disableSwap` | `bool` | `false` | - |
| `getAriaLabel` | `func` | - | - |
| `getAriaValueText` | `func` | - | - |
| `isRtl` | `bool` | `false` | - |
| `marks` | `union` Array<{ label?: node, value: number }><br>\| bool | `false` | - |
| `max` | `number` | `100` | - |
| `min` | `number` | `0` | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `onChangeCommitted` | `func` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `scale` | `func` | `function Identity(x) {<br>  return x;<br>}` | - |
| `shiftStep` | `number` | `10` | - |
| `size` | `union`'sm'<br>\| 'md'<br>\| 'lg'<br>\| string | `'md'` | - |
| `slotProps` | `shape`{ input?: func<br>\| object, mark?: func<br>\| object, markLabel?: func<br>\| object, rail?: func<br>\| object, root?: func<br>\| object, thumb?: func<br>\| object, track?: func<br>\| object, valueLabel?: func<br>\| object } | `{}` | - |
| `slots` | `shape`{ input?: elementType, mark?: elementType, markLabel?: elementType, rail?: elementType, root?: elementType, thumb?: elementType, track?: elementType, valueLabel?: elementType } | `{}` | - |
| `step` | `number` | `1` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `tabIndex` | `number` | - | - |
| `track` | `enum`'inverted'<br>\| 'normal'<br>\| false | `'normal'` | - |
| `value` | `union` Array<br>\| number | - | - |
| `valueLabelDisplay` | `enum`'auto'<br>\| 'off'<br>\| 'on' | `'off'` | - |
| `valueLabelFormat` | `union` func<br>\| string | `function Identity(x) {<br>  return x;<br>}` | - |
| `variant` | `union`'outlined'<br>\| 'plain'<br>\| 'soft'<br>\| 'solid'<br>\| string | `'solid'` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## Slots

The component can be customized using the following slots:

| Name | Default | Description |
| --- | --- | --- |
| `root` | `'span'` | The component that renders the root. |
| `track` | `'span'` | The component that renders the track. |
| `rail` | `'span'` | The component that renders the rail. |
| `thumb` | `'span'` | The component that renders the thumb. |
| `mark` | `'span'` | The component that renders the mark. |
| `markLabel` | `'span'` | The component that renders the mark label. |
| `valueLabel` | `'span'` | The component that renders the value label. |
| `input` | `'input'` | The component that renders the input. |

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `active` | `Mui-active` | State class applied to the thumb element if it's active. |
| `disabled` | `Mui-disabled` | State class applied to the root and thumb element if \`disabled={true}\`. |
| `dragging` | `MuiSlider-dragging` | State class applied to the root if a thumb is being dragged. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the thumb element if keyboard focused. |
| `markActive` | `MuiSlider-markActive` | Class name applied to the mark element if active (depending on the value). |
| `marked` | `MuiSlider-marked` | Class name applied to the root element if \`marks\` is provided with at least one label. |
| `markLabelActive` | `MuiSlider-markLabelActive` | Class name applied to the mark label element if active (depending on the value). |
| `trackFalse` | `MuiSlider-trackFalse` | Class name applied to the root element if \`track={false}\`. |
| `trackInverted` | `MuiSlider-trackInverted` | Class name applied to the root element if \`track="inverted"\`. |
| `vertical` | `MuiSlider-vertical` | Class name applied to the root element if \`orientation="vertical"\`. |
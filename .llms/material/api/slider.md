# Slider API

The Slider component API documentation.

## Import

```
import Slider from '@mui/material/Slider';
// or
import { Slider } from '@mui/material';
```

## Props

Any other props supplied will be provided to the root element (native element).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-label` | `custom` string | - | - |
| `aria-labelledby` | `string` | - | - |
| `aria-valuetext` | `custom` string | - | - |
| `classes` | `object` | - | - |
| `color` | `union`'primary'<br>\| 'secondary'<br>\| 'error'<br>\| 'info'<br>\| 'success'<br>\| 'warning'<br>\| string | `'primary'` | - |
| `components` | `shape`{ Input?: elementType, Mark?: elementType, MarkLabel?: elementType, Rail?: elementType, Root?: elementType, Thumb?: elementType, Track?: elementType, ValueLabel?: elementType } | `{}` | - |
| `componentsProps` | `shape`{ input?: func<br>\| object, mark?: func<br>\| object, markLabel?: func<br>\| object, rail?: func<br>\| object, root?: func<br>\| object, thumb?: func<br>\| object, track?: func<br>\| object, valueLabel?: func<br>\| { children?: element, className?: string, open?: bool, style?: object, value?: node, valueLabelDisplay?: 'auto'<br>\| 'off'<br>\| 'on' } } | `{}` | - |
| `defaultValue` | `union` Array<br>\| number | - | - |
| `disabled` | `bool` | `false` | - |
| `disableSwap` | `bool` | `false` | - |
| `getAriaLabel` | `func` | - | - |
| `getAriaValueText` | `func` | - | - |
| `marks` | `union` Array<{ label?: node, value: number }><br>\| bool | `false` | - |
| `max` | `number` | `100` | - |
| `min` | `number` | `0` | - |
| `name` | `string` | - | - |
| `onChange` | `func` | - | - |
| `onChangeCommitted` | `func` | - | - |
| `orientation` | `enum`'horizontal'<br>\| 'vertical' | `'horizontal'` | - |
| `scale` | `func` | `function Identity(x) {<br>  return x;<br>}` | - |
| `shiftStep` | `number` | `10` | - |
| `size` | `union`'small'<br>\| 'medium'<br>\| string | `'medium'` | - |
| `slotProps` | `shape`{ input?: func<br>\| object, mark?: func<br>\| object, markLabel?: func<br>\| object, rail?: func<br>\| object, root?: func<br>\| object, thumb?: func<br>\| object, track?: func<br>\| object, valueLabel?: func<br>\| { children?: element, className?: string, open?: bool, style?: object, value?: node, valueLabelDisplay?: 'auto'<br>\| 'off'<br>\| 'on' } } | `{}` | - |
| `slots` | `shape`{ input?: elementType, mark?: elementType, markLabel?: elementType, rail?: elementType, root?: elementType, thumb?: elementType, track?: elementType, valueLabel?: elementType } | `{}` | - |
| `step` | `number` | `1` | - |
| `sx` | `union` Array\| object<br>\| bool><br>\| func<br>\| object | - | The `sx` prop is also available. |
| `tabIndex` | `number` | - | - |
| `track` | `enum`'inverted'<br>\| 'normal'<br>\| false | `'normal'` | - |
| `value` | `union` Array<br>\| number | - | - |
| `valueLabelDisplay` | `enum`'auto'<br>\| 'off'<br>\| 'on' | `'off'` | - |
| `valueLabelFormat` | `union` func<br>\| string | `function Identity(x) {<br>  return x;<br>}` | - |

:::info
The `ref` is forwarded to the HTMLSpanElement element.
:::

## CSS classes

The component can be styled using the following CSS classes:

| Rule name | Global class | Description |
| --- | --- | --- |
| `active` | `Mui-active` | State class applied to the thumb element if it's active. |
| `colorError` | `MuiSlider-colorError` | Styles applied to the root element if \`color="error"\`. |
| `colorInfo` | `MuiSlider-colorInfo` | Styles applied to the root element if \`color="info"\`. |
| `colorPrimary` | `MuiSlider-colorPrimary` | Styles applied to the root element if \`color="primary"\`. |
| `colorSecondary` | `MuiSlider-colorSecondary` | Styles applied to the root element if \`color="secondary"\`. |
| `colorSuccess` | `MuiSlider-colorSuccess` | Styles applied to the root element if \`color="success"\`. |
| `colorWarning` | `MuiSlider-colorWarning` | Styles applied to the root element if \`color="warning"\`. |
| `disabled` | `Mui-disabled` | State class applied to the root and thumb element if \`disabled={true}\`. |
| `dragging` | `MuiSlider-dragging` | State class applied to the root if a thumb is being dragged. |
| `focusVisible` | `Mui-focusVisible` | State class applied to the thumb element if keyboard focused. |
| `mark` | `MuiSlider-mark` | Styles applied to the mark element. |
| `markActive` | `MuiSlider-markActive` | Styles applied to the mark element if active (depending on the value). |
| `marked` | `MuiSlider-marked` | Styles applied to the root element if \`marks\` is provided with at least one label. |
| `markLabel` | `MuiSlider-markLabel` | Styles applied to the mark label element. |
| `markLabelActive` | `MuiSlider-markLabelActive` | Styles applied to the mark label element if active (depending on the value). |
| `rail` | `MuiSlider-rail` | Styles applied to the rail element. |
| `root` | `MuiSlider-root` | Styles applied to the root element. |
| `sizeSmall` | `MuiSlider-sizeSmall` | Styles applied to the root element if \`size="small"\`. |
| `thumb` | `MuiSlider-thumb` | Styles applied to the thumb element. |
| `thumbColorError` | `MuiSlider-thumbColorError` | Styles applied to the thumb element if \`color="error"\`. |
| `thumbColorInfo` | `MuiSlider-thumbColorInfo` | Styles applied to the thumb element if \`color="info"\`. |
| `thumbColorPrimary` | `MuiSlider-thumbColorPrimary` | Styles applied to the thumb element if \`color="primary"\`. |
| `thumbColorSecondary` | `MuiSlider-thumbColorSecondary` | Styles applied to the thumb element if \`color="secondary"\`. |
| `thumbColorSuccess` | `MuiSlider-thumbColorSuccess` | Styles applied to the thumb element if \`color="success"\`. |
| `thumbColorWarning` | `MuiSlider-thumbColorWarning` | Styles applied to the thumb element if \`color="warning"\`. |
| `thumbSizeSmall` | `MuiSlider-thumbSizeSmall` | Styles applied to the thumb element if \`size="small"\`. |
| `track` | `MuiSlider-track` | Styles applied to the track element. |
| `trackFalse` | `MuiSlider-trackFalse` | Styles applied to the root element if \`track={false}\`. |
| `trackInverted` | `MuiSlider-trackInverted` | Styles applied to the root element if \`track="inverted"\`. |
| `valueLabel` | `MuiSlider-valueLabel` | Styles applied to the thumb label element. |
| `valueLabelCircle` | `MuiSlider-valueLabelCircle` | Styles applied to the thumb label's circle element. |
| `valueLabelLabel` | `MuiSlider-valueLabelLabel` | Styles applied to the thumb label's label element. |
| `valueLabelOpen` | `MuiSlider-valueLabelOpen` | Styles applied to the thumb label element if it's open. |
| `vertical` | `MuiSlider-vertical` | Styles applied to the root element if \`orientation="vertical"\`. |
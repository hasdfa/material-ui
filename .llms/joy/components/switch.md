---
productId: joy-ui
title: React Switch component
components: Switch
githubLabel: 'component: switch'
unstyled: https://base-ui.com/react/components/switch
---

# Switch

Switches toggle the state of a single setting on or off.

## Introduction

Switches are very commonly used for adjusting settings on mobile.
The option that the switch controls, as well as the state it's in,
should be made clear from the corresponding inline label.

<example name="SwitchUsage">
```jsx file="SwitchUsage.js"
import * as React from 'react';
import Switch from '@mui/joy/Switch';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function SwitchUsage() {
  const [checked, setChecked] = React.useState(false);
  return (
    <JoyUsageDemo
      componentName="Switch"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          options: ['plain', 'outlined', 'soft', 'solid'],
          defaultValue: 'solid',
        },
        {
          formLabel: 'Checked color',
          propName: 'color',
          knob: 'color',
          defaultValue: 'primary',
        },
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        { propName: 'disabled', knob: 'switch' },
      ]}
      renderDemo={(props) => (
        <Switch
          {...props}
          color={checked ? props.color : undefined}
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
      )}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Switch from '@mui/joy/Switch';

export default function MyApp() {
  return <Switch />;
}
```

### Controlled

To create a controlled switch, use the `checked` and `onChange` props.

:::info

- A component is **controlled** when it's managed by its parent using props.
- A component is **uncontrolled** when it's managed by its own local state.

Learn more about controlled and uncontrolled components in the [React documentation](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components).
:::

<example name="SwitchControlled">
```tsx file="SwitchControlled.tsx"
import * as React from 'react';
import Switch from '@mui/joy/Switch';

export default function SwitchControlled() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}
```
</example>

:::info
By default, the color of the switch changes from `neutral` to `primary` when it is checked unless you specify the `color` prop directly to the component.
:::

### Label

When a `Switch` is used together with `FormControl` and `FormLabel`, the switch is labeled automatically. You can also use `FormHelperText` to include a description to the switch as well.

<example name="SwitchControl">
```tsx file="SwitchControl.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Switch from '@mui/joy/Switch';

export default function SwitchControl() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <FormControl
      orientation="horizontal"
      sx={{ width: 300, justifyContent: 'space-between' }}
    >
      <div>
        <FormLabel>Show captions</FormLabel>
        <FormHelperText sx={{ mt: 0 }}>All languages available.</FormHelperText>
      </div>
      <Switch
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setChecked(event.target.checked)
        }
        color={checked ? 'success' : 'neutral'}
        variant={checked ? 'solid' : 'outlined'}
        endDecorator={checked ? 'On' : 'Off'}
        slotProps={{
          endDecorator: {
            sx: {
              minWidth: 24,
            },
          },
        }}
      />
    </FormControl>
  );
}
```
</example>

An alternative way is to place the `Switch` component inside a label element. The `Typography` is used in this case to leverage the typography scale from the theme.

<example name="SwitchLabel">
```tsx file="SwitchLabel.tsx"
import * as React from 'react';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';

export default function SwitchLabel() {
  return (
    <Typography component="label" endDecorator={<Switch sx={{ ml: 1 }} />}>
      Turn alarm on
    </Typography>
  );
}
```
</example>

### Decorators

To insert icon decorators, use the `startDecorator` and/or `endDecorator` props.

<example name="SwitchDecorators">
```tsx file="SwitchDecorators.tsx"
import * as React from 'react';
import Switch from '@mui/joy/Switch';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';

export default function SwitchDecorators() {
  const [dark, setDark] = React.useState<boolean>(false);
  return (
    <Switch
      color={dark ? 'primary' : 'danger'}
      slotProps={{ input: { 'aria-label': 'dark mode' } }}
      startDecorator={
        <LocalFireDepartmentRoundedIcon
          sx={[dark ? { color: 'text.tertiary' } : { color: 'danger.600' }]}
        />
      }
      endDecorator={
        <WavesRoundedIcon
          sx={[dark ? { color: 'primary.500' } : { color: 'text.tertiary' }]}
        />
      }
      checked={dark}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setDark(event.target.checked)
      }
    />
  );
}
```
</example>

### Track child

Target the track's children using the `slotProps` prop to display a text inside of it.

<example name="ExampleTrackChild">
```tsx file="ExampleTrackChild.tsx"
import * as React from 'react';
import Switch from '@mui/joy/Switch';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

export default function ExampleTrackChild() {
  return (
    <Stack direction="row" spacing={2}>
      <Switch
        slotProps={{
          track: {
            children: (
              <React.Fragment>
                <Typography component="span" level="inherit" sx={{ ml: '10px' }}>
                  On
                </Typography>
                <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                  Off
                </Typography>
              </React.Fragment>
            ),
          },
        }}
        sx={{
          '--Switch-thumbSize': '27px',
          '--Switch-trackWidth': '64px',
          '--Switch-trackHeight': '31px',
        }}
      />
      <Switch
        color="success"
        slotProps={{
          track: {
            children: (
              <React.Fragment>
                <span>I</span>
                <span>0</span>
              </React.Fragment>
            ),
            sx: {
              justifyContent: 'space-around',
            },
          },
        }}
        sx={{
          '--Switch-thumbSize': '27px',
          '--Switch-trackWidth': '52px',
          '--Switch-trackHeight': '31px',
        }}
      />
    </Stack>
  );
}
```
</example>

:::warning
The track text **should not** be used to label the switch, you should use [proper methods](#label) to achieve it.
:::

### Thumb child

Similarly to the above, target the thumb's children to display icons inside of it.

<example name="ExampleThumbChild">
```tsx file="ExampleThumbChild.tsx"
import * as React from 'react';
import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';

export default function ExampleThumbChild() {
  return (
    <Switch
      size="lg"
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: <DarkMode />,
        },
      }}
      sx={{ '--Switch-thumbSize': '16px' }}
    />
  );
}
```
</example>

## CSS variables playground

Play around with all the CSS variables available in the switch component to see how the design changes.

You can use those to customize the component on both the `sx` prop and the theme.

<example name="SwitchVariables">
```jsx file="SwitchVariables.js"
import * as React from 'react';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function SwitchVariables() {
  return (
    <JoyVariablesDemo
      componentName="Switch"
      data={[
        { var: '--Switch-gap', defaultValue: '8px' },
        [
          'Track',
          [
            { var: '--Switch-trackRadius', defaultValue: '16px' },
            { var: '--Switch-trackWidth', defaultValue: '48px' },
            { var: '--Switch-trackHeight', defaultValue: '24px' },
          ],
          { defaultOpen: true },
        ],
        [
          'Thumb',
          [
            { var: '--Switch-thumbSize', defaultValue: '16px' },
            { var: '--Switch-thumbRadius' },
            { var: '--Switch-thumbWidth' },
            { var: '--Switch-thumbOffset' },
          ],
        ],
      ]}
      renderDemo={(sx) => (
        <Switch
          sx={sx}
          startDecorator={<Typography>Off</Typography>}
          endDecorator={<Typography>On</Typography>}
        />
      )}
    />
  );
}
```
</example>

## Common examples

### Fluent UI

Here's how you'd customize Joy UI's Switch to make it look like [Microsoft's Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/web/toggle):

- Unchecked state: `outlined` variant and `neutral` color.
- Checked state: `solid` variant and `primary` color.

<example name="ExampleFluentSwitch">
```tsx file="ExampleFluentSwitch.tsx"
import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Theme } from '@mui/joy';

export default function ExampleFluentSwitch() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Switch
      variant={checked ? 'solid' : 'outlined'}
      checked={checked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
      }
      sx={(theme: Theme) => ({
        display: 'inherit',
        '--Switch-trackWidth': '40px',
        '--Switch-trackHeight': '20px',
        '--Switch-thumbSize': '12px',
        '--Switch-thumbBackground': 'rgb(96, 94, 92)',
        '--Switch-trackBorderColor': 'rgb(96, 94, 92)',
        '--Switch-trackBackground': theme.vars.palette.background.body,
        '&:hover': {
          '--Switch-trackBorderColor': 'rgb(50, 49, 48)',
          '--Switch-trackBackground': theme.vars.palette.background.body,
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': '#0078D4',
          '&:hover': {
            '--Switch-trackBackground': '#106EBE',
          },
        },
        [`&.${switchClasses.disabled}`]: {
          '--Switch-thumbColor': '#C8C6C4',
          '--Switch-trackBorderColor': '#C8C6C4',
        },
        [`&.${switchClasses.disabled}.${switchClasses.checked}`]: {
          '--Switch-trackBackground': '#C8C6C4',
          '--Switch-thumbColor': '#F3F2F1',
        },
        [theme.getColorSchemeSelector('dark')]: {
          '--Switch-trackBorderColor': 'rgb(161, 159, 157)',
          '--Switch-trackBackground': 'rgb(27, 26, 25)',
          '--Switch-thumbBackground': 'rgb(161, 159, 157)',
          '&:hover': {
            '--Switch-trackBorderColor': '#fff',
            '--Switch-thumbBackground': '#fff',
          },
          [`&.${switchClasses.checked}`]: {
            '--Switch-trackBackground': 'rgb(40, 153, 245)',
            '--Switch-thumbBackground': 'rgb(27, 26, 25)',
            '&:hover': {
              '--Switch-trackBackground': 'rgb(108, 184, 246)',
            },
          },
        },
      })}
    />
  );
}
```
</example>

### iOS

Note how we've used the `:active` pseudo-class to replicate the small thumb size increase, which happens when you press and hold the switch.

<example name="ExampleIosSwitch">
```tsx file="ExampleIosSwitch.tsx"
import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Theme } from '@mui/joy';

export default function ExampleIosSwitch() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Switch
      checked={checked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
      }
      sx={(theme: Theme) => ({
        '--Switch-thumbShadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
        '--Switch-thumbSize': '27px',
        '--Switch-trackWidth': '51px',
        '--Switch-trackHeight': '31px',
        '--Switch-trackBackground': theme.vars.palette.background.level3,
        [`& .${switchClasses.thumb}`]: {
          transition: 'width 0.2s, left 0.2s',
        },
        '&:hover': {
          '--Switch-trackBackground': theme.vars.palette.background.level3,
        },
        '&:active': {
          '--Switch-thumbWidth': '32px',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': 'rgb(48 209 88)',
          '&:hover': {
            '--Switch-trackBackground': 'rgb(48 209 88)',
          },
        },
      })}
    />
  );
}
```
</example>

### Strapi

<example name="ExampleStrapiSwitch">
```tsx file="ExampleStrapiSwitch.tsx"
import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';

export default function ExampleStrapiSwitch() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Switch
      color={checked ? 'success' : 'danger'}
      checked={checked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
      }
      sx={{
        '--Switch-thumbSize': '16px',
        '--Switch-trackWidth': '40px',
        '--Switch-trackHeight': '24px',
        '--Switch-trackBackground': '#EE5E52',
        '&:hover': {
          '--Switch-trackBackground': '#EE5E52',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': '#5CB176',
          '&:hover': {
            '--Switch-trackBackground': '#5CB176',
          },
        },
      }}
    />
  );
}
```
</example>

### Chakra UI

<example name="ExampleChakraSwitch">
```tsx file="ExampleChakraSwitch.tsx"
import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Theme } from '@mui/joy';

export default function ExampleChakraSwitch() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Switch
      checked={checked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
      }
      sx={(theme: Theme) => ({
        '--Switch-thumbSize': '16px',
        '--Switch-trackWidth': '34px',
        '--Switch-trackHeight': '20px',
        '--Switch-trackBackground': '#CBD5E0',
        '&:hover': {
          '--Switch-trackBackground': '#CBD5E0',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': '#3182ce',
          '&:hover': {
            '--Switch-trackBackground': '#3182ce',
          },
          [`&.${switchClasses.disabled}`]: {
            '--Switch-trackBackground': '#3182ce',
          },
        },
        [`&.${switchClasses.disabled}`]: {
          '--Switch-trackBackground': '#CBD5E0',
          opacity: 0.4,
        },
        [theme.getColorSchemeSelector('dark')]: {
          '--Switch-trackBackground': 'rgba(255, 255, 255, 0.24)',
          [`&.${switchClasses.checked}`]: {
            '--Switch-trackBackground': '#90cdf4',
            '&:hover': {
              '--Switch-trackBackground': '#90cdf4',
            },
            [`&.${switchClasses.disabled}`]: {
              '--Switch-trackBackground': '#3182ce',
            },
          },
        },
      })}
    />
  );
}
```
</example>

### Tailwind UI

<example name="ExampleTailwindSwitch">
```tsx file="ExampleTailwindSwitch.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Theme } from '@mui/joy';

export default function ExampleTailwindSwitch() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Switch
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setChecked(event.target.checked)
        }
        sx={(theme: Theme) => ({
          display: 'inherit',
          '--Switch-thumbShadow': theme.vars.shadow.sm,
          '--Switch-thumbSize': '18px',
          '--Switch-trackWidth': '42px',
          '--Switch-trackHeight': '22px',
          '--Switch-trackBackground': '#E9E9EA',
          '&:hover': {
            '--Switch-trackBackground': '#E9E9EA',
          },
          [theme.getColorSchemeSelector('dark')]: {
            '--Switch-trackBackground': 'rgba(255 255 255 / 0.4)',
          },
          [`&.${switchClasses.checked}`]: {
            '--Switch-trackBackground': '#65C466',
            '&:hover': {
              '--Switch-trackBackground': '#65C466',
            },
          },
        })}
      />
      <Switch
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        sx={(theme) => ({
          display: 'inherit',
          '--Switch-thumbShadow': `0 0 0 1px ${theme.vars.palette.background.level3}, 0 1px 4px 0 rgb(0 0 0 / 0.3), 0 1px 2px 0px rgb(0 0 0 / 0.3)`,
          '--Switch-thumbSize': '18px',
          '--Switch-trackWidth': '36px',
          '--Switch-trackHeight': '14px',
          '--Switch-trackBackground': '#E9E9EA',
          '&:hover': {
            '--Switch-trackBackground': '#E9E9EA',
          },
          [theme.getColorSchemeSelector('dark')]: {
            '--Switch-trackBackground': 'rgba(255 255 255 / 0.4)',
          },
          [`&.${switchClasses.checked}`]: {
            '--Switch-trackBackground': '#65C466',
            '&:hover': {
              '--Switch-trackBackground': '#65C466',
            },
          },
        })}
      />
    </Box>
  );
}
```
</example>

### Mantine

<example name="ExampleMantineSwitch">
```tsx file="ExampleMantineSwitch.tsx"
import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Theme } from '@mui/joy';

export default function ExampleMantineSwitch() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Switch
      variant={checked ? 'solid' : 'outlined'}
      checked={checked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
      }
      sx={(theme: Theme) => ({
        display: 'inherit',
        '--Switch-thumbSize': '14px',
        '--Switch-thumbShadow': 'inset 0 0 0 1px #dee2e6',
        '--Switch-trackWidth': '38px',
        '--Switch-trackHeight': '20px',
        '--Switch-trackBorderColor': '#dee2e6',
        '--Switch-trackBackground': '#e9ecef',
        '--Switch-thumbBackground': '#fff',
        '&:hover': {
          '--Switch-thumbBackground': '#fff',
          '--Switch-trackBackground': '#e9ecef',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-thumbShadow': 'none',
          '--Switch-trackBackground': '#228be6',
          '&:hover': {
            '--Switch-trackBackground': '#228be6',
          },
        },
        [`&.${switchClasses.disabled}`]: {
          '--Switch-thumbColor': '#f8f9fa',
          '--Switch-trackBackground': '#e9ecef',
        },
        [theme.getColorSchemeSelector('dark')]: {
          '--Switch-trackBorderColor': 'rgb(55, 58, 64)',
          '--Switch-trackBackground': 'rgb(55, 58, 64)',
          '--Switch-thumbShadow': 'none',
        },
      })}
    />
  );
}
```
</example>

## Accessibility

Here are a few tips to make sure you have an accessible switch component:

- The `Switch` will render with the `checkbox` role as opposed to `switch`.
  This is mainly because the latter isn't widely supported yet.
  However, if you believe your audience will support it, make sure to test with assistive technology.
  Use the `slotProps` prop to change the role:

  ```jsx
  <Switch slotProps={{ input: { role: 'switch' } }}>
  ```

- Every form control component should have proper labels.
  This includes radio buttons, checkboxes, and switches.
  In most cases, this is done using the `<label>` element.
  - If a label can't be applied, make sure to add an attribute (for example `aria-label`, `aria-labelledby`, `title`) to the input slot inside the `slotProps` prop.
  ```jsx
  <Switch value="checkedA" slotProps={{ 'aria-label': 'Switch A' }} />
  ```
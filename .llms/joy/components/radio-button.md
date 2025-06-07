---
productId: joy-ui
title: React Radio Button component
components: Radio, RadioGroup
githubLabel: 'component: radio'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/radio/
unstyled: https://base-ui.com/react/components/radio
---

# Radio

Radio buttons enable the user to select one option from a set.

## Introduction

Radio buttons let users make a mutually exclusive choice (for example: "this" or "that").
Only one selection is allowed from the available set of options.

Radio buttons should have the most commonly used option selected by default.

<example name="RadioUsage">
```jsx file="RadioUsage.js"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function RadioUsage() {
  return (
    <JoyUsageDemo
      componentName="Radio"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'outlined',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },
        {
          propName: 'color',
          knob: 'color',
          defaultValue: 'neutral',
        },
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          propName: 'orientation',
          knob: 'radio',
          options: ['vertical', 'horizontal'],
          defaultValue: 'vertical',
        },
      ]}
      renderDemo={({ orientation, ...props }) => (
        <FormControl>
          <FormLabel>Pizza crust</FormLabel>
          <RadioGroup
            orientation={orientation}
            defaultValue="1"
            name="radio-button-usage"
          >
            <Radio label="Regular crust" value="1" {...props} />
            <Radio label="Deep dish" value="2" {...props} />
            <Radio label="Thin crust" value="3" {...props} disabled />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
```
</example>

:::success
When should you use radio buttons rather than checkboxes, switches, or selects?

- Use checkboxes to give the user **multiple binary choices**—radio buttons are preferable when you need to restrict user selection to one mutually exclusive option from a series.
- Use a switch to provide the user with **a single binary choice**—radio buttons are preferable when you need to give the user multiple binary choices.
- Consider using a select if it's not important for the user to be able to see all options.
- If available options can be collapsed, consider using a Select component to conserve space.

  :::

## Basics

```jsx
import Radio from '@mui/joy/Radio';
```

The Joy UI Radio button behaves similar to the native HTML `<input type="radio">`, so it accepts props like `checked`, `value` and `onChange`.

<example name="RadioButtons">
```tsx file="RadioButtons.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'A' } }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'B' } }}
      />
    </Box>
  );
}
```
</example>

## Customization

### Variants

The Radio component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `outlined` (default), `soft` , `solid` , and `plain`.

<example name="RadioVariants">
```tsx file="RadioVariants.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function RadioVariants() {
  return (
    <FormControl>
      <FormLabel>Variants</FormLabel>
      <RadioGroup defaultValue="outlined" name="radio-buttons-group">
        <Radio value="outlined" label="Outlined" variant="outlined" />
        <Radio value="soft" label="Soft" variant="soft" />
        <Radio value="solid" label="Solid" variant="solid" />
        <Radio value="plain" label="Plain" variant="plain" />
      </RadioGroup>
    </FormControl>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Sizes

The Radio component comes in three sizes: `sm`, `md` (default), and `lg`:

<example name="RadioSizes">
```tsx file="RadioSizes.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function RadioSizes() {
  return (
    <FormControl>
      <FormLabel>Sizes</FormLabel>
      <RadioGroup defaultValue="medium" name="radio-buttons-group">
        <Radio value="small" label="Small" size="sm" />
        <Radio value="medium" label="Medium" size="md" />
        <Radio value="large" label="Large" size="lg" />
      </RadioGroup>
    </FormControl>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Colors

Every palette included in the theme is available via the `color` prop.

<example name="RadioColors">
```tsx file="RadioColors.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function RadioColors() {
  return (
    <FormControl>
      <FormLabel>Colors</FormLabel>
      <RadioGroup defaultValue="medium" name="radio-buttons-group">
        <Radio value="primary" label="Primary" color="primary" />
        <Radio value="neutral" label="Neutral" color="neutral" />
        <Radio value="danger" label="Danger" color="danger" />
        <Radio value="success" label="Success" color="success" />
        <Radio value="warning" label="Warning" color="warning" />
      </RadioGroup>
    </FormControl>
  );
}
```
</example>

### Label

Use the `label` prop to add a label to a Radio button.

<example name="RadioButtonLabel">
```tsx file="RadioButtonLabel.tsx"
import * as React from 'react';
import Radio from '@mui/joy/Radio';

export default function RadioButtonLabel() {
  return <Radio label="Text" defaultChecked />;
}
```
</example>

For more complex layouts, compose a Radio button with Form Control, Form Label, and Form Helper Text (optional), as shown below:

<example name="RadioButtonControl">
```tsx file="RadioButtonControl.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/joy/Radio';

export default function RadioButtonControl() {
  return (
    <FormControl sx={{ p: 2, flexDirection: 'row', gap: 2 }}>
      <Radio overlay defaultChecked />
      <div>
        <FormLabel>Selection title</FormLabel>
        <FormHelperText>One line description maximum lorem ipsum </FormHelperText>
      </div>
    </FormControl>
  );
}
```
</example>

### Position

To swap the positions of a Radio and its label, use the CSS property `flex-direction: row-reverse`.

<example name="RadioPositionEnd">
```tsx file="RadioPositionEnd.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Person from '@mui/icons-material/Person';
import People from '@mui/icons-material/People';
import Apartment from '@mui/icons-material/Apartment';

export default function RadioPositionEnd() {
  return (
    <RadioGroup aria-label="Your plan" name="people" defaultValue="Individual">
      <List
        sx={{
          minWidth: 240,
          '--List-gap': '0.5rem',
          '--ListItem-paddingY': '1rem',
          '--ListItem-radius': '8px',
          '--ListItemDecorator-size': '32px',
        }}
      >
        {['Individual', 'Team', 'Enterprise'].map((item, index) => (
          <ListItem variant="outlined" key={item} sx={{ boxShadow: 'sm' }}>
            <ListItemDecorator>
              {[<Person />, <People />, <Apartment />][index]}
            </ListItemDecorator>
            <Radio
              overlay
              value={item}
              label={item}
              sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: -1,
                      border: '2px solid',
                      borderColor: theme.vars.palette.primary[500],
                    }),
                  }),
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
    </RadioGroup>
  );
}
```
</example>

## Usage with Radio Group

```jsx
import RadioGroup from '@mui/joy/RadioGroup';
```

The Radio Group component is the ideal wrapper for multiple Radio components as it provides a tailored API for grouping and better keyboard navigation accessibility.

<example name="RadioButtonsGroup">
```tsx file="RadioButtonsGroup.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup defaultValue="female" name="radio-buttons-group">
        <Radio
          value="female"
          label="Female"
          slotProps={{ input: { 'aria-describedby': 'female-helper-text' } }}
        />
        <FormHelperText id="female-helper-text">
          Helper text for this radio.
        </FormHelperText>
        <Radio value="male" label="Male" />
        <Radio value="other" label="Other" />
      </RadioGroup>
      <FormHelperText>This is helper text.</FormHelperText>
    </FormControl>
  );
}
```
</example>

### Controlled

Use the `value` and `onChange` props to control the actions performed by the Radio buttons.
For example, the Radio buttons in the demo below update the state to reflect the selected option:

<example name="ControlledRadioButtonsGroup">
```tsx file="ControlledRadioButtonsGroup.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        defaultValue="female"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ my: 1 }}
      >
        <Radio value="female" label="Female" />
        <Radio value="male" label="Male" />
        <Radio value="other" label="Other" />
      </RadioGroup>
    </FormControl>
  );
}
```
</example>

### Focus outline

By default, the focus outline wraps both the Radio button and its label.
If you need to focus to omit the label, target the `radioClasses.radio` class and add `position: 'relative'`.

<example name="RadioFocus">
```tsx file="RadioFocus.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function RadioFocus() {
  return (
    <FormControl>
      <FormLabel>Focus</FormLabel>
      <RadioGroup name="radio-buttons-group-focus">
        <Radio value="default" label="Default" />
        <Radio
          value="relative"
          label="Position relative"
          sx={{ [`& .${radioClasses.radio}`]: { position: 'relative' } }}
        />
      </RadioGroup>
      <FormHelperText>
        Select an option and use keyboard ↑↓ to see the focus outline
      </FormHelperText>
    </FormControl>
  );
}
```
</example>

### Overlay

To make the Radio button's container clickable, use the `overlay` prop.

You can also apply this prop directly to a Radio Group when present, which will pass the prop to each individual Radio button nested within.

<example name="OverlayRadio">
```tsx file="OverlayRadio.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

export default function OverlayRadio() {
  return (
    <FormControl>
      <FormLabel>Members</FormLabel>
      <RadioGroup
        overlay
        name="member"
        defaultValue="person1"
        orientation="horizontal"
        sx={{ gap: 2 }}
      >
        {[1, 2, 3].map((num) => (
          <Sheet
            component="label"
            key={num}
            variant="outlined"
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'sm',
              borderRadius: 'md',
            }}
          >
            <Radio value={`person${num}`} variant="soft" sx={{ mb: 2 }} />
            <Avatar alt={`person${num}`} src={`/static/images/avatar/${num}.jpg`} />
            <Typography level="body-sm" sx={{ mt: 1 }}>
              Person {num}
            </Typography>
          </Sheet>
        ))}
      </RadioGroup>
    </FormControl>
  );
}
```
</example>

:::info
Use the CSS variable `--Radio-actionRadius` to control the border radius of the clickable area.
:::

### Custom icons

Use the `checkedIcon` and `uncheckedIcon` props to add custom icons to the Radio button that correspond to each state, respectively.
The demo below shows how to apply a custom `checkedIcon` to the Radio button that sits on the corner of each Sheet:

<example name="IconsRadio">
```tsx file="IconsRadio.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function IconsRadio() {
  return (
    <RadioGroup
      aria-label="platform"
      defaultValue="Website"
      overlay
      name="platform"
      sx={{
        flexDirection: 'row',
        gap: 2,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: '3px solid',
            borderColor: 'primary.500',
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: 'contents',
          '& > svg': {
            zIndex: 2,
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            bgcolor: 'background.surface',
            borderRadius: '50%',
          },
        },
      }}
    >
      {['Website', 'Documents', 'Social Account'].map((value) => (
        <Sheet
          key={value}
          variant="outlined"
          sx={{
            borderRadius: 'md',

            boxShadow: 'sm',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            p: 2,
            minWidth: 120,
          }}
        >
          <Radio id={value} value={value} checkedIcon={<CheckCircleRoundedIcon />} />
          <Avatar variant="soft" size="sm" />
          <FormLabel htmlFor={value}>{value}</FormLabel>
        </Sheet>
      ))}
    </RadioGroup>
  );
}
```
</example>

### No icon

Use the `disableIcon` prop to remove the Radio button's icon.
In this case, you'll need to use CSS properties like border and background color to communicate the state of the Radio button, as shown in the demo below:

<example name="IconlessRadio">
```tsx file="IconlessRadio.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';

export default function IconlessRadio() {
  return (
    <Box sx={{ width: 300 }}>
      <FormLabel
        id="storage-label"
        sx={{
          mb: 2,
          fontWeight: 'xl',
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: '0.15rem',
        }}
      >
        Storage
      </FormLabel>
      <RadioGroup
        aria-labelledby="storage-label"
        defaultValue="512GB"
        size="lg"
        sx={{ gap: 1.5 }}
      >
        {['512GB', '1TB', '2TB'].map((value) => (
          <Sheet key={value} sx={{ p: 2, borderRadius: 'md', boxShadow: 'sm' }}>
            <Radio
              label={`${value} SSD storage`}
              overlay
              disableIcon
              value={value}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: 'lg',
                    fontSize: 'md',
                    color: checked ? 'text.primary' : 'text.secondary',
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      '--variant-borderWidth': '2px',
                      '&&': {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
}
```
</example>

## Common examples

### Segmented controls

<example name="ExampleSegmentedControls">
```tsx file="ExampleSegmentedControls.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';

export default function ExampleSegmentedControls() {
  const [justify, setJustify] = React.useState('flex-start');
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography
        id="segmented-controls-example"
        sx={{ fontWeight: 'lg', fontSize: 'sm' }}
      >
        Justify:
      </Typography>
      <RadioGroup
        orientation="horizontal"
        aria-labelledby="segmented-controls-example"
        name="justify"
        value={justify}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setJustify(event.target.value)
        }
        sx={{
          minHeight: 48,
          padding: '4px',
          borderRadius: '12px',
          bgcolor: 'neutral.softBg',
          '--RadioGroup-gap': '4px',
          '--Radio-actionRadius': '8px',
        }}
      >
        {['flex-start', 'center', 'flex-end'].map((item) => (
          <Radio
            key={item}
            color="neutral"
            value={item}
            disableIcon
            label={item}
            variant="plain"
            sx={{ px: 2, alignItems: 'center' }}
            slotProps={{
              action: ({ checked }) => ({
                sx: {
                  ...(checked && {
                    bgcolor: 'background.surface',
                    boxShadow: 'sm',
                    '&:hover': {
                      bgcolor: 'background.surface',
                    },
                  }),
                },
              }),
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}
```
</example>

### Tiers

This example demonstrates the composition of the components, and was inspired by [this Dribbble shot from Tailwind Labs](https://dribbble.com/shots/11239824-Radio-button-groups).

<example name="ExampleTiers">
```tsx file="ExampleTiers.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';

export default function ExampleTiers() {
  return (
    <Sheet variant="outlined" sx={{ boxShadow: 'sm', borderRadius: 'sm', p: 1 }}>
      <RadioGroup name="tiers" sx={{ gap: 1, '& > div': { p: 1 } }}>
        <FormControl size="sm">
          <Radio overlay value="small" label="Small" />
          <FormHelperText>
            For light background jobs like sending email
          </FormHelperText>
        </FormControl>
        <FormControl>
          <Radio overlay value="medium" label="Medium" />
          <FormHelperText>
            For tasks like image resizing, exporting PDFs, etc.
          </FormHelperText>
        </FormControl>
        <FormControl size="lg">
          <Radio overlay value="large" label="Large" />
          <FormHelperText>
            For intensive tasks like video encoding, etc.
          </FormHelperText>
        </FormControl>
      </RadioGroup>
    </Sheet>
  );
}
```
</example>

### Alignment buttons

This example uses icons as labels for a group of Radio buttons to recreate the form and function of [Toggle Buttons](https://mui.com/material-ui/react-toggle-button/).
In this case, you must provide an `aria-label` to the input slot for users who rely on screen readers.

<example name="ExampleAlignmentButtons">
```tsx file="ExampleAlignmentButtons.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

export default function ExampleAlignmentButtons() {
  const [alignment, setAlignment] = React.useState('left');
  return (
    <RadioGroup
      orientation="horizontal"
      aria-label="Alignment"
      name="alignment"
      variant="outlined"
      value={alignment}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setAlignment(event.target.value)
      }
      sx={{ display: 'inline-flex' }}
    >
      {['left', 'center', 'right', 'justify'].map((item) => (
        <Box
          key={item}
          sx={(theme) => ({
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 48,
            height: 48,
            '&:not([data-first-child])': {
              borderLeft: '1px solid',
              borderColor: 'divider',
            },
            [`&[data-first-child] .${radioClasses.action}`]: {
              borderTopLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
              borderBottomLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
            },
            [`&[data-last-child] .${radioClasses.action}`]: {
              borderTopRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
              borderBottomRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
            },
          })}
        >
          <Radio
            value={item}
            disableIcon
            overlay
            label={
              {
                left: <FormatAlignLeftIcon />,
                right: <FormatAlignRightIcon />,
                center: <FormatAlignCenterIcon />,
                justify: <FormatAlignJustifyIcon />,
              }[item]
            }
            variant={alignment === item ? 'solid' : 'plain'}
            slotProps={{
              input: { 'aria-label': item },
              action: {
                sx: { borderRadius: 0, transition: 'none' },
              },
              label: { sx: { lineHeight: 0 } },
            }}
          />
        </Box>
      ))}
    </RadioGroup>
  );
}
```
</example>

### Payment methods

Mix Radio buttons with the [List](https://mui.com/joy-ui/react-list/) components to create a vertical or horizontal payment method list.

<example name="ExamplePaymentChannels">
```tsx file="ExamplePaymentChannels.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import List, { ListProps } from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import Switch from '@mui/joy/Switch';

export default function ExamplePaymentChannels() {
  const [orientation, setOrientation] =
    React.useState<ListProps['orientation']>('vertical');
  return (
    <Box sx={{ minWidth: 240 }}>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          id="example-payment-channel-label"
          level="title-md"
          textColor={'text.secondary'}
          sx={{ fontWeight: 'xl' }}
        >
          Pay with
        </Typography>
        <Switch
          component="label"
          size="sm"
          startDecorator="List"
          endDecorator="Row"
          checked={orientation === 'horizontal'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setOrientation(event.target.checked ? 'horizontal' : 'vertical')
          }
        />
      </Box>
      <RadioGroup
        aria-labelledby="example-payment-channel-label"
        overlay
        name="example-payment-channel"
        defaultValue="Paypal"
      >
        <List
          component="div"
          variant="outlined"
          orientation={orientation}
          sx={{ borderRadius: 'sm', boxShadow: 'sm' }}
        >
          {['Credit Card', 'Paypal', 'QR Code'].map((value, index) => (
            <React.Fragment key={value}>
              {index !== 0 && <ListDivider />}
              <ListItem>
                <Radio id={value} value={value} label={value} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </RadioGroup>
    </Box>
  );
}
```
</example>

### E-commerce product attributes

This example demonstrates complex customization using the Sheet component as a container for the Radio buttons.
The focus outline is customized to be smaller, and the color changes based on the value.

The check icon's color inherits the Radio button's `solid` variant, so you don't need to handpick a color that contrasts enough with the background.

<example name="ExampleProductAttributes">
```tsx file="ExampleProductAttributes.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Done from '@mui/icons-material/Done';

export default function ExampleProductAttributes() {
  return (
    <Box sx={{ resize: 'horizontal', overflow: 'auto', px: 2 }}>
      <FormLabel
        id="product-color-attribute"
        sx={{
          mb: 1.5,
          fontWeight: 'xl',
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: '0.1em',
        }}
      >
        Color
      </FormLabel>
      <RadioGroup
        aria-labelledby="product-color-attribute"
        defaultValue="warning"
        sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {(['primary', 'neutral', 'danger', 'success', 'warning'] as const).map(
          (color) => (
            <Sheet
              key={color}
              sx={{
                position: 'relative',
                width: 40,
                height: 40,
                flexShrink: 0,
                bgcolor: `${color}.solidBg`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Radio
                overlay
                variant="solid"
                color={color}
                checkedIcon={<Done fontSize="xl2" />}
                value={color}
                slotProps={{
                  input: { 'aria-label': color },
                  radio: {
                    sx: {
                      display: 'contents',
                      '--variant-borderWidth': '2px',
                    },
                  },
                }}
                sx={{
                  '--joy-focus-outlineOffset': '4px',
                  '--joy-palette-focusVisible': (theme) =>
                    theme.vars.palette[color][500],
                  [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                    outlineWidth: '2px',
                  },
                }}
              />
            </Sheet>
          ),
        )}
      </RadioGroup>
      <br />
      <FormLabel
        id="product-size-attribute"
        sx={{
          mb: 1.5,
          fontWeight: 'xl',
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: '0.1em',
        }}
      >
        Size
      </FormLabel>
      <RadioGroup
        aria-labelledby="product-size-attribute"
        defaultValue="M"
        sx={{ gap: 2, mb: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <Sheet
            key={size}
            sx={{
              position: 'relative',
              width: 40,
              height: 40,
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--joy-focus-outlineOffset': '4px',
              '--joy-palette-focusVisible': (theme) =>
                theme.vars.palette.neutral.outlinedBorder,
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.label}`]: {
                  fontWeight: 'lg',
                },
                [`& .${radioClasses.action}`]: {
                  '--variant-borderWidth': '2px',
                  borderColor: 'text.secondary',
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
            }}
          >
            <Radio color="neutral" overlay disableIcon value={size} label={size} />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
}
```
</example>

## Accessibility

Here are a few tips to make sure you have an accessible Radio button component:

- Every Form Control should have proper labels.
  This includes Radio buttons, Checkboxes, and Switches.
  In most cases, this is done by using the Form Control and Form Label element.
- When a label can't be used, make sure to add an attribute, such as `aria-label`, `aria-labelledby`, and/or `title`, directly on the input component.
  You can also use the `slotProps.input` prop to add them.

```jsx
<Radio
  value="radioA"
  slotProps={{
    input: {
      'aria-label': 'Radio A',
    },
  }}
/>
```

Visit the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) for more details.

## Anatomy

The Radio Group component is composed of a root `<div>` element that can wrap multiple Radio components.

```html
<div class="MuiRadioGroup-root">
  <!-- Radio components here -->
</div>
```

The Radio component is composed of a root `<span>`, with further nested `<span>` elements for the radio button, icon, action (with a nested `<input>`), and its associated `<label>`.

```html
  <span class="MuiRadio-root">
    <span class="MuiRadio-radio">
      <span class="MuiRadio-icon"></span>
      <span class="MuiRadio-action">
        <input class="MuiRadio-input">
      </span>
    </span>
    <label class="MuiRadio-label">
  </span>
```
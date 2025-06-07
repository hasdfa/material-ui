---
productId: joy-ui
title: React Checkbox component
components: Checkbox
githubLabel: 'component: checkbox'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
unstyled: https://base-ui.com/react/components/checkbox
---

# Checkbox

Checkboxes give users binary choices when presented with multiple options in a series.

## Introduction

Checkboxes provide users with a graphical representation of a binary choice (yes or no, on or off).
They are most commonly presented in a series, giving the user multiple choices to make.

The Joy UI Checkbox component replaces the native HTML `<input type="checkbox">` element and offers expanded options for styling and accessibility.

<example name="CheckboxUsage">
```jsx file="CheckboxUsage.js"
import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function CheckboxUsage() {
  return (
    <JoyUsageDemo
      componentName="Checkbox"
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
          propName: 'disabled',
          knob: 'switch',
          defaultValue: false,
        },
        {
          propName: 'label',
          knob: 'input',
          defaultValue: 'Label',
        },
      ]}
      renderDemo={(props) => <Checkbox {...props} />}
    />
  );
}
```
</example>

:::success
When should you use checkboxes rather than switches or radio buttons?

- Use a switch to provide the user with **a single binary choice**—checkboxes are preferable when you need to give the user multiple binary choices.
- Use radio buttons to give the user **mutually exclusive options**—checkboxes are preferable when you need to let the user select one, some, all, or none from a series of options.

  :::

## Basics

```jsx
import Checkbox from '@mui/joy/Checkbox';
```

The basic Checkbox component is a single input set to the unchecked state.
Use the `label` prop to provide text, and add `defaultChecked` when the input should be checked by default.

<example name="BasicCheckbox">
```tsx file="BasicCheckbox.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

export default function BasicCheckbox() {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Checkbox label="Label" />
      <Checkbox label="Label" defaultChecked />
    </Box>
  );
}
```
</example>

## Customization

### Variants

The Checkbox component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid`, `soft`, `outlined`, and `plain`. By default, when unchecked, the Checkbox is set to `outlined`;
when checked, the variant changes to `solid`.

Adding the `variant` prop to your Checkbox overrides this default behavior. Try checking and unchecking the Checkboxes in the demo below to see the differences:

<example name="CheckboxVariants">
```tsx file="CheckboxVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

export default function CheckboxVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Checkbox label="Solid" variant="solid" defaultChecked />
      <Checkbox label="Soft" variant="soft" defaultChecked />
      <Checkbox label="Outlined" variant="outlined" defaultChecked />
      <Checkbox label="Plain" variant="plain" defaultChecked />
    </Box>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Sizes

The Checkbox component comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="CheckboxSizes">
```tsx file="CheckboxSizes.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

export default function CheckboxSizes() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Checkbox label="Small" size="sm" defaultChecked />
      <Checkbox label="Medium" size="md" defaultChecked />
      <Checkbox label="Large" size="lg" defaultChecked />
    </Box>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Colors

Every palette included in the theme is available via the `color` prop.

<example name="CheckboxColors">
```tsx file="CheckboxColors.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

export default function CheckboxColors() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      <Checkbox label="Primary" color="primary" defaultChecked />
      <Checkbox label="Neutral" color="neutral" defaultChecked />
      <Checkbox label="Danger" color="danger" defaultChecked />
      <Checkbox label="Success" color="success" defaultChecked />
      <Checkbox label="Warning" color="warning" defaultChecked />
    </Box>
  );
}
```
</example>

### Icons

By default, the Checkbox component is empty when unchecked.
Use the `uncheckedIcon` prop to add a custom icon for the unchecked state.
You can also use `checkedIcon` to customize the checked state.

<example name="IconsCheckbox">
```tsx file="IconsCheckbox.tsx"
import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import Close from '@mui/icons-material/Close';

export default function IconsCheckbox() {
  return (
    <Checkbox uncheckedIcon={<Close />} label="I have an icon when unchecked" />
  );
}
```
</example>

#### Appear on hover

You can use the `uncheckedIcon` as a "preview" of the checked state by making it appear when the user hovers over the empty Checkbox.

The demo below shows how to target the icon by using the `svg` selector and apply `opacity` for a smooth effect:

<example name="HoverCheckbox">
```tsx file="HoverCheckbox.tsx"
import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import Done from '@mui/icons-material/Done';

export default function HoverCheckbox() {
  return (
    <Checkbox
      uncheckedIcon={<Done />}
      label="My unchecked icon appears on hover"
      slotProps={{
        root: ({ checked, focusVisible }) => ({
          sx: !checked
            ? {
                '& svg': { opacity: focusVisible ? 1 : 0 },
                '&:hover svg': {
                  opacity: 1,
                },
              }
            : undefined,
        }),
      }}
    />
  );
}
```
</example>

#### No icons

Use the `disableIcon` prop to remove the icon entirely.
In this case, the state of the Checkbox is communicated through the type of variant applied to the label.
Try clicking on the Checkbox labels in the demo below to see how this works:

<example name="IconlessCheckbox">
```tsx file="IconlessCheckbox.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';

export default function IconlessCheckbox() {
  return (
    <Box sx={{ width: 343 }}>
      <Typography id="topping" level="body-sm" sx={{ fontWeight: 'lg', mb: 2 }}>
        Pizza toppings
      </Typography>
      <div role="group" aria-labelledby="topping">
        <List
          orientation="horizontal"
          wrap
          sx={{ '--List-gap': '8px', '--ListItem-radius': '20px' }}
        >
          {[
            'Pepperoni',
            'Cheese',
            'Olives',
            'Tomatoes',
            'Fried Bacon',
            'Spinach',
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
                disabled={index === 0}
                overlay
                disableIcon
                variant="soft"
                label={item}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
}
```
</example>

### Focus outline

By default, the focus outline wraps both the Checkbox input and its label.
To set the focus outline so that it only wraps the input, target the `checkboxClasses.checkbox` class and add `position: 'relative'`, as shown in the demo below:

<example name="FocusCheckbox">
```tsx file="FocusCheckbox.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox, { checkboxClasses } from '@mui/joy/Checkbox';

export default function FocusCheckbox() {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Checkbox
        label="Fully wrapped"
        defaultChecked
        // to demonstrate the focus outline
        slotProps={{ action: { className: checkboxClasses.focusVisible } }}
      />
      <Checkbox
        label="Input wrapped"
        defaultChecked
        sx={{ [`& > .${checkboxClasses.checkbox}`]: { position: 'relative' } }}
        // to demonstrate the focus outline
        slotProps={{ action: { className: checkboxClasses.focusVisible } }}
      />
    </Box>
  );
}
```
</example>

### Clickable container

Use the `overlay` prop to shift the focus outline from the Checkbox to its container, making the entire container clickable to toggle the state of the Checkbox.
This works with any wrapper element with [positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position#types_of_positioning)—the demo below uses [Sheet](https://mui.com/joy-ui/react-sheet/) (by default, it has `relative` position):

<example name="OverlayCheckbox">
```tsx file="OverlayCheckbox.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox, { checkboxClasses } from '@mui/joy/Checkbox';
import Sheet from '@mui/joy/Sheet';

export default function OverlayCheckbox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 300,
        '& > div': { p: 2, borderRadius: 'md', display: 'flex' },
      }}
    >
      <Sheet variant="outlined">
        <Checkbox overlay label="Focus on me" />
      </Sheet>
      <Sheet variant="outlined">
        <Checkbox
          label="My parent receives focus"
          overlay
          // Force the outline to appear in the demo. Usually, you don't need this in your project.
          slotProps={{ action: { className: checkboxClasses.focusVisible } }}
        />
      </Sheet>
    </Box>
  );
}
```
</example>

### Indeterminate

The default Checkbox is _dual-state:_ the user can toggle between checked and unchecked.

There is also the option for a _tri-state_ or indeterminate Checkbox that supports a state known as "partially checked."

This indeterminate state is often used to communicate the fact that only some out of a set of Checkboxes are checked.
As such, it's usually reserved for parent Checkboxes that can control the states of their children.

The demo below shows how to implement the `indeterminate` prop on a parent Checkbox that watches for the checked state in its children.
If only one child is checked, then the parent displays the indeterminate state.
Clicking on the parent Checkbox toggles selecting and deselecting all children.

:::warning
When the indeterminate state is set, the value of the `checked` prop only impacts form-submitted values.
It has no accessibility or UX implications.
:::

<example name="IndeterminateCheckbox">
```tsx file="IndeterminateCheckbox.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, gap: 1, mt: 1 }}>
      <Checkbox checked={checked[0]} onChange={handleChange2} label="Child 1" />
      <Checkbox checked={checked[1]} onChange={handleChange3} label="Child 2" />
    </Box>
  );

  return (
    <div>
      <Checkbox
        label="Parent"
        checked={checked[0] && checked[1]}
        indeterminate={checked[0] !== checked[1]}
        onChange={handleChange1}
      />
      {children}
    </div>
  );
}
```
</example>

### Helper text

```jsx
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
```

Use the Form Control and Form Helper Text components add a description to the Checkbox.
The Checkbox will be linked to the helper text via the `aria-describedby` attribute.

<example name="HelperTextCheckbox">
```tsx file="HelperTextCheckbox.tsx"
import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';

export default function HelperTextCheckbox() {
  return (
    <FormControl>
      <Checkbox label="Label" />
      <FormHelperText>A description for the Checkbox.</FormHelperText>
    </FormControl>
  );
}
```
</example>

### Group

To group multiple Checkboxes, wrap them in a container component like Box with `role="group"`.

Combine with the [List](https://mui.com/joy-ui/react-list/) component to ensure consistent spacing and enable screen readers to interpret the Checkbox group as a list.
Learn more about accessible design patterns for checkboxes [in the W3C documentation](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox-mixed/).

<example name="GroupCheckboxes">
```tsx file="GroupCheckboxes.tsx"
import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';

export default function GroupCheckboxes() {
  return (
    <div>
      <Typography
        id="sandwich-group"
        level="body-sm"
        sx={{ fontWeight: 'lg', mb: 1 }}
      >
        Sandwich Dressings
      </Typography>
      <div role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="Lettuce" defaultChecked />
          </ListItem>
          <ListItem>
            <Checkbox label="Tomato" />
          </ListItem>
          <ListItem>
            <Checkbox label="Mustard" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
```
</example>

## Common examples

### Sign-up checkbox

To use an interactive element together with a Checkbox, you can wrap it with a FormControl and FormHelperText.

<example name="ExampleSignUpCheckbox">
```tsx file="ExampleSignUpCheckbox.tsx"
import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function ExampleSignUpCheckbox() {
  return (
    <FormControl size="sm" sx={{ width: 400 }}>
      <Checkbox
        label={
          <React.Fragment>
            I have read and agree to the{' '}
            <Typography sx={{ fontWeight: 'md' }}>terms and conditions</Typography>.
          </React.Fragment>
        }
      />
      <FormHelperText>
        <Typography level="body-sm">
          Read our <Link href="#link">terms and conditions</Link>.
        </Typography>
      </FormHelperText>
    </FormControl>
  );
}
```
</example>

:::info
It is recommended that the interactive elements such as link should be placed outside of the checkbox's label.
To learn more, [visit HTML label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns) from Mozilla.
:::

### Filtering status

This example uses variants and colors available to the List Item and Checkbox components to communicate state changes.

<example name="ExampleFilterStatusCheckbox">
```tsx file="ExampleFilterStatusCheckbox.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function ExampleFilterStatusCheckbox() {
  const [status, setStatus] = React.useState({
    declinedPayment: true,
    deliveryError: true,
    wrongAddress: false,
  });
  return (
    <Sheet variant="outlined" sx={{ p: 2, borderRadius: 'sm', width: 300 }}>
      <Typography
        id="filter-status"
        sx={{
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: 'lg',
          fontWeight: 'lg',
          color: 'text.secondary',
          mb: 2,
        }}
      >
        Filter status
      </Typography>
      <div role="group" aria-labelledby="filter-status">
        <List>
          <ListItem variant="soft" color="danger">
            <Checkbox
              label="Declined Payment"
              color="danger"
              overlay
              checked={status.declinedPayment}
              onChange={(event) =>
                setStatus({ ...status, declinedPayment: event.target.checked })
              }
              sx={{ color: 'inherit' }}
            />
            <Typography textColor="inherit" sx={{ ml: 'auto' }}>
              8
            </Typography>
          </ListItem>
          <ListItem variant="plain" color="warning" sx={{ borderRadius: 'sm' }}>
            <Checkbox
              label="Delivery Error"
              color="warning"
              overlay
              checked={status.deliveryError}
              onChange={(event) =>
                setStatus({ ...status, deliveryError: event.target.checked })
              }
            />
            <Typography textColor="inherit" sx={{ ml: 'auto' }}>
              24
            </Typography>
          </ListItem>
          <ListItem variant="plain" sx={{ borderRadius: 'sm' }}>
            <Checkbox
              label="Wrong Address"
              color="neutral"
              overlay
              checked={status.wrongAddress}
              onChange={(event) =>
                setStatus({ ...status, wrongAddress: event.target.checked })
              }
            />
          </ListItem>
        </List>
      </div>
      <Button
        variant="outlined"
        color="neutral"
        size="sm"
        onClick={() =>
          setStatus({
            declinedPayment: false,
            deliveryError: false,
            wrongAddress: false,
          })
        }
        sx={{ px: 1.5, mt: 1 }}
      >
        Clear All
      </Button>
    </Sheet>
  );
}
```
</example>

### Filtering members

This example uses the CSS `flexDirection: 'rowReverse'` property to position the label and icon.
Don't forget to use the `label` prop to ensure proper Checkbox accessibility.

<example name="ExampleFilterMemberCheckbox">
```tsx file="ExampleFilterMemberCheckbox.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Checkbox, { checkboxClasses } from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function ExampleFilterMemberCheckbox() {
  const [members, setMembers] = React.useState([false, true, false]);
  const toggleMember =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newMembers = [...members];
      newMembers[index] = event.target.checked;
      setMembers(newMembers);
    };
  return (
    <Sheet
      variant="outlined"
      sx={{ p: 2, borderRadius: 'sm', width: 360, maxWidth: '100%' }}
    >
      <Typography
        id="member"
        sx={{
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: 'lg',
          fontWeight: 'lg',
          color: 'text.secondary',
          mb: 2,
        }}
      >
        Team members
      </Typography>
      <div role="group" aria-labelledby="member">
        <List
          sx={{
            '--ListItem-gap': '0.75rem',
            [`& .${checkboxClasses.root}`]: {
              mr: 'auto',
              flexGrow: 1,
              alignItems: 'center',
              flexDirection: 'row-reverse',
            },
          }}
        >
          <ListItem>
            <Avatar aria-hidden="true" src="/static/images/avatar/1.jpg" />
            <Checkbox
              disabled
              label="Friedrich Oberbrunner"
              overlay
              checked={members[0]}
              onChange={toggleMember(0)}
            />
          </ListItem>
          <ListItem
            {...(members[1] && {
              variant: 'soft',
              color: 'primary',
            })}
          >
            <Avatar aria-hidden="true" src="/static/images/avatar/2.jpg" />
            <Checkbox
              overlay
              label={
                <React.Fragment>
                  Adeline O&apos;Reilly{' '}
                  {members[1] && (
                    <Typography
                      aria-hidden="true"
                      sx={{ display: 'block', fontSize: 'sm', color: 'neutral.500' }}
                    >
                      This user is your friend.
                    </Typography>
                  )}
                </React.Fragment>
              }
              checked={members[1]}
              onChange={toggleMember(1)}
              sx={{ color: 'inherit' }}
            />
          </ListItem>
          <ListItem {...(members[2] && { variant: 'soft', color: 'neutral' })}>
            <Avatar aria-hidden="true" variant="solid">
              FP
            </Avatar>
            <Checkbox
              label="Fernando Pidrillio"
              overlay
              color="neutral"
              checked={members[2]}
              onChange={toggleMember(2)}
            />
          </ListItem>
        </List>
      </div>
    </Sheet>
  );
}
```
</example>

### Choice chips

You can use Checkbox to recreate a kind of [Chip](https://mui.com/joy-ui/react-chip/) component, which is commonly implemented in the form of a group of filtering options.

<example name="ExampleChoiceChipCheckbox">
```tsx file="ExampleChoiceChipCheckbox.tsx"
import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Done from '@mui/icons-material/Done';

export default function ExampleChoiceChipCheckbox() {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Sheet variant="outlined" sx={{ width: 360, p: 2, borderRadius: 'sm' }}>
      <Typography id="rank" level="body-sm" sx={{ fontWeight: 'lg', mb: 1.5 }}>
        Choose amenities
      </Typography>
      <div role="group" aria-labelledby="rank">
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
            '--ListItem-minHeight': '32px',
            '--ListItem-gap': '4px',
          }}
        >
          {['Elevator', 'Washer/Dryer', 'Fireplace', 'Dogs ok', 'Cats ok'].map(
            (item, index) => (
              <ListItem key={item}>
                {value.includes(item) && (
                  <Done
                    fontSize="md"
                    color="primary"
                    sx={{ ml: -0.5, zIndex: 2, pointerEvents: 'none' }}
                  />
                )}
                <Checkbox
                  size="sm"
                  disabled={index === 0}
                  disableIcon
                  overlay
                  label={item}
                  checked={value.includes(item)}
                  variant={value.includes(item) ? 'soft' : 'outlined'}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.checked) {
                      setValue((val) => [...val, item]);
                    } else {
                      setValue((val) => val.filter((text) => text !== item));
                    }
                  }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: checked
                        ? {
                            border: '1px solid',
                            borderColor: 'primary.500',
                          }
                        : {},
                    }),
                  }}
                />
              </ListItem>
            ),
          )}
        </List>
      </div>
    </Sheet>
  );
}
```
</example>

### Viewport checklist

<example name="ExampleButtonCheckbox">
```tsx file="ExampleButtonCheckbox.tsx"
import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function ExampleButtonCheckbox() {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <List
      variant="outlined"
      aria-label="Screens"
      role="group"
      orientation="horizontal"
      sx={{
        flexGrow: 0,
        '--List-gap': '8px',
        '--List-padding': '8px',
        '--List-radius': '8px',
      }}
    >
      {['Mobile', 'Laptop', 'Monitor'].map((item) => (
        <ListItem key={item}>
          <ListItemDecorator
            sx={[
              {
                zIndex: 2,
                pointerEvents: 'none',
              },
              value.includes(item) && { color: 'text.primary' },
            ]}
          >
            {
              {
                Mobile: <PhoneAndroidIcon />,
                Laptop: <LaptopIcon />,
                Monitor: <TvIcon />,
              }[item]
            }
          </ListItemDecorator>
          <Checkbox
            disableIcon
            overlay
            label={item}
            checked={value.includes(item)}
            color="neutral"
            variant={value.includes(item) ? 'outlined' : 'plain'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.checked) {
                setValue((val) => [...val, item]);
              } else {
                setValue((val) => val.filter((text) => text !== item));
              }
            }}
            slotProps={{
              action: ({ checked }) => ({
                sx: {
                  bgcolor: checked ? 'background.level1' : 'transparent',
                  boxShadow: checked ? 'sm' : 'none',
                },
              }),
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
```
</example>

## Anatomy

The Checkbox component is composed of a root `<span>` that wraps the input and `<label>` (if present).
Note that the actual `<input type="checkbox">` is doubly nested within `<span>` elements that represent the `checkbox` and `action` slots, respectively.

```html
<span class="MuiCheckbox-root">
  <span class="MuiCheckbox-checkbox">
    <span class="MuiCheckbox-action">
      <input type="checkbox" class="MuiCheckbox-input" value />
    </span>
  </span>
  <label class="MuiCheckbox-label">
    <!-- label text -->
  </label>
</span>
```
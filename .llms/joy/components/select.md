---
productId: joy-ui
title: React Select component
components: Select, Option
githubLabel: 'component: select'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
unstyled: https://base-ui.com/react/components/select
---

# Select

Select components are used for collecting user-provided information from a list of options.

## Introduction

The `Select` component is used to trigger a popup that displays a list of `Option` components.

<example name="SelectUsage">
```jsx file="SelectUsage.js"
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function SelectUsage() {
  const [value, setValue] = React.useState(null);
  const action = React.useRef(null);
  return (
    <JoyUsageDemo
      componentName="Select"
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
          propName: 'placeholder',
          knob: 'input',
          defaultValue: 'Choose one…',
          codeBlockDisplay: true,
        },
        {
          propName: 'disabled',
          knob: 'switch',
        },
        {
          propName: 'children',
          defaultValue: '<Option>...</Option>',
        },
      ]}
      renderDemo={(props) => (
        <Select
          {...props}
          defaultListboxOpen
          action={action}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ minWidth: 160, mb: 20 }}
        >
          <Option value="react">React</Option>
          <Option value="vue">Vue</Option>
          <Option value="svelte">Svelte</Option>
          <Option value="angular">Angular</Option>
        </Select>
      )}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectBasic() {
  return (
    <Select defaultValue="dog">
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
    </Select>
  );
}
```

### Basic usage

The `Select` component is similar to the native HTML's `<select>` and `<option>` tags.

<example name="SelectBasic">
```tsx file="SelectBasic.tsx"
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectBasic() {
  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    alert(`You chose "${newValue}"`);
  };
  return (
    <Select defaultValue="dog" onChange={handleChange}>
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}
```
</example>

### Form submission

The `Select` component supports `name` and `required` props that will be used when submitting the form.

<example name="SelectFormSubmission">
```tsx file="SelectFormSubmission.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Stack from '@mui/joy/Stack';

export default function SelectFormSubmission() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        alert(JSON.stringify(formJson));
      }}
    >
      <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Select
          placeholder="Select a pet"
          name="foo"
          required
          sx={{ minWidth: 200 }}
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
```
</example>

### Variants

The Select component supports the four global variants: `outlined` (default), `plain`, `soft`, and `solid`.

The variant and color values are propagated to the Select's `button` and `listbox` slots.

<example name="SelectVariants">
```tsx file="SelectVariants.tsx"
import * as React from 'react';
import Select from '@mui/joy/Select';
import Stack from '@mui/joy/Stack';
import Option from '@mui/joy/Option';

export default function SelectVariants() {
  return (
    <Stack spacing={2}>
      <Select defaultValue="dog">
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="fish">Fish</Option>
        <Option value="bird">Bird</Option>
      </Select>
      <Select defaultValue="dog" variant="plain">
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="fish">Fish</Option>
        <Option value="bird">Bird</Option>
      </Select>
      <Select defaultValue="dog" variant="soft">
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="fish">Fish</Option>
        <Option value="bird">Bird</Option>
      </Select>
      <Select defaultValue="dog" variant="solid">
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="fish">Fish</Option>
        <Option value="bird">Bird</Option>
      </Select>
    </Stack>
  );
}
```
</example>

:::info
To learn how to add more variants to the component, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
:::

To customize the variant and color for a specific slot, use `slotProps`:

```js
<Select
  variant="plain"
  slotProps={{
    listbox: {
      variant: 'outlined',
    },
  }}
/>
```

### Decorators

Use the `startDecorator` and/or `endDecorator` props to add supporting icons or elements to the select.

<example name="SelectDecorators">
```tsx file="SelectDecorators.tsx"
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function SelectDecorators() {
  return (
    <Select
      placeholder="Select a pet…"
      startDecorator={<FavoriteBorder />}
      endDecorator={
        <Chip size="sm" color="danger" variant="soft">
          +5
        </Chip>
      }
      sx={{ width: 240 }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}
```
</example>

If you have interactive elements as the select's decorators, call `stopPropagation()` from the mouse down event to prevent the popup from being opened.

```jsx
<IconButton
  onMouseDown={(event) => {
    // don't open the popup when clicking on this button
    event.stopPropagation();
  }}
  onClick={() => {
    // click handler goes here
  }
>...</IconButton>
```

### Indicator

To change the default indicator, use the `indicator` prop with either any React element (including string) or `null` as value (to remove the indicator completely).

<example name="SelectIndicator">
```tsx file="SelectIndicator.tsx"
import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SelectIndicator() {
  return (
    <Select
      placeholder="Select a pet…"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}
```
</example>

To apply the indicator to all instances of the select component, customize the `indicator` prop directly in the theme:

```js
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Select from '@mui/joy/Select';

const theme = extendTheme({
  components: {
    JoySelect: {
      defaultProps: {
        indicator: '↕',
      },
    },
  },
});

const App = () => (
  <CssVarsProvider theme={theme}>
    <Select>...options</Select>
  </CssVarsProvider>
);
```

### Multiple selections

Set the `multiple` prop to let your users select multiple options from the list.
In contrast with single-selection mode, the options popup doesn't close after an item is selected, which enables users to continue choosing more options.

Note that in multiple selection mode, the `value` prop (and `defaultValue`) is an array.

<example name="SelectMultiple">
```tsx file="SelectMultiple.tsx"
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectMultiple() {
  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: Array<string> | null,
  ) => {
    console.log(`You have choosen "${newValue}"`);
  };
  return (
    <Select
      defaultValue={['dog']}
      multiple
      onChange={handleChange}
      sx={{ minWidth: '13rem' }}
      slotProps={{
        listbox: {
          sx: {
            width: '100%',
          },
        },
      }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}
```
</example>

#### Selected value appearance

Use the `renderValue` prop to customize the display of the selected options.

<example name="SelectMultipleAppearance">
```tsx file="SelectMultipleAppearance.tsx"
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Box, Chip } from '@mui/joy';

export default function SelectMultipleAppearance() {
  return (
    <Select
      multiple
      defaultValue={['dog', 'cat']}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', gap: '0.25rem' }}>
          {selected.map((selectedOption) => (
            <Chip variant="soft" color="primary">
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
      )}
      sx={{ minWidth: '15rem' }}
      slotProps={{
        listbox: {
          sx: {
            width: '100%',
          },
        },
      }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}
```
</example>

#### Form submission

The `Select` component supports `name` and `required` props that will be used when submitting the form.

<example name="SelectMultipleFormSubmission">
```tsx file="SelectMultipleFormSubmission.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Stack from '@mui/joy/Stack';

export default function SelectMultipleFormSubmission() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const selectedPets = JSON.parse(formJson.pets);
        alert(JSON.stringify(selectedPets));
      }}
    >
      <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Select
          placeholder="Select a pet"
          name="pets"
          required
          multiple
          defaultValue={['dog', 'cat']}
          sx={{ minWidth: 200 }}
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
```
</example>

### Listbox

#### Maximum height

To change the listbox's maximum height, use `slotProps` prop to target listbox slot:

```jsx
<Select
  slotProps={{
    listbox: {
      sx: {
        maxHeight: '300px',
      },
    },
  }}
>
  ...
</Select>
```

#### Minimum width

By default, the listbox's width is equal to Select's button or the maximum content of its children. You can control the minimum width by using `slotProps` prop to target listbox slot.

<example name="SelectMinWidth">
```tsx file="SelectMinWidth.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';

export default function SelectMinWidth() {
  return (
    <Box sx={{ width: 100 }}>
      <Select
        defaultValue="German Shepherd"
        slotProps={{
          listbox: {
            placement: 'bottom-start',
            sx: { minWidth: 160 },
          },
        }}
      >
        <Option value="German Shepherd">German Shepherd</Option>
        <Option value="Anatolian Shepherd Dog">Anatolian Shepherd Dog</Option>
        <Option value="West Highland White Terrier">
          West Highland White Terrier
        </Option>
        <Option value="Maltese dog">Maltese dog</Option>
      </Select>
      <Typography level="body-xs" sx={{ textAlign: 'center', mt: 1 }}>
        Width is fixed at 100px
      </Typography>
    </Box>
  );
}
```
</example>

:::success
To control the placement of the listbox, use `placement`:

```js
<Select
  slotProps={{
    // the left-edge of the listbox will align with button.
    listbox: { placement: 'bottom-start' },
  }}
>
```

:::

#### Placement

To align `listbox` position to `Select` while displaying long options, use `slotProps` prop to position listbox slot:

<example name="SelectPosition">
```tsx file="SelectPosition.tsx"
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function SelectPosition() {
  return (
    <Select
      placeholder="Select address"
      sx={{ width: 240 }}
      slotProps={{
        listbox: {
          placement: 'bottom-start',
        },
      }}
    >
      <Option value="1">
        Flat 5, 24 Bhlenheiman Avenue, South Kensington, EW13 9SD
      </Option>
      <Option value="2">
        Flat 6, 24 Bhlenheiman Avenue, South Kensington, EW13 9SD
      </Option>
      <Option value="3">
        Flat 6b, 24 Bhlenheiman Avenue, South Kensington, EW13 9SD
      </Option>
    </Select>
  );
}

export default SelectPosition;
```
</example>

#### Controlling the open state

You can control the open state of the select with the `listboxOpen` prop. Alternatively, it is also possible to set the initial (uncontrolled) open state of the component with the `defaultListboxOpen` prop.

<example name="ControlledOpenSelect">
```tsx file="ControlledOpenSelect.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';

export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const skipRef = React.useRef(false);

  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    setAge(newValue!);
  };

  return (
    <Stack spacing={2} useFlexGap>
      <Button
        variant="solid"
        onMouseDown={() => {
          skipRef.current = true;
        }}
        onClick={() => {
          skipRef.current = false;
          setOpen((bool) => !bool);
        }}
      >
        Toggle the select
      </Button>
      <div>
        <Select
          listboxOpen={open}
          onListboxOpenChange={(isOpen) => {
            if (!skipRef.current) {
              setOpen(isOpen);
            }
          }}
          value={age}
          onChange={handleChange}
        >
          <Option value="">
            <em>None</em>
          </Option>
          <Option value={10}>Ten</Option>
          <Option value={20}>Twenty</Option>
          <Option value={30}>Thirty</Option>
        </Select>
      </div>
    </Stack>
  );
}
```
</example>

### `Option` component

The `Option` component is used for the choosable options within the select.

The selected option inherits the `color` from the Select parent, and it uses the `primary` palette by default.
However, it does not inherit the Select's used `variant`.

The `ListItemButton` component is very similar to this one, as they share the same internal styles.
In fact, you can mix them together to compose various designs.

In the demo below, we're using the `ListItemDecorator` to provide space between the avatars.
We're also using the `ListDivider` as a visual separator.

<example name="SelectCustomOption">
```tsx file="SelectCustomOption.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Select, { SelectOption } from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const options = [
  { value: '1', label: 'Eric', src: '/static/images/avatar/1.jpg' },
  { value: '2', label: 'Smith', src: '/static/images/avatar/2.jpg' },
  { value: '3', label: 'Erika', src: '/static/images/avatar/3.jpg' },
];

function renderValue(option: SelectOption<string> | null) {
  if (!option) {
    return null;
  }

  return (
    <React.Fragment>
      <ListItemDecorator>
        <Avatar size="sm" src={options.find((o) => o.value === option.value)?.src} />
      </ListItemDecorator>
      {option.label}
    </React.Fragment>
  );
}

export default function SelectCustomOption() {
  return (
    <Select
      defaultValue="1"
      slotProps={{
        listbox: {
          sx: {
            '--ListItemDecorator-size': '44px',
          },
        },
      }}
      sx={{ '--ListItemDecorator-size': '44px', minWidth: 240 }}
      renderValue={renderValue}
    >
      {options.map((option, index) => (
        <React.Fragment key={option.value}>
          {index !== 0 ? <ListDivider role="none" inset="startContent" /> : null}
          <Option value={option.value} label={option.label}>
            <ListItemDecorator>
              <Avatar size="sm" src={option.src} />
            </ListItemDecorator>
            {option.label}
          </Option>
        </React.Fragment>
      ))}
    </Select>
  );
}
```
</example>

:::warning
By default, the option children are used for displaying the selected value.
Take a look at [selected value appearance](#selected-value-appearance) to see how to customize its appearance.
:::

### Grouped options

To create a [listbox with grouped options](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/), wrap the `Option` with `List` component and provide an associated label using `ListItem`.
That way, you'll have a consistent height and will be able to leverage nested CSS variables.

<example name="SelectGroupedOptions">
```tsx file="SelectGroupedOptions.tsx"
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option, { optionClasses } from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListItemDecorator, {
  listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';

export default function SelectGroupedOptions() {
  const group = {
    Land: ['Cat', 'Dog', 'Tiger', 'Reindeer', 'Raccoon'],
    Water: ['Dolphin', 'Flounder', 'Eel'],
    Air: ['Falcon', 'Winged Horse', 'Owl'],
  };
  const colors = {
    Land: 'neutral',
    Water: 'primary',
    Air: 'success',
  } as const;
  return (
    <Select
      placeholder="Choose your animal"
      slotProps={{
        listbox: {
          component: 'div',
          sx: {
            maxHeight: 240,
            overflow: 'auto',
            '--List-padding': '0px',
            '--ListItem-radius': '0px',
          },
        },
      }}
      sx={{ width: 240 }}
    >
      {Object.entries(group).map(([name, animals], index) => (
        <React.Fragment key={name}>
          {index !== 0 && <ListDivider role="none" />}
          <List
            aria-labelledby={`select-group-${name}`}
            sx={{ '--ListItemDecorator-size': '28px' }}
          >
            <ListItem id={`select-group-${name}`} sticky>
              <Typography level="body-xs" sx={{ textTransform: 'uppercase' }}>
                {name} ({animals.length})
              </Typography>
            </ListItem>
            {animals.map((anim) => (
              <Option
                key={anim}
                value={anim}
                label={
                  <React.Fragment>
                    <Chip
                      size="sm"
                      color={colors[name as keyof typeof group]}
                      sx={{ borderRadius: 'xs', mr: 1 }}
                    >
                      {name}
                    </Chip>{' '}
                    {anim}
                  </React.Fragment>
                }
                sx={{
                  [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                    {
                      opacity: 1,
                    },
                }}
              >
                <ListItemDecorator sx={{ opacity: 0 }}>
                  <Check />
                </ListItemDecorator>
                {anim}
              </Option>
            ))}
          </List>
        </React.Fragment>
      ))}
    </Select>
  );
}
```
</example>

:::warning
If you'd like to set a `max-height` for a long list of options, make sure to specify it to the `listbox` slot so that keyboard-based navigation works as expected.

```jsx
<Select
  slotProps={{
    listbox: {
      sx: {
        maxHeight: 300,
        overflow: 'auto', // required for scrolling
      }
    }
  }}
>
```

:::

## Accessibility

In order for the select to be accessible, **it should be linked to a label**.

The `FormControl` automatically generates a unique id that links the select with the `FormLabel` component:

<example name="SelectFieldDemo">
```tsx file="SelectFieldDemo.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectFieldDemo() {
  return (
    <FormControl sx={{ width: 240 }}>
      <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
        Favorite pet
      </FormLabel>
      <Select
        defaultValue="dog"
        slotProps={{
          button: {
            id: 'select-field-demo-button',
            // TODO: Material UI set aria-labelledby correctly & automatically
            // but Base UI and Joy UI don't yet.
            'aria-labelledby': 'select-field-demo-label select-field-demo-button',
          },
        }}
      >
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="fish">Fish</Option>
        <Option value="bird">Bird</Option>
      </Select>
      <FormHelperText id="select-field-demo-helper">
        This is a helper text.
      </FormHelperText>
    </FormControl>
  );
}
```
</example>

Alternatively, you can do it manually by targeting the button slot:

```jsx
<label htmlFor="select-button" id="select-label">Label</label>
<Select
  slotProps={{
    button: {
      id: 'select-button',
      'aria-labelledby': 'select-label select-button',
    }
  }}
>
  <Option value="option1">Option I</Option>
  <Option value="option2">Option II</Option>
</Select>
```

## Common examples

### Clear action

Use the `IconButton` component as a decorator to the `Select` to add a clear action.

The `Select` will set the focus-visible state back to the select button after the select value is cleared, ensuring a great keyboard-navigation experience.

<example name="SelectClearable">
```tsx file="SelectClearable.tsx"
import * as React from 'react';
import Select, { SelectStaticProps } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';

export default function SelectClearable() {
  const [value, setValue] = React.useState<string | null>('dog');
  const action: SelectStaticProps['action'] = React.useRef(null);
  return (
    <Select
      action={action}
      value={value}
      placeholder="Favorite pet…"
      onChange={(event, newValue) => setValue(newValue)}
      {...(value && {
        // display the button and remove select indicator
        // when user has selected a value
        endDecorator: (
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={(event) => {
              // don't open the popup when clicking on this button
              event.stopPropagation();
            }}
            onClick={() => {
              setValue(null);
              action.current?.focusVisible();
            }}
          >
            <CloseRounded />
          </IconButton>
        ),
        indicator: null,
      })}
      sx={{ minWidth: 160 }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}
```
</example>

### Selected value appearance

The select will display the value of the `label` prop when the option is selected.

The value can be `string`, `number`, or any valid React element.

<example name="SelectCustomValueAppearance">
```tsx file="SelectCustomValueAppearance.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';

export default function SelectCustomValueAppearance() {
  const people = [
    { name: 'Eric', role: 'PM', status: '2days ago' },
    { name: 'Smith', role: 'Engineer', status: 'secs ago' },
    { name: 'Erika', role: 'Designer', status: '10hrs ago' },
  ] as const;
  const colors = {
    PM: 'success',
    Engineer: 'primary',
    Designer: 'warning',
  } as const;
  return (
    <Select
      defaultValue="Eric"
      slotProps={{
        listbox: {
          sx: {
            '--ListItemDecorator-size': '48px',
          },
        },
      }}
      sx={{ minWidth: 240 }}
    >
      {people.map((data, index) => (
        <Option
          key={data.name}
          value={data.name}
          label={data.name} // The appearance of the selected value will be a string
        >
          <ListItemDecorator>
            <Avatar src={`/static/images/avatar/${index + 1}.jpg`} />
          </ListItemDecorator>
          <Box component="span" sx={{ display: 'block' }}>
            <Typography component="span" level="title-sm">
              {data.name}
            </Typography>
            <Typography level="body-xs">{data.status}</Typography>
          </Box>
          <Chip
            size="sm"
            variant="outlined"
            color={colors[data.role]}
            sx={{
              ml: 'auto',
              borderRadius: '2px',
              minHeight: '20px',
              paddingInline: '4px',
              fontSize: 'xs',
              bgcolor: `${'var(--colors-role)'}.softBg`,
            }}
            style={{ '--colors-role': colors[data.role] } as any}
          >
            {data.role}
          </Chip>
        </Option>
      ))}
    </Select>
  );
}
```
</example>

## Debugging

To keep the listbox open for inspecting elements, enable the `Emulate a focused page` option from the [Chrome DevTool Rendering](https://developer.chrome.com/docs/devtools/rendering/apply-effects/#emulate-a-focused-page) tab.
You can also access this option by using [command menu and search for it](https://developer.chrome.com/docs/devtools/command-menu/).
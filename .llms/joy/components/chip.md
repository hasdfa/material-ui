---
productId: joy-ui
title: React Chip component
components: Chip, ChipDelete
githubLabel: 'component: chip'
---

# Chip

Chip generates a compact element that can represent an input, attribute, or action.

## Introduction

Chips are most frequently used in two main use cases: as pills of informative content or as filtering options.

<example name="ChipUsage">
```jsx file="ChipUsage.js"
import * as React from 'react';
import Chip from '@mui/joy/Chip';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function ChipUsage() {
  return (
    <JoyUsageDemo
      componentName="Chip"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'soft',
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
        { propName: 'onClick', defaultValue: () => {} },
      ]}
      renderDemo={(props) => <Chip {...props}>Chip</Chip>}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Chip from '@mui/joy/Chip';

export default function MyApp() {
  return <Chip>My chip</Chip>;
}
```

### Basic usage

Chips comes with medium size, primary color, and solid variant set by default.

<example name="BasicChip">
```tsx file="BasicChip.tsx"
import * as React from 'react';
import Chip from '@mui/joy/Chip';

export default function BasicChip() {
  return (
    <div>
      <Chip>This is a chip</Chip>
    </div>
  );
}
```
</example>

### Decorators

Use the `startDecorator` and/or `endDecorator` props to add supporting icons to the chip.

<example name="ChipWithDecorators">
```tsx file="ChipWithDecorators.tsx"
import Cloud from '@mui/icons-material/Cloud';
import Sun from '@mui/icons-material/LightMode';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import * as React from 'react';

export default function ChipWithDecorators() {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip variant="soft" startDecorator={<Sun />}>
        Today is sunny
      </Chip>
      <Chip variant="soft" startDecorator={<Cloud />}>
        Tomorrow is cloudy
      </Chip>
    </Box>
  );
}
```
</example>

### Delete button

To add a delete action inside a chip, use the complementary `ChipDelete` component.

The `onDelete` callback is fired on `ChipDelete` either when:

- `Backspace`, `Enter` or `Delete` is pressed.
- The `ChipDelete` is clicked.

```jsx
import ChipDelete from '@mui/joy/ChipDelete';
```

<example name="DeleteButtonChip">
```tsx file="DeleteButtonChip.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';

export default function DeleteButtonChip() {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip
        size="sm"
        variant="outlined"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Remove
      </Chip>
      <Chip
        variant="soft"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Delete
      </Chip>
      <Chip
        size="lg"
        variant="solid"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Delete
      </Chip>
    </Box>
  );
}
```
</example>

### As a link

You can also use the chip component as a link by assigning a value of `a` to the `component` prop.
Since links are the most appropriate component for navigating through pages, that's useful when you want the same chip design for a link.

Doing so will automatically change the rendered HTML tag from `<div>` to `<a>`.

<example name="LinkChip">
```tsx file="LinkChip.tsx"
import * as React from 'react';
import Chip from '@mui/joy/Chip';

export default function LinkChip() {
  return (
    <Chip slotProps={{ action: { component: 'a', href: '#as-link' } }}>
      Anchor chip
    </Chip>
  );
}
```
</example>

### Clickable

To make chips clickable, pass a function to the `onClick` prop.

<example name="ClickableChip">
```tsx file="ClickableChip.tsx"
import CheckIcon from '@mui/icons-material/Check';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import * as React from 'react';

export default function ClickableChip() {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip
        variant="outlined"
        color="neutral"
        size="lg"
        startDecorator={<Avatar size="sm" src={`/static/images/avatar/1.jpg`} />}
        endDecorator={<CheckIcon fontSize="md" />}
        onClick={() => alert('You clicked the Joy Chip!')}
      >
        Mark
      </Chip>
    </Box>
  );
}
```
</example>

### Clickable and deletable

Use both the `onClick` prop and the complementary `ChipDelete` component to make a chip support two actions.

<example name="ClickableAndDeletableChip">
```tsx file="ClickableAndDeletableChip.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import DeleteForever from '@mui/icons-material/DeleteForever';

export default function ClickableAndDeletableChip() {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip
        variant="outlined"
        color="danger"
        onClick={() => alert('You clicked the chip!')}
        endDecorator={
          <ChipDelete
            color="danger"
            variant="plain"
            onClick={() => alert('You clicked the delete button!')}
          >
            <DeleteForever />
          </ChipDelete>
        }
      >
        Clear
      </Chip>
    </Box>
  );
}
```
</example>

### With radio

Common to filtering UIs, wrap the `Radio` component with the `Chip` to use them together.
Use radios when you want to enable single selection.

<example name="RadioChip">
```tsx file="RadioChip.tsx"
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

export default function RadioChip() {
  const [selected, setSelected] = React.useState('');

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <div>
        <Typography level="title-lg" id="best-movie" sx={{ mb: 2 }}>
          Best Movie
        </Typography>
        <RadioGroup
          name="best-movie"
          aria-labelledby="best-movie"
          orientation="horizontal"
          sx={{ flexWrap: 'wrap', gap: 1 }}
        >
          {[
            'Star trek',
            'Batman',
            'Spider man',
            'Eternals',
            'Shang chi',
            'Jungle cruise',
            'No time to die',
            'Thor',
            'The hulk',
          ].map((name) => {
            const checked = selected === name;
            return (
              <Chip
                key={name}
                variant="plain"
                color={checked ? 'primary' : 'neutral'}
                startDecorator={
                  checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                }
              >
                <Radio
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  value={name}
                  checked={checked}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected(name);
                    }
                  }}
                />
              </Chip>
            );
          })}
        </RadioGroup>
      </div>
    </Box>
  );
}
```
</example>

### With a checkbox

Similar to the above, wrap the `Checkbox` component with the `Chip` to use them together.
Use checkboxes when you want to enable multiple selection.

<example name="CheckboxChip">
```tsx file="CheckboxChip.tsx"
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

export default function CheckboxChip() {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <div>
        <Typography level="title-lg" id="fav-movie" sx={{ mb: 2 }}>
          Favorite Movies
        </Typography>
        <Box
          role="group"
          aria-labelledby="fav-movie"
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
        >
          {[
            'Star trek',
            'Batman',
            'Spider man',
            'Eternals',
            'Shang chi',
            'Jungle cruise',
            'No time to die',
            'Thor',
            'The hulk',
          ].map((name) => {
            const checked = selected.includes(name);
            return (
              <Chip
                key={name}
                variant="plain"
                color={checked ? 'primary' : 'neutral'}
                startDecorator={
                  checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                }
              >
                <Checkbox
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  checked={checked}
                  onChange={(event) => {
                    setSelected((names) =>
                      !event.target.checked
                        ? names.filter((n) => n !== name)
                        : [...names, name],
                    );
                  }}
                />
              </Chip>
            );
          })}
        </Box>
      </div>
    </Box>
  );
}
```
</example>

## CSS variables playground

Play around with all the CSS variables available in the slider component to see how the design changes.

You can use those to customize the component on both the `sx` prop and the theme.

<example name="ChipVariables">
```jsx file="ChipVariables.js"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function ChipVariables() {
  return (
    <JoyVariablesDemo
      componentName="Chip"
      renderCode={(formattedSx) => `<Chip
  startDecorator={<Avatar />}
  endDecorator={<ChipDelete />}${formattedSx ? `${formattedSx}>` : '\n>'}`}
      data={[
        {
          var: '--Chip-minHeight',
          defaultValue: '32px',
        },
        {
          var: '--Chip-radius',
          defaultValue: '24px',
        },
        {
          var: '--Chip-gap',
          defaultValue: '6px',
        },
        {
          var: '--Chip-paddingInline',
          defaultValue: '12px',
        },
        {
          var: '--Chip-decoratorChildHeight',
          defaultValue: '24px',
        },
      ]}
      renderDemo={(sx) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Chip variant="soft" color="danger" sx={sx}>
            Some text
          </Chip>
          <Chip
            startDecorator={<Avatar src="/static/images/avatar/1.jpg" />}
            endDecorator={<ChipDelete />}
            sx={sx}
          >
            Person name
          </Chip>
          <Chip
            variant="outlined"
            color="neutral"
            startDecorator={<Avatar src="/static/images/avatar/1.jpg" />}
            endDecorator={<ChipDelete />}
            sx={sx}
          >
            Person name
          </Chip>
        </Box>
      )}
    />
  );
}
```
</example>
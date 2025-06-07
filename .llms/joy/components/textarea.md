---
productId: joy-ui
title: React Textarea component
components: Textarea
githubLabel: 'component: TextareaAutosize'
---

# Textarea

Textarea component gives you a textarea HTML element that automatically adjusts its height to match the length of the content within.

## Introduction

Joy UI's textarea component is built on top of the MUI Base [`TextareaAutoSize`](https://mui.com/base-ui/react-textarea-autosize/) component.

<example name="TextareaUsage">
```jsx file="TextareaUsage.js"
import * as React from 'react';
import Textarea from '@mui/joy/Textarea';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function TextareaUsage() {
  return (
    <JoyUsageDemo
      componentName="Textarea"
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
          defaultValue: 'Type something…',
        },
        {
          propName: 'disabled',
          knob: 'switch',
          defaultValue: false,
        },
        {
          propName: 'minRows',
          defaultValue: 2,
          codeBlockDisplay: true,
        },
      ]}
      renderDemo={(props) => <Textarea {...props} />}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Textarea from '@mui/joy/Textarea';

export default function MyApp() {
  return <Textarea placeholder="Type anything…" />;
}
```

### Variants

The textarea component supports the four global variants: solid (default), soft, outlined, and plain.

<example name="TextareaVariants">
```tsx file="TextareaVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

export default function TextareaVariants() {
  return (
    <Box
      sx={{ py: 2, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Textarea name="Solid" placeholder="Type in here…" variant="solid" />
      <Textarea name="Soft" placeholder="Type in here…" variant="soft" />
      <Textarea name="Outlined" placeholder="Type in here…" variant="outlined" />
      <Textarea name="Plain" placeholder="Type in here…" variant="plain" />
    </Box>
  );
}
```
</example>

### Sizes

The textarea component comes with three sizes out of the box: `sm`, `md` (the default), and `lg`.

<example name="TextareaSizes">
```tsx file="TextareaSizes.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

export default function TextareaSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Textarea size="sm" name="Size" placeholder="Small" />
      <Textarea size="md" name="Size" placeholder="Medium" />
      <Textarea size="lg" name="Size" placeholder="Large" />
    </Box>
  );
}
```
</example>

### Colors

Toggle the palette that's being used to color the by text field by using the `color` prop.

<example name="TextareaColors">
```tsx file="TextareaColors.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

export default function TextareaColors() {
  return (
    <Box
      sx={{ py: 2, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Textarea
        name="Primary"
        placeholder="Type in here…"
        variant="outlined"
        color="primary"
      />
      <Textarea
        name="Neutral"
        placeholder="Type in here…"
        variant="outlined"
        color="neutral"
      />
      <Textarea
        name="Danger"
        placeholder="Type in here…"
        variant="outlined"
        color="danger"
      />
      <Textarea
        name="Warning"
        placeholder="Type in here…"
        variant="outlined"
        color="warning"
      />
    </Box>
  );
}
```
</example>

### Form props

Standard form attributes are supported for example `required`, `disabled`, etc.

<example name="TextareaFormProps">
```tsx file="TextareaFormProps.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

export default function TextareaFormProps() {
  return (
    <Box
      sx={{
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Textarea
          placeholder="Try to submit with no text!"
          required
          sx={{ mb: 1 }}
        />
        <Textarea placeholder="It is disabled" disabled sx={{ mb: 1 }} />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}
```
</example>

### Focused ring

Provide these CSS variables to `sx` prop to control the focused ring appearance:

- `--Textarea-focusedInset`: the focused ring's **position**, either inside(`inset`) or outside(`var(--any, )`) of the Textarea.
- `--Textarea-focusedThickness`: the **size** of the focused ring.
- `--Textarea-focusedHighlight`: the **color** of the focused ring.

<example name="FocusedRingTextarea">
```tsx file="FocusedRingTextarea.tsx"
import * as React from 'react';
import Textarea from '@mui/joy/Textarea';

export default function FocusedRingTextarea() {
  return (
    <Textarea
      placeholder="Bootstrap"
      minRows={2}
      sx={{
        '--Textarea-focusedInset': 'var(--any, )',
        '--Textarea-focusedThickness': '0.25rem',
        '--Textarea-focusedHighlight': 'rgba(13,110,253,.25)',
        '&::before': {
          transition: 'box-shadow .15s ease-in-out',
        },
        '&:focus-within': {
          borderColor: '#86b7fe',
        },
      }}
    />
  );
}
```
</example>

:::success
To get full control of the focused ring, customize the `box-shadow` of the `::before` pseudo element directly

```js
<Textarea sx={{ '&:focus-within::before': { boxShadow: '...your custom value' } }} />
```

:::

#### Debugging the focus ring

To display the Textarea's focus ring by simulating user's focus, inspect the Textarea element and toggle the [pseudostate panel](https://developer.chrome.com/docs/devtools/css/#pseudostates).

- If you inspect the Textarea's root element, with `.MuiTextarea-root` class, you have to toggle on the `:focus-within` state.
- If you inspect the `<input>` element, you have to toggle on the `:focus` state.

### Triggering the focus ring

To trigger the focus ring programmatically, set the CSS variable `--Textarea-focused: 1`.

<example name="TriggerFocusTextarea">
```tsx file="TriggerFocusTextarea.tsx"
import * as React from 'react';
import Textarea from '@mui/joy/Textarea';

export default function TriggerFocusTextarea() {
  return (
    <Textarea
      placeholder="Looks like I'm focused but no"
      sx={{ '--Textarea-focused': 1 }}
    />
  );
}
```
</example>

:::info
The focus ring still appear on focus even though you set `--Textarea-focused: 0`.
:::

### Validation

To toggle the error state, use the `error` prop.

<example name="TextareaValidation">
```tsx file="TextareaValidation.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

export default function TextareaValidation() {
  return (
    <Box sx={{ p: 2 }}>
      <Textarea
        placeholder="Type in here…"
        error
        defaultValue="Oh no! Something is definitely wrong."
      />
    </Box>
  );
}
```
</example>

Note that using the `color` prop with danger as value gets the same result:

```js
<Textarea color="danger" />
```

### Rows

Use the `minRows` to set the minimum number of lines to show and `maxRows` to limit the number of lines that users will see.

<example name="TextareaRows">
```tsx file="TextareaRows.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

export default function TextareaRows() {
  return (
    <Box sx={{ p: 2 }}>
      <Textarea
        placeholder="Type in here…"
        defaultValue="Try to put text longer than 4 lines."
        minRows={2}
        maxRows={4}
      />
    </Box>
  );
}
```
</example>

### Decorators

Use the `startDecorator` and/or `endDecorator` props to add supporting icons or elements to the textarea.
It's usually more common to see textarea components using decorators at the top and bottom.

<example name="TextareaDecorators">
```tsx file="TextareaDecorators.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';

export default function TextareaDecorators() {
  const [text, setText] = React.useState('');
  const addEmoji = (emoji: string) => () => setText(`${text}${emoji}`);
  return (
    <Textarea
      placeholder="Type in here…"
      value={text}
      onChange={(event) => setText(event.target.value)}
      minRows={2}
      maxRows={4}
      startDecorator={
        <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
            👍
          </IconButton>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
            🏖
          </IconButton>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
            😍
          </IconButton>
          <Button variant="outlined" color="neutral" sx={{ ml: 'auto' }}>
            See all
          </Button>
        </Box>
      }
      endDecorator={
        <Typography level="body-xs" sx={{ ml: 'auto' }}>
          {text.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
  );
}
```
</example>

### HTML textarea ref

Use the `slotProps.textarea` attribute to pass props to the `ref` and other [supported HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes) to the textarea element.

<example name="TextareaRef">
```tsx file="TextareaRef.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';

export default function TextareaRef() {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleTextareaFocus = () => {
    textareaRef.current?.focus();
  };

  return (
    <Stack direction="row" sx={{ gap: 1 }}>
      <Textarea
        placeholder="Placeholder"
        slotProps={{ textarea: { ref: textareaRef } }}
      />
      <Button onClick={handleTextareaFocus}>Focus textarea element</Button>
    </Stack>
  );
}
```
</example>

## Accessibility

In order for the textarea to be accessible, **it should be linked to a label**.

The `FormControl` automatically generates a unique id that links the textarea with the `FormLabel` component:

<example name="TextareaField">
```tsx file="TextareaField.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';

export default function TextareaField() {
  return (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Textarea placeholder="Placeholder" minRows={2} />
      <FormHelperText>This is a helper text.</FormHelperText>
    </FormControl>
  );
}
```
</example>

Alternatively, you can do it manually by targeting the textarea slot:

```jsx
<label htmlFor="unique-id">Label</label>
<Textarea
  slotProps={{
    textarea: {
      id: 'unique-id',
    }
  }}
/>
```

## Common examples

### Focus outline

This example shows how to replace the default focus ring appearance with CSS outline.

<example name="FocusOutlineTextarea">
```tsx file="FocusOutlineTextarea.tsx"
import * as React from 'react';
import Textarea from '@mui/joy/Textarea';

export default function FocusOutlineTextarea() {
  return (
    <Textarea
      placeholder="Type in here…"
      minRows={2}
      sx={{
        '&::before': {
          display: 'none',
        },
        '&:focus-within': {
          outline: '2px solid var(--Textarea-focusedHighlight)',
          outlineOffset: '2px',
        },
      }}
    />
  );
}
```
</example>

### Floating label

To create a floating label textarea, a custom component (combination of `<textarea>` and `<label>`) is required to replace the default textarea slot.

<example name="FloatingLabelTextarea">
```tsx file="FloatingLabelTextarea.tsx"
import * as React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/joy/styles';
import Textarea from '@mui/joy/Textarea';

const StyledTextarea = styled(TextareaAutosize)({
  resize: 'none',
  border: 'none', // remove the native textarea border
  minWidth: 0, // remove the native textarea width
  outline: 0, // remove the native textarea outline
  padding: 0, // remove the native textarea padding
  paddingBlockStart: '1em',
  paddingInlineEnd: `var(--Textarea-paddingInline)`,
  flex: 'auto',
  alignSelf: 'stretch',
  color: 'inherit',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
  },
  '&:focus::placeholder': {
    opacity: 1,
  },
  // specific to TextareaAutosize, cannot use '&:focus ~ label'
  '&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label': {
    top: '0.5rem',
    fontSize: '0.75rem',
  },
  '&:focus + textarea + label': {
    color: 'var(--Textarea-focusedHighlight)',
  },
});

const StyledLabel = styled('label')(({ theme }) => ({
  position: 'absolute',
  lineHeight: 1,
  top: 'calc((var(--Textarea-minHeight) - 1em) / 2)',
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.JSX.IntrinsicElements['textarea']
>(function InnerTextarea(props, ref) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledTextarea minRows={2} {...props} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>Label</StyledLabel>
    </React.Fragment>
  );
});

export default function FloatingLabelTextarea() {
  return (
    <Textarea
      slots={{ textarea: InnerTextarea }}
      slotProps={{ textarea: { placeholder: 'A placeholder' } }}
      sx={{ borderRadius: '6px' }}
    />
  );
}
```
</example>

### Underline input

<example name="UnderlineTextarea">
```tsx file="UnderlineTextarea.tsx"
import * as React from 'react';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';

export default function UnderlineTextarea() {
  return (
    <Stack spacing={2}>
      <Textarea
        minRows={2}
        placeholder="Type in here…"
        sx={{
          '&::before': {
            border: '1.5px solid var(--Textarea-focusedHighlight)',
            transform: 'scaleX(0)',
            left: '2.5px',
            right: '2.5px',
            bottom: 0,
            top: 'unset',
            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
            borderRadius: 0,
            borderBottomLeftRadius: '64px 20px',
            borderBottomRightRadius: '64px 20px',
          },
          '&:focus-within::before': {
            transform: 'scaleX(1)',
          },
        }}
      />
      <Textarea
        minRows={2}
        placeholder="Type in here…"
        variant="soft"
        sx={{
          borderBottom: '2px solid',
          borderColor: 'neutral.outlinedBorder',
          borderRadius: 0,
          '&:hover': {
            borderColor: 'neutral.outlinedHoverBorder',
          },
          '&::before': {
            border: '1px solid var(--Textarea-focusedHighlight)',
            transform: 'scaleX(0)',
            left: 0,
            right: 0,
            bottom: '-2px',
            top: 'unset',
            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
            borderRadius: 0,
          },
          '&:focus-within::before': {
            transform: 'scaleX(1)',
          },
        }}
      />
    </Stack>
  );
}
```
</example>

### Comment box

<example name="ExampleTextareaComment">
```tsx file="ExampleTextareaComment.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';

export default function ExampleTextareaComment() {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <FormControl>
      <FormLabel>Your comment</FormLabel>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <Button sx={{ ml: 'auto' }}>Send</Button>
          </Box>
        }
        sx={[
          {
            minWidth: 300,
            fontWeight,
          },
          italic ? { fontStyle: 'italic' } : { fontStyle: 'initial' },
        ]}
      />
    </FormControl>
  );
}
```
</example>
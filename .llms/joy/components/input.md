---
productId: joy-ui
title: React Input component
components: FormControl, FormHelperText, FormLabel, Input
unstyled: https://base-ui.com/react/components/input
---

# Input

The Input component facilitates the entry of text data from the user.

## Introduction

The Input component enhances the functionality of the native HTML `<input>` tag by providing expanded customization options and accessibility features.

<example name="InputUsage">
```jsx file="InputUsage.js"
import * as React from 'react';
import Input from '@mui/joy/Input';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function InputUsage() {
  return (
    <JoyUsageDemo
      componentName="Input"
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
      ]}
      renderDemo={(props) => <Input {...props} />}
    />
  );
}
```
</example>

## Basics

```jsx
import Input from '@mui/joy/Input';
```

The Input component provides a customizable input field that can be used to collect user information, such as name, email, password, or other types of data.

<example name="BasicInput">
```tsx file="BasicInput.tsx"
import * as React from 'react';
import Input from '@mui/joy/Input';

export default function BasicInput() {
  return <Input placeholder="Type in here…" />;
}
```
</example>

## Customization

### Variants

The Input component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid` (default), `soft`, `outlined`, and `plain`.

<example name="InputVariants">
```tsx file="InputVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';

export default function InputVariants() {
  return (
    <Box
      sx={{ py: 2, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Input placeholder="Type in here…" variant="solid" />
      <Input placeholder="Type in here…" variant="soft" />
      <Input placeholder="Type in here…" variant="outlined" />
      <Input placeholder="Type in here…" variant="plain" />
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

The input component comes in three sizes: `sm`, `md` (default), and `lg`:

<example name="InputSizes">
```tsx file="InputSizes.tsx"
import * as React from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function InputSizes() {
  return (
    <Stack spacing={2}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </Stack>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Colors

Every palette included in the theme is available via the `color` prop.

<example name="InputColors">
```tsx file="InputColors.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';

export default function InputColors() {
  return (
    <Box
      sx={{ py: 2, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Input placeholder="Type in here…" variant="outlined" color="primary" />
      <Input placeholder="Type in here…" variant="outlined" color="neutral" />
      <Input placeholder="Type in here…" variant="outlined" color="danger" />
      <Input placeholder="Type in here…" variant="outlined" color="success" />
      <Input placeholder="Type in here…" variant="outlined" color="warning" />
    </Box>
  );
}
```
</example>

### Form submission

You can add standard form attributes such as `required` and `disabled` to the Input component:

<example name="InputFormProps">
```tsx file="InputFormProps.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function InputFormProps() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        alert(JSON.stringify(formJson));
      }}
    >
      <Stack spacing={1}>
        <Input placeholder="Try to submit with no text!" required />
        <Input placeholder="It is disabled" disabled />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
```
</example>

### Focused ring

Provide these CSS variables to `sx` prop to control the focused ring appearance:

- `--Input-focusedInset`: the focused ring's **position**, either inside(`inset`) or outside(`var(--any, )`) of the Input.
- `--Input-focusedThickness`: the **size** of the focused ring.
- `--Input-focusedHighlight`: the **color** of the focused ring.

<example name="FocusedRingInput">
```tsx file="FocusedRingInput.tsx"
import * as React from 'react';
import Input from '@mui/joy/Input';

export default function FocusedRingInput() {
  return (
    <Input
      placeholder="Bootstrap"
      sx={{
        '--Input-focusedInset': 'var(--any, )',
        '--Input-focusedThickness': '0.25rem',
        '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
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
<Input sx={{ '&:focus-within::before': { boxShadow: '...your custom value' } }} />
```

:::

#### Debugging the focus ring

To display the Input's focus ring by simulating user's focus, inspect the Input element and toggle the [pseudostate panel](https://developer.chrome.com/docs/devtools/css/#pseudostates).

- If you inspect the Input's root element, with `.MuiInput-root` class, you have to toggle on the `:focus-within` state.
- If you inspect the `<input>` element, you can toggle with either `:focus` or `:focus-within` states.

### Triggering the focus ring

To trigger the focus ring programmatically, set the CSS variable `--Input-focused: 1`.

<example name="TriggerFocusInput">
```tsx file="TriggerFocusInput.tsx"
import * as React from 'react';
import Input from '@mui/joy/Input';

export default function TriggerFocusInput() {
  return (
    <Input
      placeholder="Looks like I'm focused but no"
      sx={{ '--Input-focused': 1, width: 256 }}
    />
  );
}
```
</example>

:::info
The focus ring still appear on focus even though you set `--Input-focused: 0`.
:::

### Label and helper text

Group Input with the Form label and Form helper text in a Form control component to create a text field.

<example name="InputField">
```tsx file="InputField.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

export default function InputField() {
  return (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input placeholder="Placeholder" />
      <FormHelperText>This is a helper text.</FormHelperText>
    </FormControl>
  );
}
```
</example>

### Validation

Use the `error` prop on Input or Form Control to toggle the error state:

<example name="InputValidation">
```tsx file="InputValidation.tsx"
import * as React from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Stack from '@mui/joy/Stack';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export default function InputValidation() {
  return (
    <Stack spacing={2}>
      <Input placeholder="Type in here…" error defaultValue="Oh no, error found!" />
      <FormControl error>
        <FormLabel>Label</FormLabel>
        <Input placeholder="Type in here…" defaultValue="Oh no, error found!" />
        <FormHelperText>
          <InfoOutlined />
          Opps! something is wrong.
        </FormHelperText>
      </FormControl>
    </Stack>
  );
}
```
</example>

:::info
Using the `color` prop with `danger` as the value gives you the same result:

```js
<Input color="danger" />
```

:::

### Decorators

The `startDecorator` and `endDecorator` props can be used to add supporting icons or elements to the input.
With inputs, decorators are typically located at the top and/or bottom of the input field.

<example name="InputDecorators">
```tsx file="InputDecorators.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Stack from '@mui/joy/Stack';
import LocationOn from '@mui/icons-material/LocationOn';

export default function InputDecorators() {
  const [currency, setCurrency] = React.useState('dollar');
  return (
    <Stack spacing={1.5}>
      <Input
        placeholder="Amount"
        startDecorator={{ dollar: '

### Inner HTML input

If you need to pass props to the inner HTML `<input>`, use `slotProps={{ input: { ...props } }}`.
These props may include HTML attributes such as `ref`, `min`, `max`, and `autocomplete`.

<example name="InputSlotProps">
```tsx file="InputSlotProps.tsx"
import * as React from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function InputSlotProps() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <Stack spacing={1.5} sx={{ minWidth: 300 }}>
      <Input
        type="number"
        defaultValue={2.5}
        slotProps={{
          input: {
            ref: inputRef,
            min: 1,
            max: 5,
            step: 0.1,
          },
        }}
      />
      <Input
        type="date"
        slotProps={{
          input: {
            min: '2018-06-07',
            max: '2018-06-14',
          },
        }}
      />
    </Stack>
  );
}
```
</example>

## CSS variables playground

Play around with the CSS variables available to the Input component to see how the design changes.
You can use these to customize the component with both the `sx` prop and the theme.

<example name="InputVariables">
```jsx file="InputVariables.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import MailIcon from '@mui/icons-material/Mail';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function InputVariables() {
  return (
    <JoyVariablesDemo
      componentName="Input"
      renderCode={(formattedSx) => `<Input
  startDecorator={<MailIcon />}
  endDecorator={<Button>Message</Button>}${formattedSx ? `${formattedSx}>` : '\n>'}`}
      data={[
        {
          var: '--Input-radius',
          defaultValue: '8px',
        },
        {
          var: '--Input-gap',
          defaultValue: '8px',
        },
        {
          var: '--Input-placeholderOpacity',
          defaultValue: 0.5,
          inputAttributes: {
            min: 0.1,
            max: 1,
            step: 0.1,
          },
        },
        {
          var: '--Input-focusedThickness',
          defaultValue: '2px',
        },
        {
          var: '--Input-minHeight',
          defaultValue: '40px',
        },
        {
          var: '--Input-paddingInline',
          defaultValue: '12px',
        },
        {
          var: '--Input-decoratorChildHeight',
          defaultValue: '32px',
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
          <Input
            startDecorator={<MailIcon />}
            endDecorator={<Button>Message</Button>}
            placeholder="Type in here…"
            sx={sx}
          />
        </Box>
      )}
    />
  );
}
```
</example>

## Common examples

### Focus outline

This example shows how to replace the default focus ring (using `::before`) with CSS `outline`.

<example name="FocusOutlineInput">
```tsx file="FocusOutlineInput.tsx"
import * as React from 'react';
import Input from '@mui/joy/Input';

export default function FocusOutlineInput() {
  return (
    <Input
      placeholder="Type in here…"
      sx={{
        '&::before': {
          display: 'none',
        },
        '&:focus-within': {
          outline: '2px solid var(--Input-focusedHighlight)',
          outlineOffset: '2px',
        },
      }}
    />
  );
}
```
</example>

### Floating label

To create a floating label input, a custom component (combination of `<input>` and `<label>`) is required to replace the default input slot.

<example name="FloatingLabelInput">
```tsx file="FloatingLabelInput.tsx"
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Input from '@mui/joy/Input';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';

const StyledInput = styled('input')({
  border: 'none', // remove the native input border
  minWidth: 0, // remove the native input width
  outline: 0, // remove the native input outline
  padding: 0, // remove the native input padding
  paddingTop: '1em',
  flex: 1,
  color: 'inherit',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  textOverflow: 'ellipsis',
  '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
  },
  '&:focus::placeholder': {
    opacity: 1,
  },
  '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
    top: '0.5rem',
    fontSize: '0.75rem',
  },
  '&:focus ~ label': {
    color: 'var(--Input-focusedHighlight)',
  },
  '&:-webkit-autofill': {
    alignSelf: 'stretch', // to fill the height of the root slot
  },
  '&:-webkit-autofill:not(* + &)': {
    marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
    paddingInlineStart: 'var(--Input-paddingInline)',
    borderTopLeftRadius:
      'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
    borderBottomLeftRadius:
      'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
  },
});

const StyledLabel = styled('label')(({ theme }) => ({
  position: 'absolute',
  lineHeight: 1,
  top: 'calc((var(--Input-minHeight) - 1em) / 2)',
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerInput = React.forwardRef<
  HTMLInputElement,
  React.JSX.IntrinsicElements['input']
>(function InnerInput(props, ref) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledInput {...props} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>Label</StyledLabel>
    </React.Fragment>
  );
});

export default function FloatingLabelInput() {
  return (
    <Input
      endDecorator={<CheckCircleOutlined />}
      slots={{ input: InnerInput }}
      slotProps={{ input: { placeholder: 'A placeholder', type: 'password' } }}
      sx={{ '--Input-minHeight': '56px', '--Input-radius': '6px' }}
    />
  );
}
```
</example>

### Underline input

<example name="UnderlineInput">
```tsx file="UnderlineInput.tsx"
import * as React from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function UnderlineInput() {
  return (
    <Stack spacing={2}>
      <Input
        placeholder="Type in here…"
        sx={{
          '&::before': {
            border: '1.5px solid var(--Input-focusedHighlight)',
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
      <Input
        placeholder="Type in here…"
        variant="soft"
        sx={{
          '--Input-radius': '0px',
          borderBottom: '2px solid',
          borderColor: 'neutral.outlinedBorder',
          '&:hover': {
            borderColor: 'neutral.outlinedHoverBorder',
          },
          '&::before': {
            border: '1px solid var(--Input-focusedHighlight)',
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

### Newsletter Subscription

<example name="InputSubscription">
```tsx file="InputSubscription.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export default function InputSubscription() {
  const [data, setData] = React.useState<{
    email: string;
    status: 'initial' | 'loading' | 'failure' | 'sent';
  }>({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <FormLabel
          sx={(theme) => ({
            '--FormLabel-color': theme.vars.palette.primary.plainColor,
          })}
        >
          MUI Newsletter
        </FormLabel>
        <Input
          sx={{ '--Input-decoratorChildHeight': '45px' }}
          placeholder="mail@mui.com"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: 'initial' })
          }
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              loading={data.status === 'loading'}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Subscribe
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}
        {data.status === 'sent' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
```
</example>

### Password meter

<example name="PasswordMeterInput">
```tsx file="PasswordMeterInput.tsx"
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Key from '@mui/icons-material/Key';

export default function PasswordMeterInput() {
  const [value, setValue] = React.useState('');
  const minLength = 12;
  return (
    <Stack spacing={0.5} sx={{ '--hue': Math.min(value.length * 10, 120) }}>
      <Input
        type="password"
        placeholder="Type in here…"
        startDecorator={<Key />}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <LinearProgress
        determinate
        size="sm"
        value={Math.min((value.length * 100) / minLength, 100)}
        sx={{ bgcolor: 'background.level3', color: 'hsl(var(--hue) 80% 40%)' }}
      />
      <Typography
        level="body-xs"
        sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
      >
        {value.length < 3 && 'Very weak'}
        {value.length >= 3 && value.length < 6 && 'Weak'}
        {value.length >= 6 && value.length < 10 && 'Strong'}
        {value.length >= 10 && 'Very strong'}
      </Typography>
    </Stack>
  );
}
```
</example>

### Debounced Input

<example name="DebouncedInput">
```tsx file="DebouncedInput.tsx"
import * as React from 'react';
import Input, { InputProps } from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

type DebounceProps = {
  handleDebounce: (value: string) => void;
  debounceTimeout: number;
};

function DebounceInput(props: InputProps & DebounceProps) {
  const { handleDebounce, debounceTimeout, ...other } = props;

  const timerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      handleDebounce(event.target.value);
    }, debounceTimeout);
  };

  return <Input {...other} onChange={handleChange} />;
}

export default function DebouncedInput() {
  const [debouncedValue, setDebouncedValue] = React.useState('');
  const handleDebounce = (value: string) => {
    setDebouncedValue(value);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <DebounceInput
        placeholder="Type in here…"
        debounceTimeout={1000}
        handleDebounce={handleDebounce}
      />
      <Typography>Debounced input: {debouncedValue}</Typography>
    </Box>
  );
}
```
</example>

### Third-party formatting

The Input component can be integrated with third-party formatting libraries for more complex use cases.

Create an adapter component to get the props from the Input component and map them to the third-party component APIs.
Then use that adapter as a value to the `slotProps.input.component` property of the Joy UI Input.

The demos below illustrate how to do this with two popular libraries.

#### React imask

[react-imask](https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask) provides the `IMaskInput` component for complex formatting options.

<example name="InputReactImask">
```tsx file="InputReactImask.tsx"
import * as React from 'react';
import { IMaskInput } from 'react-imask';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskAdapter = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskAdapter(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default function InputReactImask() {
  const [value, setValue] = React.useState('(100) 000-0000');
  return (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Placeholder"
        slotProps={{ input: { component: TextMaskAdapter } }}
      />
    </FormControl>
  );
}
```
</example>

#### React number format

[react-number-format](https://github.com/s-yadav/react-number-format) provides the `NumericFormat` component for enforcing text formatting that follows a specific number or string pattern.

<example name="InputReactNumberFormat">
```tsx file="InputReactNumberFormat.tsx"
import * as React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatAdapter = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatAdapter(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  },
);

export default function InputReactNumberFormat() {
  const [value, setValue] = React.useState('1320');
  return (
    <FormControl>
      <FormLabel>React number format</FormLabel>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Placeholder"
        slotProps={{
          input: {
            component: NumericFormatAdapter,
          },
        }}
      />
    </FormControl>
  );
}
```
</example>

## Accessibility

All inputs should have a descriptive label linked to help users understand its purpose.

The Form Control component automatically generates a unique ID that links the Input with the Form Label and Form Helper Text components:

<example name="InputField">
```tsx file="InputField.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

export default function InputField() {
  return (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input placeholder="Placeholder" />
      <FormHelperText>This is a helper text.</FormHelperText>
    </FormControl>
  );
}
```
</example>

Alternatively, you can do this manually by targeting the input slot—see [inner HTML input](#inner-html-input) for details:

```jsx
<label htmlFor="unique-id">Label</label>
<Input
  slotProps={{
    input: {
      id: 'unique-id',
    }
  }}
/>
```

## Anatomy

The Input component is composed of a root `<div>` with an `<input>` nested inside:

```html
<div class="MuiInput-root">
  <input class="MuiInput-input" />
</div>
```
, baht: '฿', yen: '¥' }[currency]}
        endDecorator={
          <React.Fragment>
            <Divider orientation="vertical" />
            <Select
              variant="plain"
              value={currency}
              onChange={(_, value) => setCurrency(value!)}
              slotProps={{
                listbox: {
                  variant: 'outlined',
                },
              }}
              sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
            >
              <Option value="dollar">US dollar</Option>
              <Option value="baht">Thai baht</Option>
              <Option value="yen">Japanese yen</Option>
            </Select>
          </React.Fragment>
        }
        sx={{ width: 300 }}
      />
      <Input
        placeholder="Your location"
        startDecorator={
          <Button variant="soft" color="neutral" startDecorator={<LocationOn />}>
            Locate
          </Button>
        }
        sx={{ width: 300 }}
      />
    </Stack>
  );
}
```
</example>

### Inner HTML input

If you need to pass props to the inner HTML `<input>`, use `slotProps={{ input: { ...props } }}`.
These props may include HTML attributes such as `ref`, `min`, `max`, and `autocomplete`.

{{"demo": "InputSlotProps.js"}}

## CSS variables playground

Play around with the CSS variables available to the Input component to see how the design changes.
You can use these to customize the component with both the `sx` prop and the theme.

{{"demo": "InputVariables.js", "hideToolbar": true, "bg": "gradient"}}

## Common examples

### Focus outline

This example shows how to replace the default focus ring (using `::before`) with CSS `outline`.

{{"demo": "FocusOutlineInput.js"}}

### Floating label

To create a floating label input, a custom component (combination of `<input>` and `<label>`) is required to replace the default input slot.

{{"demo": "FloatingLabelInput.js"}}

### Underline input

{{"demo": "UnderlineInput.js"}}

### Newsletter Subscription

{{"demo": "InputSubscription.js"}}

### Password meter

{{"demo": "PasswordMeterInput.js"}}

### Debounced Input

{{"demo": "DebouncedInput.js"}}

### Third-party formatting

The Input component can be integrated with third-party formatting libraries for more complex use cases.

Create an adapter component to get the props from the Input component and map them to the third-party component APIs.
Then use that adapter as a value to the `slotProps.input.component` property of the Joy UI Input.

The demos below illustrate how to do this with two popular libraries.

#### React imask

[react-imask](https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask) provides the `IMaskInput` component for complex formatting options.

{{"demo": "InputReactImask.js"}}

#### React number format

[react-number-format](https://github.com/s-yadav/react-number-format) provides the `NumericFormat` component for enforcing text formatting that follows a specific number or string pattern.

{{"demo": "InputReactNumberFormat.js"}}

## Accessibility

All inputs should have a descriptive label linked to help users understand its purpose.

The Form Control component automatically generates a unique ID that links the Input with the Form Label and Form Helper Text components:

{{"demo": "InputField.js"}}

Alternatively, you can do this manually by targeting the input slot—see [inner HTML input](#inner-html-input) for details:

```jsx
<label htmlFor="unique-id">Label</label>
<Input
  slotProps={{
    input: {
      id: 'unique-id',
    }
  }}
/>
```

## Anatomy

The Input component is composed of a root `<div>` with an `<input>` nested inside:

```html
<div class="MuiInput-root">
  <input class="MuiInput-input" />
</div>
```
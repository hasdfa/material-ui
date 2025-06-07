---
productId: joy-ui
title: React Alert component
components: Alert
githubLabel: 'component: alert'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/alert/
---

# Alert

Alerts display brief messages for the user without interrupting their use of the app.

## Introduction

The Alert component can be used to provide important and potentially time-sensitive information in a way that does not interfere with the user's tasks. (Source: [ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).)

<example name="AlertUsage">
```jsx file="AlertUsage.js"
import * as React from 'react';
import Alert from '@mui/joy/Alert';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function AlertUsage() {
  return (
    <JoyUsageDemo
      componentName="Alert"
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
      ]}
      renderDemo={(props) => (
        <Alert {...props}>This is a Joy UI Alert — check it out!</Alert>
      )}
    />
  );
}
```
</example>

:::info
Alerts should not be confused with alert _dialogs_ ([ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)), which _are_ intended to interrupt the user to obtain a response.
Use the Joy UI [Modal](https://mui.com/joy-ui/react-modal/) if you need the behavior of a dialog.
:::

## Basics

```jsx
import Alert from '@mui/joy/Alert';
```

The Alert component wraps around its content, and stretches to fill its enclosing container, as shown below:

<example name="AlertBasic">
```tsx file="AlertBasic.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';

export default function AlertBasic() {
  return (
    <Box sx={{ width: '100%' }}>
      <Alert>This is a basic Alert.</Alert>
    </Box>
  );
}
```
</example>

## Customization

### Variants

The Alert component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `solid`, `soft` (default), `outlined`, and `plain`.

<example name="AlertVariants">
```tsx file="AlertVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';

export default function AlertVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
      <Alert variant="solid">This is an Alert using the solid variant.</Alert>
      <Alert variant="soft">This is an Alert using the soft variant.</Alert>
      <Alert variant="outlined">This is an Alert using the outlined variant.</Alert>
      <Alert variant="plain">This is an Alert using the plain variant.</Alert>
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

The Alert component comes in three sizes: `sm`, `md` (default), and `lg`:

<example name="AlertSizes">
```tsx file="AlertSizes.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';

export default function AlertSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
      <Alert size="sm">This is a small Alert.</Alert>
      <Alert size="md">This is a medium Alert.</Alert>
      <Alert size="lg">This is a large Alert.</Alert>
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
The demo below shows how the values for the `color` prop are affected by the global variants:

<example name="AlertColors">
```tsx file="AlertColors.tsx"
import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { VariantProp } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';

export default function AlertColors() {
  const [variant, setVariant] = React.useState<VariantProp>('solid');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Stack spacing={1} sx={{ width: '100%', maxWidth: 400 }}>
        <Alert variant={variant} color="primary">
          Primary
        </Alert>
        <Alert variant={variant} color="neutral">
          Neutral
        </Alert>
        <Alert variant={variant} color="danger">
          Danger
        </Alert>
        <Alert variant={variant} color="success">
          Success
        </Alert>
        <Alert variant={variant} color="warning">
          Warning
        </Alert>
      </Stack>
      <Sheet sx={{ pl: 4, ml: 3, borderLeft: '1px solid', borderColor: 'divider' }}>
        <Typography
          level="body-sm"
          id="variant-label"
          textColor="text.primary"
          sx={{ fontWeight: 'xl', mb: 1 }}
        >
          Variant:
        </Typography>
        <RadioGroup
          size="sm"
          aria-labelledby="variant-label"
          name="variant"
          value={variant}
          onChange={(event) => setVariant(event.target.value as VariantProp)}
        >
          <Radio label="Solid" value="solid" />
          <Radio label="Soft" value="soft" />
          <Radio label="Outlined" value="outlined" />
          <Radio label="Plain" value="plain" />
        </RadioGroup>
      </Sheet>
    </Box>
  );
}
```
</example>

### Decorators

Use the `startDecorator` and `endDecorator` props to append actions and icons to either side of the Alert:

<example name="AlertWithDecorators">
```tsx file="AlertWithDecorators.tsx"
import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function AlertWithDecorators() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      <Alert
        variant="soft"
        color="success"
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button size="sm" variant="solid" color="success">
            Close
          </Button>
        }
      >
        Your message was sent successfully.
      </Alert>
      <Alert
        variant="outlined"
        color="neutral"
        startDecorator={<AccountCircleRoundedIcon />}
        endDecorator={
          <IconButton variant="plain" size="sm" color="neutral">
            <CloseRoundedIcon />
          </IconButton>
        }
      >
        Your account was updated.
      </Alert>
    </Box>
  );
}
```
</example>

### Inverted colors

The Alert component supports Joy UI's [color inversion](https://mui.com/joy-ui/main-features/color-inversion/) by using `invertedColors` prop.

<example name="AlertInvertedColors">
```tsx file="AlertInvertedColors.tsx"
import * as React from 'react';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';

export default function AlertInvertedColors() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <Alert
        size="lg"
        color="success"
        variant="solid"
        invertedColors
        startDecorator={
          <AspectRatio
            variant="solid"
            ratio="1"
            sx={{
              minWidth: 40,
              borderRadius: '50%',
              boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
            }}
          >
            <div>
              <Check fontSize="xl2" />
            </div>
          </AspectRatio>
        }
        endDecorator={
          <IconButton
            variant="plain"
            sx={{
              '--IconButton-size': '32px',
              transform: 'translate(0.5rem, -0.5rem)',
            }}
          >
            <Close />
          </IconButton>
        }
        sx={{ alignItems: 'flex-start', overflow: 'hidden' }}
      >
        <div>
          <Typography level="title-lg">Success</Typography>
          <Typography level="body-sm">
            Success is walking from failure to failure with no loss of enthusiam.
          </Typography>
        </div>
        <LinearProgress
          variant="solid"
          color="success"
          value={40}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 0,
          }}
        />
      </Alert>
      <Alert
        variant="soft"
        color="danger"
        invertedColors
        startDecorator={
          <CircularProgress size="lg" color="danger">
            <Warning />
          </CircularProgress>
        }
        sx={{ alignItems: 'flex-start', gap: '1rem' }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography level="title-md">Lost connection</Typography>
          <Typography level="body-md">
            Please verify your network connection and try again.
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="outlined" size="sm">
              Open network settings
            </Button>
            <Button variant="solid" size="sm">
              Try again
            </Button>
          </Box>
        </Box>
      </Alert>
    </Stack>
  );
}
```
</example>

## Common examples

### Various states

<example name="AlertVariousStates">
```tsx file="AlertVariousStates.tsx"
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import * as React from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { ColorPaletteProp } from '@mui/joy/styles';

export default function AlertVariousStates() {
  const items: {
    title: string;
    color: ColorPaletteProp;
    icon: React.ReactElement<any>;
  }[] = [
    { title: 'Success', color: 'success', icon: <CheckCircleIcon /> },
    { title: 'Warning', color: 'warning', icon: <WarningIcon /> },
    { title: 'Error', color: 'danger', icon: <ReportIcon /> },
    { title: 'Neutral', color: 'neutral', icon: <InfoIcon /> },
  ];
  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
      {items.map(({ title, color, icon }) => (
        <Alert
          key={title}
          sx={{ alignItems: 'flex-start' }}
          startDecorator={icon}
          variant="soft"
          color={color}
          endDecorator={
            <IconButton variant="soft" color={color}>
              <CloseRoundedIcon />
            </IconButton>
          }
        >
          <div>
            <div>{title}</div>
            <Typography level="body-sm" color={color}>
              This is a time-sensitive {title} Alert.
            </Typography>
          </div>
        </Alert>
      ))}
    </Box>
  );
}
```
</example>

### Danger alerts

<example name="AlertWithDangerState">
```tsx file="AlertWithDangerState.tsx"
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';

export default function AlertWithDangerState() {
  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
      <Alert
        startDecorator={<WarningIcon />}
        variant="soft"
        color="danger"
        endDecorator={
          <React.Fragment>
            <Button variant="soft" color="danger" sx={{ mr: 1 }}>
              Undo
            </Button>
            <IconButton variant="soft" size="sm" color="danger">
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      >
        This file was successfully deleted
      </Alert>
      <Alert
        startDecorator={<WarningIcon />}
        variant="solid"
        color="danger"
        endDecorator={
          <React.Fragment>
            <Button variant="solid" color="danger" sx={{ mr: 1 }}>
              Undo
            </Button>
            <IconButton variant="solid" size="sm" color="danger">
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      >
        This file was successfully deleted
      </Alert>

      <Alert
        startDecorator={<WarningIcon />}
        variant="outlined"
        color="danger"
        endDecorator={
          <React.Fragment>
            <Button variant="plain" color="danger" sx={{ mr: 1 }}>
              Undo
            </Button>
            <IconButton variant="soft" size="sm" color="danger">
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      >
        This file was successfully deleted
      </Alert>
    </Box>
  );
}
```
</example>

## Accessibility

Here are some factors to consider to ensure that your Alert is accessible:

- Because alerts are not intended to interfere with the use of the app, your Alert component should _never_ affect the keyboard focus.
- If an alert contains an action, that action must have a `tabindex` of `0` so it can be reached by keyboard-only users.
- Essential alerts should not disappear automatically—[timed interactions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html) can make your app inaccessible to users who need extra time to understand or locate the alert.
- Alerts that occur too frequently can [inhibit the usability](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html) of your app.
- Dynamically rendered alerts are announced by screen readers; alerts that are already present on the page when it loads are _not_ announced.
- Color does not add meaning to the UI for users who require assistive technology. You must ensure that any information conveyed through color is also denoted in other ways, such as within the text of the alert itself, or with additional hidden text that's read by screen readers.

## Anatomy

The Alert component is composed of a single root `<div>` element with its `role` set to `alert`:

```html
<div role="alert" class="MuiAlert-root">
  <!-- Alert contents -->
</div>
```
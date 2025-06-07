---
productId: joy-ui
title: React Accordion component
components: Accordion, AccordionDetails, AccordionGroup, AccordionSummary
githubLabel: 'component: accordion'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
unstyled: https://base-ui.com/react/components/accordion
---

# Accordion

Accordions let users show and hide sections of related content on a page.

## Introduction

Joy UI provides four accordion-related components:

- [Accordion Group](#basic-usage) - a container that groups multiple accordions. It **does not** control the state of each accordion.
- [Accordion](#basic-usage) - a component that contains the expansion logic and send to AccordionSummary and AccordionDetails.
- [Accordion Summary](#basic-usage) - a header of the accordion which contain a button that triggers the expansion.
- [Accordion Details](#basic-usage) - a wrapper for the accordion details.

<example name="AccordionUsage">
```jsx file="AccordionUsage.js"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function AccordionUsage() {
  return (
    <JoyUsageDemo
      componentName="AccordionGroup"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'plain',
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
          codeBlockDisplay: false,
        },
        {
          propName: 'children',
          defaultValue: `$children`,
        },
      ]}
      getCodeBlock={(code, props) =>
        code.replace(
          '$children',
          `<Accordion${props.disabled ? ' disabled' : ''}${
            props.variant === 'solid'
              ? ` variant=${props.variant} color=${props.color}`
              : ''
          }>
    <AccordionSummary${
      props.variant === 'solid'
        ? ` variant=${props.variant} color=${props.color}`
        : ''
    }>Title</AccordionSummary>
    <AccordionDetails${
      props.variant === 'solid'
        ? ` variant=${props.variant} color=${props.color}`
        : ''
    }>Content</AccordionDetails>
  </Accordion>`,
        )
      }
      renderDemo={({ disabled, ...props }) => (
        <AccordionGroup
          {...props}
          sx={{ width: 300, maxWidth: '100%', alignSelf: 'flex-start', mb: 3 }}
        >
          <Accordion
            {...(props.variant === 'solid' && {
              variant: 'solid',
              color: props.color,
            })}
            disabled={disabled}
          >
            <AccordionSummary
              {...(props.variant === 'solid' && {
                variant: 'solid',
                color: props.color,
              })}
            >
              First Header
            </AccordionSummary>
            <AccordionDetails
              {...(props.variant === 'solid' && {
                variant: 'solid',
                color: props.color,
              })}
            >
              Content of the first accordion.
            </AccordionDetails>
          </Accordion>
          <Accordion
            disabled={disabled}
            {...(props.variant === 'solid' && {
              variant: 'solid',
              color: props.color,
            })}
          >
            <AccordionSummary
              {...(props.variant === 'solid' && {
                variant: 'solid',
                color: props.color,
              })}
            >
              Second Header
            </AccordionSummary>
            <AccordionDetails
              {...(props.variant === 'solid' && {
                variant: 'solid',
                color: props.color,
              })}
            >
              Content of the second accordion.
            </AccordionDetails>
          </Accordion>
          <Accordion
            disabled={disabled}
            {...(props.variant === 'solid' && {
              variant: 'solid',
              color: props.color,
            })}
          >
            <AccordionSummary
              {...(props.variant === 'solid' && {
                variant: 'solid',
                color: props.color,
              })}
            >
              Third Header
            </AccordionSummary>
            <AccordionDetails
              {...(props.variant === 'solid' && {
                variant: 'solid',
                color: props.color,
              })}
            >
              Content of the third accordion.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
```

<example name="AccordionBasic">
```tsx file="AccordionBasic.tsx"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionBasic() {
  return (
    <AccordionGroup sx={{ maxWidth: 400 }}>
      <Accordion>
        <AccordionSummary>First accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Second accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Third accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
```
</example>

## Customization

### Sizes

The AccordionGroup component comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="AccordionSizes">
```tsx file="AccordionSizes.tsx"
import * as React from 'react';
import AccordionGroup, { AccordionGroupProps } from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Button from '@mui/joy/Button';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Stack from '@mui/joy/Stack';

export default function AccordionSizes() {
  const [size, setSize] = React.useState<AccordionGroupProps['size']>('md');
  return (
    <Stack spacing={2} sx={{ maxWidth: 400, flex: 1 }}>
      <ToggleButtonGroup
        size="sm"
        buttonFlex={1}
        value={size}
        onChange={(event, newValue) => setSize(newValue || size)}
      >
        <Button value="sm">Small</Button>
        <Button value="md">Medium</Button>
        <Button value="lg">Large</Button>
      </ToggleButtonGroup>
      <AccordionGroup size={size}>
        <Accordion>
          <AccordionSummary>First accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Second accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Third accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Stack>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Controlled accordion

Use the `expanded` prop to control the expansion state of the accordion and listen to the expansion event via `onChange` prop.

<example name="AccordionControlled">
```tsx file="AccordionControlled.tsx"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionControlled() {
  const [index, setIndex] = React.useState<number | null>(0);
  return (
    <AccordionGroup sx={{ maxWidth: 400 }}>
      <Accordion
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
        }}
      >
        <AccordionSummary>First accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
        <AccordionSummary>Second accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
        <AccordionSummary>Third accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
```
</example>

### Disabled

Use the `disabled` prop to disable the accordion trigger.

<example name="AccordionDisabled">
```tsx file="AccordionDisabled.tsx"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionDisabled() {
  return (
    <AccordionGroup sx={{ maxWidth: 400 }}>
      <Accordion disabled>
        <AccordionSummary>First accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary>Second accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded disabled>
        <AccordionSummary>Third accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
```
</example>

:::info
Note: the `disabled` prop only disables the accordion trigger, not the accordion content.
:::

### Removing divider

Use `disableDivider` prop on the Accordion Group component to hide the divider between accordions.

<example name="AccordionNoDivider">
```tsx file="AccordionNoDivider.tsx"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionNoDivider() {
  return (
    <AccordionGroup disableDivider sx={{ maxWidth: 400 }}>
      <Accordion>
        <AccordionSummary>First accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Second accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Third accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
```
</example>

:::info
**Good to know**: the reason that ListDivider can be used is because the accordion family reuses styles from the [List](https://mui.com/joy-ui/react-list/) family.
:::

### Animating the expansion

Use `transition` prop to animate the expansion. The value can be a **string** if you want the transition to be the same for initial and expanded states, or an **object** if you want to customize the transition for each state.

The object value can contain the following keys:

- `initial`: the transition when the accordion is closed
- `expanded`: the transition when the accordion is open

<example name="AccordionTransition">
```jsx file="AccordionTransition.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import { BrandingProvider } from '@mui/docs/branding';

export default function AccordionTransition() {
  const [transition, setTransition] = React.useState('0.2s ease');
  return (
    <Stack spacing={2} sx={{ alignItems: 'center', flex: 1 }}>
      <RadioGroup
        orientation="horizontal"
        value={transition}
        onChange={(event) => {
          setTransition(event.target.value);
        }}
      >
        <Radio value="0.2s ease" label="Easing" />
        <Radio value="mix" label="Mix" />
      </RadioGroup>
      <AccordionGroup
        transition={
          transition === 'mix'
            ? {
                initial: '0.3s ease-out',
                expanded: '0.2s ease',
              }
            : transition
        }
        sx={{ maxWidth: 400 }}
      >
        <Accordion>
          <AccordionSummary>📖 How to animate the panel?</AccordionSummary>
          <AccordionDetails>
            <Typography>
              The AccordionGroup supports the <code>transition</code> prop to
              customize the animation of the panel. You can provide a <b>string</b>{' '}
              value or an <b>object</b> to fine tune the animation at the initial and
              expanded states.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>🤔 Does it work with dynamic height?</AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely yes! an by the way, it is <b>pure CSS</b>.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>🪄 What kind of magic this is?</AccordionSummary>
          <AccordionDetails>
            <Typography>
              The panel is a <b>CSS Grid</b> which can be transitioned by the{' '}
              <code>grid-template-rows</code> property.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
      <Box sx={{ width: '100%' }}>
        <BrandingProvider>
          <HighlightedCode
            code={`<AccordionGroup transition=${
              transition === 'mix'
                ? `{{
  initial: "0.3s ease-out",
  expanded: "0.2s ease",
}}`
                : `"${transition}"`
            }>`}
            language="jsx"
          />
        </BrandingProvider>
      </Box>
    </Stack>
  );
}
```
</example>

### Indicator

Use `indicator` prop to customize the indicator of the accordion.

<example name="AccordionIndicator">
```tsx file="AccordionIndicator.tsx"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';

export default function AccordionIndicator() {
  return (
    <AccordionGroup
      sx={{
        maxWidth: 400,
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: '0.2s',
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: 'rotate(45deg)',
        },
      }}
    >
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}>First accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}>Second accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}>Third accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
```
</example>

### Styling on expansion

Use `sx` prop on the AccordionGroup to style all the accordions at once.

<example name="AccordionStylingExpansion">
```tsx file="AccordionStylingExpansion.tsx"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionStylingExpansion() {
  return (
    <AccordionGroup
      sx={(theme) => ({
        maxWidth: 400,
        [`& .${accordionClasses.root}`]: {
          marginTop: '0.5rem',
          transition: '0.2s ease',
          '& button:not([aria-expanded="true"])': {
            transition: '0.2s ease',
            paddingBottom: '0.625rem',
          },
          '& button:hover': {
            background: 'transparent',
          },
        },
        [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
          bgcolor: 'background.level1',
          borderRadius: 'md',
          borderBottom: '1px solid',
          borderColor: 'background.level2',
        },
        '& [aria-expanded="true"]': {
          boxShadow: `inset 0 -1px 0 ${theme.vars.palette.divider}`,
        },
      })}
    >
      <Accordion>
        <AccordionSummary>First accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Second accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Third accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
```
</example>

## Common examples

### Depth panel

This example shows how to customize the accordion to create lines and depth to make it look more realistic.

<example name="AccordionDepthPanel">
```tsx file="AccordionDepthPanel.tsx"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';

export default function AccordionDepthPanel() {
  return (
    <AccordionGroup
      variant="outlined"
      transition="0.2s"
      sx={(theme) => ({
        maxWidth: 400,
        borderRadius: 'lg',
        [`& .${accordionSummaryClasses.button}:hover`]: {
          bgcolor: 'transparent',
        },
        [`& .${accordionDetailsClasses.content}`]: {
          boxShadow: `inset 0 1px ${theme.vars.palette.divider}`,
          [`&.${accordionDetailsClasses.expanded}`]: {
            paddingBlock: '0.75rem',
          },
        },
      })}
    >
      <Accordion defaultExpanded>
        <AccordionSummary>First accordion</AccordionSummary>
        <AccordionDetails variant="soft">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Second accordion</AccordionSummary>
        <AccordionDetails variant="soft">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Third accordion</AccordionSummary>
        <AccordionDetails variant="soft">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
```
</example>

### User settings

This example shows how to customize the accordion and craft diverse compositions using additional components.

<example name="AccordionFilter">
```tsx file="AccordionFilter.tsx"
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import Switch from '@mui/joy/Switch';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ListItemContent from '@mui/joy/ListItemContent';

import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import BluetoothRoundedIcon from '@mui/icons-material/BluetoothRounded';
import TapAndPlayRoundedIcon from '@mui/icons-material/TapAndPlayRounded';
import EditNotificationsRoundedIcon from '@mui/icons-material/EditNotificationsRounded';
import AdUnitsRoundedIcon from '@mui/icons-material/AdUnitsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import SpatialTrackingRoundedIcon from '@mui/icons-material/SpatialTrackingRounded';
import SettingsVoiceRoundedIcon from '@mui/icons-material/SettingsVoiceRounded';

export default function AccordionFilter() {
  return (
    <AccordionGroup
      variant="plain"
      transition="0.2s"
      sx={{
        maxWidth: 400,
        borderRadius: 'md',
        [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
          {
            paddingBlock: '1rem',
          },
        [`& .${accordionSummaryClasses.button}`]: {
          paddingBlock: '1rem',
        },
      }}
    >
      <Accordion>
        <AccordionSummary>
          <Avatar color="primary">
            <TapAndPlayRoundedIcon />
          </Avatar>
          <ListItemContent>
            <Typography level="title-md">Connections</Typography>
            <Typography level="body-sm">
              Activate or deactivate your connections
            </Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <AirplanemodeActiveRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Airplane Mode</FormLabel>
              <Switch size="sm" />
            </FormControl>

            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <WifiRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Wi-Fi</FormLabel>
              <Switch size="sm" />
            </FormControl>

            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <BluetoothRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Bluetooth</FormLabel>
              <Switch size="sm" />
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Avatar color="success">
            <EditNotificationsRoundedIcon />
          </Avatar>
          <ListItemContent>
            <Typography level="title-md">Notifications</Typography>
            <Typography level="body-sm">
              Enable or disable your notifications
            </Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <EmailRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>E-mail</FormLabel>
              <Switch size="sm" />
            </FormControl>

            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <MessageRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Messages</FormLabel>
              <Switch size="sm" />
            </FormControl>

            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <AdUnitsRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Push</FormLabel>
              <Switch size="sm" />
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Avatar color="danger">
            <AccessibilityNewRoundedIcon />
          </Avatar>
          <ListItemContent>
            <Typography level="title-md">Accessibility</Typography>
            <Typography level="body-sm">
              Toggle your accessibility settings
            </Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <ZoomInRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Zoom</FormLabel>
              <Switch size="sm" />
            </FormControl>

            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <SpatialTrackingRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Audio Descriptions</FormLabel>
              <Switch size="sm" />
            </FormControl>

            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
              <SettingsVoiceRoundedIcon fontSize="xl2" sx={{ mx: 1 }} />
              <FormLabel>Voice Control</FormLabel>
              <Switch size="sm" />
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
```
</example>

## Accessibility

The built-in accessibility of the accordion follows [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

- The accordion summary has a root slot (`div`) that can be changed, for example using `h3`, based on the hierarchy of the accordion.
- The accordion summary contains a button with `aria-expanded` and `aria-controls` attributes.
- The accordion details contains a div with `role="region"` and `aria-labelledby` attributes.
---
productId: joy-ui
title: React Stepper component
components: Stepper, Step, StepButton, StepIndicator
githubLabel: 'component: stepper'
materialDesign: https://m1.material.io/components/steppers.html
---

# Stepper

Steppers convey progress through numbered steps. It provides a wizard-like workflow.

## Introduction

Stepper displays progress through a sequence of logical and numbered steps. It support horizontal and vertical orientation for desktop and mobile viewports.

Joy UI Steppers are implemented using a collection of related components:

- [Stepper](#basics) - a required container for steps. Renders as a `<ol>` by default.
- [Step](#basics) - a step. Renders as a `<li>` by default.
- [StepIndicator](#indicator) - an optional indicator of a step.

<example name="StepperUsage">
```jsx file="StepperUsage.js"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';
import Check from '@mui/icons-material/Check';

export default function StepperUsage() {
  return (
    <JoyUsageDemo
      componentName="Stepper"
      data={[
        {
          propName: 'stepperOrientation',
          knob: 'radio',
          defaultValue: 'horizontal',
          options: ['horizontal', 'vertical'],
        },
        {
          propName: 'stepOrientation',
          knob: 'radio',
          defaultValue: 'horizontal',
          options: ['horizontal', 'vertical'],
        },
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          propName: 'indicator',
          knob: 'switch',
          defaultValue: true,
        },
      ]}
      getCodeBlock={(code, props) => `<Stepper${
        props.orientation === 'vertical' ? ' orientation="vertical"' : ''
      }>
  <Step${props.stepOrientation === 'vertical' ? ` orientation="vertical"` : ''}${
    props.indicator
      ? `
    indicator={
      <StepIndicator variant="solid" color="primary">
        <Check />
      </StepIndicator>
    }\n  `
      : ''
  }>First</Step>
  ...
</Stepper>`}
      renderDemo={({ stepperOrientation, stepOrientation, size, indicator }) => (
        <Stepper
          orientation={stepperOrientation}
          size={size}
          sx={{ width: 320, mb: 3, py: 3 }}
        >
          <Step
            orientation={stepOrientation}
            indicator={
              indicator && (
                <StepIndicator variant="solid" color="primary">
                  <Check />
                </StepIndicator>
              )
            }
          >
            <Typography sx={{ bgcolor: 'background.body' }}>First</Typography>
          </Step>
          <Step
            orientation={stepOrientation}
            indicator={indicator && <StepIndicator color="primary">2</StepIndicator>}
          >
            <Typography sx={{ bgcolor: 'background.body' }}>Second</Typography>
          </Step>
        </Stepper>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
```

<example name="BasicStepper">
```tsx file="BasicStepper.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';

export default function BasicStepper() {
  return (
    <Stepper sx={{ width: '100%' }}>
      <Step>Step 1</Step>
      <Step>Step 2</Step>
      <Step>Step 3</Step>
    </Stepper>
  );
}
```
</example>

## Customization

### Indicator

Pass StepIndicator as an element to Step's `indicator` prop to create number or icon indicators.

The StepIndicator supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `soft` (default), `solid`, `outlined`, and `plain`.

<example name="IndicatorStepper">
```tsx file="IndicatorStepper.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';

export default function IndicatorStepper() {
  return (
    <Stepper sx={{ width: '100%' }}>
      <Step
        indicator={
          <StepIndicator variant="solid" color="neutral">
            1
          </StepIndicator>
        }
      >
        Order placed
      </Step>
      <Step indicator={<StepIndicator variant="outlined">2</StepIndicator>}>
        In review
      </Step>
      <Step indicator={<StepIndicator>3</StepIndicator>}>Approved</Step>
    </Stepper>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

#### Indicator at the top

Set Step's `orientation="vertical"` to show an indicator at the top.

<example name="IndicatorTopStepper">
```tsx file="IndicatorTopStepper.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';

export default function IndicatorTopStepper() {
  return (
    <Stepper sx={{ width: '100%' }}>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator variant="solid" color="neutral">
            1
          </StepIndicator>
        }
      >
        Order placed
      </Step>
      <Step
        orientation="vertical"
        indicator={<StepIndicator variant="outlined">2</StepIndicator>}
      >
        In review
      </Step>
      <Step orientation="vertical" indicator={<StepIndicator>3</StepIndicator>}>
        Approved
      </Step>
    </Stepper>
  );
}
```
</example>

### Button

To make the Step clickable, renders the `StepButton` component as a direct child of the Step.

<example name="ButtonStepper">
```tsx file="ButtonStepper.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';

const steps = ['Order placed', 'In review', 'Approved'];

export default function ButtonStepper() {
  const [activeStep, setActiveStep] = React.useState(1);
  return (
    <Stepper sx={{ width: '100%' }}>
      {steps.map((step, index) => (
        <Step
          key={step}
          indicator={
            <StepIndicator
              variant={activeStep <= index ? 'soft' : 'solid'}
              color={activeStep < index ? 'neutral' : 'primary'}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
          }
          sx={[
            activeStep > index &&
              index !== 2 && { '&::after': { bgcolor: 'primary.solidBg' } },
          ]}
        >
          <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
        </Step>
      ))}
    </Stepper>
  );
}
```
</example>

### Sizes

The Stepper component comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="SizesStepper">
```tsx file="SizesStepper.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import Stack from '@mui/joy/Stack';

export default function SizesStepper() {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Stepper size="sm">
        <Step
          indicator={
            <StepIndicator variant="solid" color="neutral">
              1
            </StepIndicator>
          }
        >
          Order placed
        </Step>
        <Step indicator={<StepIndicator>2</StepIndicator>}>In review</Step>
        <Step indicator={<StepIndicator>3</StepIndicator>}>Approved</Step>
      </Stepper>

      <Stepper sx={{ width: '100%' }}>
        <Step
          indicator={
            <StepIndicator variant="solid" color="neutral">
              1
            </StepIndicator>
          }
        >
          Order placed
        </Step>
        <Step indicator={<StepIndicator>2</StepIndicator>}>In review</Step>
        <Step indicator={<StepIndicator>3</StepIndicator>}>Approved</Step>
      </Stepper>

      <Stepper size="lg" sx={{ width: '100%' }}>
        <Step
          indicator={
            <StepIndicator variant="solid" color="neutral">
              1
            </StepIndicator>
          }
        >
          Order placed
        </Step>
        <Step indicator={<StepIndicator>2</StepIndicator>}>In review</Step>
        <Step indicator={<StepIndicator>3</StepIndicator>}>Approved</Step>
      </Stepper>
    </Stack>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Vertical

Use `orientation="vertical"` to display the Stepper vertically. If you don't provide an indicator prop to the Step, a dot (pseudo element) will be used as the indicator.

<example name="VerticalStepper">
```tsx file="VerticalStepper.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';

export default function VerticalStepper() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
      <Stepper orientation="vertical" sx={{ width: 200 }}>
        <Step
          indicator={
            <StepIndicator variant="solid" color="neutral">
              1
            </StepIndicator>
          }
        >
          Order placed
        </Step>
        <Step indicator={<StepIndicator>2</StepIndicator>}>In review</Step>
        <Step indicator={<StepIndicator>3</StepIndicator>}>Approved</Step>
      </Stepper>

      <Stepper orientation="vertical" sx={{ width: 200 }}>
        <Step>Order placed</Step>
        <Step>In review</Step>
        <Step>Approved</Step>
      </Stepper>
    </Box>
  );
}
```
</example>

#### Extra content

For vertical Steppers, you can pass more content to the Step by grouping it inside an HTML element.

The Step switches its display to CSS `grid` when the Stepper's orientation is vertical.

<example name="VerticalExtraContentStepper">
```tsx file="VerticalExtraContentStepper.tsx"
import * as React from 'react';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Chip from '@mui/joy/Chip';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

export default function VerticalExtraContentStepper() {
  return (
    <Stepper orientation="vertical">
      <Step
        indicator={
          <StepIndicator variant="solid" color="primary">
            1
          </StepIndicator>
        }
      >
        <Typography>Billing Address</Typography>

        <Stack spacing={1}>
          <Typography level="body-sm">
            Ron Swanson <br />
            14 Lakeshore Drive <br />
            Pawnee, IN 12345 <br />
            United States <br />
            T: 555-555-5555
          </Typography>
          <ButtonGroup variant="plain" spacing={1}>
            <Chip
              color="primary"
              variant="solid"
              onClick={() => {
                // do something...
              }}
            >
              Next
            </Chip>
            <Chip
              color="neutral"
              variant="outlined"
              onClick={() => {
                // do something...
              }}
            >
              Edit
            </Chip>
          </ButtonGroup>
        </Stack>
      </Step>
      <Step indicator={<StepIndicator>2</StepIndicator>}>
        <div>
          <Typography level="title-sm">Shipping Address</Typography>
          <Typography level="body-xs">Pending</Typography>
        </div>
      </Step>
      <Step indicator={<StepIndicator>3</StepIndicator>}>
        <div>
          <Typography level="title-sm">Shipping Method</Typography>
          <Typography level="body-xs">Pending</Typography>
        </div>
      </Step>
    </Stepper>
  );
}
```
</example>

### Connector

The connector is a pseudo element of the Step. To customize it, target `::after` element of the Step using `sx` prop.

<example name="ConnectorStepper">
```tsx file="ConnectorStepper.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import Stack from '@mui/joy/Stack';

export default function ConnectorStepper() {
  return (
    <Stack spacing={4} sx={{ width: '100%' }}>
      <Stepper>
        <Step
          sx={{
            '&::after': {
              height: 2,
              borderRadius: '24px',
              background:
                'linear-gradient(to right, #002f61, #00507b, #006e8e, #008b98, #00a79c)',
            },
          }}
        >
          Order placed
        </Step>
        <Step
          sx={{
            '&::after': {
              height: 2,
              borderRadius: '24px',
              background:
                'linear-gradient(to right, #00c395, #18dc82, #71ee65, #bbf942, #ffff00)',
            },
          }}
        >
          In review
        </Step>
        <Step>Approved</Step>
      </Stepper>
    </Stack>
  );
}
```
</example>

## CSS Variables

<example name="StepperVariables">
```jsx file="StepperVariables.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function StepperVariables() {
  return (
    <JoyVariablesDemo
      componentName="Stepper"
      renderCode={(formattedSx) =>
        `<Stepper${formattedSx ? `${formattedSx}>` : '>'}`
      }
      data={[
        {
          var: '--Step-connectorThickness',
          defaultValue: '2px',
        },
        {
          var: '--Step-connectorInset',
          defaultValue: '6px',
        },
        {
          var: '--Step-connectorRadius',
        },
        {
          var: '--Step-gap',
          defaultValue: '6px',
        },
        {
          var: '--StepIndicator-size',
          defaultValue: '32px',
        },
        [
          'Vertical Stepper',
          [
            {
              var: '--Stepper-verticalGap',
              defaultValue: '12px',
            },
            {
              var: '--Step-indicatorDotSize',
              defaultValue: '6px',
            },
          ],
        ],
      ]}
      renderDemo={(sx) => (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 4,
            rowGap: 8,
            width: 320,
          }}
        >
          <Stepper sx={{ gridColumn: '1/-1', ...sx }}>
            <Step
              orientation="vertical"
              indicator={
                <StepIndicator variant="solid" color="neutral">
                  1
                </StepIndicator>
              }
            >
              Order placed
            </Step>
            <Step
              orientation="vertical"
              indicator={<StepIndicator>2</StepIndicator>}
            >
              Order shipped
            </Step>
          </Stepper>

          <Stepper orientation="vertical" sx={sx}>
            <Step>Order placed</Step>
            <Step>In review</Step>
            <Step>Approved</Step>
          </Stepper>

          <Stepper orientation="vertical" sx={sx}>
            <Step
              indicator={
                <StepIndicator variant="solid" color="neutral">
                  1
                </StepIndicator>
              }
            >
              Order placed
            </Step>
            <Step indicator={<StepIndicator>2</StepIndicator>}>In review</Step>
            <Step indicator={<StepIndicator>3</StepIndicator>}>Approved</Step>
          </Stepper>
        </Box>
      )}
    />
  );
}
```
</example>

## Common examples

### Company registration

<example name="CompanyRegistrationStepper">
```tsx file="CompanyRegistrationStepper.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

export default function CompanyRegistrationStepper() {
  return (
    <Stepper
      orientation="vertical"
      sx={(theme) => ({
        '--Stepper-verticalGap': '2.5rem',
        '--StepIndicator-size': '2.5rem',
        '--Step-gap': '1rem',
        '--Step-connectorInset': '0.5rem',
        '--Step-connectorRadius': '1rem',
        '--Step-connectorThickness': '4px',
        '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
        [`& .${stepClasses.completed}`]: {
          '&::after': { bgcolor: 'success.solidBg' },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            border: '4px solid',
            borderColor: '#fff',
            boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: 'neutral.softDisabledColor',
        },
        [`& .${typographyClasses['title-sm']}`]: {
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: '10px',
        },
      })}
    >
      <Step
        completed
        indicator={
          <StepIndicator variant="solid" color="success">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">Step 1</Typography>
          Basic Details
        </div>
      </Step>
      <Step
        completed
        indicator={
          <StepIndicator variant="solid" color="success">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">Step 2</Typography>
          Company Details
        </div>
      </Step>
      <Step
        active
        indicator={
          <StepIndicator variant="solid" color="primary">
            <AppRegistrationRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">Step 3</Typography>
          Subscription plan
        </div>
      </Step>
      <Step disabled indicator={<StepIndicator>3</StepIndicator>}>
        <div>
          <Typography level="title-sm">Step 4</Typography>
          Payment details
        </div>
      </Step>
    </Stepper>
  );
}
```
</example>

### Dotted connector

<example name="DottedConnector">
```tsx file="DottedConnector.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function DottedConnector() {
  return (
    <Stepper
      sx={{
        width: '100%',
        [`& .${stepClasses.root}`]: {
          flexDirection: 'column-reverse',
          '&::after': {
            top: 'unset',
            bottom:
              'calc(var(--StepIndicator-size) / 2 - var(--Step-connectorThickness) / 2)',
          },
        },
        [`& .${stepClasses.completed}::after`]: {
          bgcolor: 'primary.500',
        },
        [`& .${stepClasses.active} .${stepIndicatorClasses.root}`]: {
          borderColor: 'primary.500',
        },
        [`& .${stepClasses.root}:has(+ .${stepClasses.active})::after`]: {
          color: 'primary.500',
          backgroundColor: 'transparent',
          backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)',
          backgroundSize: '7px 7px',
          backgroundPosition: 'center left',
        },
        [`& .${stepClasses.disabled} *`]: {
          color: 'neutral.plainDisabledColor',
        },
      }}
    >
      <Step
        completed
        orientation="vertical"
        indicator={
          <StepIndicator variant="solid" color="primary">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <Typography
          level="h4"
          endDecorator={
            <Typography sx={{ fontSize: 'sm', fontWeight: 'normal' }}>
              Preliminary
            </Typography>
          }
          sx={{ fontWeight: 'xl' }}
        >
          01
        </Typography>
      </Step>
      <Step
        completed
        orientation="vertical"
        indicator={
          <StepIndicator variant="solid" color="primary">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <Typography
          level="h4"
          endDecorator={
            <Typography sx={{ fontSize: 'sm', fontWeight: 'normal' }}>
              Your details
            </Typography>
          }
          sx={{ fontWeight: 'xl' }}
        >
          02
        </Typography>
      </Step>
      <Step
        active
        orientation="vertical"
        indicator={
          <StepIndicator variant="outlined" color="primary">
            <KeyboardArrowDownRoundedIcon />
          </StepIndicator>
        }
      >
        <Typography
          level="h4"
          endDecorator={
            <Typography sx={{ fontSize: 'sm', fontWeight: 'normal' }}>
              KYC
            </Typography>
          }
          sx={{ fontWeight: 'xl' }}
        >
          03
        </Typography>
      </Step>
      <Step
        disabled
        orientation="vertical"
        indicator={<StepIndicator variant="outlined" color="neutral" />}
      >
        <Typography
          level="h4"
          endDecorator={
            <Typography sx={{ fontSize: 'sm', fontWeight: 'normal' }}>
              KYC
            </Typography>
          }
          sx={{ fontWeight: 'xl' }}
        >
          04
        </Typography>
      </Step>
    </Stepper>
  );
}
```
</example>

### Icon stepper

<example name="IconStepper">
```tsx file="IconStepper.tsx"
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function IconStepper() {
  return (
    <Stepper
      size="lg"
      sx={{
        width: '100%',
        '--StepIndicator-size': '3rem',
        '--Step-connectorInset': '0px',
        [`& .${stepIndicatorClasses.root}`]: {
          borderWidth: 4,
        },
        [`& .${stepClasses.root}::after`]: {
          height: 4,
        },
        [`& .${stepClasses.completed}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            borderColor: 'primary.300',
            color: 'primary.300',
          },
          '&::after': {
            bgcolor: 'primary.300',
          },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            borderColor: 'currentColor',
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: 'neutral.outlinedDisabledColor',
        },
      }}
    >
      <Step
        completed
        orientation="vertical"
        indicator={
          <StepIndicator variant="outlined" color="primary">
            <ShoppingCartRoundedIcon />
          </StepIndicator>
        }
      />
      <Step
        orientation="vertical"
        completed
        indicator={
          <StepIndicator variant="outlined" color="primary">
            <ContactsRoundedIcon />
          </StepIndicator>
        }
      />
      <Step
        orientation="vertical"
        completed
        indicator={
          <StepIndicator variant="outlined" color="primary">
            <LocalShippingRoundedIcon />
          </StepIndicator>
        }
      />
      <Step
        orientation="vertical"
        active
        indicator={
          <StepIndicator variant="solid" color="primary">
            <CreditCardRoundedIcon />
          </StepIndicator>
        }
      >
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'lg',
            fontSize: '0.75rem',
            letterSpacing: '0.5px',
          }}
        >
          Payment and Billing
        </Typography>
      </Step>
      <Step
        orientation="vertical"
        disabled
        indicator={
          <StepIndicator variant="outlined" color="neutral">
            <CheckCircleRoundedIcon />
          </StepIndicator>
        }
      />
    </Stepper>
  );
}
```
</example>
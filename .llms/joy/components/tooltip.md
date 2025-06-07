---
productId: joy-ui
title: React Tooltip component
components: Tooltip
githubLabel: 'component: tooltip'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
unstyled: https://base-ui.com/react/components/tooltip
---

# Tooltip

Tooltips display informative text when users hover over, focus on, or tap an element.

## Introduction

<example name="TooltipUsage">
```jsx file="TooltipUsage.js"
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function TooltipUsage() {
  return (
    <JoyUsageDemo
      componentName="Tooltip"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'solid',
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
          propName: 'open',
          knob: 'controlled',
        },
        {
          propName: 'placement',
          knob: 'placement',
          defaultValue: 'bottom',
        },
        {
          propName: 'arrow',
          knob: 'switch',
          defaultValue: false,
        },
      ]}
      renderDemo={({ open, ...props }) => (
        <React.Fragment>
          {open === undefined && (
            <Tooltip title="This is a tooltip" {...props}>
              <IconButton size="lg" variant="soft" color="neutral">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
          {typeof open === 'boolean' && (
            <Tooltip title="This is a tooltip" open={open} {...props}>
              <IconButton size="lg" variant="soft" color="neutral">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </React.Fragment>
      )}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Tooltip from '@mui/joy/Tooltip';

export default function MyApp() {
  return <Tooltip />;
}
```

### Variants

The tooltip component supports the four global variants: `solid` (default), `soft`, `outlined` and `plain`.

<example name="TooltipVariants">
```tsx file="TooltipVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import Button from '@mui/joy/Button';

export default function TooltipVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 4, width: '100%', justifyContent: 'center' }}>
      <Tooltip title="Delete" variant="solid">
        <Button variant="solid">Solid</Button>
      </Tooltip>
      <Tooltip title="Delete" variant="soft">
        <Button variant="soft">Soft</Button>
      </Tooltip>
      <Tooltip title="Delete" variant="outlined">
        <Button variant="outlined">Outlined</Button>
      </Tooltip>
      <Tooltip title="Delete" variant="plain">
        <Button variant="plain">Plain</Button>
      </Tooltip>
    </Box>
  );
}
```
</example>

### Colors

Every palette included in the theme is available via the `color` prop.
Play around combining different colors with different variants.

<example name="TooltipColors">
```tsx file="TooltipColors.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { VariantProp } from '@mui/joy/styles';

export default function TooltipColors() {
  const [variant, setVariant] = React.useState<VariantProp>('solid');
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
          gap: 1,
        }}
      >
        <Tooltip title="Delete" color="primary" placement="top" variant={variant}>
          <Button variant="plain" color="primary">
            Primary
          </Button>
        </Tooltip>
        <Tooltip title="Delete" color="neutral" placement="top" variant={variant}>
          <Button variant="plain" color="neutral">
            Neutral
          </Button>
        </Tooltip>
        <Tooltip title="Delete" color="danger" placement="top" variant={variant}>
          <Button variant="plain" color="danger">
            Danger
          </Button>
        </Tooltip>
        <Tooltip title="Delete" color="success" variant={variant}>
          <Button variant="plain" color="success">
            Success
          </Button>
        </Tooltip>
        <Tooltip title="Delete" color="warning" variant={variant}>
          <Button variant="plain" color="warning">
            Warning
          </Button>
        </Tooltip>
      </Box>
      <Sheet
        sx={{
          background: 'transparent',
          pl: 4,
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
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

### Sizes

The tooltip component comes with three sizes out of the box: `sm`, `md` (the default), and `lg`.

<example name="TooltipSizes">
```tsx file="TooltipSizes.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import Button from '@mui/joy/Button';

export default function TooltipSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 4, width: '100%', justifyContent: 'center' }}>
      <Tooltip title="Delete" size="sm">
        <Button variant="plain">Small</Button>
      </Tooltip>
      <Tooltip title="Delete" size="md">
        <Button variant="plain">Medium</Button>
      </Tooltip>
      <Tooltip title="Delete" size="lg">
        <Button variant="plain">Large</Button>
      </Tooltip>
    </Box>
  );
}
```
</example>

## Positioned tooltips

The `Tooltip` has 12 **placement** choices.
They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction.

<example name="PositionedTooltips">
```tsx file="PositionedTooltips.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';

export default function PositionedTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Tooltip title="Add" placement="top-start">
            <Button variant="plain">top-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button variant="plain">top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button variant="plain">top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={6}>
          <Tooltip title="Add" placement="left-start">
            <Button variant="plain">left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button variant="plain">left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button variant="plain">left-end</Button>
          </Tooltip>
        </Grid>
        <Grid container direction="column" sx={{ alignItems: 'flex-end' }} size={6}>
          <Grid>
            <Tooltip title="Add" placement="right-start">
              <Button variant="plain">right-start</Button>
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Add" placement="right">
              <Button variant="plain">right</Button>
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Add" placement="right-end">
              <Button variant="plain">right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Tooltip title="Add" placement="bottom-start">
            <Button variant="plain">bottom-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button variant="plain">bottom</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button variant="plain">bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
```
</example>

## Arrow tooltips

You can use the `arrow` prop to give your tooltip an arrow indicating which element it refers to.

<example name="ArrowTooltips">
```tsx file="ArrowTooltips.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Tooltip from '@mui/joy/Tooltip';

export default function ArrowTooltips() {
  return (
    <Sheet sx={{ pr: 7 }}>
      <Tooltip title="Add" arrow open placement="right">
        <Button variant="plain">Arrow</Button>
      </Tooltip>
    </Sheet>
  );
}
```
</example>

## Common examples

### GitHub tooltip

The `title` prop can receive a custom React element.

<example name="GitHubTooltip">
```tsx file="GitHubTooltip.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Chip from '@mui/joy/Chip';
import AdjustIcon from '@mui/icons-material/Adjust';

export default function GitHubTooltip() {
  return (
    <Tooltip
      placement="top-end"
      variant="outlined"
      arrow
      title={
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 320,
            justifyContent: 'center',
            p: 1,
          }}
        >
          <Typography
            textColor="grey"
            startDecorator={
              <Link
                underline="always"
                href="#common-examples"
                color="neutral"
                sx={{ fontSize: 'sm' }}
              >
                mui/material-ui
              </Link>
            }
            sx={{ fontSize: 'sm' }}
          >
            on Feb 25
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, width: '100%', mt: 1 }}>
            <AdjustIcon color="success" />
            <div>
              <Typography sx={{ fontWeight: 'lg', fontSize: 'sm' }}>
                [system] grey is no more recognized as color with the sx prop
              </Typography>
              <Typography textColor="text.secondary" sx={{ fontSize: 'sm', mb: 1 }}>
                Duplicates I have searched the existing issues Latest version I have
                tested the …
              </Typography>
              <Chip size="sm" color="danger" sx={{ fontWeight: 'lg' }}>
                bug 🐛
              </Chip>
              <Chip size="sm" color="primary" sx={{ ml: 1, fontWeight: 'lg' }}>
                package: system
              </Chip>
            </div>
          </Box>
        </Box>
      }
    >
      <Link
        href="#common-examples"
        underline="none"
        startDecorator={<AdjustIcon color="success" />}
        sx={{ fontWeight: 'lg' }}
      >
        [system] grey is no more recognized as color with the sx prop
      </Link>
    </Tooltip>
  );
}
```
</example>

## Accessibility

Here are a few tips for ensuring an accessible link component, based on [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/):

By default, the tooltip only labels its child element.
This is notably different from `title` which can either label **or** describe its child depending on whether the child already has a label.
For example, in:

```html
<button title="some more information">A button</button>
```

the `title` acts as an accessible description.
If you want the tooltip to act as an accessible description you can pass `describeChild`.
Note that you shouldn't use `describeChild` if the tooltip provides the only visual label. Otherwise, the child would have no accessible name and the tooltip would violate [success criterion 2.5.3 in WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html).

<example name="AccessibilityTooltip">
```tsx file="AccessibilityTooltip.tsx"
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import Box from '@mui/joy/Box';

export default function AccessibilityTooltip() {
  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip describeChild title="Does not add if it already exists.">
        <Button>Add</Button>
      </Tooltip>
    </Box>
  );
}
```
</example>
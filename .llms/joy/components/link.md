---
productId: joy-ui
title: React Link component
components: Link
githubLabel: 'component: link'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/link/
---

# Link

The Link component lets you customize anchor tags with theme colors and typography styles.

## Introduction

The Joy UI Link component replaces the native HTML `<a>` element and accepts the same props as the [Typography](https://mui.com/joy-ui/react-typography/) component, as well as MUI System props.

<example name="LinkUsage">
```jsx file="LinkUsage.js"
import * as React from 'react';
import Link from '@mui/joy/Link';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function LinkUsage() {
  return (
    <JoyUsageDemo
      componentName="Link"
      data={[
        {
          propName: 'level',
          knob: 'select',
          options: [
            'h1',
            'h2',
            'h3',
            'h4',
            'title-lg',
            'title-md',
            'title-sm',
            'body-lg',
            'body-md',
            'body-sm',
            'body-xs',
          ],
          defaultValue: 'body-md',
        },
        {
          propName: 'underline',
          knob: 'radio',
          options: ['hover', 'always', 'none'],
          defaultValue: 'hover',
        },
        {
          propName: 'variant',
          knob: 'radio',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },
        {
          propName: 'color',
          knob: 'color',
          defaultValue: 'primary',
        },
        { propName: 'disabled', knob: 'switch' },
      ]}
      renderDemo={(props) => (
        <Link {...props} href="#usage-props">
          Anchor
        </Link>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Link from '@mui/joy/Link';
```

The Joy UI Link behaves similar to the native HTML `<a>`, so it renders with an underline by default and has no background color on hover.

The demo below shows the two basic states available to the Link: default and disabled.
Don't forget to always assign an `href` value:

<example name="BasicsLink">
```tsx file="BasicsLink.tsx"
import * as React from 'react';
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';

export default function BasicsLink() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Link href="#basics">Link</Link>
      <Link href="#basics" disabled>
        Disabled
      </Link>
    </Box>
  );
}
```
</example>

## Customization

### Variants

The Link component supports Joy UI's four global variants: `plain` (default), `soft`, `outlined`, and `solid`.

:::warning
Although the component is technically set to `plain` by default, it will actually render without any variant if you don't customize it.
This is so that it adheres to the standard visual design of links on the web (no background color on hover).
:::

<example name="LinkVariants">
```tsx file="LinkVariants.tsx"
import * as React from 'react';
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';

export default function LinkVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
      <Link href="#variants">Link</Link>
      <Link href="#variants" variant="plain">
        Link
      </Link>
      <Link href="#variants" variant="soft">
        Link
      </Link>
      <Link href="#variants" variant="outlined">
        Link
      </Link>
      <Link href="#variants" variant="solid">
        Link
      </Link>
    </Box>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Levels

The Link component comes with all the Typography levels to choose from.

<example name="LinkLevels">
```tsx file="LinkLevels.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';

export default function LinkLevels() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Link href="#levels" level="h1">
        H1
      </Link>
      <Link href="#levels" level="h2">
        H2
      </Link>
      <Link href="#levels" level="h3">
        H3
      </Link>
      <Link href="#levels" level="h4">
        H4
      </Link>
      <Link href="#levels" level="title-lg">
        Title Large
      </Link>
      <Link href="#levels" level="title-md">
        Title Medium
      </Link>
      <Link href="#levels" level="title-sm">
        Title Small
      </Link>
      <Link href="#levels" level="title-lg">
        Body Large
      </Link>
      <Link href="#levels">Body Medium</Link>
      <Link href="#levels" level="body-sm">
        Body Small
      </Link>
      <Link href="#levels" level="body-xs">
        Body Extra Small
      </Link>
    </Box>
  );
}
```
</example>

### Colors

Every palette included in the theme is available via the `color` prop.
Play around combining different colors with different variants.

<example name="LinkColors">
```tsx file="LinkColors.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Link from '@mui/joy/Link';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Typography from '@mui/joy/Typography';
import { VariantProp } from '@mui/joy/styles';

export default function LinkColors() {
  const [variant, setVariant] = React.useState<VariantProp>('solid');
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 2,
        }}
      >
        <Link href="#colors" variant={variant} color="primary">
          Primary
        </Link>
        <Link href="#colors" variant={variant} color="neutral">
          Neutral
        </Link>
        <Link href="#colors" variant={variant} color="danger">
          Danger
        </Link>
        <Link href="#colors" variant={variant} color="success">
          Success
        </Link>
        <Link href="#colors" variant={variant} color="warning">
          Warning
        </Link>
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

### Underline

Use the `underline` prop to control how the underline behaves on the Link component.
It comes with three values: `hover`, `always`, and `none`.

<example name="LinkUnderline">
```tsx file="LinkUnderline.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';

export default function LinkUnderline() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Link href="#underline" underline="always">
        Always
      </Link>
      <Link href="#underline" underline="hover">
        Hover
      </Link>
      <Link href="#underline" underline="none">
        None
      </Link>
    </Box>
  );
}
```
</example>

### Disabled

Use the `disabled` prop to disable interaction and focus:

<example name="LinkDisabled">
```tsx file="LinkDisabled.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';

export default function LinkDisabled() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Link href="#disabled" disabled variant="solid">
        Solid
      </Link>
      <Link href="#disabled" disabled variant="soft">
        Soft
      </Link>
      <Link href="#disabled" disabled variant="outlined">
        Outlined
      </Link>
      <Link href="#disabled" disabled variant="plain">
        Plain
      </Link>
    </Box>
  );
}
```
</example>

### Overlay prop

Use the `overlay` prop to make an entire component clickable as a link.
The demo below shows how to use that with the Card component, ensuring proper accessibility.

<example name="LinkCard">
```tsx file="LinkCard.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function LinkCard() {
  return (
    <Card variant="outlined" sx={{ display: 'flex', gap: 2 }}>
      <Avatar size="lg" src="/static/images/avatar/1.jpg" />
      <Link
        overlay
        href="#introduction"
        underline="none"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
      >
        <Typography level="body-md">Joy UI</Typography>
        <Typography level="body-sm">Components that spark joy!</Typography>
      </Link>
    </Card>
  );
}
```
</example>

### As a button

To use the Link component as a button, assign the `button` value to the `component` prop.
This can be useful in two situations:

1. The link doesn't have a meaningful href.
2. The design looks more like a button than a link.

```js
<Link
  component="button"
  onClick={() => {
    // ...process something
  }}
>
  Do something
</Link>
```

### Usage with Typography

The Link component can be used as a child of the [Typography](https://mui.com/joy-ui/react-typography/) component.
In this situation, the Link will inherit the typographic level scale from its Typography parent, unless you specify a value for the `level` prop on the Link itself.

<example name="LinkAndTypography">
```tsx file="LinkAndTypography.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Launch from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';

export default function LinkAndTypography() {
  return (
    <Box sx={{ maxWidth: 360 }}>
      <Typography
        id="heading-demo"
        level="h2"
        endDecorator={
          <Link
            variant="outlined"
            aria-labelledby="heading-demo"
            href="#heading-demo"
            sx={{ fontSize: 'md', borderRadius: 'sm' }}
          >
            <LinkIcon />
          </Link>
        }
        sx={{ fontSize: 'lg', mb: 1, scrollMarginTop: 100 }}
      >
        Heading
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore{' '}
        <Link href="#heading-demo" startDecorator={<Launch />}>
          Magna Aliqua
        </Link>
        . Maecenas sed enim ut sem viverra aliquet eget.
      </Typography>
    </Box>
  );
}
```
</example>

## Third-party routing library

The sections below explain how to integrate the Link component with third-party tools that have their own comparable component.

### Next.js Pages Router

Here is an example with the [Link component](https://nextjs.org/docs/pages/api-reference/components/link) of Next.js:

```js
import NextLink from 'next/link';
import Link from '@mui/joy/Link';

<NextLink href="/docs" passHref>
  <Link>Read doc</Link>
</NextLink>;
```

### React Router

Here is a demo with the [Link component](https://reactrouter.com/start/library/navigating#link) of [React Router](https://github.com/remix-run/react-router).

```js
import { Link as RouterLink } from 'react-router';
import Link from '@mui/joy/Link';

<Link component={RouterLink} to="/docs">
  Read doc
</Link>;
```

## Security

When using `target="_blank"` with links to pages on another site, the [Google Chrome Developers documentation](https://developers.google.com/web/tools/lighthouse/audits/noopener) recommends adding `rel="noopener"` or `rel="noreferrer"` to avoid potential security issues.

- `rel="noopener"` prevents the new page from being able to access the `window.opener` property and ensures it runs in a separate process.
  Without this, the target page can potentially redirect your page to a malicious URL.
- `rel="noreferrer"` has the same effect, but also prevents the _Referer_ header from being sent to a new page.
  Note that removing the referrer header will affect analytics.

## Accessibility

Here are a few tips for ensuring an accessible link component, based on [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/link/).

- **Copywriting:** Avoid generic words as calls to action, such as "click here" or "go to".
  Instead, use [descriptive text](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text) to inform the user about what they'll find when they click the link.
- **Design:** For a good user experience, links should stand out from the text on the page.
  Keeping the default `underline="always"` behavior is a safe bet.
- **Href:** If a link doesn't have a meaningful href, [it should be rendered using a `<button>` element](#as-button).

## Common examples

Examples showcasing how to compose designs with the Link component and others as decorators.

<example name="DecoratorExamples">
```tsx file="DecoratorExamples.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import Link from '@mui/joy/Link';
import Chip from '@mui/joy/Chip';

export default function DecoratorExamples() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
    >
      <Link href="#common-examples" disabled startDecorator={<CircularProgress />}>
        Processing...
      </Link>

      <Link
        href="#common-examples"
        underline="none"
        variant="outlined"
        color="neutral"
        endDecorator={
          <Chip color="success" variant="soft" size="sm" sx={{}}>
            hiring
          </Chip>
        }
        sx={{ '--Link-gap': '0.5rem', pl: 1, py: 0.5, borderRadius: 'md' }}
      >
        Careers
      </Link>
    </Box>
  );
}
```
</example>
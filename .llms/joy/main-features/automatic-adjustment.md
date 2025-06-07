# Automatic adjustment

Joy UI components adapt to one another to ensure consistency across your app without the need to micromanage your CSS.

Joy UI components automatically adjust their styles and DOM structure relative to one another to ensure consistent sizing, spacing, and semantically appropriate HTML throughout your app.

This makes it much faster and more efficient for you to apply pixel-perfect adjustments to your UI without having to worry to about minor inconsistencies between components.

## Style adjustments

Joy UI components adapt their styles relative to the context in which they're rendered.
You can see a few examples of this below.

### Input

When using icons or buttons within an Input component, Joy UI automatically adjusts their size:

<example name="InputIntegration">
```jsx file="InputIntegration.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

export default function InputIntegration() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Input
        size="sm"
        startDecorator={<KeyRoundedIcon />}
        placeholder="Password"
        type="password"
        endDecorator={
          <IconButton color="neutral">
            <VisibilityRoundedIcon />
          </IconButton>
        }
      />
      <Input
        startDecorator={<KeyRoundedIcon />}
        placeholder="Password"
        type="password"
        endDecorator={
          <IconButton color="neutral">
            <VisibilityRoundedIcon />
          </IconButton>
        }
      />
      <Input
        size="lg"
        startDecorator={<KeyRoundedIcon />}
        placeholder="Password"
        type="password"
        endDecorator={
          <IconButton color="neutral">
            <VisibilityRoundedIcon />
          </IconButton>
        }
      />
    </Box>
  );
}
```
</example>

If you customize their respective CSS variables, Joy UI ensures that their spacing and radii follow those of the Input:

<example name="InputVariables">
```jsx file="InputVariables.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ListDivider from '@mui/joy/ListDivider';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

export default function InputVariables() {
  const [radius, setRadius] = React.useState(16);
  const [childHeight, setChildHeight] = React.useState(28);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Input
        size="md"
        placeholder="email@mui.com"
        endDecorator={
          <Button variant="soft" size="sm">
            Subscribe
          </Button>
        }
        sx={{
          '--Input-radius': `${radius}px`,
          '--Input-decoratorChildHeight': `${childHeight}px`,
        }}
      />
      <ListDivider component="hr" />
      <Box sx={{ mx: 'auto', display: 'flex', gap: 2 }}>
        <FormControl>
          <FormLabel>--Input-radius</FormLabel>
          <Input
            size="sm"
            type="number"
            value={radius}
            onChange={(event) => setRadius(event.target.valueAsNumber)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>--Input-decoratorChildHeight</FormLabel>
          <Input
            size="sm"
            type="number"
            value={childHeight}
            onChange={(event) => setChildHeight(event.target.valueAsNumber)}
          />
        </FormControl>
      </Box>
    </Box>
  );
}
```
</example>

### List

Nested lists are a common source of frustration when it comes to styling.
Joy UI's meaningful variables are intended to simplify this process.

Play around with different presets in the demo below to see which CSS variables are customized:

<example name="ListThemes">
```jsx file="ListThemes.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ToggleOffRoundedIcon from '@mui/icons-material/ToggleOffRounded';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import { BrandingProvider } from '@mui/docs/branding';

export default function ListThemes() {
  const [preset, setPreset] = React.useState('');
  const rootPresets = {
    dense: {
      '--ListItem-minHeight': '27px',
      '--ListItemDecorator-size': '28px',
      '--ListItem-radius': '5px',
      '--List-gap': '5px',
      '--List-padding': '10px',
      '--ListItem-paddingLeft': '5px',
      '--ListItem-paddingRight': '5px',
      '--ListItem-paddingY': '0px',
      '--List-nestedInsetStart': '28px',
      fontSize: '14px',
    },
    cozy: {
      '--List-radius': '20px',
      '--ListItem-minHeight': '44px',
      '--List-padding': '8px',
      '--List-gap': '8px',
      '--List-nestedInsetStart': 'var(--ListItemDecorator-size)',
    },
  };
  const nestedPresets = {
    dense: {
      '--List-nestedInsetStart': '0px',
    },
  };
  return (
    <Box
      sx={{
        m: -1.5,
        mt: 0.5,
        flexGrow: 1,
        maxWidth: 'calc(100% + 24px)',
        borderRadius: '8px',
        '& .markdown-body pre': {
          margin: 0,
          borderRadius: 'xs',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
        <Box sx={{ m: 'auto' }}>
          <List variant="outlined" sx={{ ...rootPresets[preset] }}>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <ToggleOffRoundedIcon />
                </ListItemDecorator>
                Menu item 1
              </ListItemButton>
            </ListItem>
            <ListItem nested>
              <ListItemButton id="category-1">
                <ListItemDecorator>
                  <ArticleRoundedIcon />
                </ListItemDecorator>
                Menu item 2
              </ListItemButton>
              <List
                aria-labelledby="category-1"
                sx={preset ? nestedPresets[preset] : {}}
              >
                <ListItem>
                  <ListItemButton>Menu item 2.1</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Menu item 2.2</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            mx: 'auto',
            pt: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FormLabel htmlFor="list-theme">Change the preset:</FormLabel>
          <Select
            size="sm"
            slotProps={{
              button: {
                id: 'list-theme',
              },
            }}
            value={preset}
            onChange={(event, newValue) => setPreset(newValue)}
            sx={{ minWidth: 160 }}
          >
            <Option value="">Default</Option>
            <Option value="dense">Dense</Option>
            <Option value="cozy">Cozy</Option>
          </Select>
        </Box>
      </Box>
      {
        <BrandingProvider mode="dark">
          <HighlightedCode
            code={`// The code is shorten to show only the markup and the sx value.
<List${
              preset
                ? `
  sx={{  ${JSON.stringify(rootPresets[preset], null, 4)
    .replace('{', '')
    .replace('}', '')
    .trim()}
  }}
`
                : ''
            }>
  <ListItem nested>
    <ListItemButton>...</ListItemButton>
    <List${
      nestedPresets[preset]
        ? `
      sx={{      ${JSON.stringify(nestedPresets[preset], null, 8)
        .replace('{', '')
        .replace('}', '')
        .trim()}
      }}
    `
        : ''
    }>
      <ListItem nested>
        <ListItemButton>...</ListItemButton>
        <List>
          <ListItem>...</ListItem>
          <ListItem>...</ListItem>
        </List>
      </ListItem>
      <ListItem>...</ListItem>
      <ListItem>...</ListItem>
    </List>
  </ListItem>
  <ListItem>...</ListItem>
</List>
`}
            copyButtonHidden
            language="jsx"
            sx={{ display: { xs: 'none', md: 'block' }, borderRadius: '7px' }}
          />
        </BrandingProvider>
      }
    </Box>
  );
}
```
</example>

## Structure adjustments

Joy UI components adjust their DOM structure based on their context to ensure that the appropriate HTML tags are used.
Check out a few examples below:

### Typography

The Typography component renders as a `<p>` tag by default.
When a second Typography component is nested inside, it will automatically render as a `<span>`, which is the correct markup in this situation:

```js
<Typography> // the parent Typography renders as a <p>
  This is a very
    <Typography fontWeight="lg">important</Typography> // the child renders as a <span>
  message.
</Typography>
```

### List Item

The List Item component renders as an `<li>` tag by default.
If its parent List component is not a `<menu>`, `<ul>`, or `<ol>`, then the List Item will correct itself and render as a `<div>` instead.

```js
<List component="div">
  <ListItem> // automatically renders as a <div>
    ...
  </ListItem>
</List>
```
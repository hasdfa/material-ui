# Global variants

Joy UI provides a set of global variants to ensure consistency across your app.

All Joy UI components accept four global variants: `solid`, `soft`, `outlined`, and `plain`. These variants are intended to cover the majority of use cases in modern web design.

The demo below shows how the variants look and feel across several Joy UI components:

<example name="GlobalVariantComponents">
```jsx file="GlobalVariantComponents.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Checkbox from '@mui/joy/Checkbox';
import Typography from '@mui/joy/Typography';

export default function GlobalVariantComponents() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, minmax(0, 1fr))',
          sm: 'auto repeat(4, minmax(0, 1fr))',
        },
        gap: 3,
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <Typography level="body-sm" sx={{ justifySelf: 'flex-end' }}>
        Button:
      </Typography>
      <Button variant="solid" color="primary">
        Solid
      </Button>
      <Button variant="soft" color="primary">
        Soft
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Button variant="plain" color="primary">
        Plain
      </Button>
      <Typography level="body-sm" sx={{ justifySelf: 'flex-end' }}>
        Chip:
      </Typography>
      <Chip variant="solid" size="sm" color="primary">
        Solid
      </Chip>
      <Chip variant="soft" size="sm" color="primary">
        Soft
      </Chip>
      <Chip variant="outlined" size="sm" color="primary">
        Outlined
      </Chip>
      <Chip variant="plain" size="sm" color="primary">
        Plain
      </Chip>
      <Typography level="body-sm" sx={{ justifySelf: 'flex-end' }}>
        Checkbox:
      </Typography>
      <Checkbox variant="solid" defaultChecked label="Solid" />
      <Checkbox variant="soft" defaultChecked label="Soft" />
      <Checkbox variant="outlined" defaultChecked label="Outlined" />
      <Checkbox variant="plain" defaultChecked label="Plain" />
    </Box>
  );
}
```
</example>

Global variants pull their styles from a single source, helping you to ensure a consistent look and feel across both pre-built Joy UI components and any custom components you build.

Under the hood, the variants are primarily differentiated by the values for their `color`, `background`, and `border` CSS properties.

## Hierarchy of importance

Each variant conveys a different level of importance in the user interface:

- `solid` is best suited for primary elements and the most important actions on the page
- `soft`, `outlined`, and `plain` are better for secondary and tertiary actions

Which variant you should choose largely depends on the context within the design, but it's important to keep this hierarchy in mind for a balanced UI.

The demo below illustrates a well-balanced design using multiple variants:

<example name="LevelOfImportance">
```jsx file="LevelOfImportance.js"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Close from '@mui/icons-material/Close';
import Delete from '@mui/icons-material/Delete';
import Download from '@mui/icons-material/Download';
import InsertLink from '@mui/icons-material/InsertLink';
import Crop from '@mui/icons-material/Crop';

export default function LevelOfImportance() {
  return (
    <Box sx={{ display: 'flex', width: '100%', py: 2, borderRadius: 'xs' }}>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
          alignSelf: 'center',
          maxWidth: '100%',
          minWidth: { xs: 220, sm: 360 },
          mx: 'auto',
          boxShadow: 'sm',
          borderRadius: 'md',
          overflow: 'auto',
        }}
      >
        <Sheet
          sx={{
            borderWidth: '0 0 1px 0',
            display: 'flex',
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
          }}
        >
          <Typography level="h2" sx={{ fontSize: 'md' }}>
            Photo upload
          </Typography>
          <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: 'auto' }}>
            <Close />
          </IconButton>
        </Sheet>
        <Sheet sx={{ p: 2 }}>
          <Sheet
            variant="outlined"
            sx={{
              borderRadius: 'md',
              overflow: 'auto',
              borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
              bgcolor: 'background.level1',
            }}
          >
            <AspectRatio>
              <img alt="" src="/static/images/cards/yosemite.jpeg" />
            </AspectRatio>
            <Box
              sx={{
                display: 'flex',
                p: 1.5,
                gap: 1.5,
                '& > button': { bgcolor: 'background.surface' },
              }}
            >
              <IconButton
                color="danger"
                variant="plain"
                size="sm"
                sx={{ mr: 'auto' }}
              >
                <Delete />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <Download />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <InsertLink />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <Crop />
              </IconButton>
            </Box>
          </Sheet>
        </Sheet>
        <Sheet
          sx={{
            display: 'flex',
            p: 2,
            borderTop: '1px solid',
            borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
            gap: 1,
          }}
        >
          <Button size="md" variant="plain" sx={{ ml: 'auto' }}>
            Replace photo
          </Button>
          <Button size="md">Upload</Button>
        </Sheet>
      </Box>
    </Box>
  );
}
```
</example>

## Customizing global variants

Global variants build off of the atomic tokens from the palettes, which live within your app's themes.
You can use standard CSS or CSS variables to customize these properties.

Here's an example of some of the default `solid` variant tokens:

```js
{
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: 'var(--joy-palette-primary-600)',       // the initial background
          solidColor: '#fff',                              // the initial color
          solidHoverBg: 'var(--joy-palette-primary-700)',  // the :hover background
          solidActiveBg: 'var(--joy-palette-primary-800)', // the :active background
          // ...other tokens
        },
        neutral: {
          solidBg: 'var(--joy-palette-primary-700)',
          solidColor: '#fff',
          solidHoverBg: 'var(--joy-palette-primary-800)',
          solidActiveBg: 'var(--joy-palette-primary-900)',
          // ...other tokens
        },
        // ...other palettes
      }
    },
    dark: {
      palette: {
        // similar structure but different values
      }
    },
  }
}
```
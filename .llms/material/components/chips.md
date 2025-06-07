---
productId: material-ui
title: React Chip component
components: Chip
githubLabel: 'component: chip'
materialDesign: https://m2.material.io/components/chips
githubSource: packages/mui-material/src/Chip
---

# Chip

Chips are compact elements that represent an input, attribute, or action.

Chips allow users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will
be in some form of input, so some of the behavior demonstrated here is
not shown in context.

## Basic chip

The `Chip` component supports outlined and filled styling.

<example name="BasicChips">
```tsx file="BasicChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
```
</example>

## Chip actions

You can use the following actions.

- Chips with the `onClick` prop defined change appearance on focus, hover, and click.
- Chips with the `onDelete` prop defined will display a delete icon which changes appearance on hover.

### Clickable

<example name="ClickableChips">
```tsx file="ClickableChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
    </Stack>
  );
}
```
</example>

### Deletable

<example name="DeletableChips">
```tsx file="DeletableChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function DeletableChips() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}
```
</example>

### Clickable and deletable

<example name="ClickableAndDeletableChips">
```tsx file="ClickableAndDeletableChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableAndDeletableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Clickable Deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Clickable Deletable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
}
```
</example>

### Clickable link

<example name="ClickableLinkChips">
```tsx file="ClickableLinkChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableLinkChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
      <Chip
        label="Clickable Link"
        component="a"
        href="#basic-chip"
        variant="outlined"
        clickable
      />
    </Stack>
  );
}
```
</example>

### Custom delete icon

<example name="CustomDeleteIconChips">
```tsx file="CustomDeleteIconChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}
```
</example>

## Chip adornments

You can add ornaments to the beginning of the component.

Use the `avatar` prop to add an avatar or use the `icon` prop to add an icon.

### Avatar chip

<example name="AvatarChips">
```tsx file="AvatarChips.tsx"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function AvatarChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  );
}
```
</example>

### Icon chip

<example name="IconChips">
```tsx file="IconChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
```
</example>

## Color chip

You can use the `color` prop to define a color from theme palette.

<example name="ColorChips">
```tsx file="ColorChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips() {
  return (
    <Stack spacing={1} sx={{ alignItems: 'center' }}>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
    </Stack>
  );
}
```
</example>

## Sizes chip

You can use the `size` prop to define a small Chip.

<example name="SizesChips">
```tsx file="SizesChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function SizesChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Small" size="small" />
      <Chip label="Small" size="small" variant="outlined" />
    </Stack>
  );
}
```
</example>

## Multiline chip

By default, Chips displays labels only in a single line.
To have them support multiline content, use the `sx` prop to add `height:auto` to the Chip component, and `whiteSpace: normal` to the `label` styles.

<example name="MultilineChips">
```tsx file="MultilineChips.tsx"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function MultilineChips() {
  return (
    <Box sx={{ width: 100 }}>
      <Chip
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
        }}
        label="This is a chip that has multiple lines."
      />
    </Box>
  );
}
```
</example>

## Chip array

An example of rendering multiple chips from an array of values.
Deleting a chip removes it from the array. Note that since no
`onClick` prop is defined, the `Chip` can be focused, but does not
gain depth while clicked or touched.

<example name="ChipsArray">
```tsx file="ChipsArray.tsx"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
```
</example>

## Chip playground

<example name="ChipsPlayground">
```jsx file="ChipsPlayground.js"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import { HighlightedCode } from '@mui/docs/HighlightedCode';

function ChipsPlayground() {
  const [state, setState] = React.useState({
    color: 'default',
    onDelete: 'none',
    avatar: 'none',
    icon: 'none',
    variant: 'filled',
    size: 'medium',
  });
  const { color, onDelete, avatar, icon, variant, size } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleDeleteExample = () => {
    console.info('You clicked the delete icon.');
  };

  const colorToCode = color !== 'default' ? `color="${color}" ` : '';
  const sizeToCode = size === 'small' ? `size="small" ` : '';
  const variantToCode = variant !== 'filled' ? `variant="${variant}" ` : '';

  let onDeleteToCode;
  switch (onDelete) {
    case 'none':
      onDeleteToCode = '';
      break;
    case 'custom':
      onDeleteToCode = 'deleteIcon={<DoneIcon />} onDelete={handleDelete} ';
      break;
    default:
      onDeleteToCode = 'onDelete={handleDelete} ';
      break;
  }

  let iconToCode;
  let iconToPlayground;
  switch (icon) {
    case 'none':
      iconToCode = '';
      break;
    default:
      iconToCode = 'icon={<FaceIcon />} ';
      iconToPlayground = <FaceIcon />;
      break;
  }

  let avatarToCode;
  let avatarToPlayground;
  switch (avatar) {
    case 'none':
      avatarToCode = '';
      break;
    case 'img':
      avatarToCode = 'avatar={<Avatar src="/static/images/avatar/1.jpg" />} ';
      avatarToPlayground = <Avatar src="/static/images/avatar/1.jpg" />;
      break;
    case 'letter':
      avatarToCode = 'avatar={<Avatar>F</Avatar>} ';
      avatarToPlayground = <Avatar>F</Avatar>;
      break;
    default:
      break;
  }

  if (avatar !== 'none') {
    iconToCode = '';
    iconToPlayground = null;
  }

  const jsx = `
<Chip ${variantToCode}${colorToCode}${sizeToCode}${onDeleteToCode}${avatarToCode}${iconToCode}/>
`;

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid size={12}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Grid sx={(theme) => ({ height: theme.spacing(10) })}>
            <Chip
              label="Chip Component"
              color={color}
              deleteIcon={onDelete === 'custom' ? <DoneIcon /> : undefined}
              onDelete={onDelete !== 'none' ? handleDeleteExample : undefined}
              avatar={avatarToPlayground}
              icon={iconToPlayground}
              variant={variant}
              size={size}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <FormControl component="fieldset">
              <FormLabel>variant</FormLabel>
              <RadioGroup
                row
                name="variant"
                aria-label="variant"
                value={variant}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="filled"
                  control={<Radio />}
                  label="filled"
                />
                <FormControlLabel
                  value="outlined"
                  control={<Radio />}
                  label="outlined"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <FormControl component="fieldset">
              <FormLabel>color</FormLabel>
              <RadioGroup
                row
                name="color"
                aria-label="color"
                value={color}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="default"
                  control={<Radio />}
                  label="default"
                />
                <FormControlLabel
                  value="primary"
                  control={<Radio />}
                  label="primary"
                />
                <FormControlLabel
                  value="secondary"
                  control={<Radio />}
                  label="secondary"
                />
                <FormControlLabel value="error" control={<Radio />} label="error" />
                <FormControlLabel value="info" control={<Radio />} label="info" />
                <FormControlLabel
                  value="success"
                  control={<Radio />}
                  label="success"
                />
                <FormControlLabel
                  value="warning"
                  control={<Radio />}
                  label="warning"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <FormControl component="fieldset">
              <FormLabel>size</FormLabel>
              <RadioGroup
                row
                name="size"
                aria-label="size"
                value={size}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="medium"
                />
                <FormControlLabel value="small" control={<Radio />} label="small" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <FormControl component="fieldset">
              <FormLabel>icon</FormLabel>
              <RadioGroup
                row
                name="icon"
                aria-label="icon"
                value={icon}
                onChange={handleChange}
              >
                <FormControlLabel value="none" control={<Radio />} label="none" />
                <FormControlLabel value="icon" control={<Radio />} label="icon" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <FormControl component="fieldset">
              <FormLabel>avatar</FormLabel>
              <RadioGroup
                row
                name="avatar"
                aria-label="avatar"
                value={avatar}
                onChange={handleChange}
              >
                <FormControlLabel value="none" control={<Radio />} label="none" />
                <FormControlLabel
                  value="letter"
                  control={<Radio />}
                  label="letter"
                />
                <FormControlLabel value="img" control={<Radio />} label="img" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <FormControl component="fieldset">
              <FormLabel>onDelete</FormLabel>
              <RadioGroup
                row
                name="onDelete"
                aria-label="on delete"
                value={onDelete}
                onChange={handleChange}
              >
                <FormControlLabel value="none" control={<Radio />} label="none" />
                <FormControlLabel
                  value="default"
                  control={<Radio />}
                  label="default"
                />
                <FormControlLabel
                  value="custom"
                  control={<Radio />}
                  label="custom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <HighlightedCode code={jsx} language="jsx" />
      </Grid>
    </Grid>
  );
}
export default ChipsPlayground;
```
</example>

## Accessibility

If the Chip is deletable or clickable then it is a button in tab order. When the Chip is focused (for example when tabbing) releasing (`keyup` event) `Backspace` or `Delete` will call the `onDelete` handler while releasing `Escape` will blur the Chip.
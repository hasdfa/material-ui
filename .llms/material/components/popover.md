---
productId: material-ui
title: React Popover component
components: Grow, Popover
githubLabel: 'component: Popover'
githubSource: packages/mui-material/src/Popover
---

# Popover

A Popover can be used to display some content on top of another.

Things to know when using the `Popover` component:

- The component is built on top of the [`Modal`](https://mui.com/material-ui/react-modal/) component.
- The scroll and click away are blocked unlike with the [`Popper`](https://mui.com/material-ui/react-popper/) component.

## Basic Popover

<example name="BasicPopover">
```tsx file="BasicPopover.tsx"
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
```
</example>

## Anchor playground

Use the radio buttons to adjust the `anchorOrigin` and `transformOrigin` positions.
You can also set the `anchorReference` to `anchorPosition` or `anchorEl`.
When it is `anchorPosition`, the component will, instead of `anchorEl`,
refer to the `anchorPosition` prop which you can adjust to set
the position of the popover.

<example name="AnchorPlayground">
```jsx file="AnchorPlayground.js"
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { HighlightedCode } from '@mui/docs/HighlightedCode';

const inlineStyles = {
  anchorVertical: {
    top: {
      top: -5,
    },
    center: {
      top: 'calc(50% - 5px)',
    },
    bottom: {
      bottom: -5,
    },
  },
  anchorHorizontal: {
    left: {
      left: -5,
    },
    center: {
      left: 'calc(50% - 5px)',
    },
    right: {
      right: -5,
    },
  },
};

function AnchorPlayground() {
  const anchorRef = React.useRef();

  const [state, setState] = React.useState({
    open: false,
    anchorOriginVertical: 'top',
    anchorOriginHorizontal: 'left',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'left',
    positionTop: 200, // Just so the popover can be spotted more easily
    positionLeft: 400, // Same as above
    anchorReference: 'anchorEl',
  });

  const {
    open,
    anchorOriginVertical,
    anchorOriginHorizontal,
    transformOriginVertical,
    transformOriginHorizontal,
    positionTop,
    positionLeft,
    anchorReference,
  } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleNumberInputChange = (key) => (event) => {
    setState({
      ...state,
      [key]: parseInt(event.target.value, 10),
    });
  };

  const handleClickButton = () => {
    setState({
      ...state,
      open: true,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  let mode = '';

  if (anchorReference === 'anchorPosition') {
    mode = `
  anchorReference="${anchorReference}"
  anchorPosition={{ top: ${positionTop}, left: ${positionLeft} }}`;
  }

  const jsx = `
<Popover ${mode}
  anchorOrigin={{
    vertical: '${anchorOriginVertical}',
    horizontal: '${anchorOriginHorizontal}',
  }}
  transformOrigin={{
    vertical: '${transformOriginVertical}',
    horizontal: '${transformOriginHorizontal}',
  }}
>
  The content of the Popover.
</Popover>
`;

  const radioAnchorClasses = {
    color: green[600],
    '&.Mui-checked': {
      color: green[500],
    },
  };

  return (
    <div>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid sx={{ position: 'relative', mb: 4 }}>
          <Button ref={anchorRef} variant="contained" onClick={handleClickButton}>
            Open Popover
          </Button>
          {anchorReference === 'anchorEl' && (
            <Box
              sx={{
                bgcolor: green[500],
                width: 10,
                height: 10,
                borderRadius: '50%',
                position: 'absolute',
              }}
              style={{
                ...inlineStyles.anchorVertical[anchorOriginVertical],
                ...inlineStyles.anchorHorizontal[anchorOriginHorizontal],
              }}
            />
          )}
        </Grid>
      </Grid>
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        anchorReference={anchorReference}
        anchorPosition={{
          top: positionTop,
          left: positionLeft,
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: anchorOriginVertical,
          horizontal: anchorOriginHorizontal,
        }}
        transformOrigin={{
          vertical: transformOriginVertical,
          horizontal: transformOriginHorizontal,
        }}
      >
        <Typography sx={{ m: 2 }}>The content of the Popover.</Typography>
      </Popover>
      <Grid container spacing={2}>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">anchorReference</FormLabel>
            <RadioGroup
              row
              aria-label="anchor reference"
              name="anchorReference"
              value={anchorReference}
              onChange={handleChange}
            >
              <FormControlLabel
                value="anchorEl"
                control={<Radio />}
                label="anchorEl"
              />
              <FormControlLabel
                value="anchorPosition"
                control={<Radio />}
                label="anchorPosition"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="position-top">anchorPosition.top</InputLabel>
            <Input
              id="position-top"
              type="number"
              value={positionTop}
              onChange={handleNumberInputChange('positionTop')}
            />
          </FormControl>
          &nbsp;
          <FormControl variant="standard">
            <InputLabel htmlFor="position-left">anchorPosition.left</InputLabel>
            <Input
              id="position-left"
              type="number"
              value={positionLeft}
              onChange={handleNumberInputChange('positionLeft')}
            />
          </FormControl>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">anchorOrigin.vertical</FormLabel>
            <RadioGroup
              aria-label="anchor origin vertical"
              name="anchorOriginVertical"
              value={anchorOriginVertical}
              onChange={handleChange}
            >
              <FormControlLabel
                value="top"
                control={<Radio sx={radioAnchorClasses} />}
                label="Top"
              />
              <FormControlLabel
                value="center"
                control={<Radio sx={radioAnchorClasses} />}
                label="Center"
              />
              <FormControlLabel
                value="bottom"
                control={<Radio sx={radioAnchorClasses} />}
                label="Bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">transformOrigin.vertical</FormLabel>
            <RadioGroup
              aria-label="transform origin vertical"
              name="transformOriginVertical"
              value={transformOriginVertical}
              onChange={handleChange}
            >
              <FormControlLabel value="top" control={<Radio />} label="Top" />
              <FormControlLabel
                value="center"
                control={<Radio color="primary" />}
                label="Center"
              />
              <FormControlLabel
                value="bottom"
                control={<Radio color="primary" />}
                label="Bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>
            <RadioGroup
              row
              aria-label="anchor origin horizontal"
              name="anchorOriginHorizontal"
              value={anchorOriginHorizontal}
              onChange={handleChange}
            >
              <FormControlLabel
                value="left"
                control={<Radio sx={radioAnchorClasses} />}
                label="Left"
              />
              <FormControlLabel
                value="center"
                control={<Radio sx={radioAnchorClasses} />}
                label="Center"
              />
              <FormControlLabel
                value="right"
                control={<Radio sx={radioAnchorClasses} />}
                label="Right"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">transformOrigin.horizontal</FormLabel>
            <RadioGroup
              row
              aria-label="transform origin horizontal"
              name="transformOriginHorizontal"
              value={transformOriginHorizontal}
              onChange={handleChange}
            >
              <FormControlLabel
                value="left"
                control={<Radio color="primary" />}
                label="Left"
              />
              <FormControlLabel
                value="center"
                control={<Radio color="primary" />}
                label="Center"
              />
              <FormControlLabel
                value="right"
                control={<Radio color="primary" />}
                label="Right"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <HighlightedCode code={jsx} language="jsx" />
    </div>
  );
}

export default AnchorPlayground;
```
</example>

## Mouse hover interaction

This demo demonstrates how to use the `Popover` component with `mouseenter` and `mouseleave` events to achieve popover behavior.

<example name="MouseHoverPopover">
```tsx file="MouseHoverPopover.tsx"
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function MouseHoverPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </div>
  );
}
```
</example>

## Virtual element

The value of the `anchorEl` prop can be a reference to a fake DOM element.
You need to provide an object with the following interface:

```ts
interface PopoverVirtualElement {
  nodeType: 1;
  getBoundingClientRect: () => DOMRect;
}
```

Highlight part of the text to see the popover:

<example name="VirtualElementPopover">
```tsx file="VirtualElementPopover.tsx"
import * as React from 'react';
import Popover, { PopoverProps } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function VirtualElementPopover() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<PopoverProps['anchorEl']>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();

    // Skip if selection has a length of 0
    if (!selection || selection.anchorOffset === selection.focusOffset) {
      return;
    }

    const getBoundingClientRect = () => {
      return selection.getRangeAt(0).getBoundingClientRect();
    };

    setOpen(true);

    setAnchorEl({ getBoundingClientRect, nodeType: 1 });
  };

  const id = open ? 'virtual-element-popover' : undefined;

  return (
    <div>
      <Typography aria-describedby={id} onMouseUp={handleMouseUp}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus,
        bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum
        vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor
        porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis
        vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus
        massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit
        amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus
        consequat. Suspendisse lacinia tellus a libero volutpat maximus.
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={handleClose}
        disableAutoFocus
      >
        <Paper>
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Paper>
      </Popover>
    </div>
  );
}
```
</example>

For more information on the virtual element's properties, see the following resources:

- [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [DOMRect](https://drafts.fxtf.org/geometry-1/#domrectreadonly)
- [Node types](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)

:::warning
The usage of a virtual element for the Popover component requires the `nodeType` property.
This is different from virtual elements used for the [`Popper`](https://mui.com/material-ui/react-popper/#virtual-element) or [`Tooltip`](https://mui.com/material-ui/react-tooltip/#virtual-element) components, both of which don't require the property.
:::

## Supplementary projects

For more advanced use cases, you might be able to take advantage of:

### material-ui-popup-state

![stars](https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star)
![npm downloads](https://img.shields.io/npm/dm/material-ui-popup-state.svg)

The package [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state) that takes care of popover state for you in most cases.

<example name="PopoverPopupState">
```tsx file="PopoverPopupState.tsx"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
```
</example>
---
productId: joy-ui
title: React Drawer component
components: Drawer, ModalClose, DialogContent
githubLabel: 'component: drawer'
---

# Drawer

Navigation drawers provide quick access to other areas of an app without taking the user away from their current location.

## Introduction

Drawers are commonly used as menus for desktop navigation, and as dialogs on mobile devices (similar to [Apple's sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)).

<example name="DrawerUsage">
```jsx file="DrawerUsage.js"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function DrawerUsage() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(value);
  };
  return (
    <JoyUsageDemo
      componentName="Drawer"
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
          propName: 'anchor',
          knob: 'radio',
          defaultValue: 'left',
          options: ['left', 'top', 'right', 'bottom'],
        },
        {
          propName: 'size',
          knob: 'radio',
          defaultValue: 'md',
          options: ['sm', 'md', 'lg'],
        },
        {
          propName: 'invertedColors',
          knob: 'switch',
        },
        {
          propName: 'children',
          defaultValue: '{/* Drawer content */}',
        },
      ]}
      renderDemo={(props) => (
        <React.Fragment>
          <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
            Open drawer
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)} {...props}>
            <Box
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem key={text}>
                    <ListItemButton>
                      <ListItemDecorator>
                        {index === 0 && <InboxIcon />}
                      </ListItemDecorator>
                      <ListItemContent>{text}</ListItemContent>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem key={text}>
                    <ListItemButton>
                      <ListItemDecorator>
                        {index === 0 && <MailIcon />}
                      </ListItemDecorator>
                      <ListItemContent>{text}</ListItemContent>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Drawer from '@mui/joy/Drawer';
```

The Drawer will close after the user makes a selection, clicks anywhere outside of it, or presses the <kbd class="key">Esc</kbd> key.

Use the `open` prop to control the toggling of the Drawer's open and close states, as shown in the demo below:

<example name="DrawerBasic">
```tsx file="DrawerBasic.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

export default function DrawerBasic() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        Open drawer
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
```
</example>

## Customization

### Anchor

Use the `anchor` prop to specify which side of the screen the Drawer should originate from.
The default value is `left`.

<example name="DrawerAnchor">
```tsx file="DrawerAnchor.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function DrawerAnchor() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem key={text}>
            <ListItemButton>{text}</ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem key={text}>
            <ListItemButton>{text}</ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <ButtonGroup variant="outlined">
        {(['top', 'right', 'bottom', 'left'] as const).map((anchor) => (
          <Button key={anchor} onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>
        ))}
      </ButtonGroup>
      {(['top', 'right', 'bottom', 'left'] as const).map((anchor) => (
        <Drawer
          key={anchor}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      ))}
    </React.Fragment>
  );
}
```
</example>

### Size

Use the `size` prop to adjust the Drawer's width (when anchored to the left or right) or height (when anchored to the top or bottom).

<example name="DrawerSize">
```tsx file="DrawerSize.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

type Size = 'sm' | 'md' | 'lg';

export default function DrawerSize() {
  const [state, setState] = React.useState({
    sm: false,
    md: false,
    lg: false,
  });

  const toggleDrawer =
    (size: Size, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [size]: open });
    };

  const list = (size: Size) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(size, false)}
      onKeyDown={toggleDrawer(size, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem key={text}>
            <ListItemButton>{text}</ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem key={text}>
            <ListItemButton>{text}</ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <ButtonGroup variant="outlined">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Button key={size} onClick={toggleDrawer(size, true)}>
            {size}
          </Button>
        ))}
      </ButtonGroup>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Drawer
          key={size}
          size={size}
          open={state[size]}
          onClose={toggleDrawer(size, false)}
        >
          {list(size)}
        </Drawer>
      ))}
    </React.Fragment>
  );
}
```
</example>

### Close button

Use the Modal Close component to add a close button to the Drawer that automatically handles the `onClick` event.

```jsx
import ModalClose from '@mui/joy/ModalClose';
```

<example name="DrawerCloseButton">
```tsx file="DrawerCloseButton.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';

export default function DrawerCloseButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <ModalClose />
        <DialogTitle>Title</DialogTitle>
      </Drawer>
    </Box>
  );
}
```
</example>

### Transition

Customize the Drawer's opening transition by using the CSS variables below inside the [`sx` prop](https://mui.com/system/getting-started/the-sx-prop/):

- `--Drawer-transitionFunction`: the [transition function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function); default is `ease`.
- `--Drawer-transitionDuration`: the [duration of the transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration); default is `0.3s`.

<example name="DrawerTransition">
```tsx file="DrawerTransition.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

export default function DrawerTransition() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={[
          open
            ? {
                '--Drawer-transitionDuration': '0.4s',
                '--Drawer-transitionFunction': 'cubic-bezier(0.79,0.14,0.15,0.86)',
              }
            : {
                '--Drawer-transitionDuration': '0.2s',
                '--Drawer-transitionFunction': 'cubic-bezier(0.77,0,0.18,1)',
              },
        ]}
      >
        <Box role="presentation" sx={{ p: 2 }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
```
</example>

### Scrollable content

Use the Dialog Content component to create a scrollable container inside the Drawer.

```jsx
import DialogContent from '@mui/joy/DialogContent';
```

<example name="DrawerScrollable">
```tsx file="DrawerScrollable.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';

export default function DrawerScrollable() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <ModalClose />
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <List>
            {[...new Array(100)].map((_, index) => (
              <ListItem key={index}>
                <ListItemButton onClick={() => setOpen(false)}>
                  Item {index}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            p: 1.5,
            pb: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Avatar size="lg" />
          <div>
            <Typography level="title-md">Username</Typography>
            <Typography level="body-sm">joined 20 Jun 2023</Typography>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
```
</example>

## Common examples

### Mobile navigation

A common use case for the Drawer is to build mobile-friendly navigation menus:

<example name="DrawerMobileNavigation">
```tsx file="DrawerMobileNavigation.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <Input
          size="sm"
          placeholder="Search"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              'aria-label': 'Search anything',
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
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
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <ListItemButton sx={{ fontWeight: 'lg' }}>Home</ListItemButton>
          <ListItemButton>About</ListItemButton>
          <ListItemButton>Studio</ListItemButton>
          <ListItemButton>Contact</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
```
</example>

### Inset drawer

An inset drawer is a panel that's not anchored to any edge of the screen.

You can achieve this by applying background and padding values to the Drawer component, and using either a Box or [Sheet](https://mui.com/joy-ui/react-sheet/) component for a full-height wrapper, as shown below:

<example name="DrawerFilters">
```tsx file="DrawerFilters.tsx"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import TuneIcon from '@mui/icons-material/TuneRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import Done from '@mui/icons-material/Done';

export default function DrawerFilters() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Guesthouse');
  const [amenities, setAmenities] = React.useState([0, 6]);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<TuneIcon />}
        onClick={() => setOpen(true)}
      >
        Change filters
      </Button>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Filters</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormControl>
              <FormLabel sx={{ typography: 'title-md', fontWeight: 'bold' }}>
                Property type
              </FormLabel>
              <RadioGroup
                value={type || ''}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: 1.5,
                  }}
                >
                  {[
                    {
                      name: 'House',
                      icon: <HomeRoundedIcon />,
                    },
                    {
                      name: 'Apartment',
                      icon: <ApartmentRoundedIcon />,
                    },
                    {
                      name: 'Guesthouse',
                      icon: <MeetingRoomRoundedIcon />,
                    },
                    {
                      name: 'Hotel',
                      icon: <HotelRoundedIcon />,
                    },
                  ].map((item) => (
                    <Card
                      key={item.name}
                      sx={{
                        boxShadow: 'none',
                        '&:hover': { bgcolor: 'background.level1' },
                      }}
                    >
                      <CardContent>
                        {item.icon}
                        <Typography level="title-md">{item.name}</Typography>
                      </CardContent>
                      <Radio
                        disableIcon
                        overlay
                        checked={type === item.name}
                        variant="outlined"
                        color="neutral"
                        value={item.name}
                        sx={{ mt: -2 }}
                        slotProps={{
                          action: {
                            sx: {
                              ...(type === item.name && {
                                borderWidth: 2,
                                borderColor:
                                  'var(--joy-palette-primary-outlinedBorder)',
                              }),
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </Card>
                  ))}
                </Box>
              </RadioGroup>
            </FormControl>

            <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
              Amenities
            </Typography>
            <div role="group" aria-labelledby="rank">
              <List
                orientation="horizontal"
                size="sm"
                sx={{ '--List-gap': '12px', '--ListItem-radius': '20px' }}
              >
                {['Wi-fi', 'Washer', 'A/C', 'Kitchen'].map((item, index) => {
                  const selected = amenities.includes(index);
                  return (
                    <ListItem key={item}>
                      <AspectRatio
                        variant={selected ? 'solid' : 'outlined'}
                        color={selected ? 'primary' : 'neutral'}
                        ratio={1}
                        sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
                      >
                        <div>{selected && <Done fontSize="md" />}</div>
                      </AspectRatio>
                      <Checkbox
                        size="sm"
                        color="neutral"
                        disableIcon
                        overlay
                        label={item}
                        variant="outlined"
                        checked={selected}
                        onChange={(event) =>
                          setAmenities((prev) => {
                            const set = new Set([...prev, index]);
                            if (!event.target.checked) {
                              set.delete(index);
                            }
                            // @ts-ignore
                            return [...set];
                          })
                        }
                        slotProps={{
                          action: {
                            sx: {
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </div>

            <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 2 }}>
              Booking options
            </Typography>
            <FormControl orientation="horizontal">
              <Box sx={{ flex: 1, pr: 1 }}>
                <FormLabel sx={{ typography: 'title-sm' }}>
                  Instant booking
                </FormLabel>
                <FormHelperText sx={{ typography: 'body-sm' }}>
                  Listings that you can book without waiting for host approval.
                </FormHelperText>
              </Box>
              <Switch />
            </FormControl>

            <FormControl orientation="horizontal">
              <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                <FormLabel sx={{ typography: 'title-sm' }}>Self check-in</FormLabel>
                <FormHelperText sx={{ typography: 'body-sm' }}>
                  Easy access to the property when you arrive.
                </FormHelperText>
              </Box>
              <Switch />
            </FormControl>
          </DialogContent>

          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row"
            useFlexGap
            spacing={1}
            sx={{ justifyContent: 'space-between' }}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => {
                setType('');
                setAmenities([]);
              }}
            >
              Clear
            </Button>
            <Button onClick={() => setOpen(false)}>Show 165 properties</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
```
</example>
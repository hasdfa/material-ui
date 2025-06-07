---
productId: joy-ui
title: React Menu component
components: Menu, MenuItem, MenuList, MenuButton
githubLabel: 'component: menu'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
unstyled: https://base-ui.com/react/components/menu
---

# Menu

Menus display a list of choices on temporary surfaces.

## Introduction

Joy UI provides five menu-related components:

- Menu Button - a button that opens a menu. It reuses the styles from [`Button`](https://mui.com/joy-ui/react-button/).
- Menu - a listbox popup for wrapping the menu items which reuses the styles from [`List`](https://mui.com/joy-ui/react-list/).
- Menu Item - a menu item which reuses the styles from [`ListItemButton`](https://mui.com/joy-ui/react-list/).
- Menu List - a standalone listbox for composition usage. It also reuses the styles from [`List`](https://mui.com/joy-ui/react-list/).
- Dropdown - the outermost component that wires a button with a menu. It only provides a context and does not render anything.

<example name="MenuUsage">
```jsx file="MenuUsage.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Dropdown from '@mui/joy/Dropdown';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function MenuUsage() {
  return (
    <JoyUsageDemo
      componentName="Menu"
      data={[
        {
          propName: 'menuButtonVariant',
          knob: 'select',
          defaultValue: 'outlined',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },
        {
          propName: 'menuVariant',
          knob: 'select',
          defaultValue: 'outlined',
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
          propName: 'invertedColors',
          knob: 'switch',
        },
        {
          propName: 'children',
          defaultValue: '$children',
        },
      ]}
      getCodeBlock={(code, props) => {
        return `<Dropdown${props.open ? ` open` : ''}>
  <MenuButton${
    props.menuButtonVariant !== 'outlined'
      ? `
    variant="${props.menuButtonVariant}"`
      : ''
  }${
    props.color !== 'neutral'
      ? `
    color="${props.color}"`
      : ''
  }${
    props.size !== 'md'
      ? `
    size="${props.size}"`
      : ''
  }>
    Format
  </MenuButton>
  <Menu${
    props.invertedColors
      ? `
    invertedColors`
      : ''
  }${
    props.menuVariant !== 'outlined'
      ? `
    variant="${props.menuVariant}"`
      : ''
  }${
    props.color !== 'neutral'
      ? `
    color="${props.color}"`
      : ''
  }${
    props.size !== 'md'
      ? `
    size="${props.size}"`
      : ''
  }>
    <MenuItem>…</MenuItem>
    …
  </Menu>
</Dropdown>`;
      }}
      renderDemo={({
        menuButtonVariant,
        menuVariant,
        color,
        open,
        size,
        invertedColors,
      }) => (
        <Box sx={{ pb: 20 }}>
          <Dropdown open={open}>
            <MenuButton variant={menuButtonVariant} color={color} size={size}>
              Format
            </MenuButton>
            <Menu
              variant={menuVariant}
              color={color}
              size={size}
              invertedColors={invertedColors}
            >
              <MenuItem>Add space before paragraph</MenuItem>
              <MenuItem>Add space after paragraph</MenuItem>
              <ListDivider />
              <MenuItem>Custom spacing...</MenuItem>
            </Menu>
          </Dropdown>
        </Box>
      )}
    />
  );
}
```
</example>

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

export default function MyApp() {
  return (
    <Dropdown>
      <MenuButton>Actions</MenuButton>
      <Menu>
        <MenuItem>Add item</MenuItem>
      </Menu>
    </Dropdown>
  );
}
```

### Basic usage

Place both the Menu and Menu Button inside a Dropdown component.
This will wire them together.
The Menu Button will toggle the visibility of the menu and act as an anchor for the Menu's popup.

The basic version of the menu opens over the anchor element by default.
You can change this via [specific positioning props](#menu-positioning).

When close to the screen's edge, the menu vertically realigns to make sure that all menu items are completely visible.
Choosing an option should immediately, and ideally, commit the option and close the menu.

<example name="BasicMenu">
```tsx file="BasicMenu.tsx"
import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

export default function BasicMenu() {
  return (
    <Dropdown>
      <MenuButton>Dashboard...</MenuButton>
      <Menu>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
  );
}
```
</example>

### Sizes

The menu component comes with three sizes out of the box: `sm`, `md` (the default), and `lg`.

When specifying a size for the `Menu` component, menu items inside of it will inherit the value.

<example name="SizeMenu">
```tsx file="SizeMenu.tsx"
import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check';

export default function SizeMenu() {
  return (
    <Dropdown>
      <MenuButton size="sm">Format</MenuButton>
      <Menu size="sm">
        <MenuItem>
          <ListItemDecorator /> Single
        </MenuItem>
        <MenuItem>
          <ListItemDecorator />
          1.15
        </MenuItem>
        <MenuItem>
          <ListItemDecorator />
          Double
        </MenuItem>
        <MenuItem>
          <ListItemDecorator>
            <Check />
          </ListItemDecorator>
          Custom: 1.2
        </MenuItem>
        <ListDivider />
        <MenuItem>Add space before paragraph</MenuItem>
        <MenuItem>Add space after paragraph</MenuItem>
        <ListDivider />
        <MenuItem>Custom spacing...</MenuItem>
      </Menu>
    </Dropdown>
  );
}
```
</example>

:::info
To learn how to add more sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Selected

Use the `selected` prop to signal whether a `MenuItem` is selected or not.

The menu item uses the same styles as the [`ListItemButton`](https://mui.com/joy-ui/react-list/#interactive-list-items).

<example name="SelectedMenu">
```tsx file="SelectedMenu.tsx"
import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Apps from '@mui/icons-material/Apps';
import Dropdown from '@mui/joy/Dropdown';

export default function SelectedMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  const createHandleClose = (index: number) => () => {
    if (typeof index === 'number') {
      setSelectedIndex(index);
    }
  };

  return (
    <Dropdown>
      <MenuButton startDecorator={<Apps />}>Apps</MenuButton>
      <Menu>
        <MenuItem
          {...(selectedIndex === 0 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(0)}
        >
          Random project
        </MenuItem>
        <MenuItem selected={selectedIndex === 1} onClick={createHandleClose(1)}>
          Production - web
        </MenuItem>
        <MenuItem selected={selectedIndex === 2} onClick={createHandleClose(2)}>
          Staging - web
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
```
</example>

### Icon button menu

To use [IconButton](https://mui.com/joy-ui/react-button/#icon-button) component as a menu button, pass it to the root slot of the `MenuButton` component.

Use `slotProps` to pass props to the IconButton component.

<example name="IconButtonMenu">
```tsx file="IconButtonMenu.tsx"
import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';

export default function IconButtonMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
      >
        <MoreVert />
      </MenuButton>
      <Menu>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
  );
}
```
</example>

### Positioned menu

The `Menu` is based on the MUI Base `Popper` component, which exposes a few [placement props](https://mui.com/base-ui/react-popper/#placement).
For example, this is how you'd go for displaying the menu on the bottom-end of the anchor button.

<example name="PositionedMenu">
```tsx file="PositionedMenu.tsx"
import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import MoreVert from '@mui/icons-material/MoreVert';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';

export default function PositionedMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
      >
        <MoreVert />
      </MenuButton>
      <Menu placement="bottom-end">
        <MenuItem>
          <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit post
        </MenuItem>
        <MenuItem disabled>
          <ListItemDecorator />
          Draft post
        </MenuItem>
        <ListDivider />
        <MenuItem variant="soft" color="danger">
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
```
</example>

### Group menus

<example name="GroupMenu">
```tsx file="GroupMenu.tsx"
import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';

export default function GroupMenu() {
  const SIZES = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
  const [size, setSize] = React.useState('Medium');

  return (
    <Dropdown>
      <MenuButton endDecorator={<ArrowDropDown />}>Size</MenuButton>
      <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px' }}>
        <MenuItem
          onClick={() => {
            const nextIndex = SIZES.indexOf(size) - 1;
            const value = nextIndex < 0 ? SIZES[SIZES.length - 1] : SIZES[nextIndex];
            setSize(value);
          }}
        >
          Smaller
        </MenuItem>
        <MenuItem
          onClick={() => {
            const nextIndex = SIZES.indexOf(size) + 1;
            const value = nextIndex > SIZES.length - 1 ? SIZES[0] : SIZES[nextIndex];
            setSize(value);
          }}
        >
          Larger
        </MenuItem>
        <ListDivider />
        <ListItem nested>
          <List aria-label="Font sizes">
            {SIZES.map((item: string) => (
              <MenuItem
                key={item}
                role="menuitemradio"
                aria-checked={item === size ? 'true' : 'false'}
                onClick={() => {
                  setSize(item);
                }}
              >
                <ListItemDecorator>
                  {item === size && <ArrowRight />}
                </ListItemDecorator>{' '}
                {item}
              </MenuItem>
            ))}
          </List>
        </ListItem>
      </Menu>
    </Dropdown>
  );
}
```
</example>

### Controlling the open state

By default, the open/close state of the menu is managed internally by the Dropdown component.
To control it programmatically from the outside, apply the Dropdown's `open` and `onOpenChange` props as shown below:

<example name="ControlledDropdown">
```tsx file="ControlledDropdown.tsx"
import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

export default function ControlledDropdown() {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = React.useCallback(
    (event: React.SyntheticEvent | null, isOpen: boolean) => {
      setOpen(isOpen);
    },
    [],
  );

  return (
    <Dropdown open={open} onOpenChange={handleOpenChange}>
      <MenuButton>Dashboard...</MenuButton>
      <Menu>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
  );
}
```
</example>

### `MenuList` composition

To get full control of the DOM structure, use the `MenuList` component.
You can use it to compose any popup-alike component.
The primary responsibility of this component is handling the focus state.

<example name="MenuListComposition">
```tsx file="MenuListComposition.tsx"
import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';

const Popup = styled(Popper)({
  zIndex: 1000,
});

export default function MenuListComposition() {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Tab') {
      setOpen(false);
    } else if (event.key === 'Escape') {
      buttonRef.current!.focus();
      setOpen(false);
    }
  };

  return (
    <div>
      <Button
        ref={buttonRef}
        id="composition-button"
        aria-controls={'composition-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Open menu
      </Button>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={buttonRef.current}
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener
          onClickAway={(event) => {
            if (event.target !== buttonRef.current) {
              handleClose();
            }
          }}
        >
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: 'md' }}
          >
            <MenuItem onClick={handleClose}>Single</MenuItem>
            <MenuItem onClick={handleClose}>1.15</MenuItem>
            <MenuItem onClick={handleClose}>Double</MenuItem>
            <MenuItem onClick={handleClose}>Custom: 1.2</MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}
```
</example>

Or display the menu without a popup:

<example name="MenuListGroup">
```tsx file="MenuListGroup.tsx"
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';
import Typography from '@mui/joy/Typography';

export default function MenuListGroup() {
  return (
    <MenuList
      component="div"
      variant="outlined"
      size="sm"
      sx={{
        boxShadow: 'sm',
        flexGrow: 0,
        minWidth: 200,
        maxHeight: 240,
        overflow: 'auto',
      }}
    >
      {[...Array(5)].map((_, categoryIndex) => (
        <List key={categoryIndex}>
          <ListItem sticky>
            <Typography
              id={`sticky-list-demo-${categoryIndex}`}
              level="body-xs"
              sx={{ textTransform: 'uppercase', fontWeight: 'lg' }}
            >
              Category {categoryIndex + 1}
            </Typography>
          </ListItem>
          {[...Array(10)].map((__, index) => (
            <MenuItem key={index}>Action {index + 1}</MenuItem>
          ))}
        </List>
      ))}
    </MenuList>
  );
}
```
</example>

## Debugging

To keep the list box open for inspecting elements, enable the `Emulate a focused page` option from the [Chrome DevTool Rendering](https://developer.chrome.com/docs/devtools/rendering/apply-effects/#emulate-a-focused-page) tab.
You can also access this option by using [command menu and search for it](https://developer.chrome.com/docs/devtools/command-menu/).

## Common examples

### Apps menu

This example replicates a menu that contain links to other applications.

<example name="AppsMenu">
```tsx file="AppsMenu.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import Apps from '@mui/icons-material/Apps';
import Dropdown from '@mui/joy/Dropdown';

export default function AppsMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
        sx={{ borderRadius: 40 }}
      >
        <Apps />
      </MenuButton>
      <Menu
        variant="solid"
        invertedColors
        aria-labelledby="apps-menu-demo"
        sx={{
          '--List-padding': '0.5rem',
          '--ListItemDecorator-size': '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 100px)',
          gridAutoRows: '100px',
          gap: 1,
        }}
      >
        <MenuItem orientation="vertical">
          <ListItemDecorator>
            <Avatar>S</Avatar>
          </ListItemDecorator>
          Search
        </MenuItem>
        <MenuItem orientation="vertical">
          <ListItemDecorator>
            <Avatar>M</Avatar>
          </ListItemDecorator>
          Maps
        </MenuItem>
        <MenuItem orientation="vertical">
          <ListItemDecorator>
            <Avatar>M</Avatar>
          </ListItemDecorator>
          Mail
        </MenuItem>
        <MenuItem orientation="vertical">
          <ListItemDecorator>
            <Avatar>D</Avatar>
          </ListItemDecorator>
          Drive
        </MenuItem>
        <MenuItem orientation="vertical">
          <ListItemDecorator>
            <Avatar>C</Avatar>
          </ListItemDecorator>
          Calendar
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
```
</example>

### Menu bar

This example replicates the application menu bar on macOS.
It supports mouse and keyboard navigation between menu items.

<example name="MenuToolbarExample">
```tsx file="MenuToolbarExample.tsx"
import * as React from 'react';
import Menu from '@mui/joy/Menu';
import MenuItem, { menuItemClasses } from '@mui/joy/MenuItem';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListDivider from '@mui/joy/ListDivider';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import Dropdown, { DropdownProps } from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import { Theme } from '@mui/joy';

type MenuBarButtonProps = Pick<DropdownProps, 'children' | 'open'> & {
  onOpen: DropdownProps['onOpenChange'];
  onKeyDown: React.KeyboardEventHandler;
  menu: React.JSX.Element;
  onMouseEnter: React.MouseEventHandler;
};

const MenuBarButton = React.forwardRef(
  (
    { children, menu, open, onOpen, onKeyDown, ...props }: MenuBarButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <Dropdown open={open} onOpenChange={onOpen}>
        <MenuButton
          {...props}
          slots={{ root: ListItemButton }}
          ref={ref}
          role="menuitem"
          variant={open ? 'soft' : 'plain'}
        >
          {children}
        </MenuButton>
        {React.cloneElement(menu, {
          slotProps: {
            listbox: {
              id: `toolbar-example-menu-${children}`,
              'aria-label': children,
            },
          },
          placement: 'bottom-start',
          disablePortal: false,
          variant: 'soft',
          sx: (theme: Theme) => ({
            width: 288,
            boxShadow: '0 2px 8px 0px rgba(0 0 0 / 0.38)',
            '--List-padding': 'var(--ListDivider-gap)',
            '--ListItem-minHeight': '32px',
            [`&& .${menuItemClasses.root}`]: {
              transition: 'none',
              '&:hover': {
                ...theme.variants.solid.primary,
                [`& .${typographyClasses.root}`]: {
                  color: 'inherit',
                },
              },
            },
          }),
        })}
      </Dropdown>
    );
  },
);

export default function MenuToolbarExample() {
  const menus = React.useRef<Array<HTMLButtonElement>>([]);
  const [menuIndex, setMenuIndex] = React.useState<null | number>(null);

  const renderShortcut = (text: string) => (
    <Typography level="body-sm" textColor="text.tertiary" sx={{ ml: 'auto' }}>
      {text}
    </Typography>
  );

  const openNextMenu = () => {
    if (typeof menuIndex === 'number') {
      if (menuIndex === menus.current.length - 1) {
        setMenuIndex(0);
      } else {
        setMenuIndex(menuIndex + 1);
      }
    }
  };

  const openPreviousMenu = () => {
    if (typeof menuIndex === 'number') {
      if (menuIndex === 0) {
        setMenuIndex(menus.current.length - 1);
      } else {
        setMenuIndex(menuIndex - 1);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      openNextMenu();
    }
    if (event.key === 'ArrowLeft') {
      openPreviousMenu();
    }
  };

  const createHandleButtonKeyDown =
    (index: number) => (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        if (index === menus.current.length - 1) {
          menus.current[0]?.focus();
        } else {
          menus.current[index + 1]?.focus();
        }
      }
      if (event.key === 'ArrowLeft') {
        if (index === 0) {
          menus.current[menus.current.length]?.focus();
        } else {
          menus.current[index - 1]?.focus();
        }
      }
    };

  const itemProps = {
    onClick: () => setMenuIndex(null),
    onKeyDown: handleKeyDown,
  };

  return (
    <List
      orientation="horizontal"
      aria-label="Example application menu bar"
      role="menubar"
      data-joy-color-scheme="dark"
      sx={{
        bgcolor: 'background.body',
        borderRadius: '4px',
        maxWidth: 'fit-content',
      }}
    >
      <ListItem>
        <MenuBarButton
          open={menuIndex === 0}
          onOpen={() => {
            setMenuIndex((prevMenuIndex) => (prevMenuIndex === null ? 0 : null));
          }}
          onKeyDown={createHandleButtonKeyDown(0)}
          onMouseEnter={() => {
            if (typeof menuIndex === 'number') {
              setMenuIndex(0);
            }
          }}
          ref={(instance) => {
            menus.current[0] = instance!;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[0]?.focus();
              }}
            >
              <ListItem nested>
                <List aria-label="New">
                  <MenuItem {...itemProps}>New File</MenuItem>
                  <MenuItem {...itemProps}>
                    New Text File... {renderShortcut('⌥ ⌘ N')}
                  </MenuItem>
                  <MenuItem {...itemProps}>
                    New Window {renderShortcut('⇧ ⌘ N')}
                  </MenuItem>
                </List>
              </ListItem>
              <ListDivider />
              <ListItem nested>
                <List aria-label="Open">
                  <MenuItem {...itemProps}>Open {renderShortcut('⌘ O')}</MenuItem>
                  <MenuItem {...itemProps}>Open Folder</MenuItem>
                </List>
              </ListItem>
            </Menu>
          }
        >
          File
        </MenuBarButton>
      </ListItem>
      <ListItem>
        <MenuBarButton
          open={menuIndex === 1}
          onOpen={() => {
            setMenuIndex((prevMenuIndex) => (prevMenuIndex === null ? 1 : null));
          }}
          onKeyDown={createHandleButtonKeyDown(1)}
          onMouseEnter={() => {
            if (typeof menuIndex === 'number') {
              setMenuIndex(1);
            }
          }}
          ref={(instance) => {
            menus.current[1] = instance!;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[1]?.focus();
              }}
            >
              <ListItem nested>
                <List aria-label="Time travel">
                  <MenuItem {...itemProps}>Undo {renderShortcut('⌘ Z')}</MenuItem>
                  <MenuItem {...itemProps}>Redo {renderShortcut('⇧ ⌘ Z')}</MenuItem>
                </List>
              </ListItem>
              <ListDivider />
              <ListItem nested>
                <List aria-label="Tool">
                  <MenuItem {...itemProps}>Cut {renderShortcut('⌘ X')}</MenuItem>
                  <MenuItem {...itemProps}>Copy {renderShortcut('⌘ Z')}</MenuItem>
                  <MenuItem {...itemProps}>Paste {renderShortcut('⌘ V')}</MenuItem>
                </List>
              </ListItem>
            </Menu>
          }
        >
          Edit
        </MenuBarButton>
      </ListItem>
      <ListItem>
        <MenuBarButton
          open={menuIndex === 2}
          onOpen={() => {
            setMenuIndex((prevMenuIndex) => (prevMenuIndex === null ? 2 : null));
          }}
          onKeyDown={createHandleButtonKeyDown(2)}
          onMouseEnter={() => {
            if (typeof menuIndex === 'number') {
              setMenuIndex(2);
            }
          }}
          ref={(instance) => {
            menus.current[2] = instance!;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[2]?.focus();
              }}
            >
              <MenuItem {...itemProps}>Select All {renderShortcut('⌘ A')}</MenuItem>
              <MenuItem {...itemProps}>
                Expand Selection {renderShortcut('⌃ ⇧ ⌘ →')}
              </MenuItem>
              <MenuItem {...itemProps}>
                Shrink Selection {renderShortcut('⌃ ⇧ ⌘ ←')}
              </MenuItem>
            </Menu>
          }
        >
          Selection
        </MenuBarButton>
      </ListItem>
    </List>
  );
}
```
</example>

### Side navigation icons

This example is quite common in dashboard applications where the side navigation is shrunk into icons, and the menu is triggered by hovering them.

<example name="MenuIconSideNavExample">
```tsx file="MenuIconSideNavExample.tsx"
import * as React from 'react';
import Menu, { menuClasses } from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import Apps from '@mui/icons-material/Apps';
import Settings from '@mui/icons-material/Settings';
import Person from '@mui/icons-material/Person';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';

// The Menu is built on top of Popper v2, so it accepts `modifiers` prop that will be passed to the Popper.
// https://popper.js.org/docs/v2/modifiers/offset/
interface MenuButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  menu: React.ReactElement<any>;
  open: boolean;
  onOpen: (
    event?:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
  ) => void;
  onLeaveMenu: (callback: () => boolean) => void;
  label: string;
}

const modifiers = [
  {
    name: 'offset',
    options: {
      offset: ({ placement }: any) => {
        if (placement.includes('end')) {
          return [8, 20];
        }
        return [-8, 20];
      },
    },
  },
];

function NavMenuButton({
  children,
  menu,
  open,
  onOpen,
  onLeaveMenu,
  label,
  ...props
}: Omit<MenuButtonProps, 'color'>) {
  const isOnButton = React.useRef(false);
  const internalOpen = React.useRef(open);

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    internalOpen.current = open;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      onOpen(event);
    }
  };

  return (
    <Dropdown
      open={open}
      onOpenChange={(_, isOpen) => {
        if (isOpen) {
          onOpen?.();
        }
      }}
    >
      <MenuButton
        {...props}
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
        onMouseDown={() => {
          internalOpen.current = open;
        }}
        onClick={() => {
          if (!internalOpen.current) {
            onOpen();
          }
        }}
        onMouseEnter={() => {
          onOpen();
          isOnButton.current = true;
        }}
        onMouseLeave={() => {
          isOnButton.current = false;
        }}
        onKeyDown={handleButtonKeyDown}
        sx={[
          {
            '&:focus-visible': {
              bgcolor: 'neutral.plainHoverBg',
            },
          },
          open ? { bgcolor: 'neutral.plainHoverBg' } : { bgcolor: null },
        ]}
      >
        {children}
      </MenuButton>
      {React.cloneElement(menu, {
        onMouseLeave: () => {
          onLeaveMenu(() => isOnButton.current);
        },
        modifiers,
        slotProps: {
          listbox: {
            id: `nav-example-menu-${label}`,
            'aria-label': label,
          },
        },
        placement: 'right-start',
        sx: {
          width: 288,
          [`& .${menuClasses.listbox}`]: {
            '--List-padding': 'var(--ListDivider-gap)',
          },
        },
      })}
    </Dropdown>
  );
}

export default function MenuIconSideNavExample() {
  const [menuIndex, setMenuIndex] = React.useState<null | number>(null);
  const itemProps = {
    onClick: () => setMenuIndex(null),
  };
  const createHandleLeaveMenu =
    (index: number) => (getIsOnButton: () => boolean) => {
      setTimeout(() => {
        const isOnButton = getIsOnButton();
        if (!isOnButton) {
          setMenuIndex((latestIndex: null | number) => {
            if (index === latestIndex) {
              return null;
            }
            return latestIndex;
          });
        }
      }, 200);
    };
  return (
    <Sheet sx={{ borderRadius: 'sm', py: 1, mr: 20 }}>
      <List>
        <ListItem>
          <NavMenuButton
            label="Apps"
            open={menuIndex === 0}
            onOpen={() => setMenuIndex(0)}
            onLeaveMenu={createHandleLeaveMenu(0)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                <MenuItem {...itemProps}>Application 1</MenuItem>
                <MenuItem {...itemProps}>Application 2</MenuItem>
                <MenuItem {...itemProps}>Application 3</MenuItem>
              </Menu>
            }
          >
            <Apps />
          </NavMenuButton>
        </ListItem>
        <ListItem>
          <NavMenuButton
            label="Settings"
            open={menuIndex === 1}
            onOpen={() => setMenuIndex(1)}
            onLeaveMenu={createHandleLeaveMenu(1)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                <MenuItem {...itemProps}>Setting 1</MenuItem>
                <MenuItem {...itemProps}>Setting 2</MenuItem>
                <MenuItem {...itemProps}>Setting 3</MenuItem>
              </Menu>
            }
          >
            <Settings />
          </NavMenuButton>
        </ListItem>
        <ListItem>
          <NavMenuButton
            label="Personal"
            open={menuIndex === 2}
            onOpen={() => setMenuIndex(2)}
            onLeaveMenu={createHandleLeaveMenu(2)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                <MenuItem {...itemProps}>Personal 1</MenuItem>
                <MenuItem {...itemProps}>Personal 2</MenuItem>
                <MenuItem {...itemProps}>Personal 3</MenuItem>
              </Menu>
            }
          >
            <Person />
          </NavMenuButton>
        </ListItem>
      </List>
    </Sheet>
  );
}
```
</example>
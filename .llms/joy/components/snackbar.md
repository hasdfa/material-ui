---
productId: joy-ui
title: React Snackbar component
components: Snackbar
githubLabel: 'component: snackbar'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/alert/
---

# Snackbar

The Snackbar, also commonly referred to as Toast, component informs users that an action has been or will be performed by the app.

## Introduction

Snackbars are designed to provide brief, non-intrusive notifications to users, informing them about processes an app has performed or will perform.

By default, the snackbar is displayed in the lower-right corner of the screen. They are designed not to disrupt the user's workflow and can be dismissed automatically without the need of any user interaction.

Snackbars contain a single line of text directly related to the operation performed. They can contain text actions, but no icons.

<example name="SnackbarUsage">
```jsx file="SnackbarUsage.js"
import * as React from 'react';
import Snackbar from '@mui/joy/Snackbar';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Close from '@mui/icons-material/Close';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export default function SnackbarUsage() {
  const [open, setOpen] = React.useState(false);

  return (
    <JoyUsageDemo
      componentName="Snackbar"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
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
          propName: 'autoHideDuration',
          helperText: 'The duration to be shown (in ms)',
          knob: 'number',
        },
      ]}
      renderDemo={(props) => (
        <React.Fragment>
          <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
            Show Snackbar
          </Button>
          <Snackbar
            open={open}
            onClose={(event, reason) => {
              if (reason === 'clickaway') {
                return;
              }

              setOpen(false);
            }}
            startDecorator={<InfoOutlined />}
            endDecorator={
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ color: 'inherit', '--Icon-color': 'inherit' }}
              >
                <Close />
              </IconButton>
            }
            {...props}
          >
            <div>
              <Typography level="title-md" sx={{ color: 'inherit' }}>
                Notification alert
              </Typography>
              <Typography level="body-sm" sx={{ color: 'inherit', opacity: 0.6 }}>
                102 unread messages since last month.
              </Typography>
            </div>
          </Snackbar>
        </React.Fragment>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Snackbar from '@mui/joy/Snackbar';
```

### Position

The position of the snackbar can be controlled by specifying the `anchorOrigin` prop.

In wider layouts, snackbars can be aligned to the left or centered, especially if they are consistently positioned in a specific location at the bottom of the screen. However, in some cases, you may need more flexible positioning.

<example name="PositionedSnackbar">
```tsx file="PositionedSnackbar.tsx"
import * as React from 'react';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Snackbar, { SnackbarOrigin } from '@mui/joy/Snackbar';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="plain"
          startDecorator={<NorthIcon />}
          onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
          sx={{ flexDirection: 'column', gap: 1, '--Button-gap': 0 }}
        >
          Top Center
        </Button>
      </Box>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={6}>
          <Button
            variant="plain"
            startDecorator={<NorthWestIcon />}
            onClick={handleClick({ vertical: 'top', horizontal: 'left' })}
          >
            Top Left
          </Button>
        </Grid>
        <Grid sx={{ textAlign: 'right', mb: 2 }} size={6}>
          <Button
            variant="plain"
            endDecorator={<NorthEastIcon />}
            onClick={handleClick({ vertical: 'top', horizontal: 'right' })}
          >
            Top Right
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            variant="plain"
            startDecorator={<SouthWestIcon />}
            onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
          >
            Bottom Left
          </Button>
        </Grid>
        <Grid sx={{ textAlign: 'right' }} size={6}>
          <Button
            variant="plain"
            endDecorator={<SouthEastIcon />}
            onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
          >
            Bottom Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="plain"
          endDecorator={<SouthIcon />}
          onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}
          sx={{ flexDirection: 'column', gap: 1, '--Button-gap': 0 }}
        >
          Bottom Center
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        I love snacks
      </Snackbar>
    </Box>
  );
}
```
</example>

## Customization

### Variants

The Snackbar component supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `plain`, `outlined` (default), `soft`, and `solid`.

<example name="SnackbarVariants">
```tsx file="SnackbarVariants.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Snackbar, { SnackbarProps } from '@mui/joy/Snackbar';

export default function SnackbarVariants() {
  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState<SnackbarProps['variant']>('outlined');
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="plain"
        color="neutral"
        onClick={() => {
          setOpen(true);
          setVariant('plain');
        }}
      >
        plain
      </Button>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          setVariant('outlined');
        }}
      >
        outlined
      </Button>
      <Button
        variant="soft"
        color="neutral"
        onClick={() => {
          setOpen(true);
          setVariant('soft');
        }}
      >
        soft
      </Button>
      <Button
        variant="solid"
        color="neutral"
        onClick={() => {
          setOpen(true);
          setVariant('solid');
        }}
      >
        solid
      </Button>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        variant={variant}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setOpen(false);
        }}
      >
        A snackbar with {variant} variant.
      </Snackbar>
    </Stack>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Sizes

The Snackbar component comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="SnackbarSizes">
```tsx file="SnackbarSizes.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Snackbar, { SnackbarProps } from '@mui/joy/Snackbar';

export default function SnackbarSizes() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState<SnackbarProps['size']>('md');
  return (
    <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
      <Button
        variant="outlined"
        color="neutral"
        size="sm"
        onClick={() => {
          setOpen(true);
          setSize('sm');
        }}
      >
        sm
      </Button>
      <Button
        variant="outlined"
        color="neutral"
        size="md"
        onClick={() => {
          setOpen(true);
          setSize('md');
        }}
      >
        md
      </Button>
      <Button
        variant="outlined"
        color="neutral"
        size="lg"
        onClick={() => {
          setOpen(true);
          setSize('lg');
        }}
      >
        lg
      </Button>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        size={size}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setOpen(false);
        }}
      >
        A snackbar with {size} size.
      </Snackbar>
    </Stack>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Colors

Every palette included in the theme is available via the `color` prop.
Play around combining different colors with different variants.

<example name="SnackbarColors">
```tsx file="SnackbarColors.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Snackbar, { SnackbarProps } from '@mui/joy/Snackbar';

export default function SnackbarColors() {
  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState<SnackbarProps['variant']>('outlined');
  const [color, setColor] = React.useState<SnackbarProps['color']>('neutral');
  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <Select
        value={variant}
        onChange={(event, newValue) => setVariant(newValue!)}
        sx={{ minWidth: 160 }}
      >
        <Option value="outlined">outlined</Option>
        <Option value="plain">plain</Option>
        <Option value="soft">soft</Option>
        <Option value="solid">solid</Option>
      </Select>
      <Stack spacing={1} direction="row">
        {(['primary', 'neutral', 'danger', 'success', 'warning'] as const).map(
          (currentColor) => (
            <Button
              key={currentColor}
              variant="soft"
              color={currentColor}
              size="sm"
              onClick={() => {
                setOpen(true);
                setColor(currentColor);
              }}
            >
              {currentColor}
            </Button>
          ),
        )}
      </Stack>
      <Snackbar
        autoHideDuration={4000}
        open={open}
        variant={variant}
        color={color}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setOpen(false);
        }}
      >
        {variant} snackbar with {color} color.
      </Snackbar>
    </Stack>
  );
}
```
</example>

### Hide duration

Use `autoHideDuration` prop to control how long the Snackbar is displayed. If it is not provided, the Snackbar will be displayed until the user dismisses it.

<example name="SnackbarHideDuration">
```tsx file="SnackbarHideDuration.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Snackbar from '@mui/joy/Snackbar';

export default function SnackbarHideDuration() {
  const [open, setOpen] = React.useState(false);
  const [duration, setDuration] = React.useState<undefined | number>();
  const [left, setLeft] = React.useState<undefined | number>();
  const timer = React.useRef<ReturnType<typeof setInterval>>(undefined);
  const countdown = () => {
    timer.current = setInterval(() => {
      setLeft((prev) => (prev === undefined ? prev : Math.max(0, prev - 100)));
    }, 100);
  };
  React.useEffect(() => {
    if (open && duration !== undefined && duration > 0) {
      setLeft(duration);
      countdown();
    } else {
      window.clearInterval(timer.current);
    }
  }, [open, duration]);
  const handlePause = () => {
    window.clearInterval(timer.current);
  };
  const handleResume = () => {
    countdown();
  };
  return (
    <div>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
        <FormControl disabled={open} sx={{ display: 'grid', columnGap: 1 }}>
          <FormLabel sx={{ gridColumn: 'span 2' }}>
            Auto Hide Duration (ms)
          </FormLabel>
          <Input
            type="number"
            slotProps={{ input: { step: 100 } }}
            value={duration || ''}
            onChange={(event) => {
              setDuration(event.target.valueAsNumber || undefined);
            }}
          />
          <Button
            disabled={open}
            variant="outlined"
            color="neutral"
            onClick={() => {
              setOpen(true);
            }}
          >
            Show snackbar
          </Button>
        </FormControl>
      </Stack>
      <Snackbar
        variant="solid"
        color="danger"
        autoHideDuration={duration}
        resumeHideDuration={left}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onFocus={handlePause}
        onBlur={handleResume}
        onUnmount={() => setLeft(undefined)}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        This snackbar will{' '}
        {left !== undefined
          ? `disappear in ${left}ms`
          : `not disappear until you click away`}
        .
      </Snackbar>
    </div>
  );
}
```
</example>

### Close reason

There are three reasons for the Snackbar to close:

- `timeout`: The Snackbar is closed after the `autoHideDuration` prop timer expires.
- `clickaway`: The Snackbar is closed when the user interacts outside of the Snackbar.
- `escapeKeyDown`: The Snackbar is closed when the user presses the escape key.

You can access the value from the second argument of the `onClose` callback.

```js
<Snackbar onClose={(event, reason) => {
  // reason will be one of: timeout, clickaway, escapeKeyDown
}}>
```

<example name="SnackbarCloseReason">
```tsx file="SnackbarCloseReason.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Snackbar, {
  SnackbarCloseReason as SnackbarCloseReasonType,
} from '@mui/joy/Snackbar';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function SnackbarCloseReason() {
  const [open, setOpen] = React.useState(false);
  const [reasons, setReasons] = React.useState<SnackbarCloseReasonType[]>([]);
  React.useEffect(() => {
    if (
      (['timeout', 'clickaway', 'escapeKeyDown'] as const).every((item) =>
        reasons.includes(item),
      )
    ) {
      setOpen(false);
    }
  }, [reasons]);
  return (
    <div>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
        }}
      >
        Show snackbar
      </Button>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        onClose={(event, reason) => {
          // @ts-ignore
          setReasons((prev) => [...new Set([...prev, reason])]);
        }}
        onUnmount={() => {
          setReasons([]);
        }}
        sx={{ minWidth: 360 }}
      >
        <Stack spacing={0.5}>
          <Typography level="title-md">
            To close this snackbar, you have to:
          </Typography>
          <List size="sm">
            <ListItem>
              {reasons.includes('timeout') ? (
                <CheckBoxIcon color="success" />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}{' '}
              Wait for 3 seconds.
            </ListItem>
            <ListItem>
              {reasons.includes('clickaway') ? (
                <CheckBoxIcon color="success" />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}{' '}
              Click outside of the snackbar.
            </ListItem>
            <ListItem>
              {reasons.includes('escapeKeyDown') ? (
                <CheckBoxIcon color="success" />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}{' '}
              Press ESC key.
            </ListItem>
          </List>
        </Stack>
      </Snackbar>
    </div>
  );
}
```
</example>

#### Ignore clickaway

This pattern is useful when you don't want the Snackbar to close when the user clicks outside of it.

```js
<Snackbar
  onClose={(event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  }}
>
```

### Decorators

Use the `startDecorator` and `endDecorator` props to append icons and/or actions to either side of the Snackbar.

<example name="SnackbarWithDecorators">
```tsx file="SnackbarWithDecorators.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

export default function SnackbarWithDecorators() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Show Snackbar
      </Button>
      <Snackbar
        variant="soft"
        color="success"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setOpen(false)}
            size="sm"
            variant="soft"
            color="success"
          >
            Dismiss
          </Button>
        }
      >
        Your message was sent successfully.
      </Snackbar>
    </React.Fragment>
  );
}
```
</example>

### Inverted colors

When the Snackbar's variant is `soft` or `solid`, you can set `invertedColors` prop to `true` to invert the colors of the children for increasing the contrast.

To learn more about this, check out [Color Inversion](https://mui.com/joy-ui/main-features/color-inversion/) feature.

<example name="SnackbarInvertedColors">
```tsx file="SnackbarInvertedColors.tsx"
import * as React from 'react';
import Snackbar from '@mui/joy/Snackbar';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

export default function SnackbarInvertedColors() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Show Snackbar
      </Button>
      <Snackbar
        autoHideDuration={5000}
        variant="solid"
        color="primary"
        size="lg"
        invertedColors
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={(theme) => ({
          background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
          maxWidth: 360,
        })}
      >
        <div>
          <Typography level="title-lg">Hey, Wait!!</Typography>
          <Typography sx={{ mt: 1, mb: 2 }}>
            Are you sure, you want to leave this page without confirming your order?
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="solid" color="primary" onClick={() => setOpen(false)}>
              Yes, Maybe later
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpen(false)}
            >
              No, I want to stay
            </Button>
          </Stack>
        </div>
      </Snackbar>
    </React.Fragment>
  );
}
```
</example>

### Animation

To apply a custom animation, provide the `animationDuration` prop, which we'll use to match the component's unmount animation accurately.

<example name="CustomAnimatedSnackbar">
```tsx file="CustomAnimatedSnackbar.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import { keyframes } from '@mui/system';

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export default function CustomAnimatedSnackbar() {
  const [open, setOpen] = React.useState(false);

  const animationDuration = 600;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="neutral" onClick={handleClick}>
        Show Snackbar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        animationDuration={animationDuration}
        sx={[
          open && {
            animation: `${inAnimation} ${animationDuration}ms forwards`,
          },
          !open && {
            animation: `${outAnimation} ${animationDuration}ms forwards`,
          },
        ]}
      >
        I love this animation!
      </Snackbar>
    </div>
  );
}
```
</example>
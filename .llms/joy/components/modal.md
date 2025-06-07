---
productId: joy-ui
title: React Modal component
components: Modal, ModalClose, ModalDialog, ModalOverflow, DialogTitle, DialogContent, DialogActions
githubLabel: 'component: modal'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
unstyled: https://base-ui.com/react/components/dialog
---

# Modal

The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.

## Introduction

Joy UI provides three modal-related components:

- [`Modal`](#basic-usage): A container that renders its `children` node in front of a backdrop component.
- [`ModalClose`](#dialog): A button for closing the modal.
- [`ModalDialog`](#dialog): A component for rendering a modal dialog.

<example name="ModalUsage">
```jsx file="ModalUsage.js"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import JoyUsageDemo, {
  prependLinesSpace,
} from 'docs/src/modules/components/JoyUsageDemo';

export default function ModalUsage() {
  const [open, setOpen] = React.useState(false);
  return (
    <JoyUsageDemo
      componentName="ModalDialog"
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
          propName: 'layout',
          knob: 'radio',
          options: ['center', 'fullscreen'],
          defaultValue: 'center',
        },
        {
          propName: 'children',
          defaultValue: '<ModalClose />\n  <Typography>Modal title</Typography>',
        },
      ]}
      getCodeBlock={(code) => `<Modal>
${prependLinesSpace(code, 2)}
</Modal>`}
      renderDemo={(props) => (
        <React.Fragment>
          <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
            Open modal
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog {...props}>
              <ModalClose />
              <DialogTitle>Modal title</DialogTitle>
              <DialogContent>
                A description of the dialog should give primary message or purpose of
                the dialog.
              </DialogContent>
            </ModalDialog>
          </Modal>
        </React.Fragment>
      )}
    />
  );
}
```
</example>

### Features

- 🥞 Manages modal stacking when more than one is needed.
- 🪟 Automatically creates a backdrop element to disable interaction with the rest of the app.
- 🔐 Disables page scrolling while open.
- ⌨️ Manages focus correctly between the modal and its parent app.
- ♿️ Adds the appropriate ARIA roles automatically.

:::info
The term "modal" is sometimes used interchangeably with "dialog," but this is incorrect.

A modal [blocks interaction with the rest of the application](https://en.wikipedia.org/wiki/Modal_window), forcing the user to take action.
As such, it should be used sparingly—only when the app _requires_ user input before it can continue.
A dialog, on the other hand, may be _modal_ or _nonmodal (modeless)_.
:::

## Component

After [installation](https://mui.com/joy-ui/getting-started/installation/), you can start building with this component using the following basic elements:

```jsx
import Modal from '@mui/joy/Modal';

export default function MyApp() {
  return <Modal>{children}</Modal>;
}
```

### Basic usage

The Modal accepts only a single React element as a child.
That can be either a Joy UI component, for example [`Sheet`](https://mui.com/joy-ui/react-sheet/), or any other custom element.

Use the Modal Close component to render a close button that inherits the modal's `onClose` function.

<example name="BasicModal">
```tsx file="BasicModal.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
            This is the modal title
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute.
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

:::info
Modal Close accepts the variant prop because it uses the same styles as the [`IconButton`](https://mui.com/joy-ui/react-button/#icon-button).
:::

### Close reason

The second argument of the `onClose` gives you the information about how the event is triggered.

The possible values are:

- `backdropClick`: the user clicks on the modal's backdrop.
- `escapeKeyDown`: the user presses `Escape` on the keyboard.
- `closeClick`: the user clicks on the `ModalClose` element.

<example name="CloseModal">
```tsx file="CloseModal.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function CloseModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="close-modal-title"
        open={open}
        onClose={(_event: React.MouseEvent<HTMLButtonElement>, reason: string) => {
          alert(`Reason: ${reason}`);
          setOpen(false);
        }}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Sheet variant="outlined" sx={{ minWidth: 300, borderRadius: 'md', p: 3 }}>
          <ModalClose variant="outlined" />
          <Typography
            component="h2"
            id="close-modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg' }}
          >
            Modal title
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

### Modal Dialog

To create a modal dialog, render the Modal Dialog component inside the Modal.

The Dialog will apply spacing to the elements that have `aria-labelledby` or `aria-describedby` attribute.

<example name="BasicModalDialog">
```tsx file="BasicModalDialog.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';

export default function BasicModalDialog() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New project
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new project</DialogTitle>
          <DialogContent>Fill in the information of the project.</DialogContent>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

#### Variant

The Modal Dialog supports the [global variants](https://mui.com/joy-ui/main-features/global-variants/) feature.

The Modal Close component's variant adapts automatically to contrast with the Modal Dialog, as demonstrated below:

<example name="VariantModalDialog">
```tsx file="VariantModalDialog.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

export default function VariantModalDialog() {
  const [variant, setVariant] = React.useState<
    ModalDialogProps['variant'] | undefined
  >(undefined);
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Button
          variant="plain"
          color="neutral"
          onClick={() => {
            setVariant('plain');
          }}
        >
          Plain
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setVariant('outlined');
          }}
        >
          Outlined
        </Button>
        <Button
          variant="soft"
          color="neutral"
          onClick={() => {
            setVariant('soft');
          }}
        >
          Soft
        </Button>
        <Button
          variant="solid"
          color="neutral"
          onClick={() => {
            setVariant('solid');
          }}
        >
          Solid
        </Button>
      </Stack>
      <Modal open={!!variant} onClose={() => setVariant(undefined)}>
        <ModalDialog variant={variant}>
          <ModalClose />
          <DialogTitle>Modal Dialog</DialogTitle>
          <DialogContent>This is a `{variant}` modal dialog.</DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

#### Size

The Modal Dialog comes in 3 sizes: `sm`, `md` (default), and `lg`.

The Modal Close and Modal Dialog Title components inherit the size from the Modal Dialog unless specified in each component directly.

<example name="SizeModalDialog">
```tsx file="SizeModalDialog.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

export default function SizeModalDialog() {
  const [size, setSize] = React.useState<ModalDialogProps['size'] | undefined>(
    undefined,
  );
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Button
          variant="outlined"
          color="neutral"
          size="sm"
          onClick={() => setSize('sm')}
        >
          Small
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          size="md"
          onClick={() => setSize('md')}
        >
          Medium
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          size="lg"
          onClick={() => setSize('lg')}
        >
          Large
        </Button>
      </Stack>
      <Modal open={!!size} onClose={() => setSize(undefined)}>
        <ModalDialog size={size}>
          <ModalClose />
          <DialogTitle>Modal Dialog</DialogTitle>
          <DialogContent>This is a `{size}` modal dialog.</DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

#### Layout

The Modal Dialog's layout can be:

- `center` (default): the modal dialog appears at the center of the viewport.
- `fullScreen`: the modal dialog covers the whole viewport.

<example name="LayoutModalDialog">
```tsx file="LayoutModalDialog.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

export default function LayoutModalDialog() {
  const [layout, setLayout] = React.useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('center');
          }}
        >
          Center
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('fullscreen');
          }}
        >
          Full screen
        </Button>
      </Stack>
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout}>
          <ModalClose />
          <DialogTitle>Modal Dialog</DialogTitle>
          <DialogContent>
            <div>
              This is a <code>{layout}</code> modal dialog. Press <code>esc</code> to
              close it.
            </div>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

To add more layout, create a new theme with [`styleOverrides`](https://mui.com/joy-ui/customization/themed-components/#theme-style-overrides) like this:

```js
const theme = extendTheme({
  components: {
    JoyModalDialog: {
      defaultProps: { layout: 'top' },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.layout === 'top' && {
            top: '12vh',
            left: '50%',
            transform: 'translateX(-50%)',
          }),
        }),
      },
    },
  },
});
```

For **TypeScript**, you need module augmentation to include the new values to the `layout` prop:

```ts
// at the root or theme file
declare module '@mui/joy/ModalDialog' {
  interface ModalDialogPropsLayoutOverrides {
    top: true;
  }
}
```

#### Vertical scroll

By default, content within the Modal Dialog won't overflow the screen when its height is bigger than the viewport.

To ensure your content is visible, make the container holding it overflow by adding the [`overflow` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) with either `scroll` or `auto` values.

<example name="DialogVerticalScroll">
```tsx file="DialogVerticalScroll.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Switch from '@mui/joy/Switch';
import Modal from '@mui/joy/Modal';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';
import Stack from '@mui/joy/Stack';

export default function DialogVerticalScroll() {
  const [layout, setLayout] = React.useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );
  const [scroll, setScroll] = React.useState<boolean>(true);
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('center');
          }}
        >
          Center
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('fullscreen');
          }}
        >
          Full screen
        </Button>
      </Stack>
      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}
      >
        <ModalDialog layout={layout}>
          <ModalClose />
          <DialogTitle>Vertical scroll example</DialogTitle>
          <FormControl
            orientation="horizontal"
            sx={{ bgcolor: 'background.level2', p: 1, borderRadius: 'sm' }}
          >
            <FormLabel>Container overflow</FormLabel>
            <Switch
              checked={scroll}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setScroll(event.target.checked)
              }
              sx={{ ml: 'auto' }}
            />
          </FormControl>
          <List
            sx={[
              {
                mx: 'calc(-1 * var(--ModalDialog-padding))',
                px: 'var(--ModalDialog-padding)',
              },
              scroll ? { overflow: 'scroll' } : { overflow: 'initial' },
            ]}
          >
            {[...Array(100)].map((item, index) => (
              <ListItem key={index}>I&apos;m in a scrollable area.</ListItem>
            ))}
          </List>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

### Modal Overflow

The previous section demonstrated how to make content _within_ the modal scrollable.

To make the _whole_ modal scrollable, in case its higher than the viewport, use the Modal Overflow component.
It will allow the Modal Dialog to vertically overflow the screen.

The Modal Overflow supports both `center` and `fullScreen` built-in layouts.

<example name="ModalDialogOverflow">
```tsx file="ModalDialogOverflow.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Switch from '@mui/joy/Switch';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

export default function ModalDialogOverflow() {
  const [layout, setLayout] = React.useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );
  const [scroll, setScroll] = React.useState<boolean>(true);
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('center');
          }}
        >
          Center
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('fullscreen');
          }}
        >
          Full screen
        </Button>
      </Stack>
      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}
      >
        <ModalOverflow>
          <ModalDialog aria-labelledby="modal-dialog-overflow" layout={layout}>
            <ModalClose />
            <Typography id="modal-dialog-overflow" level="h2">
              Overflow content
            </Typography>
            <FormControl
              orientation="horizontal"
              sx={{ bgcolor: 'background.level2', p: 1, borderRadius: 'sm' }}
            >
              <FormLabel>Long content</FormLabel>
              <Switch
                checked={scroll}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setScroll(event.target.checked)
                }
                sx={{ ml: 'auto' }}
              />
            </FormControl>
            {scroll && (
              <List>
                {[...Array(100)].map((item, index) => (
                  <ListItem key={index}>Item number ({index})</ListItem>
                ))}
              </List>
            )}
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

You can achieve the same result by using the Box component and CSS with the `sx` prop.
However, the Modal Overflow component adds greater convenience:

- It makes your styling more consistent, as you won't need to copy styles across different instances.
- You can also add theming customization to it directly from the theme.
- It automatically handles the close action when the user clicks on the Modal's backdrop.

### Alert dialog

Use `role="alertdialog"` to create an [alert dialog](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/) that interrupts the user's workflow.

<example name="AlertDialogModal">
```tsx file="AlertDialogModal.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function AlertDialogModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="danger"
        endDecorator={<DeleteForever />}
        onClick={() => setOpen(true)}
      >
        Discard
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to discard all of your notes?
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={() => setOpen(false)}>
              Discard notes
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

### Nested modals

The modal components can be nested:

<example name="NestedModals">
```tsx file="NestedModals.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

type NestedModalsProps = {
  random?: boolean;
};

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function NestedModals({ random }: NestedModalsProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          layout="center"
          {...(random && {
            sx: {
              top: `${randomBetween(25, 75)}%`,
              left: `${randomBetween(25, 75)}%`,
            },
          })}
        >
          <DialogTitle>Infinite modals</DialogTitle>
          <DialogContent>Welcome to the infinite nested modals.</DialogContent>
          <NestedModals random />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

export default NestedModals;
```
</example>

:::warning
Though it is possible to create nested modals, stacking more than two at a time is discouraged.
This is because each successive modal blocks interaction with all elements behind it, making prior states inaccessible and overly complicated for the user to navigate through.
:::

### Transition

The modal components **do not** come with built-in transitions.

Here is one example using [`react-transition-group`](https://reactcommunity.org/react-transition-group/transition/) to create a fade animation:

<example name="FadeModalDialog">
```tsx file="FadeModalDialog.tsx"
import * as React from 'react';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

export default function FadeModalDialog() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Transition in={open} timeout={400}>
        {(state: string) => (
          <Modal
            keepMounted
            open={!['exited', 'exiting'].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: 'none',
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                  }[state],
                },
              },
            }}
            sx={[
              state === 'exited'
                ? { visibility: 'hidden' }
                : { visibility: 'visible' },
            ]}
          >
            <ModalDialog
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <DialogTitle>Transition modal</DialogTitle>
              <DialogContent>
                Using `react-transition-group` to create a fade animation.
              </DialogContent>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </React.Fragment>
  );
}
```
</example>

### Performance

The modal's content is unmounted when it is not open.
This means that it will need to be re-mounted each time it is opened.

If you are rendering "expensive" component trees inside your modal, and you want to optimize for interaction responsiveness, change the default behavior by enabling the `keepMounted` prop.

Use the `keepMounted` prop to make the content of the modal available to search engines (even when the modal is closed).

The following demo shows how to apply this prop to keep the modal mounted:

<example name="KeepMountedModal">
```tsx file="KeepMountedModal.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Keep mounted modal</DialogTitle>
          <DialogContent>
            This modal is still in the DOM event though it is closed.
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

As with any performance optimization, the `keepMounted` prop won't necessarily solve all of your problems.
Explore other possible bottlenecks in performance where you could make more considerable improvements before implementing this prop.

### Server-side modal

React [doesn't support](https://github.com/facebook/react/issues/13097) the [`createPortal()`](https://react.dev/reference/react-dom/createPortal) API on the server.
Therefore, in order to display a modal rendered on the server, disable the portal feature with the `disablePortal` prop, as shown in the following demo:

<example name="ServerModal">
```tsx file="ServerModal.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

export default function ServerModal() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        height: 240,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
      ref={rootRef}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        container={() => rootRef.current!}
      >
        <ModalDialog
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          layout="center"
        >
          <Typography id="server-modal-title" level="h2">
            Server-side modal
          </Typography>
          <Typography id="server-modal-description" textColor="text.tertiary">
            If you disable JavaScript, you will still see me.
          </Typography>
        </ModalDialog>
      </Modal>
    </Box>
  );
}
```
</example>

## Common examples

### Mobile modal

Use `sx` prop with `theme.breakpoints.only('xs')` to customize the styles of the modal dialog to stick at the bottom in mobile viewport.

<example name="ResponsiveModal">
```tsx file="ResponsiveModal.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

export default function ResponsiveModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only('xs')]: {
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
              maxWidth: 'unset',
            },
          })}
        >
          <Typography id="nested-modal-title" level="h2">
            Are you absolutely sure?
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row-reverse' },
            }}
          >
            <Button variant="solid" color="primary" onClick={() => setOpen(false)}>
              Continue
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
```
</example>

## Limitations

### Focus trap

MUI Base `Modal` moves the focus back to the body of the component if the focus tries to escape it.

This is done for accessibility purposes, but it can potentially create issues for your users.

If the user needs to interact with another part of the page－for example, to interact with a chatbot window while a modal is open in the parent app－you can disable the default behavior with the `disableEnforceFocus` prop.

## Accessibility

See the [WAI-ARIA guide on the Dialog (Modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) for complete details on accessibility best practices. Here are a couple of highlights:

- All interactive elements must have an [accessible name](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Use the `aria-labelledby="id..."` to give your `Modal` component an accessible name.
  You can also use `aria-describedby="id..."` to provide a description of the `Modal`:

  ```jsx
  <Modal aria-labelledby="modal-title" aria-describedby="modal-description">
    <h2 id="modal-title">My Title</h2>
    My Description
  </Modal>
  ```

- Follow the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/) to help you set the initial focus on the most relevant element based on the content of the modal.
  :::warning
  A modal window can sit on top of either the parent application, or another modal window.
  _All_ windows under the topmost modal are **inert**, meaning the user cannot interact with them.
  This can lead to [conflicting behaviors](#focus-trap).
  :::
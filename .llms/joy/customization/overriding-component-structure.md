# Overriding component structure

Learn how to override the default DOM structure of Joy UI components.

Joy UI components are designed to suit the widest possible range of use cases, but you may occasionally need to change how a component's structure is rendered in the DOM.

To understand how to do this, it helps to have an accurate mental model of the components.

## The mental model

A component's structure is determined by the elements that fill that component's **slots**.
Slots are most commonly filled by HTML tags, but may also be filled by React components.

All components contain a root slot that defines their primary node in the DOM tree; more complex components also contain additional interior slots named after the elements they represent.

All _non-utility_ Joy UI components accept two props for overriding their rendered HTML structure:

- `component`—to override the root slot
- `slots`—to replace any interior slots (when present) as well as the root

Additionally, you can pass custom props to interior slots using `slotProps`.

## The root slot

The root slot represents the component's outermost element. It is filled by a styled component with an appropriate HTML element.

For example, the [Button's](https://mui.com/joy-ui/react-button/) root slot is a `<button>` element.
This component _only_ has a root slot; more complex components may have additional [interior slots](#interior-slots).

### The component prop

Use the `component` prop to override a component's root slot.
The demo below shows how to replace the Button's `<button>` tag with a `<a>` to create a link button:

<example name="OverridingRootSlot">
```tsx file="OverridingRootSlot.tsx"
import * as React from 'react';
import Button from '@mui/joy/Button';

export default function OverridingRootSlot() {
  return (
    <Button
      component="a"
      href="https://mui.com/about/"
      target="_blank"
      rel="noopener"
    >
      About us
    </Button>
  );
}
```
</example>

:::info
The props `href`, `target`, and `rel` are specific to `<a>` tag. Be sure to use the appropriate attributes when you provide a custom `component` prop.
:::

## Interior slots

Complex components are composed of one or more interior slots in addition to the root.
These slots are often (but not necessarily) nested within the root.

For example, the [Autocomplete](https://mui.com/joy-ui/react-autocomplete/) is composed of a root `<div>` that houses several interior slots named for the elements they represent: input, startDecorator, endDecorator, clearIndicator, popupIndicator and so on.

### The slots prop

Use the `slots` prop to replace a component's interior slots.
The example below shows how to replace the listbox slot in the [Autocomplete](https://mui.com/joy-ui/react-autocomplete/) component to remove the popup functionality:

<example name="OverridingInternalSlot">
```tsx file="OverridingInternalSlot.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteListbox from '@mui/joy/AutocompleteListbox';

export default function OverridingInternalSlot() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 320 }}>
      <Autocomplete
        open
        multiple
        disableClearable
        placeholder="Type to search"
        options={[
          { label: '🆘 Need help' },
          { label: '✨ Improvement' },
          { label: '🚀 New feature' },
          { label: '🐛 Bug fix' },
        ]}
        slots={{
          listbox: AutocompleteListbox,
        }}
      />
    </Box>
  );
}
```
</example>

### The slotProps prop

The `slotProps` prop is an object that contains the props for all slots within a component.
You can use it to define additional custom props to pass to a component's interior slots.

For example, the code snippet below shows how to add a custom `data-testid` to the listbox slot of the [Autocomplete](https://mui.com/joy-ui/react-autocomplete/) component:

```jsx
<Autocomplete slotProps={{ listbox: { 'data-testid': 'my-listbox' } }} />
```

All additional props placed on the primary component are also propagated into the root slot (just as if they were placed in `slotProps.root`).
These two examples are equivalent:

```jsx
<Autocomplete id="badge1">
```

```jsx
<Autocomplete slotProps={{ root: { id: 'badge1' } }}>
```

:::warning
If both `slotProps.root` and additional props have the same keys but different values, the `slotProps.root` props will take precedence.
This does not apply to classes or the `style` prop—they will be merged instead.
:::

## Best practices

Use `component` or `slotProps.{slot}.component` prop to override the element by preserving the styles of the slot.

Use `slots` prop to replace the slot's styles and functionality with your custom component.

Overriding with `component` lets you apply the attributes of that element directly to the root.
For instance, if you override the Button's root with an `<li>` tag, you can add the `<li>` attribute `value` directly to the component.
If you did the same with `slots.root`, you would need to place this attribute on the `slotProps.root` object in order to avoid a TypeScript error.

Be mindful of your rendered DOM structure when overriding the slots of more complex components.
You can easily break the rules of semantic and accessible HTML if you deviate too far from the default structure—for instance, by unintentionally nesting block-level elements inside of inline elements.
Joy UI components automatically correct semantically incorrect HTML—see [Automatic adjustment](https://mui.com/joy-ui/main-features/automatic-adjustment/) for details.
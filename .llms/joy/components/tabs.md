---
productId: joy-ui
title: React Tabs component
components: Tab, TabList, TabPanel, Tabs
githubLabel: 'component: tabs'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
unstyled: https://base-ui.com/react/components/menu
---

# Tabs

Tabs make it easy to explore and switch between different views.

## Introduction

Joy UI provides four tabs-related components:

- `Tabs`: A context provider that synchronizes the selected `Tab` with the corresponding `TabPanel`.
- `TabList`: A container that consists of `Tab` items.
- `Tab`: A button to toggle a selected tab.
- `TabPanel`: A pane that displays on the screen when its value matches with the selected tab.

<example name="TabsUsage">
```jsx file="TabsUsage.js"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';
import Apps from '@mui/icons-material/Apps';

export default function TabsUsage() {
  const [index, setIndex] = React.useState(0);
  return (
    <JoyUsageDemo
      componentName="Tabs"
      data={[
        {
          formLabel: 'Selected tab variant',
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'plain',
          options: ['plain', 'outlined', 'soft', 'solid'],
          codeBlockDisplay: false,
        },
        {
          formLabel: 'Selected tab color',
          propName: 'color',
          knob: 'color',
          defaultValue: 'neutral',
          codeBlockDisplay: false,
        },
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          propName: 'orientation',
          knob: 'radio',
          options: ['horizontal', 'vertical'],
          defaultValue: 'horizontal',
        },
        {
          formLabel: 'Disable TabList underline',
          propName: 'disableUnderline',
          knob: 'switch',
          defaultValue: false,
          codeBlockDisplay: false,
        },
        {
          formLabel: 'Tab indicator inset',
          propName: 'indicatorInset',
          knob: 'switch',
          defaultValue: false,
          codeBlockDisplay: false,
        },
        {
          formLabel: 'Disable Tab indicator',
          propName: 'disableIndicator',
          knob: 'switch',
          defaultValue: false,
          codeBlockDisplay: false,
        },
        {
          propName: 'children',
          defaultValue: '$children',
        },
      ]}
      getCodeBlock={(code, props) =>
        code.replace(
          '$children',
          `<TabList${props.disableUnderline ? ` disableUnderline` : ''}>
    <Tab${
      props.variant
        ? `
      variant="${props.variant}"`
        : ''
    }${
      props.color
        ? `
      color="${props.color}"`
        : ''
    }${
      props.disableIndicator
        ? `
      disableIndicator`
        : ''
    }${
      props.indicatorInset
        ? `
      indicatorInset`
        : ''
    }>...</Tab>
  </TabList>
  <TabPanel>...</TabPanel>`,
        )
      }
      renderDemo={({
        color,
        variant,
        disableUnderline,
        indicatorInset,
        disableIndicator,
        ...props
      }) => (
        <Tabs {...props} value={index} onChange={(event, value) => setIndex(value)}>
          <TabList disableUnderline={disableUnderline}>
            <Tab
              indicatorInset={indicatorInset}
              disableIndicator={disableIndicator}
              {...(index === 0 && { color, variant })}
            >
              <Apps />
              Tab A
            </Tab>
            <Tab
              indicatorInset={indicatorInset}
              disableIndicator={disableIndicator}
              {...(index === 1 && { color, variant })}
            >
              Tab B
            </Tab>
            <Tab
              indicatorInset={indicatorInset}
              disableIndicator={disableIndicator}
              {...(index === 2 && { color, variant })}
            >
              Tab C
            </Tab>
          </TabList>
          <TabPanel value={0}>Content of Tab A</TabPanel>
          <TabPanel value={1}>Content of Tab B</TabPanel>
          <TabPanel value={2}>Content of Tab C</TabPanel>
        </Tabs>
      )}
    />
  );
}
```
</example>

## Basics

```jsx
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
```

The Joy UI set of Tabs components follows the [WAI ARIA design pattern guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

Use the `value` prop on the Tab Panel and the `defaultValue` prop on the Tabs component to target the selected tab.

<example name="TabsBasic">
```tsx file="TabsBasic.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function TabsBasic() {
  return (
    <Tabs aria-label="Basic tabs" defaultValue={0}>
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel value={0}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}
```
</example>

### Disabled tab

Use the `disabled` prop to disable interaction and focus.

<example name="TabDisabled">
```tsx file="TabDisabled.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

export default function TabDisabled() {
  return (
    <Tabs aria-label="Disabled tabs" defaultValue={0}>
      <TabList>
        <Tab>First tab</Tab>
        <Tab disabled>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
    </Tabs>
  );
}
```
</example>

## Customization

### Variants

The `<TabList />` and `<Tab />` components accept the global `variant` prop values.

:::info
When a Tab is selected, it _won't_ apply globally defined `:hover` and `:active` styles.
:::

<example name="TabsVariants">
```tsx file="TabsVariants.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

export default function TabsVariants() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      <Tabs
        aria-label="Plain tabs"
        value={index}
        onChange={(event, value) => setIndex(value as number)}
      >
        <TabList variant="plain">
          <Tab variant={index === 0 ? 'outlined' : 'plain'}>First tab</Tab>
          <Tab variant={index === 1 ? 'outlined' : 'plain'}>Second tab</Tab>
          <Tab variant={index === 2 ? 'outlined' : 'plain'}>Third tab</Tab>
        </TabList>
      </Tabs>

      <Tabs
        aria-label="Outlined tabs"
        value={index}
        onChange={(event, value) => setIndex(value as number)}
      >
        <TabList variant="outlined" disableUnderline>
          <Tab
            variant={index === 0 ? 'soft' : 'plain'}
            color={index === 0 ? 'success' : 'neutral'}
          >
            First tab
          </Tab>
          <Tab
            variant={index === 1 ? 'soft' : 'plain'}
            color={index === 1 ? 'warning' : 'neutral'}
          >
            Second tab
          </Tab>
          <Tab
            variant={index === 2 ? 'soft' : 'plain'}
            color={index === 2 ? 'danger' : 'neutral'}
          >
            Third tab
          </Tab>
        </TabList>
      </Tabs>

      <Tabs
        aria-label="Soft tabs"
        value={index}
        onChange={(event, value) => setIndex(value as number)}
      >
        <TabList variant="soft">
          <Tab
            variant={index === 0 ? 'solid' : 'plain'}
            color={index === 0 ? 'primary' : 'neutral'}
          >
            First tab
          </Tab>
          <Tab
            variant={index === 1 ? 'solid' : 'plain'}
            color={index === 1 ? 'primary' : 'neutral'}
          >
            Second tab
          </Tab>
          <Tab
            variant={index === 2 ? 'solid' : 'plain'}
            color={index === 2 ? 'primary' : 'neutral'}
          >
            Third tab
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}
```
</example>

:::warning
To learn how to add more variants to the component, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
:::

### Vertical

Use the `orientation="vertical"` prop on the `<Tabs />` component to make it vertical.
Keyboard navigation using arrow keys adapts automatically.

<example name="TabsVertical">
```tsx file="TabsVertical.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function TabsVertical() {
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{ minWidth: 300, height: 160 }}
    >
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel value={0}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}
```
</example>

### Indicator placement

Use the `underlinePlacement` prop on the Tab List component to change the placement of the underline border on the Tabs.

<example name="TabsUnderlinePlacement">
```tsx file="TabsUnderlinePlacement.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function TabsUnderlinePlacement() {
  const [placement, setPlacement] = React.useState<
    'top' | 'bottom' | 'left' | 'right'
  >('top');
  return (
    <Tabs
      variant="plain"
      aria-label="Placement indicator tabs"
      value={placement}
      onChange={(event, newValue) => setPlacement(newValue as typeof placement)}
    >
      <TabList underlinePlacement={placement}>
        <Tab disableIndicator value="top">
          Top
        </Tab>
        <Tab disableIndicator value="right">
          Right
        </Tab>
        <Tab disableIndicator value="bottom">
          Bottom
        </Tab>
        <Tab disableIndicator value="left">
          Left
        </Tab>
      </TabList>
      <TabPanel value="top">
        underlinePlacement <b>Top</b>
      </TabPanel>
      <TabPanel value="bottom">
        underlinePlacement <b>Bottom</b>
      </TabPanel>
      <TabPanel value="left">
        underlinePlacement <b>Left</b>
      </TabPanel>
      <TabPanel value="right">
        underlinePlacement <b>Right</b>
      </TabPanel>
    </Tabs>
  );
}
```
</example>

Control the selected Tab indicator independently using the `indicatorPlacement` prop.

<example name="TabsIndicatorPlacement">
```tsx file="TabsIndicatorPlacement.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function TabsIndicatorPlacement() {
  return (
    <Tabs defaultValue="top">
      <TabList underlinePlacement="bottom">
        <Tab value="top" indicatorPlacement="top">
          Top
        </Tab>
        <Tab value="right" indicatorPlacement="right">
          Right
        </Tab>
        <Tab value="bottom" indicatorPlacement="bottom">
          Bottom
        </Tab>
        <Tab value="left" indicatorPlacement="left">
          Left
        </Tab>
      </TabList>
      <TabPanel value="top">
        IndicatorPlacement <b>Top</b>
      </TabPanel>
      <TabPanel value="right">
        IndicatorPlacement <b>Right</b>
      </TabPanel>
      <TabPanel value="bottom">
        IndicatorPlacement <b>Bottom</b>
      </TabPanel>
      <TabPanel value="left">
        IndicatorPlacement <b>Left</b>
      </TabPanel>
    </Tabs>
  );
}
```
</example>

Depending on the placement of the underline and the selected indicator, you may need to change the flex direction of the Tabs component.

<example name="TabsFlexPlacement">
```tsx file="TabsFlexPlacement.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function TabsFlexPlacement() {
  const [direction, setDirection] = React.useState<
    'row' | 'column' | 'row-reverse' | 'column-reverse'
  >('column');
  const [placement, setPlacement] = React.useState<
    'top' | 'bottom' | 'left' | 'right'
  >('bottom');
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '180px 140px', gap: 1.5 }}>
      <FormControl>
        <FormLabel>Flex direction</FormLabel>
        <Select
          value={direction}
          onChange={(event, newValue) => setDirection(newValue!)}
        >
          <Option value="column">Column</Option>
          <Option value="column-reverse">Column Reverse</Option>
          <Option value="row">Row</Option>
          <Option value="row-reverse">Row Reverse</Option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Placement</FormLabel>
        <Select
          value={placement}
          onChange={(event, newValue) => setPlacement(newValue!)}
        >
          <Option value="top">top</Option>
          <Option value="bottom">bottom</Option>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </FormControl>
      <Tabs
        variant="outlined"
        orientation={direction.startsWith('row') ? 'vertical' : 'horizontal'}
        aria-label="Placement indicator tabs"
        defaultValue="a"
        sx={{ gridColumn: '1/-1', height: 180, flexDirection: direction }}
      >
        <TabList underlinePlacement={placement}>
          <Tab indicatorPlacement={placement} value="a">
            Tab A
          </Tab>
          <Tab indicatorPlacement={placement} value="b">
            Tab B
          </Tab>
          <Tab indicatorPlacement={placement} value="c">
            Tab C
          </Tab>
        </TabList>
        <TabPanel value="a">Content of Tab A</TabPanel>
        <TabPanel value="b">Content of Tab B</TabPanel>
        <TabPanel value="c">Content of Tab C</TabPanel>
      </Tabs>
    </Box>
  );
}
```
</example>

### Sticky

Use the `sticky` prop to anchor the Tab List component at the top or bottom.
This is ideal for use cases that involve longer content.

<example name="TabsSticky">
```jsx file="TabsSticky.js"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

export default function TabsSticky() {
  const [sticky, setSticky] = React.useState('top');
  const items = [
    <TabList
      key="tablist"
      sticky={sticky}
      variant="soft"
      underlinePlacement={{ top: 'bottom', bottom: 'top' }[sticky]}
    >
      <Tab indicatorPlacement={{ top: 'bottom', bottom: 'top' }[sticky]} value="top">
        Sticky top
      </Tab>
      <Tab
        indicatorPlacement={{ top: 'bottom', bottom: 'top' }[sticky]}
        value="bottom"
      >
        Sticky bottom
      </Tab>
    </TabList>,
    <div key="tabpanel">
      {[...new Array(50)].map((_, index) => (
        <div key={index}>Long content</div>
      ))}
    </div>,
  ];
  return (
    <Tabs
      aria-label="Sticky tabs"
      value={sticky}
      onChange={(event, newValue) => setSticky(newValue)}
      sx={{ p: 1, maxHeight: 200, overflowY: 'auto' }}
    >
      {sticky === 'top' ? items : items.reverse()}
    </Tabs>
  );
}
```
</example>

### Tab flex

Use the `tabFlex` prop on the Tab List component to make the Tab elements fill the available space, as shown in the example below.

- In the first demo, the Tab elements fill the available space using `tabFlex={1}`.
- In the second demo, the Tab elements fill the available space equally using `tabFlex="auto"`, but the width of each respective element is based on its content.

<example name="TabsFlex">
```tsx file="TabsFlex.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Stack from '@mui/joy/Stack';

export default function TabsFlex() {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Tabs aria-label="Flex one tabs">
        <TabList tabFlex={1}>
          <Tab>First tab</Tab>
          <Tab sx={{ wordBreak: 'break-word' }}>
            Example of a very long tab label
          </Tab>
          <Tab>Third tab</Tab>
        </TabList>
      </Tabs>

      <Tabs aria-label="Flex auto tabs">
        <TabList tabFlex="auto">
          <Tab>First tab</Tab>
          <Tab>Example of a very long tab label</Tab>
          <Tab>Third tab</Tab>
        </TabList>
      </Tabs>
    </Stack>
  );
}
```
</example>

:::info
The value of the `tabFlex` prop can be any [valid CSS flex value](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).
:::

### Icon

Since the Tab List component uses the same style as the [List](https://mui.com/joy-ui/react-list/) component, you can use the icon directly as a child, or use List Item Decorator with text.

<example name="TabsIcon">
```tsx file="TabsIcon.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function TabsIcon() {
  return (
    <Tabs aria-label="Icon tabs" defaultValue={0}>
      <TabList>
        <Tab>
          <PhoneIcon />
        </Tab>
        <Tab>
          <FavoriteIcon />
        </Tab>
        <Tab>
          <PersonPinIcon />
        </Tab>
      </TabList>
    </Tabs>
  );
}
```
</example>

<example name="TabsIconWithText">
```tsx file="TabsIconWithText.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Stack from '@mui/joy/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function TabsIconWithText() {
  return (
    <Stack spacing={2}>
      <Tabs aria-label="Icon tabs" defaultValue={0}>
        <TabList>
          <Tab>
            <ListItemDecorator>
              <PhoneIcon />
            </ListItemDecorator>
            Recents
          </Tab>
          <Tab>
            <ListItemDecorator>
              <FavoriteIcon />
            </ListItemDecorator>
            Favorite
          </Tab>
          <Tab>
            <ListItemDecorator>
              <PersonPinIcon />
            </ListItemDecorator>
            Nearby
          </Tab>
        </TabList>
      </Tabs>
      <Tabs aria-label="Icon tabs" defaultValue={0}>
        <TabList tabFlex="auto">
          <Tab orientation="vertical">
            <ListItemDecorator>
              <PhoneIcon />
            </ListItemDecorator>
            Recents
          </Tab>
          <Tab orientation="vertical">
            <ListItemDecorator>
              <FavoriteIcon />
            </ListItemDecorator>
            Favorite
          </Tab>
          <Tab orientation="vertical">
            <ListItemDecorator>
              <PersonPinIcon />
            </ListItemDecorator>
            Nearby
          </Tab>
        </TabList>
      </Tabs>
    </Stack>
  );
}
```
</example>

### Scrollable tabs

Add the `overflow: auto` property to the Tab List component to make the tabs scrollable.

Polish it further by hiding the scrollbar with `'&::-webkit-scrollbar': { display: 'none' }`, and snapping the scroll to the edge of the Tab List component with [CSS scroll snap properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap).

<example name="TabsScrollable">
```tsx file="TabsScrollable.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

export default function TabsScrollable() {
  return (
    <Tabs aria-label="Scrollable tabs" defaultValue={0} sx={{ width: 400 }}>
      <TabList
        sx={{
          overflow: 'auto',
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {[...Array(20)].map((_, index) => (
          <Tab key={index} sx={{ flex: 'none', scrollSnapAlign: 'start' }}>
            Tab #{index + 1}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
```
</example>

## CSS variables playground

Play around with all the CSS variables available in the slider component to see how the design changes.

You can use those to customize the component on both the `sx` prop and the theme.

<example name="TabsVariables">
```jsx file="TabsVariables.js"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function TabsVariables() {
  return (
    <JoyVariablesDemo
      componentName="Tabs"
      childrenAccepted
      data={[
        {
          var: '--Tabs-spacing',
          defaultValue: '16px',
          helperText: "Controls TabList's gap and TabPanel's padding.",
        },
        {
          var: '--Tab-indicatorThickness',
          defaultValue: '2px',
        },
        {
          var: '--Tab-indicatorSize',
          defaultValue: '0px',
        },
        {
          var: '--Tab-indicatorRadius',
          defaultValue: '0px',
        },
      ]}
      renderDemo={(sx) => (
        <Tabs sx={sx} defaultValue={0}>
          <TabList>
            <Tab>Tab A</Tab>
            <Tab>Tab B</Tab>
            <Tab>Tab C</Tab>
          </TabList>
          <TabPanel value={0}>Tab A content</TabPanel>
          <TabPanel value={1}>Tab B content</TabPanel>
          <TabPanel value={2}>Tab C content</TabPanel>
        </Tabs>
      )}
    />
  );
}
```
</example>

## Common examples

### Segmented controls

To mimic the segmented controls of iOS, add a border-radius to the Tab List component and set the selected Tab background to `background.surface`.

<example name="TabsSegmentedControls">
```tsx file="TabsSegmentedControls.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';

export default function TabsSegmentedControls() {
  return (
    <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
      <TabList
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: 'xl',
          bgcolor: 'background.level1',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: 'background.surface',
          },
        }}
      >
        <Tab disableIndicator>Feature</Tab>
        <Tab disableIndicator>Specifications</Tab>
        <Tab disableIndicator>Review</Tab>
        <Tab disableIndicator>Support</Tab>
      </TabList>
    </Tabs>
  );
}
```
</example>

### Browser tabs

In this example, the Tab's variant prop is set to `outlined` and the indicator is moved to the top via `indicatorPlacement="top"`.
The borders are then set to `transparent` based on the selected state.

<example name="TabsBrowserExample">
```tsx file="TabsBrowserExample.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import SvgIcon from '@mui/joy/SvgIcon';

export default function TabsBrowserExample() {
  const [index, setIndex] = React.useState(0);
  return (
    <Tabs
      aria-label="tabs"
      value={index}
      onChange={(event, newValue) => setIndex(newValue as number)}
    >
      <TabList
        variant="soft"
        sx={{
          [`& .${tabClasses.root}`]: {
            '&[aria-selected="true"]': {
              bgcolor: 'background.surface',
              borderColor: 'divider',
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                height: 2,
                bottom: -2,
                left: 0,
                right: 0,
                bgcolor: 'background.surface',
              },
            },
          },
        }}
      >
        <Tab indicatorPlacement="top">
          <ListItemDecorator>
            <GoogleIcon />
          </ListItemDecorator>
          Google Search
        </Tab>
        <Tab indicatorPlacement="top">
          <ListItemDecorator>
            <XIcon />
          </ListItemDecorator>
          X
        </Tab>
        <Tab indicatorPlacement="top">
          <ListItemDecorator>
            <DribbbleIcon />
          </ListItemDecorator>
          Dribbble
        </Tab>
        <Tab indicatorPlacement="top">
          <ListItemDecorator>
            <ReactIcon />
          </ListItemDecorator>
          React
        </Tab>
      </TabList>
    </Tabs>
  );
}

function GoogleIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="705.6"
        height="720"
        viewBox="0 0 186.69 190.5"
        fill="currentColor"
      >
        <g transform="translate(1184.583 765.171)">
          <path
            clipPath="none"
            mask="none"
            d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
            fill="#4285f4"
          />
          <path
            clipPath="none"
            mask="none"
            d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
            fill="#34a853"
          />
          <path
            clipPath="none"
            mask="none"
            d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
            fill="#fbbc05"
          />
          <path
            d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
            fill="#ea4335"
            clipPath="none"
            mask="none"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
function XIcon() {
  return (
    <SvgIcon>
      <svg
        width="350"
        height="321"
        viewBox="0 0 350 321"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Rectangle"
          fill="#000000"
          fillRule="evenodd"
          stroke="none"
          d="M 0 321 L 350 321 L 350 0 L 0 0 Z"
        />
        <path
          id="Path"
          fill="#ffffff"
          stroke="none"
          d="M 261 25 L 307 25 L 206 140 L 324 296 L 231.399994 296 L 158.899994 201.199997 L 75.900002 296 L 29.9 296 L 136.900009 173 L 23.9 25 L 118.800003 25 L 184.300003 111.600006 Z M 244.899994 269 L 270.399994 269 L 105.400002 51 L 78 51 Z"
        />
      </svg>
    </SvgIcon>
  );
}

function DribbbleIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 291.32 291.32"
        fill="#EA4C89"
      >
        <g>
          <path d="M145.66,0.001C65.21,0.001,0,65.22,0,145.661S65.21,291.32,145.66,291.32   s145.66-65.219,145.66-145.66S226.109,0.001,145.66,0.001z M241.239,70.5c15.658,19.883,25.245,44.717,26,71.746   c-32.682-5.726-60.867-5.899-85.22-2.039c-3.086-7.083-6.263-13.965-9.522-20.629C198.616,108.836,222.04,93.168,241.239,70.5z    M224.479,53.094c-17.151,20.82-38.682,35.149-63.043,44.9c-15.595-28.895-31.635-52.975-44.453-70.554   c9.204-2.249,18.79-3.45,28.668-3.45C175.72,23.98,203.231,34.968,224.479,53.094z M93.359,35.824   c12.39,16.541,28.877,40.502,45,69.88c-34.175,9.386-72.402,11.917-111.093,12.026C35.805,81.534,60.512,51.528,93.359,35.824z    M23.997,145.65l0.1-3.933h0.655c43.352,0,86.394-2.84,124.985-14.211c2.877,5.854,5.708,11.862,8.476,18.044   c-50.771,14.885-82.425,48.295-104.119,80.085C35.377,204.252,23.997,176.258,23.997,145.65z M71.828,242.26   c20.538-30.934,49.16-61.541,95.735-74.396c10.879,27.876,19.755,58.3,24.453,90.254c-14.293,5.936-29.942,9.213-46.347,9.213   C117.911,267.331,92.312,257.982,71.828,242.26z M214.393,245.993c-4.98-29.196-13.137-57.044-22.96-82.862   c21.285-2.704,45.755-2.048,74.122,3.168C259.884,199.271,240.93,227.758,214.393,245.993z" />
        </g>
      </svg>
    </SvgIcon>
  );
}

function ReactIcon() {
  return (
    <SvgIcon htmlColor="#087ea4">
      <svg
        width="100%"
        height="100%"
        viewBox="-10.5 -9.45 21 18.9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="0" cy="0" r="2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5" />
          <ellipse rx="10" ry="4.5" transform="rotate(60)" />
          <ellipse rx="10" ry="4.5" transform="rotate(120)" />
        </g>
      </svg>
    </SvgIcon>
  );
}
```
</example>

### Pricing tabs

This example removes the background of the selected Tab by targeting the `aria-selected="true"` attribute.

<example name="TabsPricingExample">
```tsx file="TabsPricingExample.tsx"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';

export default function TabsPricingExample() {
  return (
    <Tabs
      variant="outlined"
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{ width: 343, borderRadius: 'lg', boxShadow: 'sm', overflow: 'auto' }}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontSize: 'sm',
            fontWeight: 'lg',
            [`&[aria-selected="true"]`]: {
              color: 'primary.500',
              bgcolor: 'background.surface',
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: '-4px',
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Community
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Pro
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Premium
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <Typography level="inherit">
          Get started with the industry-standard React UI library, MIT-licensed.
        </Typography>
        <Typography
          textColor="success.400"
          sx={{ fontSize: 'xl3', fontWeight: 'xl', mt: 1 }}
        >
          $0{' '}
          <Typography
            textColor="text.secondary"
            sx={{ fontSize: 'sm', fontWeight: 'md' }}
          >
            － Free forever
          </Typography>
        </Typography>
      </TabPanel>
      <TabPanel value={1}>
        <Typography level="inherit">
          Best for professional developers building enterprise or data-rich
          applications.
        </Typography>
        <Typography
          textColor="primary.400"
          sx={{ fontSize: 'xl3', fontWeight: 'xl', mt: 1 }}
        >
          $15{' '}
          <Typography
            textColor="text.secondary"
            sx={{ fontSize: 'sm', fontWeight: 'md' }}
          >
            / dev / month
          </Typography>
        </Typography>
      </TabPanel>
      <TabPanel value={2}>
        <Typography level="inherit">
          The most advanced features for data-rich applications, as well as the
          highest priority for support.
        </Typography>
        <Typography
          textColor="primary.400"
          sx={{ fontSize: 'xl3', fontWeight: 'xl', mt: 1 }}
        >
          <Typography
            sx={[
              {
                fontSize: 'xl',
                borderRadius: 'sm',
                px: 0.5,
                mr: 0.5,
              },
              (theme) => ({
                ...theme.variants.soft.danger,
                color: 'danger.400',
                verticalAlign: 'text-top',
                textDecoration: 'line-through',
              }),
            ]}
          >
            $49
          </Typography>
          $37*{' '}
          <Typography
            textColor="text.secondary"
            sx={{ fontSize: 'sm', fontWeight: 'md' }}
          >
            / dev / month
          </Typography>
        </Typography>
      </TabPanel>
    </Tabs>
  );
}
```
</example>

### Centered tabs

To center the Tab components in the Tab List, add the `flex: initial` property to override the default `flex-grow` behavior.
Then, on the list, add `justifyContent: center`.

<example name="TabsPageExample">
```tsx file="TabsPageExample.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function TabsPageExample() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box sx={{ flexGrow: 1, m: -2, overflowX: 'hidden' }}>
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value as number)}
      >
        <TabList
          sx={{
            pt: 1,
            justifyContent: 'center',
            [`&& .${tabClasses.root}`]: {
              flex: 'initial',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                '&::after': {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab indicatorInset>
            Deals{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 0 ? 'primary' : 'neutral'}
            >
              14
            </Chip>
          </Tab>
          <Tab indicatorInset>
            Library{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? 'primary' : 'neutral'}
            >
              20
            </Chip>
          </Tab>
          <Tab indicatorInset>
            Products{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 2 ? 'primary' : 'neutral'}
            >
              8
            </Chip>
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        >
          <TabPanel value={0}>Deals</TabPanel>
          <TabPanel value={1}>Library</TabPanel>
          <TabPanel value={2}>Products</TabPanel>
        </Box>
      </Tabs>
    </Box>
  );
}
```
</example>

### Mobile bottom navigation

In this example, each Tab is painted with a color from the theme when selected.

<example name="TabsBottomNavExample">
```tsx file="TabsBottomNavExample.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';

export default function TabsBottomNavExample() {
  const [index, setIndex] = React.useState(0);
  const colors = ['primary', 'danger', 'success', 'warning'] as const;
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: -3,
        p: 4,
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        bgcolor: `${'var(--colors-index)'}.500`,
      }}
      style={{ '--colors-index': colors[index] } as any}
    >
      <Tabs
        size="lg"
        aria-label="Bottom Navigation"
        value={index}
        onChange={(event, value) => setIndex(value as number)}
        sx={(theme) => ({
          p: 1,
          borderRadius: 16,
          maxWidth: 400,
          mx: 'auto',
          boxShadow: theme.shadow.sm,
          '--joy-shadowChannel': theme.vars.palette[colors[index]].darkChannel,
          [`& .${tabClasses.root}`]: {
            py: 1,
            flex: 1,
            transition: '0.3s',
            fontWeight: 'md',
            fontSize: 'md',
            [`&:not(.${tabClasses.selected}):not(:hover)`]: {
              opacity: 0.7,
            },
          },
        })}
      >
        <TabList
          variant="plain"
          size="sm"
          disableUnderline
          sx={{ borderRadius: 'lg', p: 0 }}
        >
          <Tab
            disableIndicator
            orientation="vertical"
            {...(index === 0 && { color: colors[0] })}
          >
            <ListItemDecorator>
              <HomeRoundedIcon />
            </ListItemDecorator>
            Home
          </Tab>
          <Tab
            disableIndicator
            orientation="vertical"
            {...(index === 1 && { color: colors[1] })}
          >
            <ListItemDecorator>
              <FavoriteBorder />
            </ListItemDecorator>
            Likes
          </Tab>
          <Tab
            disableIndicator
            orientation="vertical"
            {...(index === 2 && { color: colors[2] })}
          >
            <ListItemDecorator>
              <Search />
            </ListItemDecorator>
            Search
          </Tab>
          <Tab
            disableIndicator
            orientation="vertical"
            {...(index === 3 && { color: colors[3] })}
          >
            <ListItemDecorator>
              <Person />
            </ListItemDecorator>
            Profile
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}
```
</example>

## Accessibility

To ensure proper accessibility, the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#wai-aria-roles-states-and-properties-22) recommends associating a label with the Tabs component.
There are two options to accomplish this:

### Using the id attribute

Add a text element close to the tabs with the `id` attribute.
Then add the `aria-labelledby` attribute to the Tabs component.
Make sure to use meaningful labels for both.

```js
<Typography id="tabs-accessibility-label">Meaningful label</Typography>
<Tabs aria-labelledby="tabs-accessibility-label">...</Tabs>
```

### Using aria-label

If a text element does not accompany your Tabs component, use the `aria-label` attribute directly to make it readable by screen readers.

```js
<Tabs aria-label="Meaningful label">...</Tabs>
```
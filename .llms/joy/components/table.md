---
productId: joy-ui
title: React Table component
components: Table
githubLabel: 'component: table'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/table/
---

# Table

Tables display sets of data organized in rows and columns.

## Introduction

The Joy UI Table component lets you use plain HTML structure to assemble a table in JSX.

<example name="TableUsage">
```jsx file="TableUsage.js"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function TableUsage() {
  return (
    <JoyUsageDemo
      componentName="Table"
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
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          propName: 'borderAxis',
          knob: 'select',
          options: ['xBetween', 'x', 'yBetween', 'y', 'bothBetween', 'both', 'none'],
          defaultValue: 'xBetween',
        },
        {
          propName: 'stickyHeader',
          knob: 'switch',
          defaultValue: false,
        },
        {
          propName: 'stickyFooter',
          knob: 'switch',
          defaultValue: false,
        },
        {
          propName: 'stripe',
          knob: 'radio',
          options: ['undefined', 'odd', 'even'],
        },
      ]}
      getCodeBlock={(code) => `<Sheet>
  ${code}
</Sheet>`}
      renderDemo={(props) => (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            level="body-xs"
            sx={{ justifyContent: 'center', textAlign: 'center', mb: 2 }}
          >
            The table is scrollable.
          </Typography>
          <Sheet variant="outlined" sx={{ p: 2, borderRadius: 'sm' }}>
            <Sheet sx={{ height: 200, overflow: 'auto', borderRadius: 0 }}>
              <Table {...props}>
                <thead>
                  <tr>
                    <th style={{ width: 64 }}>ID</th>
                    <th>Job Title</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Doctor</td>
                    <td>Chris Johnson</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Electrician</td>
                    <td>Joseph Morris</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Operator</td>
                    <td>Aiden Moreno</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Baker</td>
                    <td>Mike Simmons</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Clerk</td>
                    <td>Enoch Addison</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td colSpan={2} style={{ textAlign: 'center' }}>
                      4 people
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </Sheet>
          </Sheet>
        </Box>
      )}
    />
  );
}
```
</example>

## Basics

Joy UI Table will apply the styles based on a table structure using `<thead>`, `<tbody>`, and `<tfoot>` elements.

```jsx
import Table from '@mui/joy/Table';
```

<example name="BasicTable">
```tsx file="BasicTable.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';

export default function BasicTable() {
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Dessert (100g serving)</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frozen yoghurt</td>
          <td>159</td>
          <td>6</td>
          <td>24</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Ice cream sandwich</td>
          <td>237</td>
          <td>9</td>
          <td>37</td>
          <td>4.3</td>
        </tr>
        <tr>
          <td>Eclair</td>
          <td>262</td>
          <td>16</td>
          <td>24</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Cupcake</td>
          <td>305</td>
          <td>3.7</td>
          <td>67</td>
          <td>4.3</td>
        </tr>
        <tr>
          <td>Gingerbread</td>
          <td>356</td>
          <td>16</td>
          <td>49</td>
          <td>3.9</td>
        </tr>
      </tbody>
    </Table>
  );
}
```
</example>

:::info
By default, **header** cells (`<th>`) contain the `surface` background color, whereas **data** cells (`<td>`) have no background.
:::

## Customization

### Column width

Use the `sx` prop to target the header and provide the width as a number or percentage.

Columns that don't have an explicit width will spread equally to fill the rest of the area.

<example name="TableColumnWidth">
```tsx file="TableColumnWidth.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableColumnWidth() {
  return (
    <Table sx={{ '& thead th:nth-child(1)': { width: '40%' } }}>
      <thead>
        <tr>
          <th>Column width (40%)</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
```
</example>

:::info
The Table component uses a [`fixed`](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) layout to let you control the width of each column.

To learn more about why we take this approach, check out this article from Chris Coyier on [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).
:::

#### Inline style

An alternative way of controlling the column's width is to use [inline styles](https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx) on the `<th>` element:

```js
<thead>
  <tr>
    <th style={{ width: '40%' }}>Column 1</th>
    <th style={{ width: '64px' }}>Column 2</th>
  </tr>
</thead>
```

### Alignment

Use the `sx` prop to target columns with the appropriate CSS selector and apply the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) property.

```js
// target cells that are not the first in their respective rows.
<Table sx={{ '& tr > *:not(:first-child)': { textAlign: 'right' } }}>
```

<example name="TableAlignment">
```tsx file="TableAlignment.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableAlignment() {
  return (
    <Table sx={{ '& tr > *:not(:first-child)': { textAlign: 'right' } }}>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Column width (40%)</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
```
</example>

### Variants

Table supports Joy UI's four [global variants](https://mui.com/joy-ui/main-features/global-variants/): `plain` (default), `outlined`, `soft`, and `solid`.

<example name="TableVariants">
```tsx file="TableVariants.tsx"
import * as React from 'react';
import { VariantProp, ColorPaletteProp } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Table from '@mui/joy/Table';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableVariants() {
  const [variant, setVariant] = React.useState<VariantProp>('plain');
  const [color, setColor] = React.useState<ColorPaletteProp>('neutral');
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 1,
          mb: 2,
          ml: 1,
        }}
      >
        <FormControl orientation="horizontal">
          <FormLabel>Variant:</FormLabel>
          <RadioGroup
            orientation="horizontal"
            value={variant}
            onChange={(event) => setVariant(event.target.value as typeof variant)}
          >
            <Radio label="plain" value="plain" />
            <Radio label="outlined" value="outlined" />
            <Radio label="soft" value="soft" />
            <Radio label="solid" value="solid" />
          </RadioGroup>
        </FormControl>
        <FormControl orientation="horizontal">
          <FormLabel>Color: </FormLabel>
          <Select
            size="sm"
            value={color}
            onChange={(event, newValue) => setColor(newValue as typeof color)}
          >
            {['neutral', 'primary', 'danger', 'success', 'warning'].map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Table aria-label="table variants" variant={variant} color={color}>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
```
</example>

:::info
To learn how to add your own variants, check out [Themed components—Extend variants](https://mui.com/joy-ui/customization/themed-components/#extend-variants).
Note that you lose the global variants when you add custom variants.
:::

### Sizes

The component comes in three sizes: `sm`, `md` (default), and `lg`.

<example name="TableSizes">
```tsx file="TableSizes.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Table, { TableProps } from '@mui/joy/Table';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableSizes() {
  const [size, setSize] = React.useState<TableProps['size']>('md');
  return (
    <div>
      <FormControl orientation="horizontal" sx={{ mb: 2, ml: 1 }}>
        <FormLabel>Size:</FormLabel>
        <RadioGroup
          orientation="horizontal"
          value={size}
          onChange={(event) => setSize(event.target.value as typeof size)}
        >
          <Radio label="sm" value="sm" />
          <Radio label="md" value="md" />
          <Radio label="lg" value="lg" />
        </RadioGroup>
      </FormControl>
      <Table aria-label="table sizes" size={size}>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
```
</example>

:::info
To learn how to add custom sizes to the component, check out [Themed components—Extend sizes](https://mui.com/joy-ui/customization/themed-components/#extend-sizes).
:::

### Stripe

To create contrast between rows, use the `stripe` prop with `odd` or `even` values.

<example name="TableStripe">
```tsx file="TableStripe.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableStripe() {
  const [stripe, setStripe] = React.useState('odd');
  return (
    <Sheet>
      <FormControl orientation="horizontal" sx={{ mb: 2, ml: 1 }}>
        <FormLabel>Stripe:</FormLabel>
        <RadioGroup
          orientation="horizontal"
          value={stripe}
          onChange={(event) => setStripe(event.target.value)}
        >
          <Radio label="odd" value="odd" />
          <Radio label="even" value="even" />
        </RadioGroup>
      </FormControl>
      <Table aria-label="striped table" stripe={stripe}>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
```
</example>

:::success

The `stripe` prop supports complex arguments with the [`:nth-child()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child#syntax) CSS selector.

For example, you can use `3n` as a value to create stripes on row numbers three, six, nine, and so on:

```js
<Table stripe="3n">
```

:::

### Hover

To highlight a row of the table body when hovering over it, set the `hoverRow` prop to true.

<example name="TableHover">
```tsx file="TableHover.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableHover() {
  return (
    <Table hoverRow>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Column width (40%)</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
```
</example>

### Border

Use the `borderAxis` prop to control the border appearance.

<example name="TableBorder">
```tsx file="TableBorder.tsx"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table, { TableProps } from '@mui/joy/Table';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableBorder() {
  const [borderAxis, setBorderAxis] =
    React.useState<TableProps['borderAxis']>('xBetween');
  return (
    <div>
      <FormControl orientation="horizontal" sx={{ mb: 2, ml: 1 }}>
        <FormLabel>Border axis:</FormLabel>
        <Select
          size="sm"
          value={borderAxis}
          onChange={(event, newValue) => setBorderAxis(newValue!)}
        >
          {['xBetween', 'x', 'yBetween', 'y', 'bothBetween', 'both', 'none'].map(
            (axis) => (
              <Option key={axis} value={axis}>
                {axis}
              </Option>
            ),
          )}
        </Select>
      </FormControl>
      <Table borderAxis={borderAxis}>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
```
</example>

#### Adding custom borders

Customize the table theme based on `borderAxis` prop using the [`extendTheme()`](https://mui.com/joy-ui/customization/themed-components/#change-styles-based-on-props) function.

```js
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  components: {
    JoyTable: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.borderAxis === 'header' && {
            // this example applies borders between <thead> and <tbody>
            '& thead th:not([colspan])': {
              borderBottom: '2px solid var(--TableCell-borderColor)',
            },
          }),
        });
      }
    }
  }
})

<CssVarsProvider theme={theme}>…</CssVarsProvider>
```

For TypeScript, you have to add the new values via module augmentation:

```ts
// this could be any file that's included in your tsconfig.json
declare module '@mui/joy/Table' {
  interface TablePropsBorderAxisOverrides {
    header: true;
  }
}
```

### Sticky header and footer

Set the `stickyHeader` to true to always stick the header at the top as users scroll the table.

Set the `stickyFooter` to true to always stick the footer at the bottom of the table.

:::success
For `stickyHeader` and `stickyFooter` to work correctly, the Table must be a child of a fixed-height element with overflow `auto` (or `scroll`).
We recommend wrapping your Table with [Sheet](https://mui.com/joy-ui/react-sheet/) for this purpose.
See [usage with Sheet](#usage-with-sheet) to learn more.
:::

<example name="TableStickyHeader">
```tsx file="TableStickyHeader.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('1', 159, 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
  createData('5', 356, 16.0, 49, 3.9),
  createData('6', 159, 6.0, 24, 4.0),
  createData('7', 237, 9.0, 37, 4.3),
  createData('8', 262, 16.0, 24, 6.0),
  createData('9', 305, 3.7, 67, 4.3),
  createData('10', 356, 16.0, 49, 3.9),
];
function sum(column: 'calories' | 'fat' | 'carbs' | 'protein') {
  return rows.reduce((acc, row) => acc + row[column], 0);
}

export default function TableStickyHeader() {
  return (
    <div>
      <Typography level="body-sm" sx={{ textAlign: 'center', mb: 2 }}>
        The table body is scrollable.
      </Typography>
      <Sheet sx={{ height: 300, overflow: 'auto' }}>
        <Table
          aria-label="table with sticky header"
          stickyHeader
          stickyFooter
          stripe="odd"
          hoverRow
        >
          <thead>
            <tr>
              <th>Row</th>
              <th>Calories</th>
              <th>Fat&nbsp;(g)</th>
              <th>Carbs&nbsp;(g)</th>
              <th>Protein&nbsp;(g)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td>{row.protein}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Totals</th>
              <td>{sum('calories').toFixed(2)}</td>
              <td>{sum('fat').toFixed(2)}</td>
              <td>{sum('carbs').toFixed(2)}</td>
              <td>{sum('protein').toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={5} style={{ textAlign: 'center' }}>
                {sum('calories') + sum('fat') + sum('carbs') + sum('protein')} Kcal
              </td>
            </tr>
          </tfoot>
        </Table>
      </Sheet>
    </div>
  );
}
```
</example>

### Caption

Add a caption to summarize the contents of a Table by inserting a `<caption>` element as the Table's first child.

<example name="TableCaption">
```tsx file="TableCaption.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableCaption() {
  return (
    <Table>
      <caption>A caption should be a summary of the table.</caption>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Menu</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
```
</example>

:::success
To display a caption at the bottom of the Table, set the [caption side](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side) to `bottom`:

```js
<Table sx={{ captionSide: 'bottom' }}>
```

:::

### Footer

Use [`<tfoot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot) to add a footer to the Table.

<example name="TableFooter">
```tsx file="TableFooter.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableFooter() {
  return (
    <Table borderAxis="both">
      <caption>A caption should be a summary of the table.</caption>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Menu</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Totals</th>
          <td>1,319</td>
          <td>50.7</td>
          <td>201</td>
          <td>22.5</td>
        </tr>
      </tfoot>
    </Table>
  );
}
```
</example>

### Row head

Set `scope="row"` to `<th>` elements inside `<tbody>` to apply the same style as column headers.
The demo below illustrates a common use case: setting the first column to match the header styles.

<example name="TableRowHead">
```tsx file="TableRowHead.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableRowHead() {
  return (
    <Sheet variant="outlined">
      <Table variant="soft" borderAxis="bothBetween">
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Column width (40%)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
```
</example>

### Row and column span

Use `rowSpan` and `columnSpan` to expand a cell across multiple rows or columns.

<example name="TableRowColumnSpan">
```tsx file="TableRowColumnSpan.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';

export default function TableRowColumnSpan() {
  return (
    <Table borderAxis="both">
      <thead>
        <tr>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>ID</th>
          <th colSpan={2} style={{ textAlign: 'center' }}>
            Membership Dates
          </th>
          <th rowSpan={2}>Balance</th>
        </tr>
        <tr>
          <th>Joined</th>
          <th style={{ borderRightWidth: 0 }}>Canceled</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Margaret Nguyen</th>
          <td>427311</td>
          <td>
            <time dateTime="2010-06-03">June 3, 2010</time>
          </td>
          <td>n/a</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th scope="row">Edvard Galinski</th>
          <td>533175</td>
          <td>
            <time dateTime="2011-01-13">January 13, 2011</time>
          </td>
          <td>
            <time dateTime="2017-04-08">April 8, 2017</time>
          </td>
          <td>37.00</td>
        </tr>
        <tr>
          <th scope="row">Hoshi Nakamura</th>
          <td>601942</td>
          <td>
            <time dateTime="2012-07-23">July 23, 2012</time>
          </td>
          <td>n/a</td>
          <td>15.00</td>
        </tr>
      </tbody>
    </Table>
  );
}
```
</example>

:::warning
Note that the CSS cannot figure out how apply borders on every corner without duplicating some.

There are two workarounds:

1. Manually remove the right border for a specific cell:

   ```js
   // In this example, we remove the border from
   // the right side of the header cell to avoid duplication.
   <th style={{ borderRightWidth: 0 }}>Canceled</th>
   ```

2. Set Table's the border collapse to `collapse`:

   ```js
   <Table sx={{ borderCollapse: 'collapse' }}>
   // Note that this will change the behavior when `stickyHeader` is true:
   // the bottom border of the sticky header will not "stick".
   ```

:::

### Text ellipsis

To truncate the text, set `noWrap` to true.
The header cells always truncate the text to keep the header's height predictable.

<example name="TableTextEllipsis">
```tsx file="TableTextEllipsis.tsx"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

export default function TableTextEllipsis() {
  return (
    <Table
      aria-label="table with ellipsis texts"
      noWrap
      sx={{ mx: 'auto', width: 400 }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th style={{ width: '60%' }}>
            Description (you should see a part of this message)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar src="/static/images/avatar/1.jpg" />
              <Box sx={{ minWidth: 0 }}>
                <Typography noWrap sx={{ fontWeight: 'lg' }}>
                  Morty D Ardiousdellois Addami
                </Typography>
                <Typography noWrap level="body-sm">
                  Writer, Youtuber
                </Typography>
              </Box>
            </Box>
          </td>
          <td>
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at
            velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta
            volutpat erat. Quisque erat eros, viverra eget, congue eget, semper
            rutrum, nulla.
          </td>
        </tr>
        <tr>
          <td>Joseph Morriso</td>
          <td>
            <Typography noWrap>
              <Link href="#text-ellipsis" startDecorator="ℹ️">
                In eleifend quam a odio
              </Link>
              . Suspendisse potenti in hac habitasse platea dictumst.
            </Typography>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
```
</example>

## CSS variables playground

Play around with the CSS variables available to the Table component to see how the design changes.
You can use these to customize the components with both the `sx` prop and the theme.

<example name="TableVariables">
```jsx file="TableVariables.js"
import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import JoyVariablesDemo from 'docs/src/modules/components/JoyVariablesDemo';

export default function TableVariables() {
  return (
    <JoyVariablesDemo
      componentName="Table"
      data={[
        {
          var: '--Table-headerUnderlineThickness',
          defaultValue: '2px',
        },
        {
          var: '--TableCell-height',
          defaultValue: '40px',
        },
        {
          var: '--TableCell-paddingX',
          defaultValue: '8px',
        },
        {
          var: '--TableCell-paddingY',
          defaultValue: '6px',
        },
      ]}
      renderDemo={(sx) => (
        <Sheet variant="outlined" sx={{ width: 300, boxShadow: 'sm' }}>
          <Table borderAxis="bothBetween" sx={sx}>
            <thead>
              <tr>
                <th>Name</th>
                <th style={{ width: '60%' }}>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adam</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Joseph</td>
                <td>Manager</td>
              </tr>
            </tbody>
          </Table>
        </Sheet>
      )}
    />
  );
}
```
</example>

## Usage with Sheet

import Sheet from `@mui/joy/Sheet`
When Table becomes a child of [Sheet](https://mui.com/joy-ui/react-sheet/) component, the table header background is inherited from the Sheet.

<example name="TableSheet">
```tsx file="TableSheet.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableSheet() {
  return (
    <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
      <Table
        stripe="odd"
        hoverRow
        sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' } }}
      >
        <caption>Nutrition of your favorite menus.</caption>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Column width (40%)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
```
</example>

### Color inversion

When [color inversion](https://mui.com/joy-ui/main-features/color-inversion/) is enabled, the Table's styles will adapt based on its [variant](#variants).

<example name="TableSheetColorInversion">
```tsx file="TableSheetColorInversion.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableSheetColorInversion() {
  return (
    <Sheet
      variant="solid"
      color="primary"
      invertedColors
      sx={(theme) => ({
        pt: 1,
        borderRadius: 'sm',
        transition: '0.3s',
        background: `linear-gradient(45deg, ${theme.vars.palette.primary[500]}, ${theme.vars.palette.primary[400]})`,
        '& tr:last-child': {
          '& td:first-child': {
            borderBottomLeftRadius: '8px',
          },
          '& td:last-child': {
            borderBottomRightRadius: '8px',
          },
        },
      })}
    >
      <Table stripe="odd" hoverRow>
        <caption>Nutrition of your favorite menus.</caption>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Column width (40%)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
```
</example>

## Common examples

### Sort and selection

Use form components such as [Button](https://mui.com/joy-ui/react-button/), [Select](https://mui.com/joy-ui/react-select/) and [Switch](https://mui.com/joy-ui/react-switch/) to create sort and selection features.

<example name="TableSortAndSelection">
```tsx file="TableSortAndSelection.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Tooltip from '@mui/joy/Tooltip';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { visuallyHidden } from '@mui/utils';

interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

function labelDisplayedRows({
  from,
  to,
  count,
}: {
  from: number;
  to: number;
  count: number;
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <thead>
      <tr>
        <th>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{
              input: {
                'aria-label': 'select all desserts',
              },
            }}
            sx={{ verticalAlign: 'sub' }}
          />
        </th>
        {headCells.map((headCell) => {
          const active = orderBy === headCell.id;
          return (
            <th
              key={headCell.id}
              aria-sort={
                active
                  ? ({ asc: 'ascending', desc: 'descending' } as const)[order]
                  : undefined
              }
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                underline="none"
                color="neutral"
                textColor={active ? 'primary.plainColor' : undefined}
                component="button"
                onClick={createSortHandler(headCell.id)}
                startDecorator={
                  headCell.numeric ? (
                    <ArrowDownwardIcon
                      sx={[active ? { opacity: 1 } : { opacity: 0 }]}
                    />
                  ) : null
                }
                endDecorator={
                  !headCell.numeric ? (
                    <ArrowDownwardIcon
                      sx={[active ? { opacity: 1 } : { opacity: 0 }]}
                    />
                  ) : null
                }
                sx={{
                  fontWeight: 'lg',

                  '& svg': {
                    transition: '0.2s',
                    transform:
                      active && order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                  },

                  '&:hover': { '& svg': { opacity: 1 } },
                }}
              >
                {headCell.label}
                {active ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return (
    <Box
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          py: 1,
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          borderTopLeftRadius: 'var(--unstable_actionRadius)',
          borderTopRightRadius: 'var(--unstable_actionRadius)',
        },
        numSelected > 0 && {
          bgcolor: 'background.level1',
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          level="body-lg"
          sx={{ flex: '1 1 100%' }}
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton size="sm" color="danger" variant="solid">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton size="sm" variant="outlined" color="neutral">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
export default function TableSortAndSelection() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
    setRowsPerPage(parseInt(newValue!.toString(), 10));
    setPage(0);
  };
  const getLabelDisplayedRowsTo = () => {
    if (rows.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1
      ? rows.length
      : Math.min(rows.length, (page + 1) * rowsPerPage);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <Sheet
      variant="outlined"
      sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm' }}
    >
      <EnhancedTableToolbar numSelected={selected.length} />
      <Table
        aria-labelledby="tableTitle"
        hoverRow
        sx={{
          '--TableCell-headBackground': 'transparent',
          '--TableCell-selectedBackground': (theme) =>
            theme.vars.palette.success.softBg,
          '& thead th:nth-child(1)': {
            width: '40px',
          },
          '& thead th:nth-child(2)': {
            width: '30%',
          },
          '& tr > *:nth-child(n+3)': { textAlign: 'right' },
        }}
      >
        <EnhancedTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />
        <tbody>
          {[...rows]
            .sort(getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const isItemSelected = selected.includes(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <tr
                  onClick={(event) => handleClick(event, row.name)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.name}
                  // selected={isItemSelected}
                  style={
                    isItemSelected
                      ? ({
                          '--TableCell-dataBackground':
                            'var(--TableCell-selectedBackground)',
                          '--TableCell-headBackground':
                            'var(--TableCell-selectedBackground)',
                        } as React.CSSProperties)
                      : {}
                  }
                >
                  <th scope="row">
                    <Checkbox
                      checked={isItemSelected}
                      slotProps={{
                        input: {
                          'aria-labelledby': labelId,
                        },
                      }}
                      sx={{ verticalAlign: 'top' }}
                    />
                  </th>
                  <th id={labelId} scope="row">
                    {row.name}
                  </th>
                  <td>{row.calories}</td>
                  <td>{row.fat}</td>
                  <td>{row.carbs}</td>
                  <td>{row.protein}</td>
                </tr>
              );
            })}
          {emptyRows > 0 && (
            <tr
              style={
                {
                  height: `calc(${emptyRows} * 40px)`,
                  '--TableRow-hoverBackground': 'transparent',
                } as React.CSSProperties
              }
            >
              <td colSpan={6} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  justifyContent: 'flex-end',
                }}
              >
                <FormControl orientation="horizontal" size="sm">
                  <FormLabel>Rows per page:</FormLabel>
                  <Select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={25}>25</Option>
                  </Select>
                </FormControl>
                <Typography sx={{ textAlign: 'center', minWidth: 80 }}>
                  {labelDisplayedRows({
                    from: rows.length === 0 ? 0 : page * rowsPerPage + 1,
                    to: getLabelDisplayedRowsTo(),
                    count: rows.length === -1 ? -1 : rows.length,
                  })}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={page === 0}
                    onClick={() => handleChangePage(page - 1)}
                    sx={{ bgcolor: 'background.surface' }}
                  >
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={
                      rows.length !== -1
                        ? page >= Math.ceil(rows.length / rowsPerPage) - 1
                        : false
                    }
                    onClick={() => handleChangePage(page + 1)}
                    sx={{ bgcolor: 'background.surface' }}
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              </Box>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Sheet>
  );
}
```
</example>

### First and last column pinning

<example name="TableColumnPinning">
```tsx file="TableColumnPinning.tsx"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 159, 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
];

export default function TableColumnPinning() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography level="body-sm" sx={{ textAlign: 'center', pb: 2 }}>
        ← Scroll direction →
      </Typography>
      <Sheet
        variant="outlined"
        sx={(theme) => ({
          '--TableCell-height': '40px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          '--Table-firstColumnWidth': '80px',
          '--Table-lastColumnWidth': '144px',
          // background needs to have transparency to show the scrolling shadows
          '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
          '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
          overflow: 'auto',
          background: `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
          backgroundColor: 'background.surface',
        })}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
            },
            '& tr > *:last-child': {
              position: 'sticky',
              right: 0,
              bgcolor: 'var(--TableCell-headBackground)',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 'var(--Table-firstColumnWidth)' }}>Row</th>
              <th style={{ width: 200 }}>Calories</th>
              <th style={{ width: 200 }}>Fat&nbsp;(g)</th>
              <th style={{ width: 200 }}>Carbs&nbsp;(g)</th>
              <th style={{ width: 200 }}>Protein&nbsp;(g)</th>
              <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)' }}
              />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td>{row.protein}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="sm" variant="plain" color="neutral">
                      Edit
                    </Button>
                    <Button size="sm" variant="soft" color="danger">
                      Delete
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
}
```
</example>

### Collapsible row

<example name="TableCollapsibleRow">
```tsx file="TableCollapsibleRow.tsx"
import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData>; initialOpen?: boolean }) {
  const { row } = props;
  const [open, setOpen] = React.useState(props.initialOpen || false);

  return (
    <React.Fragment>
      <tr>
        <td>
          <IconButton
            aria-label="expand row"
            variant="plain"
            color="neutral"
            size="sm"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </td>
        <th scope="row">{row.name}</th>
        <td>{row.calories}</td>
        <td>{row.fat}</td>
        <td>{row.carbs}</td>
        <td>{row.protein}</td>
      </tr>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
          {open && (
            <Sheet
              variant="soft"
              sx={{ p: 1, pl: 6, boxShadow: 'inset 0 3px 6px 0 rgba(0 0 0 / 0.08)' }}
            >
              <Typography level="body-lg" component="div">
                History
              </Typography>
              <Table
                borderAxis="bothBetween"
                size="sm"
                aria-label="purchases"
                sx={{
                  '& > thead > tr > th:nth-child(n + 3), & > tbody > tr > td:nth-child(n + 3)':
                    { textAlign: 'right' },
                  '--TableCell-paddingX': '0.5rem',
                }}
              >
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Total price ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {row.history.map((historyRow) => (
                    <tr key={historyRow.date}>
                      <th scope="row">{historyRow.date}</th>
                      <td>{historyRow.customerId}</td>
                      <td>{historyRow.amount}</td>
                      <td>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Sheet>
          )}
        </td>
      </tr>
    </React.Fragment>
  );
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function TableCollapsibleRow() {
  return (
    <Sheet>
      <Table
        aria-label="collapsible table"
        sx={{
          '& > thead > tr > th:nth-child(n + 3), & > tbody > tr > td:nth-child(n + 3)':
            { textAlign: 'right' },
          '& > tbody > tr:nth-child(odd) > td, & > tbody > tr:nth-child(odd) > th[scope="row"]':
            {
              borderBottom: 0,
            },
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 40 }} aria-label="empty" />
            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <Row key={row.name} row={row} initialOpen={index === 0} />
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
```
</example>

### Applying global variants

Use `theme.variants.*` to apply global variant styles to the Table.

<example name="TableGlobalVariant">
```tsx file="TableGlobalVariant.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';

export default function TableGlobalVariant() {
  return (
    <Table
      stickyHeader
      sx={(theme) => ({
        '& tr > *:first-child': { bgcolor: 'success.softBg' },
        '& th[scope="col"]': theme.variants.solid.neutral,
        '& td': theme.variants.soft.neutral,
      })}
    >
      <caption>Alien football stars</caption>
      <tbody>
        <tr>
          <th scope="col">Player</th>
          <th scope="col">Gloobles</th>
          <th scope="col">Za&apos;taak</th>
        </tr>
        <tr>
          <th scope="row">TR-7</th>
          <td>7</td>
          <td>4,569</td>
        </tr>
        <tr>
          <th scope="row">Khiresh Odo</th>
          <td>7</td>
          <td>7,223</td>
        </tr>
        <tr>
          <th scope="row">Mia Oolong</th>
          <td>9</td>
          <td>6,219</td>
        </tr>
      </tbody>
    </Table>
  );
}
```
</example>

### Scrolling shadows

Inspired by this article from Lea Verou on [CSS scrolling shadows](https://lea.verou.me/blog/2012/04/background-attachment-local/), the shadows appear and hide when scrolling on the Table.

<example name="TableScrollingShadows">
```tsx file="TableScrollingShadows.tsx"
import * as React from 'react';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 159, 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
  createData('5', 356, 16.0, 49, 3.9),
  createData('6', 159, 6.0, 24, 4.0),
  createData('7', 237, 9.0, 37, 4.3),
  createData('8', 262, 16.0, 24, 6.0),
  createData('9', 305, 3.7, 67, 4.3),
  createData('10', 356, 16.0, 49, 3.9),
];

export default function TableScrollingShadows() {
  return (
    <div>
      <Typography level="body-sm" sx={{ textAlign: 'center', mb: 2 }}>
        The table body is scrollable.
      </Typography>
      <Sheet
        sx={(theme) => ({
          '--TableCell-height': '40px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          height: 200,
          overflow: 'auto',
          background: `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 50% 0,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 50% 100%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            '0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%',
          backgroundColor: 'background.surface',
        })}
      >
        <Table stickyHeader>
          <thead>
            <tr>
              <th>Row</th>
              <th>Calories</th>
              <th>Fat&nbsp;(g)</th>
              <th>Carbs&nbsp;(g)</th>
              <th>Protein&nbsp;(g)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td>{row.protein}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}
```
</example>
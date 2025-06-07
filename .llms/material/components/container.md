---
productId: material-ui
title: React Container component
components: Container, PigmentContainer
githubLabel: 'component: Container'
githubSource: packages/mui-material/src/Container
---

# Container

The container centers your content horizontally. It's the most basic layout element.

While containers can be nested, most layouts do not require a nested container.

## Fluid

A fluid container width is bounded by the `maxWidth` prop value.

<example name="SimpleContainer">
```tsx file="SimpleContainer.tsx"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
```
</example>

```jsx
<Container maxWidth="sm">
```

## Fixed

If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the `fixed` prop.
The max-width matches the min-width of the current breakpoint.

<example name="FixedContainer">
```tsx file="FixedContainer.tsx"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
```
</example>

```jsx
<Container fixed>
```

## Experimental APIs - Toolpad

### Page Container

The [PageContainer](https://mui.com/toolpad/core/react-page-container/) component in `@toolpad/core` is the ideal wrapper for the content of your dashboard. It makes the Material UI Container navigation-aware and extends it with page title, breadcrumbs, actions, and more.

<example name="PageContainerBasic">
```tsx file="PageContainerBasic.tsx"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import {
  PageContainer,
  PageHeader,
  PageHeaderToolbar,
} from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';

const NAVIGATION: Navigation = [
  { segment: 'inbox', title: 'Inbox' },
  {
    segment: 'inbox/all',
    title: 'All',
    icon: <DashboardIcon />,
  },
];

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function CustomPageToolbar() {
  return (
    <PageHeaderToolbar>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<DownloadIcon fontSize="inherit" />}
        >
          Download
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<PrintIcon fontSize="inherit" />}
        >
          Print
        </Button>
      </Stack>
    </PageHeaderToolbar>
  );
}

function CustomPageHeader() {
  return <PageHeader slots={{ toolbar: CustomPageToolbar }} />;
}

export default function PageContainerBasic(props: any) {
  const { window } = props;
  const router = useDemoRouter('/inbox/all');
  const theme = useTheme();
  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={theme}
      window={demoWindow}
      branding={{
        title: 'ACME Inc.',
      }}
    >
      <Paper sx={{ p: 2, width: '100%' }}>
        <PageContainer
          slots={{
            header: CustomPageHeader,
          }}
        >
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </Paper>
    </AppProvider>
  );
}
```
</example>
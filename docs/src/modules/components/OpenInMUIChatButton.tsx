/* eslint-disable material-ui/no-hardcoded-labels */
import * as React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import MDButton, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import SvgMuiLogomark from 'docs/src/icons/SvgMuiLogomark';
import PageContext from './PageContext';

interface OpenInMUIChatButtonProps extends ButtonProps {
  params: {
    name: string;
    description?: string;
    package?: {
      name: string;
      version: string;
    };
    files: {
      path: string;
      content: string;
    }[];
  };
}

const rainbow = keyframes`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`;

export const RainbowButton = styled(MDButton)(({ theme }) => ({
  /* CSS Variables (embedded) */
  '--color-1': '0 100% 63%',
  '--color-2': '270 100% 63%',
  '--color-3': '210 100% 63%',
  '--color-4': '195 100% 63%',
  '--color-5': '90 100% 63%',
  '--text-color': '#fff',

  height: 26,
  width: 100,
  padding: '7px 4px 8px 4px', // 7px for optical alignment
  flexShrink: 0,
  borderRadius: theme.spacing(1),
  fontSize: theme.typography.pxToRem(12),
  fontWeight: theme.typography.fontWeightMedium,

  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'calc(0.08rem) solid transparent',
  backgroundSize: '200%',
  backgroundClip: 'padding-box, border-box, border-box',
  backgroundOrigin: 'border-box',
  animation: `${rainbow} 3s linear infinite`,
  transition: 'background-color 0.2s, color 0.2s',
  cursor: 'pointer',
  color: 'var(--text-color, #fff)',

  '--bg-color-raw': '16, 18, 20',
  '--bg-color': 'rgb(var(--bg-color-raw))',
  backgroundImage: `linear-gradient(var(--bg-color), var(--bg-color)), linear-gradient(var(--bg-color) 50%, rgba(var(--bg-color-raw), 0.6) 80%, rgba(var(--bg-color-raw), 0)), linear-gradient(90deg, hsl(var(--color-1)), hsl(var(--color-5)), hsl(var(--color-3)), hsl(var(--color-4)), hsl(var(--color-2)))`,

  ...theme.applyDarkStyles({
    '--text-color': '#000',
    color: 'var(--text-color, #000)',

    '--bg-color-raw': '255, 255, 255',
    '--bg-color': 'rgb(var(--bg-color-raw))',
    backgroundImage: `linear-gradient(var(--bg-color), var(--bg-color)), linear-gradient(var(--bg-color) 50%, rgba(var(--bg-color-raw), 0.6) 80%, rgba(var(--bg-color-raw), 0)), linear-gradient(90deg, hsl(var(--color-1)), hsl(var(--color-5)), hsl(var(--color-3)), hsl(var(--color-4)), hsl(var(--color-2)))`,
  }),

  '&:focus-visible': {
    outline: 'none',
    boxShadow: '0 0 0 1px var(--ring, #ccc)',
  },

  '&:disabled': {
    pointerEvents: 'none',
    opacity: 0.5,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-20%',
    left: '50%',
    zIndex: 0,
    height: '20%',
    width: '60%',
    transform: 'translateX(-50%)',
    animation: `${rainbow} 3s linear infinite`,
    background:
      'linear-gradient(90deg, hsl(var(--color-1)), hsl(var(--color-5)), hsl(var(--color-3)), hsl(var(--color-4)), hsl(var(--color-2)))',
    filter: 'blur(0.8rem)',
  },

  '& > svg': {
    height: 12,
    width: 12,
    margin: '1px 4px 0 4px',
  },
  '& > svg > path': {
    fill: 'currentColor',
  },
  '& .MuiCircularProgress-root': {
    color: 'var(--text-color)',
  },
}));

const productToPackage: Record<string, string> = {
  'Material UI': '@mui/material',
  'Joy UI': '@mui/joy',
  'Data Grid': '@mui/x-data-grid',
  'Charts': '@mui/x-charts',
  'Toolpad Core BETA': '@mui/toolpad-core',
}

export default function OpenInMUIChatButton(props: OpenInMUIChatButtonProps) {
  const { ...otherProps } = props;
  const { productIdentifier } = React.use(PageContext);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_MUI_CHAT_BASE_URL;

  const handleClick = async () => {
    // Debounce the loading state to avoid flickering
    const setLoadingTimeout = setTimeout(() => setLoading(true), 200);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}/api/v1/public/chat/open`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: document.title,
          type: 'mui-docs',
          package: {
            name: productToPackage[productIdentifier.name] ?? productIdentifier.name,
            version: productIdentifier.versions.find((it) => it.current)?.text ?? 'latest',
          },
          ...props.params,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to open in MUI Chat');
      }

      const data = await response.json();
      window.open(data.nextUrl, '_blank');
    } catch (err: any) {
      console.error(err);
      setError(err as Error);
    } finally {
      clearTimeout(setLoadingTimeout);
      setLoading(false);
    }
  };

  // If the base URL is not set, we can't render the button
  if (!baseUrl) {
    return null;
  }

  return (
    <React.Fragment>
      <RainbowButton
        loading={loading}
        disabled={!!error}
        loadingIndicator={<CircularProgress color="inherit" size={12} />}
        onClick={handleClick}
        sx={{ mr: 0.5 }}
        {...otherProps}
      >
        Edit in <SvgMuiLogomark /> Chat
      </RainbowButton>
      <Snackbar
        open={!!error}
        color="error"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setError(null)}
        autoHideDuration={6000}
      >
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          <AlertTitle>Failed to open in MUI Chat</AlertTitle>
          {error?.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

'use client';

import { CacheProvider } from '@emotion/react';
import createEmotionCache from './EmotionCache';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5', // primary blue
    },
    secondary: {
      main: '#6366F1', // secondary blue
    },
    success: { // Green accent
      main: '#10B981', // A nice shade of green
    },
    info: { // Purple accent
      main: '#8B5CF6', // A nice shade of purple
    },
    background: {
      default: '#FDF6E3', // solarized-light
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeightRegular: 800,
    h1: {
      fontFamily: 'IBM Plex Sans, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h2: {
      fontFamily: 'IBM Plex Sans, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: 'IBM Plex Sans, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: 'IBM Plex Sans, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h5: {
      fontFamily: 'IBM Plex Sans, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h6: {
      fontFamily: 'IBM Plex Sans, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    body1: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 600,
    },
    body2: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 600,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
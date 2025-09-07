import React from 'react';
import { Box } from '@mui/material';
import InteractiveHeroBackground from './InteractiveHeroBackground';
import { MousePositionProvider } from './MousePositionContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MousePositionProvider>
      <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', backgroundColor: '#FDF6E3' }}>
        <InteractiveHeroBackground />
        <Box component="main" flexGrow={1} p={{ xs: 2, lg: 4 }} sx={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
          {children}
        </Box>
      </Box>
    </MousePositionProvider>
  );
};

export default MainLayout;
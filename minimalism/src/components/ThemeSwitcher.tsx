'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { Button, ButtonGroup } from '@mui/material';

export const ThemeSwitcher = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <ButtonGroup size="small">
      <Button variant="text" onClick={() => setTheme('light')} sx={{ textTransform: 'none', px: 2 }}>Светлая</Button>
      <Button variant="text" onClick={() => setTheme('dark')} sx={{ textTransform: 'none', px: 2 }}>Темная</Button>
      <Button variant="text" onClick={() => setTheme('soft')} sx={{ textTransform: 'none', px: 2 }}>Нежная</Button>
    </ButtonGroup>
  );
};

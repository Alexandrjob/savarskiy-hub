'use client';

import { createContext, useState, useMemo, ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark' | 'soft') => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'soft'>('light');

  const muiTheme = useMemo(() => {
    switch (theme) {
      case 'dark':
        return createTheme({
          palette: {
            mode: 'dark',
            primary: {
              main: 'rgb(180, 213, 144)', // Изменяем primary.main
            },
            background: {
              default: '#212121', // Темнее
              paper: '#303030',   // Темнее
            },
            text: {
              primary: '#E0E0E0', // Тусклый белый текст
              secondary: '#B0B0B0', // Тусклый серый текст
            },
          },
          components: { // Добавляем components для глобальных стилей
            MuiCssBaseline: {
              styleOverrides: {
                body: {
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                },
              },
            },
          },
        });
      case 'soft':
        return createTheme({
          palette: {
            mode: 'light',
            primary: {
              main: '#f4a261', // Возвращаем оранжевый
            },
            background: {
              default: '#fdf0e5',
              paper: '#fae5d3',
            },
          },
          components: { // Добавляем components для глобальных стилей
            MuiCssBaseline: {
              styleOverrides: {
                body: {
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                },
              },
            },
          },
        });
      default:
        return createTheme({
          palette: {
            mode: 'light',
            primary: { // Добавляем primary для светлой темы
              main: '#2196F3', // Синий цвет
            },
          },
          components: { // Добавляем components для глобальных стилей
            MuiCssBaseline: {
              styleOverrides: {
                body: {
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                },
              },
            },
          },
        });
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
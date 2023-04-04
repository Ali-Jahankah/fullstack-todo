import { createTheme, ThemeOptions } from '@mui/material';
import { Palette } from '@mui/material/styles/createPalette';
import augmentColor from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: Palette['primary'];
  }
  interface PaletteOptions {
    customColor?: PaletteOptions['primary'];
  }
}
export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(168,85,247,.65)',
      light: 'rgba(168,85,247,.80)',
      dark: 'rgba(168,85,247,.28)',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#151515',
      default: 'rgba(0,0,0,.96)',
    },
    secondary: {
      main: '#494c7d',
      light: '#ffc1e3',
      dark: '#bf5f82',
      contrastText: '#000',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    customColor: {
      main: '#252100',
      light: '#001800',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

import { createTheme, ThemeOptions } from '@mui/material';
export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(168,85,247,.65)',
      light: 'rgba(168,85,247,.80)',
      dark: 'rgba(168,85,247,.28)',
    },
    background: {
      paper: '#151515',
      default: 'rgba(0,0,0,.96)',
    },
    secondary: {
      main: '#494c7d',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
    },
  },
  typography: {
    fontSize: 10,
    fontFamily: 'sans-serif',
  },
});

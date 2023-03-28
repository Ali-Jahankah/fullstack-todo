import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Dashboard from './pages/dashboard/Dashboard';
const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline></CssBaseline>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;

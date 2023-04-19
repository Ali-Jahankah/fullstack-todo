import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Dashboard from './pages/dashboard/Dashboard';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ComposeContext from './context/compose';
import { rootContext } from './context/root';
const App: FC = (): ReactElement => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline></CssBaseline>
          <Dashboard />
        </ThemeProvider>
        <ReactQueryDevtools
          initialIsOpen={false}
        ></ReactQueryDevtools>
      </ComposeContext>
    </QueryClientProvider>
  );
};

export default App;

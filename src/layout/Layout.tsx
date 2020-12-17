import React from 'react';
import Sidebar from '@/components/Sidebar/index';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme/theme';
import GlobalStyle from '../theme/globalStyles';

const Layout: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <Sidebar />
    </ThemeProvider>
  </>
);

export default Layout;

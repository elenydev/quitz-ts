import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme/theme';
import GlobalStyle from '../theme/globalStyles';

const Layout: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;

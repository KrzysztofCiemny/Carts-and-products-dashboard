import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { PageWrapper } from './components/PageWrapper';
import { HomePage } from './Pages/HomePage';
import { theme } from './Theme';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageWrapper>
          <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path="/*" element={<div>404</div>} />
          </Routes>
        </PageWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;

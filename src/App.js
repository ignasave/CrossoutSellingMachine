import React from 'react';
import Routes from './Router'
import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter as Router } from 'react-router-dom';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;

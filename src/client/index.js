import React from 'react';
import { hydrate } from 'react-dom';
import App from 'src/client/App';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'src/themes';

hydrate(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,

  document.querySelector('#root')
);

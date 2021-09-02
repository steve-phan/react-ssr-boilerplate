import React from 'react';
import { hydrate } from 'react-dom';
import App from 'src/client/App';
import { Provider } from 'react-redux';
import { store } from 'src/store';

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

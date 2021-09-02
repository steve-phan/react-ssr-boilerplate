import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getHTML } from './utils/html';
import { appReducer } from 'src/store/reducer';
import App from 'src/client';
const initalState = {
  text: '',
};
const store = createStore(appReducer, { text: '' });

const page = getHTML(
  renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  ),
  initalState
);

export const handleRender = (req, res) => {
  res.send(page);
};

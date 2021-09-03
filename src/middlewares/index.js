import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getHTML } from './utils/html';
import { appReducer } from 'src/store/reducer';
import App from 'src/client/App';
import { initalState } from '../store/reducer';

const store = createStore(appReducer, initalState);

const page = getHTML(
  ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  ),
  initalState
);

export const handleRender = (req, res) => {
  res.send(page);
};

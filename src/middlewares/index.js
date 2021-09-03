import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getHTML } from './utils/html';
import { appReducer } from 'src/store/reducer';
import App from 'src/client/App';
import { initalState } from '../store/reducer';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'src/themes';

const sheets = new ServerStyleSheets();
const store = createStore(appReducer, initalState);
const css = sheets.toString();
const page = getHTML(
  ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    )
  ),
  initalState,
  css
);

export const handleRender = (req, res) => {
  res.send(page);
};

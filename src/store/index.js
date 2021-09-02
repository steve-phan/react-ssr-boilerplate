import { createStore } from 'redux';
import { appReducer } from './reducer';
let preloadedState =
  typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : null;

export const store = createStore(appReducer, preloadedState);

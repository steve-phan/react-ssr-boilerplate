import { createStore } from 'redux';
import { appReducer } from './reducer';
let preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;
export const store = createStore(appReducer, preloadedState);

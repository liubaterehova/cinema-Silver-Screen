import { createStore, compose } from 'redux';
import { rootReducer } from '../reducers/index';

const enhancers = compose(
  window.devToolsExtension() ? window.devToolsExtension() : f => f,
);

const defaultState = {};

export const store = createStore(rootReducer, defaultState, enhancers);

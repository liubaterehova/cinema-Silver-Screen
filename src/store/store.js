import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const defaultState = {};

export const store = createStore(rootReducer, defaultState, enhancers);

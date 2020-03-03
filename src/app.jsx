import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Home } from './pages/home/home';
import { rootReducer } from './reducers/index';

const store = createStore(rootReducer);

export const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { AdminPage } from './pages/admin/admin';

import { rootReducer } from './reducers/index';

const store = createStore(rootReducer);

export const App = () => (
  <Provider store={store}>
    <AdminPage />
  </Provider>
);

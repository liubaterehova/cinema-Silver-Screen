import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { HomePage } from './pages/home/home';
import { AdminPage } from './pages/admin/admin';
// import { rootReducer } from './reducers/index';

// const store = createStore(rootReducer);

export const App = () => (
  // <Provider store={store}>
  <AdminPage />
  // {/* </Provider> */}
);

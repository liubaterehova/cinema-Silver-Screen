import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import { FilmPage } from './pages/film-page/film-page';

const store = createStore(rootReducer);

export const App = () => (
  <Provider store={store}>
    <FilmPage />
  </Provider>
);

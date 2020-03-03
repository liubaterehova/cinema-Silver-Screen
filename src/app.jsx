import React from 'react';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import {
  Switch,
  Route,
  Router,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { rootReducer } from './reducers/index';

import { Home } from './pages/home/home';
import { Film } from './pages/film/film';
import { SeatSelection } from './pages/seat-selection/seat-selection';

const customHistory = createBrowserHistory();

const store = createStore(rootReducer);

export const App = () => (
  <Provider store={store}>
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/film" component={Film} />
        <Route path="/select-seat/:filmId" component={SeatSelection} />
      </Switch>
    </Router>
  </Provider>
);


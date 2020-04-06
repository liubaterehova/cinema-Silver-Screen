import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { store } from './store/store';
import { Home } from './pages/home/home';
import { Film } from './pages/film/film';
import { SeatSelection } from './pages/seat-selection/seat-selection';
import { Admin } from './pages/admin/admin';

const customHistory = createBrowserHistory();

export const App = () => (
  <Provider store={store}>
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films/:filmId" component={Film} />
        <Route path="/films/admin" component={Admin} />
        <Route path="/select-seat/:sessionId" component={SeatSelection} />
      </Switch>
    </Router>
  </Provider>
);

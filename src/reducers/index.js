import { combineReducers } from 'redux';

import { modals } from './modals';
import { seats } from './seats';
import { filters } from './filters';
import { films } from './films';

export const rootReducer = combineReducers({
  modals, seats, filters, films,
});

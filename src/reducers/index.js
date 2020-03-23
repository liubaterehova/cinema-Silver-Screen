import { combineReducers } from 'redux';

import { modals } from './modals';
import { seats } from './seats';
import { filters } from './filters';
import { films } from './films';
import { cinemas } from './cinemas';
import { film } from './film';

export const rootReducer = combineReducers({
  modals, seats, filters, films, cinemas, film,
});

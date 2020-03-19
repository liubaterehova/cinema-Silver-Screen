import { combineReducers } from 'redux';

import { modals } from './modals';
import { seats } from './seats';
import { filters } from './filters';

export const rootReducer = combineReducers({ modals, seats, filters });

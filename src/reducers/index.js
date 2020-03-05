import { combineReducers } from 'redux';

import { modals } from './modals';
import { seats } from './seats';

export const rootReducer = combineReducers({ modals, seats });

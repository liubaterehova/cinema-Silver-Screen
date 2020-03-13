import { handleActions } from 'redux-actions';

import { filterFilmByParams } from '../utils/filmSort';
import {
  filterFilms,
} from '../actions/film-filters';
import { films } from '../constants';

const defaultState = {
  allFilms: films,
  sortedFilms: [...films],
};

export const filters = handleActions(
  {
    [filterFilms]: (state, { payload: { selectedMenu } }) =>
      ({
        ...state, sortedFilms: filterFilmByParams(state.allFilms, selectedMenu),
      })
    ,
  }, defaultState,
);

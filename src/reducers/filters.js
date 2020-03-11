import { handleActions } from 'redux-actions';
import * as R from 'ramda';

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
    // const arrSelectedMenu = R.values(selectedMenu);
    // const noSelectMenu = R.all(R.equals(null))(arrSelectedMenu);
    // let selectedFilms;

    // debugger;
    // if (noSelectMenu) {
    //   selectedFilms = state.allFilms;
    // } else selectedFilms = filterFilmByParams(state.allFilms, selectedMenu);

      ({
        ...state, sortedFilms: filterFilmByParams(state.allFilms, selectedMenu),
      })
    ,
  }, defaultState,
);

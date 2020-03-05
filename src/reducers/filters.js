import { handleActions } from 'redux-actions';

import {
  filterFilms,
} from '../actions/filters';
import { films } from '../constants';

const defaultState = {
  films,
};

const selectFilms = (selectedMenu) => films.filter(film => {
  if (selectedMenu[1] === 'Город' || film.city === selectedMenu[1]) return true;

  return false;
});

export const filters = handleActions(
  {
    [filterFilms]: (state, { payload: { selectedMenu } }) => ({
      ...state, films: selectFilms(selectedMenu),
    }),
  }, defaultState,
);

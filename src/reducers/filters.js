import { handleActions } from 'redux-actions';

import {
  filterFilms,
} from '../actions/filters';
import { films } from '../constants';
import {
  sortFilmsBySeats, sortFilmsByTime, sortFilmsByCinema, sortFilmsByCity, sortFilmsByDate,
} from '../helpers';

const defaultState = {
  allFilms: films,
  sortedFilms: films,
};

const selectFilms = (state, selectedMenu) => {
  const selectedByCity = sortFilmsByCity(state.allFilms, selectedMenu.city);
  const selectedByDate = sortFilmsByDate(selectedByCity, selectedMenu.date);
  const selectedByCinema = sortFilmsByCinema(selectedByDate, selectedMenu.cinema);
  const selectedByTime = sortFilmsByTime(selectedByCinema, selectedMenu.time);
  const selectFilmsByEmptySeats = sortFilmsBySeats(selectedByTime, selectedMenu.availableSeats);

  return [...selectFilmsByEmptySeats];
};

export const filters = handleActions(
  {
    [filterFilms]: (state, { payload: { selectedMenu } }) => ({
      ...state, sortedFilms: selectFilms(state, selectedMenu),
    }),
  }, defaultState,
);

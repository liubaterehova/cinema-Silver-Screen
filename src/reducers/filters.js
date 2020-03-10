import { handleActions } from 'redux-actions';
import * as R from 'ramda';

import {
  filterFilms,
} from '../actions/film-filters';
import { films } from '../constants';
import {
  sortFilmsBySeats, sortFilmsByTime, sortFilmsByCinema, sortFilmsByCity, sortFilmsByDate,
} from '../helpers';

const defaultState = {
  allFilms: films,
  sortedFilms: [],
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

const selectedMenu = [{ city: 'Витебск' }];

const sorted = [];

const filterByCityDate = R.forEach((film) => {
  selectedMenu.every(item => {
    const val = R.where({
      city: R.equals(item.city),
    });

    if (val(film)) {
      sorted.push(film);
    }
  });
}, films);

console.log('sorted', sorted.length);
// const tes = R.forEach((item) => {
//   const result = sortValues.every(({ sortType, value }) => {
//     const val = R.where({ [sortType]: R.equals(value) }, item);

//     console.log({ [sortType]: value }, '');
//     console.log(item, 'item');
//     console.log(val, 'val');
//   });

//   if (result) {
//     sorted.push(item);
//   }
// }, films);

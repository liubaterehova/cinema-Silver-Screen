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

const selectedMenu = [{ city: 'Витебск' }, { date: 'завтра' }];

const sorted = [];

// const filterByCityDate = R.forEach((film) => {
//   selectedMenu.every(item => {
//     const sortFilm = R.where({
//       city: R.equals(item.city),
//       date: R.equals(item.date),
//     });

//     if (sortFilm(film)) {
//       sorted.push(film);
//     }
//   });
// }, films);


// const filterByCityDate = R.forEach((film) => {
//   selectedMenu.every(item => {
//     const sortFilm = R.whereEq({
//       {...selectedMenu}
//     });

//     if (sortFilm(film)) {
//       sorted.push(film);
//     }
//   });
// }, films);

const selectedMenu = { city: null,  date: 'завтра', from: 13, to: 22 };

const sorted = [];

const filterByCityDate = R.forEach((film) => {
    const sortFilm = R.where({
      city: (city) => selectedMenu.city === city || selectedMenu.city === null,
      date: R.equals(selectedMenu.date),
      hour: R.both(R.gt(R.__, selectedMenu.from),  R.lte(R.__, selectedMenu.to))
    }
    );
    if (sortFilm(film)) {
      sorted.push(film);
    }

});
filterByCityDate(films);

console.log('sorted', sorted);

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
const whereObj = {};

if (selectedMenu.city) {
  whereObj.city = R.equals(selectedMenu.city);
}

if (selectedMenu.date) {
  whereObj.date = R.equals(selectedMenu.date);
}

if (selectedMenu.hour) {
  whereObj.hour = R.both(R.gt(R.__, selectedMenu.from),  R.lte(R.__, selectedMenu.to));
}

const sorted = [];
const filterByCityDate = R.forEach((film) => {
    const sortFilm = R.where(whereObj);
    if (sortFilm(film)) {
      sorted.push(film);
    }

});
filterByCityDate(films);
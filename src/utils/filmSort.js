import * as R from 'ramda';
import { CITY_CODE, DATE_CODE, CINEMA_CODE } from '../constants';

export const filterFilmByParams = (allFilms, selectedMenu) => {
  const whereObj = {};

  if (selectedMenu.city && (selectedMenu.city.code !== CITY_CODE.ALL)) {
    whereObj.cityCode = R.equals(selectedMenu.city.code);
  }

  if (selectedMenu.date && (selectedMenu.date.code !== DATE_CODE.ALL)) {
    whereObj.dateCode = R.equals(selectedMenu.date.code);
  }

  if (selectedMenu.time) {
    whereObj.hour = R.both(R.gt(R.__, selectedMenu.time.from), R.lte(R.__, selectedMenu.time.to));
  }

  if (selectedMenu.cinema && (selectedMenu.cinema.code !== CINEMA_CODE.ALL)) {
    whereObj.cinemaId = R.equals(selectedMenu.cinema.code);
  }

  if (selectedMenu.availableSeats) {
    whereObj.emptySeats = R.gte(R.__, selectedMenu.availableSeats.number);
  }

  const sorted = [];
  const filterByParams = R.forEach((film) => {
    const sortFilm = R.where(whereObj);

    if (sortFilm(film)) {
      sorted.push(film);
    }
  });

  filterByParams(allFilms);

  return sorted;
};


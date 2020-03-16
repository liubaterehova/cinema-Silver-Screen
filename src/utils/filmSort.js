import * as R from 'ramda';
import { CITY_CODE, DATE_CODE, CINEMA_CODE } from '../constants';

export const filterFilmByParams = (allFilms, selectedMenu) => {
  const propertiesFilters = {};

  if (selectedMenu.city && (selectedMenu.city.code !== CITY_CODE.ALL)) {
    propertiesFilters.cityCode = R.equals(selectedMenu.city.code);
  }

  if (selectedMenu.date && (selectedMenu.date.code !== DATE_CODE.ALL)) {
    propertiesFilters.dateCode = R.equals(selectedMenu.date.code);
  }

  if (selectedMenu.time) {
    propertiesFilters.hour = R.both(R.gt(R.__, selectedMenu.time.from), R.lte(R.__, selectedMenu.time.to));
  }

  if (selectedMenu.cinema && (selectedMenu.cinema.code !== CINEMA_CODE.ALL)) {
    propertiesFilters.cinemaId = R.equals(selectedMenu.cinema.code);
  }

  if (selectedMenu.availableSeats) {
    propertiesFilters.emptySeats = R.gte(R.__, selectedMenu.availableSeats.number);
  }

  const sorted = [];
  const filterByParams = R.forEach((film) => {
    const sortFilm = R.where(propertiesFilters);

    if (sortFilm(film)) {
      sorted.push(film);
    }
  });

  filterByParams(allFilms);

  return sorted;
};


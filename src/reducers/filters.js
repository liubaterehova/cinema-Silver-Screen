import { handleActions } from 'redux-actions';

import {
  filterFilms,
} from '../actions/filters';
import { films, cinemas } from '../constants';

const defaultState = {
  allFilms: films,
  films: [...films],
};

const selectFilmByProperty = (filmsArr, selectedMenu, property) =>
  (!selectedMenu[property])
    ? filmsArr
    : filmsArr.filter(film =>
      film[property] === selectedMenu[property]);

const sortFilmsByCinema = (filmsArr, cinemaName) =>
  (!cinemaName)
    ? filmsArr
    : filmsArr.filter(film =>
      cinemas[film.cinemaId].name === cinemaName);

const selectFilms = (state, selectedMenu) => {
  const selectedByCity = selectFilmByProperty(state.allFilms, selectedMenu, 'city');

  const selectedByDate = selectFilmByProperty(selectedByCity, selectedMenu, 'date');

  const selectedByFilms = sortFilmsByCinema(selectedByDate, selectedMenu.cinema);

  return [...selectedByFilms];
};

//     const selectFilms = (state, selectedMenu) =>
// (!selectedMenu.city)
//   ? state.allFilms
//   : state.allFilms.filter(film =>
//     film.city === selectedMenu.city);

export const filters = handleActions(
  {
    [filterFilms]: (state, { payload: { selectedMenu } }) => ({
      ...state, films: selectFilms(state, selectedMenu),
    }),
  }, defaultState,
);

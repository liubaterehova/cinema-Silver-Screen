import { createActions } from 'redux-actions';

export const {
  getFilm,
  getFilmSuccess,
  getFilmFailure,
} = createActions(
  'GET_FILM',
  'GET_FILM_SUCCESS',
  'GET_FILM_FAILURE',
);

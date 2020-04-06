import { createActions } from 'redux-actions';

export const {
  loadFilm,
  loadFilmSuccess,
  loadFilmFailure,
} = createActions(
  'LOAD_FILM',
  'LOAD_FILM_SUCCESS',
  'LOAD_FILM_FAILURE',
);

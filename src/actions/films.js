import { createActions } from 'redux-actions';

export const {
  loadFilms,
  loadFilmsSuccess,
  loadFilmsFailure,
} = createActions(
  'LOAD_FILMS',
  'LOAD_FILMS_SUCCESS',
  'LOAD_FILMS_FAILURE',
);

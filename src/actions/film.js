import { createActions } from 'redux-actions';

export const {
  loadFilmRequest,
  loadFilmSuccess,
  loadFilmFailure,
} = createActions(
  'LOAD_FILM_REQUEST',
  'LOAD_FILM_SUCCESS',
  'LOAD_FILM_FAILURE',
);

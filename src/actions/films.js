import { createActions } from 'redux-actions';

export const {
  getFilms, getFilmsSuccess, getFilmsFailure,
} = createActions(
  'GET_FILMS', 'GET_FILMS_SUCCESS', 'GET_FILMS_FAILURE',
);

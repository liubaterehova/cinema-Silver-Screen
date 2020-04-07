import { createActions } from 'redux-actions';

export const {
  loadFilmsRequest,
  loadFilmsSuccess,
  loadFilmsFailure,
} = createActions(
  'LOAD_FILMS_REQUEST',
  'LOAD_FILMS_SUCCESS',
  'LOAD_FILMS_FAILURE',
);

import { createActions } from 'redux-actions';

export const {
  loadCinemas,
  loadCinemasSuccess,
  loadCinemasFailure,
} = createActions(
  'LOAD_CINEMAS',
  'LOAD_CINEMAS_SUCCESS',
  'LOAD_CINEMAS_FAILURE',
);

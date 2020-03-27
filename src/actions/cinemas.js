import { createActions } from 'redux-actions';

export const {
  getCinemas,
  getCinemasSuccess,
  getCinemasFailure,
} = createActions(
  'GET_CINEMAS',
  'GET_CINEMAS_SUCCESS',
  'GET_CINEMAS_FAILURE',
);

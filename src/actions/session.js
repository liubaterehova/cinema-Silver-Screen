import { createActions } from 'redux-actions';

export const {
  getSession,
  getSessionSuccess,
  getSessionFailure,
} = createActions(
  'GET_SESSION',
  'GET_SESSION_SUCCESS',
  'GET_SESSION_FAILURE',
);

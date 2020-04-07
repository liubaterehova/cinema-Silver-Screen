import { createActions } from 'redux-actions';

export const {
  loadSessionRequest,
  loadSessionSuccess,
  loadSessionFailure,
} = createActions(
  'LOAD_SESSION_REQUEST',
  'LOAD_SESSION_SUCCESS',
  'LOAD_SESSION_FAILURE',
);

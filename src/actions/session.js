import { createActions } from 'redux-actions';

export const {
  loadSession,
  loadSessionSuccess,
  loadSessionFailure,
} = createActions(
  'LOAD_SESSION',
  'LOAD_SESSION_SUCCESS',
  'LOAD_SESSION_FAILURE',
);

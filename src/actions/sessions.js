import { createActions } from 'redux-actions';

export const {
  loadSessions,
  loadSessionsSuccess,
  loadSessionsFailure,
} = createActions(
  'LOAD_SESSIONS',
  'LOAD_SESSIONS_SUCCESS',
  'LOAD_SESSIONS_FAILURE',
);

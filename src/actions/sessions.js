import { createActions } from 'redux-actions';

export const {
  getSessions,
  getSessionsSuccess,
  getSessionsFailure,
} = createActions(
  'GET_SESSIONS',
  'GET_SESSIONS_SUCCESS',
  'GET_SESSIONS_FAILURE',
);

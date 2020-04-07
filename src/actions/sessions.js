import { createActions } from 'redux-actions';

export const {
  loadSessionsRequest,
  loadSessionsSuccess,
  loadSessionsFailure,
} = createActions(
  'LOAD_SESSIONS_REQUEST',
  'LOAD_SESSIONS_SUCCESS',
  'LOAD_SESSIONS_FAILURE',
);

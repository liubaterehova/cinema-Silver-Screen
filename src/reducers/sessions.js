import { handleActions } from 'redux-actions';

import { loadSessions, loadSessionsSuccess, loadSessionsFailure } from '../actions/sessions';

const defaultState = { sessions: [], isLoading: false, error: null };

export const sessions = handleActions(
  {
    [loadSessions]: state => ({
      ...state, isLoading: true,
    }),
    [loadSessionsSuccess]: (state, { payload: { sessions: payloadSessions } }) =>
      ({
        ...state, sessions: payloadSessions, isLoading: false,
      }),
    [loadSessionsFailure]: (state, { payload: { error } }) =>
      ({
        ...state, isLoading: false, error,
      }),
  }, defaultState,
);

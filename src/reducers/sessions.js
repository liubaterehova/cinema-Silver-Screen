import { handleActions } from 'redux-actions';

import { getSessions, getSessionsSuccess, getSessionsFailure } from '../actions/sessions';

const defaultState = { sessions: [], isLoading: false, error: null };

export const sessions = handleActions(
  {
    [getSessions]: state => ({
      ...state, isLoading: true,
    }),
    [getSessionsSuccess]: (state, { payload: { sessions: payloadSessions } }) =>
      ({
        ...state, sessions: payloadSessions, isLoading: false,
      }),
    [getSessionsFailure]: (state, { payload: { error } }) =>
      ({
        ...state, isLoading: false, error,
      }),
  }, defaultState,
);

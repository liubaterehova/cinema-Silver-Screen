import { handleActions } from 'redux-actions';

import { loadSessionRequest, loadSessionSuccess, loadSessionFailure } from '../actions/session';

const defaultState = { session: null, isLoading: false, error: null };

export const session = handleActions(
  {
    [loadSessionRequest]: state => ({
      ...state, isLoading: true,
    }),
    [loadSessionSuccess]: (state, { payload: { session: payloadSession } }) => ({
      ...state, session: payloadSession, isLoading: false,
    }),
    [loadSessionFailure]: (state, { payload: { error } }) => ({
      ...state, isLoading: false, error,
    }),
  }, defaultState,
);

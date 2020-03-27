import { handleActions } from 'redux-actions';

import {
  getSession, getSessionSuccess, getSessionFailure,
} from '../actions/session';

const defaultState = { session: [], isLoading: true, error: null };

export const session = handleActions(
  {
    [getSession]: state => ({
      ...state, isLoading: true,
    }),
    [getSessionSuccess]: (state, { payload: { session: payloadSession } }) =>
      ({
        ...state, session: payloadSession, isLoading: false,
      }),
    [getSessionFailure]: (state, { payload: { error } }) =>
      ({
        ...state, isLoading: false, error,
      }),
  }, defaultState,
);

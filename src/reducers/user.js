import { handleActions } from 'redux-actions';

import {
  createUserRequest, createUserSuccess, createUserFailure, cleanError, logOut,
} from '../actions/users';

const defaultState = { user: null, isLoading: false, error: null };

export const user = handleActions(
  {
    [createUserRequest]: state => ({
      ...state, isLoading: true,
    }),
    [createUserSuccess]: (state, { payload: { user: { user: payloadUsers } } }) =>
      ({
        ...state, user: payloadUsers, isLoading: false, error: null,
      }),
    [createUserFailure]: (state, error) => ({
      ...state, isLoading: false, error: error.payload.error.response,
    }),
    [cleanError]: (state) => ({
      ...state, isLoading: false, error: null,
    }),
    [logOut]: (state) => ({
      ...state, isLoading: false, user: null, error: null,
    }),
  }, defaultState,
);

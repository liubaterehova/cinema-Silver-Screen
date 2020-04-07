import { createActions } from 'redux-actions';

export const {
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  cleanError,
  logOut,
  logIn,
} = createActions(
  'CREATE_USER_REQUEST',
  'CREATE_USER_SUCCESS',
  'CREATE_USER_FAILURE',
  'CLEAN_ERROR',
  'LOG_OUT',
  'LOG_IN',
);

import { createActions } from 'redux-actions';

export const {
  createUser,
  createUserSuccess,
  createUserFailure,
  cleanError,
  logOff,
} = createActions(
  'CREATE_USER',
  'CREATE_USER_SUCCESS',
  'CREATE_USER_FAILURE',
  'CLEAN_ERROR',
  'LOG_OFF',
);

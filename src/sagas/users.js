import { call, takeEvery, put } from 'redux-saga/effects';

import {
  createUser as createUserAction, createUserSuccess, createUserFailure, logIn,
} from '../actions/users';
import { closeAllModals } from '../actions/modals';
import { http } from '../api';

const BASE_CREATE_USER_URL = 'users';
const BASE_LOAD_USER_URL = 'users/login';

function* createUserSaga({ payload }) {
  try {
    const response = yield call(createUser, payload.informationRegistration);

    if (response.data) {
      yield put(
        createUserSuccess({ user: response.data }),
      );
      yield put(
        closeAllModals(),
      );
    }
  } catch (error) {
    yield put(
      createUserFailure({ error }),
    );
  }
}

function* loadUserSaga({ payload }) {
  try {
    const response = yield call(loadUser, payload.informationLogIn);

    if (response.data) {
      yield put(
        createUserSuccess({ user: response.data }),
      );
      yield put(
        closeAllModals(),
      );
    }
  } catch (error) {
    yield put(
      createUserFailure({ error }),
    );
  }
}

function createUser(user) {
  return http.post(BASE_CREATE_USER_URL, user, {
    headers: {
      Accept: 'appliccation/json',
      'Content-Type': 'application/json',
    },
  });
}

function loadUser(user) {
  return http.post(BASE_LOAD_USER_URL, user, {
    headers: {
      Accept: 'appliccation/json',
      'Content-Type': 'application/json',
    },
  });
}

export const usersSagas = [
  takeEvery(createUserAction, createUserSaga),
  takeEvery(logIn, loadUserSaga),
];

import { call, takeEvery } from 'redux-saga/effects';

import { createUser as createUserAction } from '../actions/create-user';
import { http } from '../api';

const BASE_CREATE_USER_URL = 'users';

function createUser(user) {
  return http.post(BASE_CREATE_USER_URL, user, {
    headers: {
      Accept: 'appliccation/json',
      'Content-Type': 'application/json',
    },
  });
}

function* createUserSaga({ payload }) {
  try {
    yield call(createUser, payload.informationRegistration);
  } catch (error) {
    throw new Error('error in post create User saga');
  }
}

export const usersSagas = [takeEvery(createUserAction, createUserSaga)];

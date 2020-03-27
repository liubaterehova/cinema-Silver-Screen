import { put, call, takeEvery } from 'redux-saga/effects';

import { getSessions, getSessionsFailure, getSessionsSuccess } from '../actions/sessions';
import { makeApi } from '../api';

function* getSessionsSaga({ payload }) {
  try {
    const { sessions } = makeApi();
    const response = yield call([sessions, sessions.getSessions], payload.filmId);

    if (response.data) {
      yield put(
        getSessionsSuccess({ sessions: response.data }),
      );
    }
  } catch (error) {
    yield put(getSessionsFailure({ error }));
  }
}

export const sessionsSaga = [takeEvery(getSessions, getSessionsSaga)];

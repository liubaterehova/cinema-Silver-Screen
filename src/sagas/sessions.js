import { put, call, takeEvery } from 'redux-saga/effects';

import { getSessions, getSessionsFailure, getSessionsSuccess } from '../actions/sessions';
import { api } from '../api';

function* getSessionsSaga({ payload }) {
  try {
    const response = yield call([api, api.getSessions], payload.filmId);

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

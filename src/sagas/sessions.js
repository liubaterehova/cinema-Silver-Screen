import { put, call, takeEvery } from 'redux-saga/effects';

import { getSessions, getSessionsFailure, getSessionsSuccess } from '../actions/sessions';
import { http } from '../api';

const BASE_SESSIONS_URL = 'api/v1/sessions';

const loadSessions = (filmId) => http.get(`${BASE_SESSIONS_URL}/`, { params: { filmId } });

function* getSessionsSaga({ payload }) {
  try {
    const response = yield call(loadSessions, payload.filmId);

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

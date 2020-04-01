import { put, call, takeEvery } from 'redux-saga/effects';

import { getSessions, getSessionsFailure, getSessionsSuccess } from '../actions/sessions';
import { http } from '../api';

const BASE_SESSIONS_URL = 'sessions';

function* loadSessionsSaga({ payload }) {
  try {
    const response = yield call(fetchSessions, payload.filmId);

    if (response.data) {
      yield put(
        getSessionsSuccess({ sessions: response.data }),
      );
    }
  } catch (error) {
    yield put(getSessionsFailure({ error }));
  }
}

function fetchSessions(filmId) {
  return http.get(BASE_SESSIONS_URL, { params: { filmId } });
}

export const sessionsSagas = [takeEvery(getSessions, loadSessionsSaga)];

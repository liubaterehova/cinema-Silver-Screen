import { put, call, takeEvery } from 'redux-saga/effects';

import { getSession, getSessionFailure, getSessionSuccess } from '../actions/session';
import { http } from '../api';

const BASE_SESSIONS_URL = 'sessions';

function* loadSessionSaga({ payload }) {
  try {
    const response = yield call(fetchSession, payload.sessionId);

    if (response.data) {
      yield put(
        getSessionSuccess({ session: response.data }),
      );
    }
  } catch (error) {
    yield put(getSessionFailure({ error }));
  }
}

function fetchSession(sessionId) {
  return http.get(`${BASE_SESSIONS_URL}/${sessionId}`);
}

export const sessionSagas = [takeEvery(getSession, loadSessionSaga)];

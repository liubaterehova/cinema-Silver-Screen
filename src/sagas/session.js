import { put, call, takeEvery } from 'redux-saga/effects';

import { getSession, getSessionFailure, getSessionSuccess } from '../actions/session';
import { http } from '../api';

const BASE_SESSIONS_URL = 'api/v1/sessions';

const loadSession = (sessionId) => http.get(`${BASE_SESSIONS_URL}/${sessionId}`);

function* getSessionSaga({ payload }) {
  try {
    const response = yield call(loadSession, payload.sessionId);

    if (response.data) {
      yield put(
        getSessionSuccess({ session: response.data }),
      );
    }
  } catch (error) {
    yield put(getSessionFailure({ error }));
  }
}

export const sessionSaga = [takeEvery(getSession, getSessionSaga)];

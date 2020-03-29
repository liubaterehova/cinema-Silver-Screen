import { put, call, takeEvery } from 'redux-saga/effects';

import { getSession, getSessionFailure, getSessionSuccess } from '../actions/session';
import { api } from '../api';

function* getSessionSaga({ payload }) {
  try {
    const response = yield call([api, api.getSession], payload.sessionId);

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

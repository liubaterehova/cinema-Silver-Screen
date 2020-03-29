import { put, call, takeEvery } from 'redux-saga/effects';
import { getCinemas, getCinemasFailure, getCinemasSuccess } from '../actions/cinemas';

import { api } from '../api';

function* getCinemasSaga() {
  try {
    const response = yield call([api, api.getCinemas]);

    if (response.data) {
      yield put(
        getCinemasSuccess({ cinemas: response.data }),
      );
    }
  } catch (error) {
    yield put(getCinemasFailure({ error }));
  }
}

export const cinemasSagas = [takeEvery(getCinemas, getCinemasSaga)];

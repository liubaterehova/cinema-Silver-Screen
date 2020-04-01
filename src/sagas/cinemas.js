import { put, call, takeEvery } from 'redux-saga/effects';

import { getCinemas, getCinemasFailure, getCinemasSuccess } from '../actions/cinemas';
import { http } from '../api';

const BASE_CINEMAS_URL = 'cinemas';

function* loadCinemasSaga() {
  try {
    const response = yield call(fetchCinemas);

    if (response.data) {
      yield put(
        getCinemasSuccess({ cinemas: response.data }),
      );
    }
  } catch (error) {
    yield put(getCinemasFailure({ error }));
  }
}

function fetchCinemas() {
  return http.get(BASE_CINEMAS_URL);
}

export const cinemasSagas = [takeEvery(getCinemas, loadCinemasSaga)];

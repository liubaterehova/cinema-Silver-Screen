import { put, call, takeEvery } from 'redux-saga/effects';
import { getCinemas, getCinemasFailure, getCinemasSuccess } from '../actions/cinemas';
import { makeApi } from '../api';

function* getCinemasSaga() {
  try {
    const { cinemas } = makeApi();

    const response = yield call([cinemas, cinemas.getCinemas]);

    if (response.data) {
      const allCinemas = response.data;

      yield put(
        getCinemasSuccess({ films: allCinemas }),
      );
    }
  } catch (error) {
    yield put(getCinemasFailure({ error }));
  }
}

export const cinemasSagas = [takeEvery(getCinemas, getCinemasSaga)];

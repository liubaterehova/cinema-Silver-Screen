import { put, call, takeEvery } from 'redux-saga/effects';

import { getFilms, getFilmsFailure, getFilmsSuccess } from '../actions/films';
import { api } from '../api';

function* getFilmsSaga() {
  try {
    const response = yield call([api, api.getFilms]);

    if (response.data) {
      yield put(
        getFilmsSuccess({ films: response.data }),
      );
    }
  } catch (error) {
    yield put(getFilmsFailure({ error }));
  }
}

export const filmsSagas = [takeEvery(getFilms, getFilmsSaga)];

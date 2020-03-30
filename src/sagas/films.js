import { put, call, takeEvery } from 'redux-saga/effects';

import { getFilms, getFilmsFailure, getFilmsSuccess } from '../actions/films';
import { http } from '../api';

const BASE_FILMS_URL = 'api/v1/films';

const loadFilms = () => http.get(BASE_FILMS_URL);

function* getFilmsSaga() {
  try {
    const response = yield call(loadFilms);

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

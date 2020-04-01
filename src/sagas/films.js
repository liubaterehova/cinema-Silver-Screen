import { put, call, takeEvery } from 'redux-saga/effects';

import { getFilms, getFilmsFailure, getFilmsSuccess } from '../actions/films';
import { http } from '../api';

const BASE_FILMS_URL = 'films';

function fetchFilms() {
  return http.get(BASE_FILMS_URL);
}

function* loadFilmsSaga() {
  try {
    const response = yield call(fetchFilms);

    if (response.data) {
      yield put(
        getFilmsSuccess({ films: response.data }),
      );
    }
  } catch (error) {
    yield put(getFilmsFailure({ error }));
  }
}

export const filmsSagas = [takeEvery(getFilms, loadFilmsSaga)];

import { put, call, takeEvery } from 'redux-saga/effects';

import { loadFilmsRequest, loadFilmsFailure, loadFilmsSuccess } from '../actions/films';
import { http } from '../api';

const BASE_FILMS_URL = 'films';

function* loadFilmsSaga() {
  try {
    const response = yield call(fetchFilms);

    if (response.data) {
      yield put(loadFilmsSuccess({ films: response.data }));
    }
  } catch (error) {
    yield put(loadFilmsFailure({ error }));
  }
}

function fetchFilms() {
  return http.get(BASE_FILMS_URL);
}

export const filmsSagas = [takeEvery(loadFilmsRequest, loadFilmsSaga)];

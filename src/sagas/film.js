import { put, call, takeEvery } from 'redux-saga/effects';

import { getFilm, getFilmSuccess, getFilmFailure } from '../actions/film';
import { http } from '../api';

const BASE_FILMS_URL = 'films';

function fetchFilm(filmId) {
  return http.get(`${BASE_FILMS_URL}/${filmId}`);
}

function* loadFilmSaga({ payload }) {
  try {
    const response = yield call(fetchFilm, payload.filmId);

    if (response.data) {
      yield put(
        getFilmSuccess({ film: response.data }),
      );
    } else {
      yield put(getFilmFailure({ error: 'No data' }));
    }
  } catch (error) {
    yield put(getFilmFailure({ error }));
  }
}

export const filmSagas = [takeEvery(getFilm, loadFilmSaga)];

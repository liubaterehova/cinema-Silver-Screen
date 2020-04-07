import { put, call, takeEvery } from 'redux-saga/effects';

import { loadFilmRequest, loadFilmSuccess, loadFilmFailure } from '../actions/film';
import { http } from '../api';

const BASE_FILMS_URL = 'films';

function* loadFilmSaga({ payload }) {
  try {
    const response = yield call(fetchFilm, payload.filmId);

    if (response.data) {
      yield put(
        loadFilmSuccess({ film: response.data }),
      );
    } else {
      yield put(loadFilmFailure({ error: 'No data' }));
    }
  } catch (error) {
    yield put(loadFilmFailure({ error }));
  }
}

function fetchFilm(filmId) {
  return http.get(`${BASE_FILMS_URL}/${filmId}`);
}

export const filmSagas = [takeEvery(loadFilmRequest, loadFilmSaga)];

import { put, call, takeEvery } from 'redux-saga/effects';

import { getFilm, getFilmSuccess, getFilmFailure } from '../actions/film';
import { http } from '../api';

const BASE_FILMS_URL = 'api/v1/films';

const loadFilm = (filmId) => http.get(`${BASE_FILMS_URL}/${filmId}`);

function* getFilmSaga({ payload }) {
  try {
    const response = yield call(loadFilm, payload.filmId);

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

export const filmSaga = [takeEvery(getFilm, getFilmSaga)];

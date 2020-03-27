import { put, call, takeEvery } from 'redux-saga/effects';
import { getFilm, getFilmSuccess, getFilmFailure } from '../actions/film';
import { makeApi } from '../api';

function* getFilmSaga({ payload }) {
  try {
    const { films: filmApi } = makeApi();

    const response = yield call([filmApi, filmApi.getFilm], payload.filmId);

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

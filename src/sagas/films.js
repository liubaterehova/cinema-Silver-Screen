import { put, call, takeEvery } from 'redux-saga/effects';
import { getFilms, getFilmsFailure, getFilmsSuccess } from '../actions/films';
import { makeApi } from '../api';

function* getFilmsSaga() {
  try {
    const { films } = makeApi();

    const response = yield call([films, films.getFilms]);

    if (response.data) {
      const allFilms = response.data;

      yield put(
        getFilmsSuccess({ films: allFilms }),
      );
    }
  } catch (error) {
    yield put(getFilmsFailure({ error }));
  }
}

export const filmsSagas = [takeEvery(getFilms, getFilmsSaga)];

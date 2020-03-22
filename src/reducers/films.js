import { handleActions } from 'redux-actions';

import {
  getFilms, getFilmsSuccess, getFilmsFailure,
} from '../actions/films';

const defaultState = { films: [], isLoading: false, error: null };

export const films = handleActions(
  {
    [getFilms]: (state) =>
      ({
        ...state, isLoading: true,
      }),
    [getFilmsSuccess]: (state, { payload: { films: payloadFilms } }) =>
      ({
        ...state, films: payloadFilms, isLoading: false,
      }),
    [getFilmsFailure]: (state, { payload: { error } }) =>
      ({
        ...state, isLoading: false, error,
      }),
  }, defaultState,
);

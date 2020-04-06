import { handleActions } from 'redux-actions';

import { getFilms, getFilmsSuccess, getFilmsFailure } from '../actions/films';

const defaultState = { list: [], isLoading: false, error: null };

export const films = handleActions(
  {
    [getFilms]: state =>
      ({
        ...state, isLoading: true,
      }),
    [getFilmsSuccess]: (state, { payload: { films: payloadFilms } }) =>
      ({
        ...state, list: payloadFilms, isLoading: false,
      }),
    [getFilmsFailure]: (state, { payload: { error } }) =>
      ({
        ...state, isLoading: false, error,
      }),
  }, defaultState,
);

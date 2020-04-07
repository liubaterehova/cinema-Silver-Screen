import { handleActions } from 'redux-actions';

import { loadFilmsRequest, loadFilmsSuccess, loadFilmsFailure } from '../actions/films';

const defaultState = { list: [], isLoading: false, error: null };

export const films = handleActions(
  {
    [loadFilmsRequest]: state => ({
      ...state, isLoading: true,
    }),
    [loadFilmsSuccess]: (state, { payload: { films: payloadFilms } }) => ({
      ...state, list: payloadFilms, isLoading: false,
    }),
    [loadFilmsFailure]: (state, { payload: { error } }) => ({
      ...state, isLoading: false, error,
    }),
  }, defaultState,
);

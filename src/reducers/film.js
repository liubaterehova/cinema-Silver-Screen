import { handleActions } from 'redux-actions';

import { getFilm, getFilmSuccess, getFilmFailure } from '../actions/film';

const defaultState = { film: null, isLoading: true, error: null };

export const film = handleActions(
  {
    [getFilm]: state => ({
      ...state, isLoading: true,
    }),
    [getFilmSuccess]: (state, { payload: { film: f } }) => ({
      ...state, film: f, isLoading: false,
    }),
    [getFilmFailure]: (state, { payload: { error } }) => ({
      ...state, error, isLoading: false,
    }),
  }, defaultState,
);


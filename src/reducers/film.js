import { handleActions } from 'redux-actions';

import { loadFilm, loadFilmSuccess, loadFilmFailure } from '../actions/film';

const defaultState = { film: null, isLoading: false, error: null };

export const film = handleActions(
  {
    [loadFilm]: state => ({
      ...state, isLoading: true,
    }),
    [loadFilmSuccess]: (state, { payload: { film: f } }) => ({
      ...state, film: f, isLoading: false,
    }),
    [loadFilmFailure]: (state, { payload: { error } }) => ({
      ...state, error, isLoading: false,
    }),
  }, defaultState,
);

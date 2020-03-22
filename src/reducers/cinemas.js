import { handleActions } from 'redux-actions';

import {
  getCinemas, getCinemasSuccess, getCinemasFailure,
} from '../actions/cinemas';

const defaultState = { cinemas: [], isLoading: false, error: null };

export const cinemas = handleActions(
  {
    [getCinemas]: (state) => ({
      ...state, isLoading: true,
    }),
    [getCinemasSuccess]: (state, { payload: { cinemas: payloadCinemas } }) =>
      ({
        ...state, cinemas: payloadCinemas, isLoading: false,
      }),
    [getCinemasFailure]: (state, { payload: { error } }) =>
      ({
        ...state, isLoading: false, error,
      }),
  }, defaultState,
);

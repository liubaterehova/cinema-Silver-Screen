import { handleActions } from 'redux-actions';

import { loadCinemasRequest, loadCinemasSuccess, loadCinemasFailure } from '../actions/cinemas';

const defaultState = { cinemas: [], isLoading: false, error: null };

export const cinemas = handleActions(
  {
    [loadCinemasRequest]: state => ({
      ...state, isLoading: true,
    }),
    [loadCinemasSuccess]: (state, { payload: { cinemas: payloadCinemas } }) => ({
      ...state, cinemas: payloadCinemas, isLoading: false,
    }),
    [loadCinemasFailure]: (state, { payload: { error } }) => ({
      ...state, isLoading: false, error,
    }),
  }, defaultState,
);

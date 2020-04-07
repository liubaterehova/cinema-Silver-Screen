import { handleActions } from 'redux-actions';
import { updateSeatsRequest } from '../actions/seats';

const defaultState = {};

export const seats = handleActions(
  {
    [updateSeatsRequest]: (state, { payload: { row, col } }) => ({
      ...state,
      [`${row}_${col}`]: !state[`${row}_${col}`],
    }),
  }, defaultState,
);

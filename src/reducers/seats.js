import { handleActions } from 'redux-actions';
import { updateSeats } from '../actions/seats';

const defaultState = {};

export const seats = handleActions(
  {
    [updateSeats]: (state, { payload: { row, col } }) => ({
      ...state,
      [`${row}_${col}`]: !state[`${row}_${col}`],
    }),
  }, defaultState,
);

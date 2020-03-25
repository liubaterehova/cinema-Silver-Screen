import { handleActions } from 'redux-actions';
import { postSeats } from '../actions/seats';

const defaultState = {};

export const seats = handleActions(
  {
    [postSeats]: (state, { payload: { row, col } }) => ({
      ...state,
      [`${row}_${col}`]: !state[`${row}_${col}`],
    }),
  }, defaultState,
);

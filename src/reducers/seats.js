import { handleActions } from 'redux-actions';
import { selectSeat } from '../actions/seats';

const defaultState = {};

export const seats = handleActions(
  {
    [selectSeat]: (state, { payload: { row, col } }) => ({
      ...state,
      [`${row}_${col}`]: !state[`${row}_${col}`],
    }),
  }, defaultState,
);

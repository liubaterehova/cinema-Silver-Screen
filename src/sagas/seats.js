import { call, takeEvery } from 'redux-saga/effects';

import { postSeats } from '../actions/seats';
import { api } from '../api';

function* postSeatsSaga({ payload }) {
  try {
    yield call([api, api.postSeats], payload.seats);
  } catch (error) {
    throw new Error('error in post seats saga');
  }
}

export const seatsSaga = [takeEvery(postSeats, postSeatsSaga)];

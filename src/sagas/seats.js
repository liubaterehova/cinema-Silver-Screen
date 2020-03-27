import { call, takeEvery } from 'redux-saga/effects';

import { postSeats } from '../actions/seats';
import { makeApi } from '../api';

function* postSeatsSaga({ payload }) {
  try {
    const { seats } = makeApi();

    yield call([seats, seats.postSeats], payload.seats);
  } catch (error) {
    throw new Error('error in post seats saga');
  }
}

export const seatsSaga = [takeEvery(postSeats, postSeatsSaga)];

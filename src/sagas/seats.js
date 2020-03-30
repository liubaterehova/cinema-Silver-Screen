import { call, takeEvery } from 'redux-saga/effects';

import { postSeats } from '../actions/seats';
import { http } from '../api';

const BASE_SEATS_URL = 'api/v1/seats';

const updateSeats = (seats) => http.post(BASE_SEATS_URL,
  {
    headers: {
      Accept: 'appliccation/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ seats }),
  });

function* postSeatsSaga({ payload }) {
  try {
    yield call([http, updateSeats], payload.seats);
  } catch (error) {
    throw new Error('error in post seats saga');
  }
}

export const seatsSaga = [takeEvery(postSeats, postSeatsSaga)];

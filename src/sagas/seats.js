import { call, takeEvery } from 'redux-saga/effects';

import { postSeats } from '../actions/seats';
import { http } from '../api';

const BASE_SEATS_URL = 'seats';

function* updateSeatsSaga({ payload }) {
  try {
    yield call([http, updateSeats], payload.seats);
  } catch (error) {
    throw new Error('error in post seats saga');
  }
}

function updateSeats(seats) {
  return http.post(BASE_SEATS_URL, { seats });
}

export const seatsSagas = [takeEvery(postSeats, updateSeatsSaga)];

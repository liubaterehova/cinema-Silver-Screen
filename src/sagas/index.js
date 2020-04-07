import { all } from 'redux-saga/effects';

import { filmsSagas } from './films';
import { cinemasSagas } from './cinemas';
import { filmSagas } from './film';
import { seatsSagas } from './seats';
import { sessionsSagas } from './sessions';
import { sessionSagas } from './session';
import { usersSagas } from './users';

export function* rootSaga() {
  yield all(
    [
      ...filmsSagas,
      ...cinemasSagas,
      ...filmSagas,
      ...seatsSagas,
      ...sessionsSagas,
      ...sessionSagas,
      ...usersSagas,
    ],
  );
}

import { all } from 'redux-saga/effects';

import { filmsSagas } from './films';
import { cinemasSagas } from './cinemas';
import { filmSaga } from './film';
import { seatsSaga } from './seats';
import { sessionsSaga } from './sessions';
import { sessionSaga } from './session';

export function* rootSaga() {
  yield all([...filmsSagas,
    ...cinemasSagas,
    ...filmSaga,
    ...seatsSaga,
    ...sessionsSaga,
    ...sessionSaga]);
}

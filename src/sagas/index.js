import { all } from 'redux-saga/effects';

import { filmsSagas } from './films';
import { cinemasSagas } from './cinemas';
import { filmSaga } from './film';

export function* rootSaga() {
  yield all([...filmsSagas, ...cinemasSagas, ...filmSaga]);
}

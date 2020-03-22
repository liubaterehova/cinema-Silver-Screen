import { all } from 'redux-saga/effects';

import { filmsSagas } from './films';
import { cinemasSagas } from './cinemas';

export function* rootSaga() {
  yield all([...filmsSagas, ...cinemasSagas]);
}

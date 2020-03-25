import { makeFilmsApi } from './make-films-api';
import { makeCinemasApi } from './make-cinemas-api';
import { makeSeatsApi } from './make-seats-api';

export const makeApi = (dependencies = {}) => ({
  films: makeFilmsApi(dependencies),
  film: makeFilmsApi(dependencies),
  cinemas: makeCinemasApi(dependencies),
  seats: makeSeatsApi(dependencies),
});

export default makeApi;

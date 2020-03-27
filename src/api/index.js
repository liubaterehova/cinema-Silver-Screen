import { makeFilmsApi } from './make-films-api';
import { makeCinemasApi } from './make-cinemas-api';
import { makeSeatsApi } from './make-seats-api';
import { makeSessionsApi } from './make-sessions-api';

export const makeApi = (dependencies = {}) => ({
  films: makeFilmsApi(dependencies),
  cinemas: makeCinemasApi(dependencies),
  seats: makeSeatsApi(dependencies),
  sessions: makeSessionsApi(dependencies),
});

export default makeApi;

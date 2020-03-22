import { makeFilmsApi } from './make-films-api';
import { makeCinemasApi } from './make-cinemas-api';

export const makeApi = (dependencies = {}) => ({
  films: makeFilmsApi(dependencies),
  cinemas: makeCinemasApi(dependencies),
});

export default makeApi;

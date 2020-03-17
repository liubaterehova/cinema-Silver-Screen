import * as R from 'ramda';

export const filterFilmByParams = (allFilms, filters) => {
  debugger;
  // const tes = R.forEach((film) => {
  //   const result = filters.every(({ type, value }) => {
  //     const val = R.where({ [type]: R.equals(value) }, film);
  //   });

  //   if (result) {
  //     sorted.push(film);
  //   }
  // }, allFilms);
  const ff = allFilms.filter(film => filters.filters.map(({ type, value }) => {
    if (R.equals(film[type], value)) return true;

    return false;
  }));

  return ff;
};


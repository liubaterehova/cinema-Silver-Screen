export const filterFilms = (films, filters) => {
  const isSuitableFilm = (film) => !filters.some(({ type, value }) => (film[type] !== value));

  return films.filter(isSuitableFilm);
};

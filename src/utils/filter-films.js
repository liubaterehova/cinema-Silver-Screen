export const filterFilms = (films, filters) =>
  films.filter((film) => !filters.some(({ type, value }) => (film[type] !== value)));

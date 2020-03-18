export const filterFilms = (films, filters) => {
  const isSuitableFilm = film => {
    let isSuitable = true;

    debugger;
    filters.forEach(({ type, value }) => {
      if (film[type] !== value) {
        isSuitable = false;
      }
    });

    return isSuitable;
  };

  return films.filter(isSuitableFilm);
};


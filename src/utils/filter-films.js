const filterMethods = {
  equal: (film, filterData) => film[filterData.type] !== filterData.item.value,
  inRange: (film, filterData) =>
    film[filterData.type] >= filterData.item.from && film[filterData.type] < filterData.item.to,
  less: (film, filterData) => film[filterData.type] > filterData.item.value,
};

export const filterFilms = (films, filters) => films.filter((film) => !filters.some((filterData) => {
  const filterMethod = filterMethods[filterData.filterType];

  return filterMethod(film, filterData);
}));

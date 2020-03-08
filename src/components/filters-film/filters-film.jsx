import React, { useState } from 'react';
import { Table } from 'reactstrap';

import { useFilms } from '../../hooks/use-films';
import { FilterFilm } from '../filter-film/filter-film';
import { filters } from '../../constants';

const defaultStateSelectedMenu = {
  city: null,
  cinema: null,
  date: null,
  time: null,
  availableSeats: null,
};

export const FiltersFilms = () => {
  const [selectedMenu, selectMenu] = useState(defaultStateSelectedMenu);
  const { dispatchFilterFilms } = useFilms();
  // made nested function to closure filterName
  const makeItemSelector = (filterName) => (item) => {
    dispatchFilterFilms({ ...selectedMenu, [filterName]: item });
    selectMenu((state) => ({ ...state, [filterName]: item }));
  };

  return (
    <div className="filter-films">
      <h1 className="my-5">Афиша кино</h1>
      <Table
        responsive="sm"
        className="w-100"
        bordered
      >
        <tbody>
          <tr>
            {filters.map(({
              id, filterName, defaultValue, items,
            }) => (
              <td key={id}>
                <FilterFilm
                  selectedFilterItem={selectedMenu[filterName]}
                  defaultValue={defaultValue}
                  selectItem={makeItemSelector(filterName)}
                  items={items}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

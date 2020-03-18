import React from 'react';
import { Table } from 'reactstrap';

import { FilmFilter } from '../film-filter/film-filter';
import { FILTERS } from '../../constants';
import { useFilters } from '../../hooks/use-filters';

export const FiltersMenu = () => {
  const { dispatchAddNewFilter, dispatchRemoveFilter, filters } = useFilters();

  const selectItem = ({ value, name }, filterName) => {
    if (value === 'ALL') {
      dispatchRemoveFilter({ type: filterName });
    } else {
      dispatchAddNewFilter({ value, type: filterName, name });
    }
  };

  const getFilterValue = ({ filterName, defaultValue }) => {
    const selectedItem = filters.find(filter => filter.type === filterName);

    return selectedItem ? selectedItem.name : defaultValue;
  };

  return (
    <div className="filter-films">
      <h1 className="my-5">Movies poster</h1>
      <Table
        responsive="sm"
        className="w-100"
        bordered
      >
        <tbody>
          <tr>
            {FILTERS.map((filter) => (
              <td key={filter.id}>
                <FilmFilter
                  filter={filter}
                  selectItem={selectItem}
                  filterValue={getFilterValue(filter)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

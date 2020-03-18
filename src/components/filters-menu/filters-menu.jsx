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
            {FILTERS.map(({
              id, filterName, defaultValue, items,
            }) => (
              <td key={id}>
                <FilmFilter
                  selectItem={selectItem}
                  defaultValue={defaultValue}
                  filterName={filterName}
                  items={items}
                  filters={filters}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

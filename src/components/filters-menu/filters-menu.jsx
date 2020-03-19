import React from 'react';
import { Table } from 'reactstrap';

import { FilmFilter } from '../film-filter/film-filter';
import { FILTERS, VALUE_ALL } from '../../constants';
import { useFilters } from '../../hooks/use-filters';

export const FiltersMenu = () => {
  const { dispatchAddNewFilter, dispatchRemoveFilter, filters } = useFilters();

  const selectItem = (item, filterName, method) => {
    if (item.value === VALUE_ALL) {
      dispatchRemoveFilter({ type: filterName });
    } else {
      dispatchAddNewFilter({
        item, type: filterName, method,
      });
    }
  };

  const getFilterValue = (filterName, defaultValue) => {
    const selectedItem = filters.find(filter => filter.type === filterName);

    return selectedItem ? selectedItem.item.name : defaultValue;
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
            {FILTERS.map(({
              id, method, filterName, items, defaultValue,
            }) => (
              <td key={id}>
                <FilmFilter
                  items={items}
                  selectItem={(item) => selectItem(item, filterName, method)}
                  filterValue={getFilterValue(filterName, defaultValue)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

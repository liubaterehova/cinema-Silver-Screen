import React from 'react';
import { Table } from 'reactstrap';

import { FilmFilter } from '../film-filter/film-filter';
import { filters } from '../../constants';

export const MenuFilters = () => (
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
              <FilmFilter
                // selectedFilterItem={selectedFilter[filterName]}
                defaultValue={defaultValue}
                filterName={filterName}
                items={items}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  </div>
);

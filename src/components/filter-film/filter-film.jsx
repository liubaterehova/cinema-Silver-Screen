/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Table, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import { IconArrow } from '../icons/icon-arrow';
import { filters } from '../../constants';
import { useFilms } from '../../hooks/use-films';

const defaultStateSelectedMenu = {
  city: '',
  cinema: '',
  date: '',
  time: '',
  availableSeats: '',
};

const getDefaultFilterValue = (filterName) => {
  switch (filterName) {
    case 'city':
      return 'Город';

    case 'cinema':
      return 'Все кинотеатры';

    case 'date':
      return 'Сегодня';

    case 'time':
      return 'Все сеансы';

    case 'availableSeats':
      return 'Свободные места';
    default:
      return null;
  }
};

export const FilterFilms = () => {
  const { dispatchFilterFilms } = useFilms();
  const [selectedMenu, selectMenu] = useState(defaultStateSelectedMenu);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const selectItem = (filterName, item) => {
    dispatchFilterFilms({ ...selectedMenu, [filterName]: item });
    selectMenu((state) => ({ ...state, [filterName]: item }));
  };
  const toggle = (filterName) => {
    setDropdownOpen((state) => ({ ...state, [filterName]: !state[filterName] }));
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
            { console.log('filters', filters)}
            {filters.map(({ filterName, items }) => (
              <td key={filterName}>
                <Row className="justify-content-md-center">
                  <Col md={8} className="w-25">
                    {selectedMenu[filterName] || getDefaultFilterValue(filterName)}
                  </Col>
                  <Col md={4}>
                    <Dropdown isOpen={dropdownOpen[filterName]} toggle={() => toggle(filterName)}>
                      <DropdownToggle caret>
                        <IconArrow />
                      </DropdownToggle>
                      <DropdownMenu>
                        {
                          items.map((item) => (
                            <DropdownItem
                              key={item.id}
                              onClick={() => { selectItem(filterName, item); }}
                            >
                              <p>{item.name}</p>
                            </DropdownItem>
                          ))
                        }
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </Row>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

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
  const [selectedMenu, selectMenu] = useState(defaultStateSelectedMenu);
  const { dispatchFilterFilms } = useFilms();
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggle = (filterName) => {
    setDropdownOpen((state) => ({ ...state, [filterName]: !state[filterName] }));
  };

  const selectItem = (filterName, item) => {
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
                          items.map(({ id, name }) => (
                            <DropdownItem
                              key={id}
                              onClick={() => { selectItem(filterName, name); }}
                            >
                              <p>{name}</p>
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

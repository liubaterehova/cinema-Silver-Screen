import React, { useState } from 'react';
import {
  Table, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import { IconArrow } from '../icons/icon-arrow';
import { filters } from '../../constants';
import { useFilms } from '../../hooks/use-films';

export const FilterFilms = () => {
  const [selectedMenu, selectMenu] = useState({
    1: 'Город', 2: 'Все кинотеатры', 3: 'Сегодня', 4: 'Все сеансы', 5: 'Свободные места',
  });
  const { dispatchFilterFilms } = useFilms(selectedMenu);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggle = (id) => {
    setDropdownOpen((state) => ({ ...state, [id]: !state[id] }));
  };

  const selectItem = (id, item) => {
    dispatchFilterFilms(selectedMenu);
    selectMenu((state) => ({ ...state, [id]: item }));
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
            {filters.map(({ id, items }) => (
              <td key={id}>
                <Row className="justify-content-md-center">
                  <Col md={8} className="w-25">
                    {selectedMenu[id]}
                  </Col>
                  <Col md={4}>
                    <Dropdown isOpen={dropdownOpen[id]} toggle={() => toggle(id)}>
                      <DropdownToggle caret>
                        <IconArrow />
                      </DropdownToggle>
                      <DropdownMenu>
                        {
                          items.map((item) => (
                            <DropdownItem
                              key={item}
                              onClick={() => { selectItem(id, item); }}
                            >{item}
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


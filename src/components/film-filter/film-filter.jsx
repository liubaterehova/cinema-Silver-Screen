import React, { useState } from 'react';
import {
  Row, Col, Dropdown, DropdownToggle,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { useFilms } from '../../hooks/use-films';
import { DropDownMenu } from '../drop-down-menu/drop-down-menu';
import { IconArrow } from '../icons/icon-arrow';

const defaultStateSelectedMenu = {
  city: null,
  cinema: null,
  date: null,
  time: null,
  availableSeats: null,
};

export const FilmFilter = ({
  items, defaultValue, filterName,
}) => {
  const [filters, addNewFilter] = useState(defaultStateSelectedMenu);
  const { dispatchAddNewFilter, dispatchRemoveFilter } = useFilms();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getFilterValue = () => {
    if (filters[filterName]) {
      return filters[filterName];
    }

    return defaultValue;
  };

  const selectItem = ({ name, code }) => {
    addNewFilter({ ...filters, [filterName]: name });

    if (code === 'ALL') {
      dispatchRemoveFilter({ value: code, type: filterName });
    } else {
      dispatchAddNewFilter({ value: code, type: filterName });
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Col md={8} className="w-25">
        {getFilterValue()}
      </Col>
      <Col md={4}>
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(value => !value)}>
          <DropdownToggle tag="div">
            <IconArrow />
          </DropdownToggle>
          <DropDownMenu
            items={items}
            selectItem={selectItem}
          />
        </Dropdown>
      </Col>
    </Row>
  );
};

FilmFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedFilterItem: PropTypes.shape({ name: PropTypes.string.isRequired }),
};

FilmFilter.defaultProps = {
  selectedFilterItem: null,
};

import React, { useState } from 'react';
import {
  Row, Col, Dropdown, DropdownToggle,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { anyFilterType } from '../../types/filterTypes';
import { DropDownMenu } from '../drop-down-menu/drop-down-menu';
import { IconArrow } from '../icons/icon-arrow';

export const FilmFilter = ({
  items, selectedFilterItem, defaultValue, selectItem,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getFilterValue = () => selectedFilterItem
    ? selectedFilterItem.name
    : defaultValue;

  const toggleDropdown = () => {
    setDropdownOpen(val => !val);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md={8} className="w-25">
        {getFilterValue()}
      </Col>
      <Col md={4}>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
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
  defaultValue: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(anyFilterType).isRequired,
  selectedFilterItem: anyFilterType,
  selectItem: PropTypes.func.isRequired,
};

FilmFilter.defaultProps = {
  selectedFilterItem: null,
};

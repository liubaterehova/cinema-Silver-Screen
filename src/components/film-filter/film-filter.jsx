import React, { useState } from 'react';
import {
  Row, Col, Dropdown, DropdownToggle,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { DropDownMenu } from '../drop-down-menu/drop-down-menu';
import { IconArrow } from '../icons/icon-arrow';

export const FilmFilter = ({
  filter: { items, filterName }, selectItem, filterValue,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Row className="justify-content-md-center">
      <Col md={8} className="w-25">
        <p>{filterValue}</p>
      </Col>
      <Col md={4}>
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(value => !value)}>
          <DropdownToggle tag="div">
            <IconArrow />
          </DropdownToggle>
          <DropDownMenu
            items={items}
            selectItem={(item) => selectItem(item, filterName)}
          />
        </Dropdown>
      </Col>
    </Row>
  );
};

FilmFilter.propTypes = {
  selectItem: PropTypes.func.isRequired,
  filter: PropTypes.shape({ items: PropTypes.arrayOf(PropTypes.shape({})), filterName: PropTypes.string }).isRequired,
  filterValue: PropTypes.string.isRequired,
  selectedFilterItem: PropTypes.shape({ name: PropTypes.string.isRequired }),
};

FilmFilter.defaultProps = {
  selectedFilterItem: null,
};

import React, { useState } from 'react';
import {
  Row, Col, Dropdown, DropdownToggle,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { useFilters } from '../../hooks/use-filters';
import { DropDownMenu } from '../drop-down-menu/drop-down-menu';
import { IconArrow } from '../icons/icon-arrow';

export const FilmFilter = ({
  items, defaultValue, filterName,
}) => {
  const { dispatchAddNewFilter, dispatchRemoveFilter, filters } = useFilters();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getFilterValue = () => {
    const selectedItem = filters.find(filter => filter.type === filterName);

    if (selectedItem) {
      return selectedItem.name;
    }

    return defaultValue;
  };

  const selectItem = ({ value, name }) => {
    if (value === 'ALL') {
      dispatchRemoveFilter({ value, type: filterName });
    } else {
      dispatchAddNewFilter({ value, type: filterName, name });
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

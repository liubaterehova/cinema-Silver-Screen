import React from 'react';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';

export const DropDownMenu = ({ items, selectItem, filterName }) => (
  <DropdownMenu>
    {items.map((item) => (
      <DropdownItem
        key={item.id}
        onClick={() => selectItem(item, filterName)}
      >
        <p>{item.name}</p>
      </DropdownItem>
    ))}
  </DropdownMenu>
);

DropDownMenu.propTypes = {
  filterName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectItem: PropTypes.func.isRequired,
};

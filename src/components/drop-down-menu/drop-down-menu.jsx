import React from 'react';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';

export const DropDownMenu = ({ items, selectItem }) => (
  <DropdownMenu>
    {items.map((item) => (
      <DropdownItem
        key={item.id}
        onClick={() => { selectItem(item); }}
      >
        <p>{item.name}</p>
      </DropdownItem>
    ))}
  </DropdownMenu>
);

DropDownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectItem: PropTypes.func.isRequired,
};

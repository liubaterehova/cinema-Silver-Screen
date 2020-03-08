import React from 'react';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';

import { anyFilterType } from '../../types/filterTypes';

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
  items: PropTypes.arrayOf(anyFilterType).isRequired,
  selectItem: PropTypes.func.isRequired,
};

import React from 'react';
import {
  Input, InputGroupAddon, InputGroupText, InputGroup,
} from 'reactstrap';

export const DollarInput = (props) => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>$</InputGroupText>
    </InputGroupAddon>
    <Input {...props} />
  </InputGroup>
);

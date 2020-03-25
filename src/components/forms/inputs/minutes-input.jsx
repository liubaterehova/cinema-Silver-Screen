import React from 'react';
import {
  Input, InputGroupAddon, InputGroupText, InputGroup,
} from 'reactstrap';

export const MinutesInput = (props) => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>minutes</InputGroupText>
    </InputGroupAddon>
    <Input {...props} />
  </InputGroup>
);

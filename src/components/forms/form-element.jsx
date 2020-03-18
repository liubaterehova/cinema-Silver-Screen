import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Label, Input,
} from 'reactstrap';

export const FormElement = (({
  name, label, type, id, placeholder, listItems,
}) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Input
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
    >{(listItems) ? listItems.map(item => <option>{item.name}</option>) : null}
    </Input>
  </FormGroup>
)
);

FormElement.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
FormElement.defaultProps = {
  listItems: null,
};

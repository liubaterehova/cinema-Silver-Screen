import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup, Label, Input,
} from 'reactstrap';

export const FormElement = (({
  name, label, type, id, placeholder,
}) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Input
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
    />
  </FormGroup>
)
);

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


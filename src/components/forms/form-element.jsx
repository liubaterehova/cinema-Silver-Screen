import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';

import {
  FormGroup, Label, Input,
} from 'reactstrap';

export const FormElement = (({
  id, name, label, placeholder, type,
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

export const makeFormElements = R.map(({
  id, name, label, placeholder, type,
}) => (
  <FormElement
    id={id}
    key={id}
    name={name}
    label={label}
    placeholder={placeholder}
    type={type}
  />
));

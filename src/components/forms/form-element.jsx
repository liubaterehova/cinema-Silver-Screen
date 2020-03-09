import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Label, Input,
} from 'reactstrap';

export const FormElement = ({
  id, name, label, placeholder, type, register, errors,
}) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Input
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      ref={register({ required: true })}
    />
    {errors[id] && 'Field is required'}
  </FormGroup>
);

FormElement.propTypes = {
  register: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

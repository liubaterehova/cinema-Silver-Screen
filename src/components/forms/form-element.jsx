import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Label, Input,
} from 'reactstrap';
import { Controller } from 'react-hook-form';

export const FormElement = ({
  id, name, label, placeholder, type, rules, error, control,
}) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Controller
      as={<Input />}
      type={type}
      name={name}
      control={control}
      id={id}
      placeholder={placeholder}
      rules={rules}
    />
    {error && 'Field is required'}
  </FormGroup>
);

FormElement.propTypes = {
  error: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  rules: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

FormElement.defaultProps = {
  error: false,
};

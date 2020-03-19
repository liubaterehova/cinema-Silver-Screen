import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Label, Input,
} from 'reactstrap';
import { Controller } from 'react-hook-form';

export const FormElement = ({
  id, name, label, placeholder, type, rules, error, control, errorMessage,
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
    {error && errorMessage}
  </FormGroup>
<<<<<<< HEAD
));
=======
);
>>>>>>> dev

FormElement.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  rules: PropTypes.shape({}).isRequired,
  control: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

FormElement.defaultProps = {
  error: false,
};

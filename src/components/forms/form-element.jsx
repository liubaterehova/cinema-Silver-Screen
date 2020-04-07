import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import { Controller } from 'react-hook-form';

export const FormElement = ({
  id, name, row, label, placeholder, type, rules, error, control, errorMessage, as, children,
}) => (
  <FormGroup row={row}>
    <Label for={name}>{label}</Label>
    <Controller
      as={as}
      type={type}
      name={name}
      control={control}
      id={id}
      placeholder={placeholder}
      rules={rules}
    >
      {children}
    </Controller>
    {error && errorMessage}
  </FormGroup>
);

FormElement.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]).isRequired,
  errorMessage: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  rules: PropTypes.shape({}),
  control: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  row: PropTypes.bool,
  children: PropTypes.node,
};

FormElement.defaultProps = {
  error: false,
  row: false,
  placeholder: undefined,
  children: undefined,
  rules: undefined,
  errorMessage: undefined,
};

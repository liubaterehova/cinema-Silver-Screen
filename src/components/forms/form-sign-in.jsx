import React from 'react';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';

import { FormElement } from './form-element';

const elementsOfFormSignIn = [
  {
    id: 0,
    name: 'signInEmail',
    label: 'Email',
    placeholder: 'email',
    type: 'email',
  },
  {
    id: 1,
    name: 'signInPassword',
    label: 'Пароль',
    placeholder: 'password',
    type: 'password',
  },
];

export const FormSignIn = ({ errors, onSubmit, ...other }) => (
  <Form onSubmit={onSubmit}>
    {elementsOfFormSignIn.map(({
      id, name, label, placeholder, type,
    }) => (
      <FormElement
        id={id}
        rules={{ required: true }}
        key={id}
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
        error={errors[name]}
        {...other}
      />
    ))}
  </Form>
);

FormSignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({ signInEmail: PropTypes.bool, signUpEmail: PropTypes.bool }).isRequired,
};


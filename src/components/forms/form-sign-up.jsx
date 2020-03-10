import React from 'react';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';

import { FormElement } from './form-element';

const elementsOfFormSignUp = [
  {
    id: 0,
    name: 'name',
    label: 'Ваше имя',
    placeholder: 'имя',
    type: 'text',
  },
  {
    id: 1,
    name: 'number',
    label: 'Номер телефона',
    placeholder: 'number',
    type: 'number',
  },
  {
    id: 2,
    name: 'signUpEmail',
    label: 'Email',
    placeholder: 'email',
    type: 'email',
  },
  {
    id: 3,
    name: 'signUpPassword',
    label: 'Пароль',
    placeholder: 'password',
    type: 'password',
  },
  {
    id: 4,
    name: 'signUpPassword',
    label: 'Повторите пароль',
    placeholder: 'password',
    type: 'password',
  },
];

export const FormSignUp = ({ errors, onSubmit, ...other }) => (
  <Form onSubmit={onSubmit}>
    {elementsOfFormSignUp.map(({
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

FormSignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({ signInEmail: PropTypes.bool, signUpEmail: PropTypes.bool }).isRequired,
};


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

export const FormSignIn = ({ register, errors }) => (
  <Form>
    {elementsOfFormSignIn.map(({
      id, name, label, placeholder, type,
    }) => (
      <FormElement
        id={id}
        register={register}
        key={id}
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
        errors={errors}
      />
    ))}
  </Form>
);

FormSignIn.propTypes = {
  errors: PropTypes.string.isRequired,
  register: PropTypes.bool.isRequired,
};

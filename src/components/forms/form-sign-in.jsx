import React from 'react';
import { Form } from 'reactstrap';

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

export const FormSignIn = () => (
  <Form>
    {elementsOfFormSignIn.map(({
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
    ))}
  </Form>
);

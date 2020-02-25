import React from 'react';

import { Form } from 'reactstrap';

import { makeFormElements } from './form-element';

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
    {makeFormElements(elementsOfFormSignIn)}
  </Form>
);

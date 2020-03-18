import React from 'react';
import { Form } from 'reactstrap';

import { FormElement } from './form-element';

const elementsOfFormAddCinema = [
  {
    id: 1,
    name: 'nameCinema',
    label: 'Название кинотеатра',
    placeholder: 'cimena',
    type: 'text',
  },
  {
    id: 2,
    name: 'address',
    label: 'Адрес',
    placeholder: 'address',
    type: 'text',
  },
  {
    id: 3,
    name: 'popcorn',
    label: 'Попкорн',
    type: 'checkbox',
  },
  {
    id: 3,
    name: 'drinks',
    label: 'Напитки',
    type: 'checkbox',
  },
];

export const FormAddCinema = () => (
  <Form>
    {elementsOfFormAddCinema.map(({
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

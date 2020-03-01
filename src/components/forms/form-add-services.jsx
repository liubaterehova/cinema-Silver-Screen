import React from 'react';

import { Form } from 'reactstrap';

import { FormElementCheckbox } from './form-element-checkbox';

const elementsOfFormAddServices = [
  {
    id: 1,
    name: 'popcorn',
    label: 'Попкорн',
  },
  {
    id: 2,
    name: 'drinks',
    label: 'Напитки',
  },
];

export const FormAddServices = () => (
  <Form>
    {elementsOfFormAddServices.map(({
      id, name, label,
    }) => (
      <FormElementCheckbox
        key={id}
        name={name}
        text={label}
      />
    ))}
  </Form>
);

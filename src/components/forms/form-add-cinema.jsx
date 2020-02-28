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
    name: 'numberHalls',
    label: 'Количество залов',
    placeholder: 'number of cinema halls',
    type: 'number',
  },
  {
    id: 4,
    name: 'numberSeats',
    label: 'Количество мест',
    placeholder: 'number of seats',
    type: 'number',
  },
  {
    id: 5,
    name: 'typeSeats',
    label: 'Виды сидений',
    placeholder: 'type of seats',
    type: 'text',
  },
];
const formElements = elementsOfFormAddCinema.map(({
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
));

export const FormAddCinema = () => (
  <Form>
    {formElements}
  </Form>
);

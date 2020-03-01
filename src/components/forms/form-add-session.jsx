import React from 'react';

import { Form } from 'reactstrap';

import { FormElement } from './form-element';

const elementsOfFormAddSession = [
  {
    id: 1,
    name: 'nameCinema',
    label: 'Название кинотеатра',
    placeholder: 'cimena',
    type: 'text',
  },
  {
    id: 2,
    name: 'time',
    label: 'Время сеанса',
    placeholder: 'time',
    type: 'text',
  },
  {
    id: 3,
    name: 'numberHall',
    label: 'Номер зала',
    placeholder: 'number of cinema hall',
    type: 'number',
  },
  {
    id: 4,
    name: 'price',
    label: 'Цена за место',
    placeholder: 'price',
    type: 'number',
  },
];

export const FormAddSession = () => (
  <Form>
    {elementsOfFormAddSession.map(({
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

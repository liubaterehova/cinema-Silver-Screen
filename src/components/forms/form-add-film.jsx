import React from 'react';
import { Form } from 'reactstrap';

import { FormElement } from './form-element';

const elementsOfFormAddFilm = [
  {
    id: 1,
    name: 'nameFilm',
    label: 'Название фильма',
    placeholder: 'film',
    type: 'text',
  },
  {
    id: 2,
    name: 'dataBeginFilm',
    label: 'Начало показа фильма',
    placeholder: 'data',
    type: 'text',
  },
  {
    id: 3,
    name: 'dataEndFilm',
    label: 'Конец показа фильма',
    placeholder: 'data',
    type: 'data',
  },
  {
    id: 4,
    name: 'filmDescription',
    label: 'Описание фильма',
    placeholder: 'description',
    type: 'text',
  },
  {
    id: 5,
    name: 'filmType',
    label: 'Жанр фильма',
    placeholder: 'type',
    type: 'text',
  },
];

export const FormAddFilm = () => (
  <Form>
    {elementsOfFormAddFilm.map(({
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

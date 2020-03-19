import React from 'react';
import { Form, Input, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { FormElement } from './form-element';
import { CINEMAS, FILMS } from '../../constants';
import { DollarInput } from './inputs/dollar-input';

const formElementsAddSession = [
  {
    id: 1,
    as: Input,
    type: 'select',
    name: 'selectCinema',
    label: 'Cinema',
    rules: { required: true },
    errorMessage: 'This field is required',
    children: Object.values(CINEMAS).map((cinema) => <option key={cinema.id}>{cinema.cinemaName}</option>),
  },
  {
    id: 2,
    as: Input,
    type: 'select',
    name: 'selectFilm',
    label: 'Film',
    rules: { required: true },
    errorMessage: 'This field is required',
    children: FILMS.map(film => <option key={film.id}>{film.name}</option>),
  },
  {
    id: 3,
    as: Input,
    type: 'time',
    name: 'time',
    label: 'Time',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 4,
    as: DollarInput,
    type: 'number',
    name: 'price',
    label: 'Price',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
];

export const FormAddSession = ({
  handleSubmit, errors, control,
}) => {
  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formElementsAddSession.map((formElement) => (
        <React.Fragment key={formElement.id}>
          <Col sm={10}>
            <FormElement row {...formElement} control={control} error={errors[formElement.name]} />
          </Col>
          <br />
        </React.Fragment>
      ))}
    </Form>
  );
};

FormAddSession.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    selectCinema: PropTypes.shape({}),
    selectFilm: PropTypes.shape({}),
    time: PropTypes.shape({}),
    number: PropTypes.shape({}),
  }),
  rules: PropTypes.shape({}),
  control: PropTypes.shape({}).isRequired,
};

FormAddSession.defaultProps = {
  errors: {},
  rules: {},
};

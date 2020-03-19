import React from 'react';
import { Form, Input, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { MinutesInput } from './inputs/minutes-input';
import { FormElement } from './form-element';

const formElementAddFilm = [
  {
    id: 1,
    as: Input,
    type: 'text',
    name: 'filmName',
    label: 'Movie title',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 2,
    as: MinutesInput,
    type: 'number',
    name: 'duration',
    label: 'Movie duration',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 3,
    as: Input,
    type: 'text',
    name: 'description',
    label: 'Description',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 4,
    as: Input,
    type: 'text',
    name: 'genre',
    label: 'Film genre',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 5,
    as: Input,
    type: 'file',
    name: 'file',
    label: 'File',
  },
];

export const FormAddFilm = ({
  handleSubmit, errors, control,
}) => {
  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formElementAddFilm.map((formElement) => (
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

FormAddFilm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    filmName: PropTypes.shape({}),
    phoneNumber: PropTypes.shape({}),
    description: PropTypes.shape({}),
    genre: PropTypes.shape({}),
    file: PropTypes.shape({}),
  }),
  rules: PropTypes.shape({}),
  control: PropTypes.shape({}).isRequired,
};

FormAddFilm.defaultProps = {
  errors: {},
  rules: {},
};

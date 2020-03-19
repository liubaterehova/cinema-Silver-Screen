import React from 'react';
import { Form, Input, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { FormElement } from './form-element';

const formElementAddCinema = [
  {
    id: 1,
    as: Input,
    type: 'text',
    name: 'cinemaName',
    label: 'Cinema title',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 2,
    as: Input,
    type: 'text',
    name: 'description',
    label: 'Description',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 3,
    as: Input,
    type: 'text',
    name: 'address',
    label: 'Address',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 4,
    as: Input,
    type: 'checkbox',
    name: 'popcorn',
    label: 'Popcorn',
  },
  {
    id: 5,
    as: Input,
    type: 'checkbox',
    name: 'drinks',
    label: 'Drinks',
  },
];

export const FormAddCinema = ({
  handleSubmit, errors, control,
}) => {
  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formElementAddCinema.map((formElement) => (
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

FormAddCinema.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    cinemaName: PropTypes.shape({}),
    description: PropTypes.shape({}),
    address: PropTypes.shape({}),
  }),
  rules: PropTypes.shape({}),
  control: PropTypes.shape({}).isRequired,
};

FormAddCinema.defaultProps = {
  errors: {},
  rules: {},
};

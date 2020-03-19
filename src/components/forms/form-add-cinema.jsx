import React from 'react';
import {
  Form, Input, Label, FormGroup, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

export const FormAddCinema = ({
  handleSubmit, errors, control,
}) => {
  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormGroup row>
          <Label for="cinemaName" sm={8}>Cinema title</Label>
          <Col sm={10}>
            <Controller
              as={Input}
              control={control}
              type="text"
              name="cinemaName"
              id="cinemaName"
              rules={{ required: true }}
            />
            {errors.cinemaName && 'This field is required'}
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="description" sm={8}>Description</Label>
          <Col sm={10}>
            <Controller
              as={Input}
              control={control}
              type="text"
              name="description"
              id="description"
              rules={{ required: true }}
            />
            {errors.description && 'This field is required'}
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="address" sm={8}>Address</Label>
          <Col sm={10}>
            <Controller
              as={Input}
              control={control}
              address="address"
              name="address"
              id="address"
              rules={{ required: true }}
            />
            {errors.address && 'This field is required'}
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="type" sm={8}>Additional services</Label>
          <Col sm={10} className="mx-3">
            <Input type="checkbox" id="checkbox2" />{' '}
            popcorn
          </Col>
          <Col sm={10} className="mx-3">
            <Input type="checkbox" id="checkbox2" />{' '}
            drinks
          </Col>
        </FormGroup>
      </FormGroup>
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

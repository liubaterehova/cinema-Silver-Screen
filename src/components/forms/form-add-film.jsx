import React from 'react';
import {
  Form, Input, Label, FormGroup, InputGroupAddon, Col, InputGroupText, InputGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

export const FormAddFilm = ({
  handleSubmit, errors, control,
}) => {
  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup row>
        <Label for="filmName" sm={4}>Movie title</Label>
        <Col sm={10}>
          <Controller
            as={Input}
            control={control}
            type="text"
            name="filmName"
            id="filmName"
            rules={{ required: true }}
          />
          {errors.filmName && 'This field is required'}
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="duration" sm={4}>Movie duration</Label>
        <Col sm={10}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>minutes</InputGroupText>
            </InputGroupAddon>
            <Controller
              as={Input}
              control={control}
              type="number"
              name="phoneNumber"
              placeholder="duration"
              rules={{ required: true }}
            />
            {errors.phoneNumber && 'This field is required'}
          </InputGroup>
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="description" sm={4}>Description</Label>
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
        <Label for="type" sm={4}>film genre</Label>
        <Col sm={10}>
          <Controller
            as={Input}
            control={control}
            type="type"
            name="genre"
            id="genre"
            rules={{ required: true }}
          />
          {errors.genre && 'This field is required'}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={4}>File</Label>
        <Col sm={10}>
          <Controller
            as={Input}
            control={control}
            type="file"
            name="file"
            id="exampleFile"
            rules={{ required: true }}
          />
          {errors.file && 'This field is required'}
        </Col>
      </FormGroup>
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

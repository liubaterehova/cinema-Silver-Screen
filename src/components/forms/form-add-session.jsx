import React from 'react';
import {
  Form, Input, Label, FormGroup, InputGroupAddon, Col, InputGroupText, InputGroup,
} from 'reactstrap';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import { CINEMAS, FILMS } from '../../constants';

export const FormAddSession = ({
  handleSubmit, errors, control,
}) => {
  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup row>
        <Label for="selectCinema" sm={2}>Cinema</Label>
        <Col sm={10}>
          <Controller
            as={Input}
            control={control}
            type="select"
            name="selectCinema"
            id="cinemaSelect"
            rules={{ required: true }}
          >
            { Object.values(CINEMAS).map(cinema => <option key={cinema.id}>{cinema.filterName}</option>)}
          </Controller>
          {errors.selectCinema && 'This field is required'}
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="selectFilm" sm={2}>Film</Label>
        <Col sm={10}>
          <Controller
            as={Input}
            control={control}
            type="select"
            name="selectFilm"
            id="filmSelect"
            rules={{ required: true }}
          >
            { FILMS.map(film => <option key={film.id}>{film.name}</option>)}
          </Controller>
          {errors.selectFilm && 'This field is required'}
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="time" sm={2}>Time</Label>
        <Col sm={10}>
          <Controller
            as={Input}
            control={control}
            type="time"
            name="time"
            id="time"
            placeholder="time placeholder"
            rules={{ required: true }}
          />
          {errors.time && 'This field is required'}
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="price" sm={2}>price</Label>
        <Col sm={10}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <Controller
              as={Input}
              control={control}
              placeholder="price"
              type="number"
              name="number"
              rules={{ required: true }}
            />
            {errors.number && 'This field is required'}
          </InputGroup>
        </Col>
      </FormGroup>
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

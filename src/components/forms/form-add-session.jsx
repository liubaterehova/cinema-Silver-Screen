import React from 'react';
import {
  Form, Input, Label, FormGroup, InputGroupAddon, Col, InputGroupText, InputGroup,
} from 'reactstrap';

import { CINEMAS, FILMS } from '../../constants';

export const FormAddSession = () => (
  <Form>
    <FormGroup row>
      <Label for="selectCinema" sm={2}>Cinema</Label>
      <Col sm={10}>
        <Input type="select" name="selectCinema" id="cinemaSelect">
          { Object.values(CINEMAS).map(cinema => <option key={cinema.id}>{cinema.filterName}</option>)}
        </Input>
      </Col>
    </FormGroup>
    <br />
    <FormGroup row>
      <Label for="selectFilm" sm={2}>Film</Label>
      <Col sm={10}>
        <Input type="select" name="selectFilm" id="filmSelect">
          { FILMS.map(film => <option key={film.id}>{film.name}</option>)}
        </Input>
      </Col>
    </FormGroup>
    <br />
    <FormGroup row>
      <Label for="time" sm={2}>Time</Label>
      <Col sm={10}>
        <Input
          type="time"
          name="time"
          id="time"
          placeholder="time placeholder"
        />
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
          <Input placeholder="price" type="number" />
        </InputGroup>
      </Col>
    </FormGroup>
  </Form>
);

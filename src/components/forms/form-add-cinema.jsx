import React from 'react';
import {
  Form, Input, Label, FormGroup, Col,
} from 'reactstrap';

const elementsOfFormAddCinema = [
  {
    id: 1,
    name: 'nameCinema',
    label: 'Название кинотеатра',
    placeholder: 'cimena',
    type: 'text',
  },
  {
    id: 8,
    name: 'address',
    label: 'Адрес',
    placeholder: 'address',
    type: 'text',
  },
  {
    id: 3,
    name: 'popcorn',
    label: 'Попкорн',
    type: 'checkbox',
  },
  {
    id: 3,
    name: 'drinks',
    label: 'Напитки',
    type: 'checkbox',
  },
];

export const FormAddCinema = () => (
  <Form>
    <FormGroup row>
      <Label for="cinemaName" sm={8}>Cinema title</Label>
      <Col sm={10}>
        <Input type="text" name="cinemaName" id="cinemaName" />
      </Col>
    </FormGroup>
    <br />
    <FormGroup row>
      <Label for="description" sm={8}>Description</Label>
      <Col sm={10}>
        <Input type="text" name="description" id="description" />
      </Col>
    </FormGroup>
    <br />
    <FormGroup row>
      <Label for="address" sm={8}>Address</Label>
      <Col sm={10}>
        <Input address="address" name="address" id="address" />
      </Col>
    </FormGroup>
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
  </Form>
);

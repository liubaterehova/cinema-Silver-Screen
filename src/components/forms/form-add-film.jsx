import React from 'react';
import {
  Form, Input, Label, FormGroup, InputGroupAddon, Col, InputGroupText, InputGroup,
} from 'reactstrap';

export const FormAddFilm = () => (
  <Form>
    <FormGroup row>
      <Label for="filmName" sm={4}>Movie title</Label>
      <Col sm={10}>
        <Input type="text" name="filmName" id="filmName" />
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
          <Input placeholder="duration" type="number" />
        </InputGroup>
      </Col>
    </FormGroup>
    <br />
    <FormGroup row>
      <Label for="description" sm={4}>Description</Label>
      <Col sm={10}>
        <Input type="text" name="description" id="description" />
      </Col>
    </FormGroup>
    <br />
    <FormGroup row>
      <Label for="type" sm={4}>film genre</Label>
      <Col sm={10}>
        <Input type="type" name="type" id="type" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleFile" sm={4}>File</Label>
      <Col sm={10}>
        <Input type="file" name="file" id="exampleFile" />
      </Col>
    </FormGroup>
  </Form>
);

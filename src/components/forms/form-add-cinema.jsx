import React from 'react';
import {
  Form, Input, Label, FormGroup, Col,
} from 'reactstrap';
import { useForm } from 'react-hook-form';

export const FormAddCinema = () => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormGroup row>
          <Label for="cinemaName" sm={8}>Cinema title</Label>
          <Col sm={10}>
            <Input type="text" name="cinemaName" id="cinemaName" ref={register({ required })}/>
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="description" sm={8}>Description</Label>
          <Col sm={10}>
            <Input type="text" name="description" id="description" ref={register({ required })}/>
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="address" sm={8}>Address</Label>
          <Col sm={10}>
            <Input address="address" name="address" id="address" ref={register({ required })}/>
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
      </FormGroup>
    </Form>
  );
};

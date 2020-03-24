import React from 'react';
import { Form, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { FormElement } from './form-element';

export const CommonForm = ({
  onSubmit, errors, control, elements,
}) => (
  <Form onSubmit={onSubmit}>
    {elements.map((formElement) => (
      <React.Fragment key={formElement.id}>
        <Col sm={10}>
          <FormElement row {...formElement} control={control} error={errors[formElement.name]} />
        </Col>
        <br />
      </React.Fragment>
    ))}
  </Form>
);

CommonForm.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
  control: PropTypes.shape({}).isRequired,
};

CommonForm.defaultProps = {
  errors: {},
};

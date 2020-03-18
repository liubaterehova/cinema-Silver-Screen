import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Label, Input,
} from 'reactstrap';

export const FormElementCheckbox = (({
  name, text,
}) => (
  <FormGroup check>
    <Label check for={name}>
      <Input
        type="checkbox"
      />
      {text}
    </Label>
  </FormGroup>
)
);

FormElementCheckbox.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


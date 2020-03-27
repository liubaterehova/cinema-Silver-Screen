import React from 'react';
import { Form, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import { FormElement } from './form-element';

const elementsOfSignInForm = [
  {
    id: 0,
    name: 'signInEmail',
    label: 'Email',
    placeholder: 'email',
    type: 'email',
    rulesValidation: { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ },
    errorMessage: 'Please enter correct email',
  },
  {
    id: 1,
    name: 'signInPassword',
    label: 'Password',
    placeholder: 'password',
    type: 'password',
    rulesValidation: { required: true },
    errorMessage: 'Please enter password',
  },
];

export const SignInForm = ({
  errors, onSubmit, register, control,
}) => (
  <Form onSubmit={onSubmit}>
    {elementsOfSignInForm.map(({
      id, name, label, placeholder, type, rulesValidation, errorMessage,
    }) => (
      <FormElement
        as={Input}
        id={id}
        rules={rulesValidation}
        key={id}
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
        error={errors[name]}
        register={register}
        control={control}
        errorMessage={errorMessage}
      />
    ))}
  </Form>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({ signInEmail: PropTypes.shape({}), signUpEmail: PropTypes.shape({}) }).isRequired,
  register: PropTypes.func.isRequired,
  control: PropTypes.shape({}).isRequired,
};

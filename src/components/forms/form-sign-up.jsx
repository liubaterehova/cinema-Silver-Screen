import React from 'react';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';
import { FormElement } from './form-element';

export const FormSignUp = ({
  errors, onSubmit, register, control, watch,
}) => {
  const makeElementsOfFormSignUp = () => [
    {
      id: 0,
      name: 'name',
      label: 'Your name',
      placeholder: 'name',
      type: 'text',
      rulesValidation: { required: true },
      errorMessage: 'Please enter name',
    },
    {
      id: 1,
      name: 'number',
      label: 'Phone number',
      placeholder: 'number',
      type: 'number',
      rulesValidation: { required: true, minLength: 8 },
      errorMessage: 'Please enter number',
    },
    {
      id: 2,
      name: 'signUpEmail',
      label: 'Email',
      placeholder: 'email',
      type: 'email',
      rulesValidation: { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ },
      errorMessage: 'Please enter correct email',
    },
    {
      id: 3,
      name: 'signUpPassword',
      label: 'Password',
      placeholder: 'password',
      type: 'password',
      rulesValidation: { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/ },
      errorMessage: 'Please enter password that contain at least 1 lowercase, 1 uppercase, 1 numeric, minimum  8 symbols',
    },
    {
      id: 4,
      name: 'signUpPasswordRepeat',
      label: 'Repeat password',
      placeholder: 'repeat password',
      type: 'password',
      rulesValidation: {
        required: true,
        validate: value => value === watch('signUpPassword'),
      },
      errorMessage: 'Please repeat password',
    },
  ];

  return (
    <Form onSubmit={onSubmit}>
      {makeElementsOfFormSignUp(watch).map(({
        id, name, label, placeholder, type, errorMessage, rulesValidation,
      }) => (
        <FormElement
          id={id}
          rules={rulesValidation}
          key={id}
          name={name}
          label={label}
          placeholder={placeholder}
          type={type}
          error={errors[name]}
          errorMessage={errorMessage}
          register={register}
          control={control}
          watch={watch}
        />
      ))}
    </Form>
  );
};

FormSignUp.propTypes = {
  watch: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  control: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({ signInEmail: PropTypes.shape({}), signUpEmail: PropTypes.shape({}) }).isRequired,
};

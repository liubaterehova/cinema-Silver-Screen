import React from 'react';
import { Form, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import { FormElement } from './form-element';
import { useUser } from '../../hooks/use-user';

const elementsOfSignInForm = [
  {
    id: 0,
    name: 'userName',
    label: 'Username',
    placeholder: 'username',
    type: 'text',
    rulesValidation: { required: true },
    errorMessage: 'Please enter userName',
  },
  {
    id: 1,
    name: 'password',
    label: 'Password',
    placeholder: 'password',
    type: 'password',
    rulesValidation: { required: true },
    errorMessage: 'Please enter password',
  },
];

export const SignInForm = ({
  errors, register, control,
}) => {
  const { user: { error } } = useUser();

  return (
    <Form>
      {elementsOfSignInForm.map(({
        id, name, label, placeholder, type, rulesValidation, errorMessage,
      }) => {
        const invalid = error && error.data.error === name;

        return (
          <FormElement
            as={Input}
            id={id}
            rules={rulesValidation}
            key={id}
            name={name}
            label={label}
            placeholder={placeholder}
            type={type}
            error={errors[name] || invalid}
            register={register}
            control={control}
            errorMessage={invalid ? 'Login or password is not correct' : errorMessage}
          />
        );
      })}
    </Form>
  );
};

SignInForm.propTypes = {
  errors: PropTypes.shape({ signInEmail: PropTypes.shape({}), signUpEmail: PropTypes.shape({}) }).isRequired,
  register: PropTypes.func.isRequired,
  control: PropTypes.shape({}).isRequired,
};

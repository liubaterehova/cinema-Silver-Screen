import React from 'react';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FormElement } from './form-element';

const elementsOfFormSignUp = [
  {
    id: 0,
    name: 'name',
    label: 'Ваше имя',
    placeholder: 'имя',
    type: 'text',
    rulesValidation: { required: true },
    errorMessage: 'Please enter name',
  },
  {
    id: 1,
    name: 'number',
    label: 'Номер телефона',
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
    label: 'Пароль',
    placeholder: 'password',
    type: 'password',
    rulesValidation: { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/ },
    errorMessage: 'Please enter password that contain at least 1 lowercase, 1 uppercase, 1 numeric, minimum  8 symbols',
  },
  {
    id: 4,
    name: 'signUpPasswordRepeat',
    label: 'Повторите пароль',
    placeholder: 'password',
    type: 'password',
    rulesValidation: false,
    errorMessage: 'Please repeat password',
  },
];

export const FormSignUp = ({
  errors, onSubmit, register, control,
}) => {
  const { watch } = useForm();
  const validationForPassword = {
    validate: value => {
      // eslint-disable-next-line no-console
      console.log(value);

      return value === watch('signUpPassword');
    },
  };

  return (
    <Form onSubmit={onSubmit}>
      {elementsOfFormSignUp.map(({
        id, name, label, placeholder, type, errorMessage, rulesValidation,
      }) => (
        <FormElement
          id={id}
          rules={rulesValidation || validationForPassword}
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
  register: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.any.isRequired,
  // errors: PropTypes.shape({ signInEmail: PropTypes.object, signUpEmail: PropTypes.object }).isRequired,
};


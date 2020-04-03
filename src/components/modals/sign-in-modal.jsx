import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { SignInForm } from '../forms/sign-in-form';

export const SignInModal = ({
  isOpen, toggle, onClickSignUp, onClose, onSignIn,
}) => {
  const {
    register, errors, control, formState, watch,
  } = useForm({ mode: 'onChange' });

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="Sign in"
      toggleInHeader={onClose}
      primaryButton="Sign in"
      primaryButtonHandleClick={() => { onSignIn(watch()); }}
      secondaryButton="Sign up"
      isPrimaryButtonDisable={!(formState.touched && formState.isValid)}
      secondaryButtonHandleClick={onClickSignUp}
    >
      <SignInForm
        register={register}
        errors={errors}
        control={control}
      />
    </ModalWindow>
  );
};

SignInModal.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

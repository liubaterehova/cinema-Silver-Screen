import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { FormAddSession } from '../forms/form-add-session';

export const ModalAddSession = ({
  isOpen, toggle, onClose,
}) => {
  const {
    register, handleSubmit, watch, errors, control, rules, formState,
  } = useForm({ mode: 'onBlur' });

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="SESSION"
      toggleInHeader={onClose}
      primaryButton="add"
      primaryButtonHandleClick={onClose}
      secondaryButton="close"
      isPrimaryButtonDisable={!(formState.touched && formState.isValid)}
      secondaryButtonHandleClick={onClose}
    >
      <FormAddSession
        rules={rules}
        control={control}
        register={register}
        handleSubmit={handleSubmit}
        watch={watch}
        errors={errors}
      />
    </ModalWindow>
  );
};

ModalAddSession.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

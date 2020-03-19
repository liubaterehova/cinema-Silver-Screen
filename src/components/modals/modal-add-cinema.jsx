import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { FormAddCinema } from '../forms/form-add-cinema';

export const ModalAddCinema = ({
  isOpen, toggle, onClose,
}) => {
  const {
    register, handleSubmit, watch, errors, control, rules, formState,
  } = useForm({ mode: 'onBlur' });

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="CINEMA"
      toggleInHeader={onClose}
      primaryButton="add"
      primaryButtonHandleClick={onClose}
      secondaryButton="close"
      isPrimaryButtonDisable={!(formState.touched && formState.isValid)}
      secondaryButtonHandleClick={onClose}
    >
      <FormAddCinema
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

ModalAddCinema.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

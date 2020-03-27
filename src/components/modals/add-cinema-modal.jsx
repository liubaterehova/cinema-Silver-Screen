import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { CommonForm } from '../forms/common-form';

const addCinemaFormElements = [
  {
    id: 1,
    as: Input,
    type: 'text',
    name: 'cinemaName',
    label: 'Cinema title',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 2,
    as: Input,
    type: 'text',
    name: 'description',
    label: 'Description',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 3,
    as: Input,
    type: 'text',
    name: 'address',
    label: 'Address',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 4,
    as: Input,
    type: 'checkbox',
    name: 'popcorn',
    label: 'Popcorn',
  },
  {
    id: 5,
    as: Input,
    type: 'checkbox',
    name: 'drinks',
    label: 'Drinks',
  },
];

export const AddCinemaModal = ({
  isOpen, toggle, onClose,
}) => {
  const {
    handleSubmit, errors, control, formState,
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
      <CommonForm
        control={control}
        onSubmit={handleSubmit(() => {})}
        errors={errors}
        elements={addCinemaFormElements}
      />
    </ModalWindow>
  );
};

AddCinemaModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

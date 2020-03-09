import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import { useForm } from 'react-hook-form';
import { FormSignIn } from '../forms/form-sign-in';

export const ModalWindow = ({
  isOpen, toggleInModal, header, toggleInHeader, buttonLeft,
  buttonRight, buttonLeftHandleClick, buttonRightHandleClick,
}) => {
  const { register, errors } = useForm({ mode: 'onBlur' });

  return (
    <Modal isOpen={isOpen} toggle={toggleInModal}>
      <ModalHeader toggle={toggleInHeader}>{header}</ModalHeader>
      <ModalBody>
        <FormSignIn register={register} errors={errors} />
        {/* {children(register, required, errors)} */}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={buttonLeftHandleClick}>{buttonLeft}</Button>
        <Button color="secondary" onClick={buttonRightHandleClick}>{buttonRight}</Button>
      </ModalFooter>
    </Modal>
  );
};

ModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleInModal: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  toggleInHeader: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonLeft: PropTypes.string.isRequired,
  buttonRight: PropTypes.string.isRequired,
  buttonLeftHandleClick: PropTypes.func.isRequired,
  buttonRightHandleClick: PropTypes.func.isRequired,
};


import React from 'react';
import PropTypes from 'prop-types';

import { ModalWindow } from './modals';
import { FormAddServices } from '../forms/form-add-services';

export const ModalAddServices = ({
  isOpen, toggle, onClickSignUp, onClose,
}) => (
  <ModalWindow
    isOpen={isOpen}
    toggleInModal={toggle}
    header="СЕРВИСЫ"
    toggleInHeader={onClose}
    buttonLeft="закрыть"
    buttonLeftHandleClick={onClose}
    buttonRight="добавить"
    buttonRightHandleClick={onClickSignUp}
  >
    <FormAddServices />
  </ModalWindow>
);

ModalAddServices.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

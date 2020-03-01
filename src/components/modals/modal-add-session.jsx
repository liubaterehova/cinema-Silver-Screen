import React from 'react';
import PropTypes from 'prop-types';

import { ModalWindow } from './modals';
import { FormAddSession } from '../forms/form-add-session';

export const ModalAddSession = ({
  isOpen, toggle, onClickSignUp, onClose,
}) => (
  <ModalWindow
    isOpen={isOpen}
    toggleInModal={toggle}
    header="СЕАНС"
    toggleInHeader={onClose}
    buttonLeft="закрыть"
    buttonLeftHandleClick={onClose}
    buttonRight="добавить"
    buttonRightHandleClick={onClickSignUp}
  >
    <FormAddSession />
  </ModalWindow>
);

ModalAddSession.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

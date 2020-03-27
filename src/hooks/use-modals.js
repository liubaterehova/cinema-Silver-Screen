import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
  openModal, toggleModal, closeAllModals,
} from '../actions/modals';

export const useModals = (modalId) => {
  const isModalOpen = useSelector(({ modals: { [modalId]: isOpen } }) => isOpen || false);

  const dispatch = useDispatch();

  const dispatchOpenModal = useCallback(() => {
    dispatch(closeAllModals());
    dispatch(openModal({ modalId }));
  }, [dispatch, modalId]);

  const dispatchToggleModal = useCallback(() => dispatch(toggleModal({ modalId })), [dispatch, modalId]);
  const closeAllModalWindows = useCallback(() => dispatch(closeAllModals()), [dispatch]);

  return {
    isModalOpen,
    dispatchOpenModal,
    dispatchToggleModal,
    closeAllModalWindows,
  };
};

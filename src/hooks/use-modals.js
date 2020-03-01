import { useSelector, useDispatch } from 'react-redux';
import {
  openModal, toggleModal, closeAllModals,
} from '../actions/modals';

export const useModals = (modalId) => {
  const isModalOpen = useSelector(({ modals: { [modalId]: isOpen } }) => isOpen || false);

  const dispatch = useDispatch();

  const dispatchOpenModal = () => {
    dispatch(closeAllModals());
    dispatch(openModal({ modalId }));
  };
  const dispatchToggleModal = () => dispatch(toggleModal({ modalId }));

  const closeAllModalWindows = () => dispatch(closeAllModals());

  return {
    isModalOpen,
    dispatchOpenModal,
    dispatchToggleModal,
    closeAllModalWindows,
  };
};

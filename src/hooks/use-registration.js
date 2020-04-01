import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { createUser } from '../actions/create-user';

export const useRegistration = () => {
  const dispatch = useDispatch();

  const dispatchCreateUser = useCallback((informationRegistration) => {
    dispatch(createUser({ informationRegistration }));
  }, [dispatch]);

  return { dispatchCreateUser };
};

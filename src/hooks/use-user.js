import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  logOut, cleanError, createUserRequest, logIn,
} from '../actions/users';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user: u }) => u);

  const dispatchLogOff = useCallback(() => dispatch(logOut()), [dispatch]);
  const dispatchCleanError = useCallback(() => dispatch(cleanError()), [dispatch]);
  const dispatchCreateUser = useCallback((informationRegistration) => {
    dispatch(createUserRequest({ informationRegistration }));
  }, [dispatch]);
  const dispatchLogIn = useCallback((informationLogIn) => {
    dispatch(logIn({ informationLogIn }));
  }, [dispatch]);

  return {
    user, dispatchLogOff, dispatchCleanError, dispatchCreateUser, dispatchLogIn,
  };
};

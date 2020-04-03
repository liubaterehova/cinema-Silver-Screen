import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  logOff, cleanError, createUser, logIn,
} from '../actions/users';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user: u }) => u);

  const dispatchLogOff = useCallback(() => dispatch(logOff()), [dispatch]);
  const dispatchCleanError = useCallback(() => dispatch(cleanError()), [dispatch]);
  const dispatchCreateUser = useCallback((informationRegistration) => {
    dispatch(createUser({ informationRegistration }));
  }, [dispatch]);
  const dispatchLogIn = useCallback((informationLogIn) => {
    dispatch(logIn({ informationLogIn }));
  }, [dispatch]);

  return {
    user, dispatchLogOff, dispatchCleanError, dispatchCreateUser, dispatchLogIn,
  };
};

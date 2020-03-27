import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSession } from '../actions/session';

export const useSession = (sessionId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession({ sessionId }));
  }, [dispatch, sessionId]);

  return useSelector(({ session }) => session);
};

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadSession } from '../actions/session';

export const useSession = (sessionId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSession({ sessionId }));
  }, [dispatch, sessionId]);

  return useSelector(({ session }) => session);
};

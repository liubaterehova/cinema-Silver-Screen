import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadSessionRequest } from '../actions/session';

export const useSession = (sessionId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSessionRequest({ sessionId }));
  }, [dispatch, sessionId]);

  return useSelector(({ session }) => session);
};

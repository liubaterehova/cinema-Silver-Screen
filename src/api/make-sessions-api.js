import axios from 'axios';

const http = axios.create();

const BASE_SESSIONS_URL = 'http://localhost:3010/api/v1/sessions';
const BASE_SESSION_URL = 'http://localhost:3010/api/v1/session';

export const makeSessionsApi = () => ({
  getSessions: async (filmId) => http.get(`${BASE_SESSIONS_URL}/${filmId}`, {
    headers: { Origin: 'http://localhost:8080' },
  }),
  getSession: async (sessionId) => http.get(`${BASE_SESSION_URL}/${sessionId}`, {
    headers: { Origin: 'http://localhost:8080' },
  }),
});

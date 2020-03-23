import axios from 'axios';

const http = axios.create();

const BASE_CINEMAS_URL = 'http://localhost:3010/api/v1/cinemas';

export const makeCinemasApi = () => ({
  getCinemas: async () => http.get(BASE_CINEMAS_URL, {
    headers: { Origin: 'http://localhost:8080' },
  }),
});

import axios from 'axios';

const http = axios.create();

const BASE_SEATS_URL = 'http://localhost:3010/api/v1/seats';

export const makeSeatsApi = () => ({
  postSeats: async (seats) => http.post(BASE_SEATS_URL, {
    headers: {
      Origin: 'http://localhost:8080',
      Accept: 'appliccation/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      seats,
    }),
  }),
});

import axios from 'axios';

import { CONFIG } from '../config';

export const http = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    Origin: 'http://localhost:8080/api/v1/',
    Accept: 'appliccation/json',
    'Content-Type': 'application/json',
  },
});

import axios from 'axios';

import { CONFIG } from '../config';

const BASE_CINEMAS_URL = 'api/v1/cinemas';
const BASE_FILMS_URL = 'api/v1/films';
const BASE_SEATS_URL = 'api/v1/seats';
const BASE_SESSIONS_URL = 'api/v1/sessions';
const BASE_SESSION_URL = 'api/v1/session';

export class Api {
  constructor(address) {
    this.address = address;
  }

  http = axios.create();

  getFilms = () => this.http.get(`${this.address}/${BASE_FILMS_URL}`);

  getFilm = (filmId) => this.http.get(`${this.address}/${BASE_FILMS_URL}/${filmId}`);

  getCinemas = () => this.http.get(`${this.address}/${BASE_CINEMAS_URL}`);

  postSeats = (seats) => this.http.post(`${this.address}/${BASE_SEATS_URL}`,
    {
      headers: {
        Accept: 'appliccation/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seats }),
    });

  getSessions = (filmId) => this.http.get(`${this.address}/${BASE_SESSIONS_URL}/${filmId}`);

  getSession = (sessionId) => this.http.get(`${this.address}/${BASE_SESSION_URL}/${sessionId}`);
}

export const api = new Api(CONFIG.backendUrl);

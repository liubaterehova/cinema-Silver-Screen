import axios from 'axios';

const http = axios.create();

const BASE_FILMS_URL = '/api/v1/films';

export const makeFilmsApi = () => ({
  getFilms: async () => http.get(BASE_FILMS_URL),
  getFilm: async (filmId) => http.get(`${BASE_FILMS_URL}/${filmId}`),
});

import React from 'react';

import { Header } from '../../components/header/header';
import { FiltersFilms } from '../../components/filters-film/filters-film';
import { Films } from '../../components/films/films';
import { Information } from '../../components/information-silver-screen/information-silver-screen';

import './home.scss';

export const Home = () => (
  <div className="container">
    <Header />
    <div className="main-content">
      <FiltersFilms />
      <Films />
      <Information />
    </div>
  </div>
);


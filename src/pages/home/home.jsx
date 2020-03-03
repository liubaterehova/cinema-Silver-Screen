import React from 'react';

import { Header } from '../../components/header/header';
import { FilterFilms } from '../../components/filter-film/filter-film';
import { Films } from '../../components/films/films';
import { Information } from '../../components/information-silver-screen/information-silver-screen';

import './home.scss';

export const Home = () => (
  <div className="container">
    <Header />
    <div className="main-content">
      <FilterFilms />
      <Films />
      <Information />
    </div>
  </div>
);


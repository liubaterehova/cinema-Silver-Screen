import React from 'react';

import { Header } from '../../components/header/header';
import { MenuFilters } from '../../components/menu-filters/menu-filters';
import { Films } from '../../components/films/films';
import { Information } from '../../components/information-silver-screen/information-silver-screen';

import './home.scss';

export const Home = () => (
  <div className="container">
    <Header />
    <div className="main-content">
      <MenuFilters />
      <Films />
      <Information />
    </div>
  </div>
);


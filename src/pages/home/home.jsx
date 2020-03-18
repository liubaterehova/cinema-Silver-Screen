import React from 'react';

import { Header } from '../../components/header/header';
import { FiltersMenu } from '../../components/filters-menu/filters-menu';
import { Films } from '../../components/films/films';
import { Information } from '../../components/information-silver-screen/information-silver-screen';

import './home.scss';

export const Home = () => (
  <div className="container">
    <Header />
    <div className="main-content">
      <FiltersMenu />
      <Films />
      <Information />
    </div>
  </div>
);


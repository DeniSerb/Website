import React, { Component } from 'react';

import HomeHeader           from '../components/header';
import Services             from '../components/services';
import Price                from '../components/price';
import Features             from '../components/features';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Services />
        <Price />
        <Features />
      </div>
    );
  }
}

export default HomePage;

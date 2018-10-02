import React, { Component } from 'react';

import HomeHeader           from '../components/header';
import Services             from '../components/services';
import Price                from '../components/price';
import Features             from '../components/features';
import ContactForm          from '../components/contact-form';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Services />
        <Price />
        <Features />
        <ContactForm />
      </div>
    );
  }
}

export default HomePage;

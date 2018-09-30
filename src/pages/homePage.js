import React, { Component } from 'react';
import ScrollUpButton       from "react-scroll-up-button";

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
        <ScrollUpButton
          style={{width: 40}}
          AnimationDuration={2000}
        />
      </div>
    );
  }
}

export default HomePage;

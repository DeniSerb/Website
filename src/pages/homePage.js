import React, { Component } from 'react';
import HomeHeader           from '../components/header'
import Services             from '../components/services'
import Features             from '../components/features'
import ContactForm          from '../components/contact-form'

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Services />
        <Features />
        <ContactForm />
      </div>
    );
  }
}

export default HomePage;

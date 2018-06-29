import React, { Component } from 'react';
import Header               from './components/headerComponent/header.js';
import Footer               from './components/footerComponent/footer.js';
import HomePage             from './components/pages/homePage.js';
import {
  BrowserRouter as Router,
  Route,
  Link
}                           from 'react-router-dom';

import Products from './components/pages/products.js'

import                           './Assets/css/default.min.css';





class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
        <Header />

          <Route exact path='/'         component={HomePage}/>
          <Route exact path='/Products' component={Products}/>

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;

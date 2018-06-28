import React, { Component } from 'react';

import './Assets/css/default.min.css';
import Header from './components/headerComponent/header.js';
import Footer from './components/footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Footer />

      </div>
    );
  }
}

export default App;

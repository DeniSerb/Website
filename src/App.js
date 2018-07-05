import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}                           from 'react-router-dom';

//Pages

import Header               from './components/headerComponent/header.js';
import Footer               from './components/footerComponent/footer.js';
import HomePage             from './components/pages/homePage.js';
import AboutCompany         from './components/pages/aboutCompany.js'
import WhyPenoizol          from './components/pages/whyPenoizol.js'
import SphereOfApplication  from './components/pages/sphereOfApplication.js'
import Price                from './components/pages/price.js'
import Contacts             from './components/pages/contacts.js'

//Style

import                           './Assets/css/default.min.css';





class App extends Component {

  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 3000))
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 3000)
      }
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
        
        <Header />

          <Route exact path='/'                    component={HomePage}/>
          <Route exact path='/AboutCompany'        component={AboutCompany}/>
          <Route exact path='/WhyPenoizol'         component={WhyPenoizol}/>
          <Route exact path='/SphereOfApplication' component={SphereOfApplication}/>
          <Route exact path='/Price'               component={Price}/>
          <Route exact path='/Contacts'            component={Contacts}/>

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;

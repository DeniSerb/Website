import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
import NotFound             from './components/pages/notFound.js'

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
            <Switch>
              <Route exact path='/'              component={HomePage}/>
              <Route path='/AboutCompany'        component={AboutCompany}/>
              <Route path='/WhyPenoizol'         component={WhyPenoizol}/>
              <Route path='/SphereOfApplication' component={SphereOfApplication}/>
              <Route path='/Price'               component={Price}/>
              <Route path='/Contacts'            component={Contacts}/>
              <Route                             component={NotFound}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

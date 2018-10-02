import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                           from 'react-router-dom';

import Header               from './layouts/header';
import HomePage             from './pages/homePage';
import NotFound             from './pages/notFound';
import EnergyEfficiency     from './pages/energyEfficiency';
import NoiseCanseling       from './pages/noiseCanseling';
import FireProtection       from './pages/fireProtection';
import SphereOfApplication  from './pages/sphereOfApplication';
import                           './assets/css/index.min.css';

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
              <Route exact path='/'                component={HomePage}/>
              <Route path='/EnergyEfficiency'      component={EnergyEfficiency}/>
              <Route path='/NoiseCanseling'        component={NoiseCanseling}/>
              <Route path='/FireProtection'        component={FireProtection}/>
              <Route path='/SphereOfApplication'   component={SphereOfApplication}/>
              <Route                               component={NotFound}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

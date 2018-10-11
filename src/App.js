import React, { Component } from 'react';
import ScrollUpButton       from "react-scroll-up-button";
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
import FloorInsulation      from './pages/floorInsulation';
import WallInsulation       from './pages/wallInsulation';
import RoofInsulation       from './pages/roofInsulation';
import WarehouseInsulation  from './pages/warehouseInsulation';
import Footer               from './components/footer';
import ScrollToTop          from './scrollToTop'
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
      <div>
        <ScrollUpButton
          style={{width: 40}}
          AnimationDuration={1500}
        />
        <Router>
          <div className="App">
            <Header />
              <Switch>
                <ScrollToTop>
                  <Route exact path='/'                component={HomePage}/>
                  <Route path='/EnergyEfficiency'      component={EnergyEfficiency}/>
                  <Route path='/NoiseCanseling'        component={NoiseCanseling}/>
                  <Route path='/FireProtection'        component={FireProtection}/>
                  <Route path='/SphereOfApplication'   component={SphereOfApplication}/>
                  <Route path='/FloorInsulation'       component={FloorInsulation}/>
                  <Route path='/WallInsulation'        component={WallInsulation}/>
                  <Route path='/RoofInsulation'        component={RoofInsulation}/>
                  <Route path='/WarehouseInsulation'   component={WarehouseInsulation}/>
                </ScrollToTop>
                <Route exact                           component={NotFound}/>
              </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;

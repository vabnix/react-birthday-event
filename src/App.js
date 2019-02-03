import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Header from './components/layouts/Header';
import Featured from './components/featured/Index';
import VenueInfo from './components/venue-info/Index';
import Highlight from './components/highlights/Index';
import Pricing from './components/pricing/Index';
import Location from './components/location/Index';
import Footer from './components/layouts/Footer';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Featured />
      <Element name="venue-info">
          <VenueInfo />
      </Element>
      <Element name="highlight">
          <Highlight />
      </Element>
      <Element name="pricing">
           <Pricing />
      </Element>
      <Element name="location">
          <Location />
      </Element>
        <Footer />
      </div>
    );
  }
}

export default App;

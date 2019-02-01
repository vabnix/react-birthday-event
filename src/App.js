import React, { Component } from 'react';
import Header from './components/layouts/Header';
import Featured from './components/featured/Index';
import VenueInfo from './components/venue-info/Index';
import Highlight from './components/highlights/Index';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Featured />
      <VenueInfo />
      <Highlight />
      </div>
    );
  }
}

export default App;

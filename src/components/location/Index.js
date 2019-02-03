/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'

class Location extends Component {
  render() {
    return (
      <div className="location_wrapper">
      <iframe 
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.281624781081!2d-97.00350058481644!3d32.837794280953744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e83cd5263cb9f%3A0xf777201cad10e4a!2sChuck+E.+Cheese&#39;s!5e0!3m2!1sen!2sus!4v1549160511485' 
          
          height="450" 
          frameBorder="0" 
          style={{
              border:0,
              width:'100%'
          }} 
          allowfullscreen></iframe>
          <div className="location_tag">
              <div>Location</div>
          </div>
      </div>
    )
  }
}

export default Location;

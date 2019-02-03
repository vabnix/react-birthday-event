import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

class Footer extends Component {
  render() {
    return (
      <footer className="bck_red">
        <Fade delay={500}>
           <div className="font_righteous footer_logo_venue">The Venue</div>
           <div className="footer_copyright">
             The Venue 2019. All Right Reserved 
           </div>
        </Fade>
      </footer>
    )
  }
}

export default Footer;

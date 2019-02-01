import React, { Component } from 'react'
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

class VenueInfo extends Component {
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper">
          <div className="vn_wrapper">
             <Zoom duration={500}>
             <div className="vn_item">
                <div className="vn_outer">
                   <div className="vn_inner">
                      <div className="vn_icon_square bck_red"></div>
                      <div className="vn_icon" style={{background: `url(${icon_calendar})`}}>
                      </div>
                      <div className="vn_title">
                         <span>Event Date & Time</span>
                      </div>
                      <div className="vn_desc">
                        5th March 2019 @7.00PM
                      </div>
                   </div>
                </div>
             </div>
             </Zoom>
             <Zoom delay={1000} duration={1000}>
             <div className="vn_item">
                <div className="vn_outer">
                   <div className="vn_inner">
                      <div className="vn_icon_square bck_yellow"></div>
                      <div className="vn_icon" style={{background: `url(${icon_location})`}}></div>
                      <div className="vn_title">
                         <span>Event Location</span>
                      </div>
                      <div className="vn_desc">
                      3903 W Airport Fwy, Irving, TX 75062
                      </div>
                   </div>
                </div>
             </div>
             </Zoom>
          </div>
        </div> 
      </div>
    )
  }
}

export default VenueInfo;
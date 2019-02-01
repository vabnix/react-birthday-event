import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

 const Discount = () => {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
           <Fade>
           <div className="discount_percentage">
           <span>30%</span>
           <span>OFF</span>
           </div>
           </Fade>
           <Slide right>
           <div className="discount_description">
            <h3>Purchase ticket before 20th FEB</h3>
            <p>Disney World tickets are available discounted year-round <br/>First Time <strong>Texas Resident</strong> Platinum Pass: $797.69 for all ages (3+), including tax ($154.43 off the regular price)</p>
           </div>
           </Slide>
        </div>
      </div>
    )
}

export default Discount;
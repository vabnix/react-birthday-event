import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Buttons from '../utiles/Buttons';

 class Discount extends Component {
    state = {
        discountStart:0,
        discountEnd:30
    }

    percentage(){
      if(this.state.discountStart < this.state.discountEnd){
        this.setState({
          discountStart: this.state.discountStart + 1
        })
      }
    }

    componentDidUpdate(){
      setTimeout(()=>{
        this.percentage()
      },30)
    }

   render(){
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
           <Fade
             onReveal={()=> this.percentage()}
           >
           <div className="discount_percentage">
           <span>{this.state.discountStart}%</span>
           <span>OFF</span>
           </div>
           </Fade>
           <Slide right>
           <div className="discount_description">
            <h3>Purchase ticket before 20th FEB</h3>
            <p>Disney World tickets are available discounted year-round <br/>First Time <strong>Texas Resident</strong> Platinum Pass: $797.69 for all ages (3+), including tax ($154.43 off the regular price)</p>
            <div><Buttons/></div>
           </div>

           </Slide>
        </div>
      </div>
    )
   }
}

export default Discount;
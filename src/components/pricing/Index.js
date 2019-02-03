import React, { Component } from 'react'
import Buttons from '../utiles/Buttons';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
      prices: [100,150,250],
      positions: ['Balcony', 'Medium', 'Star'],
      descriptions: ['It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'Contrary to popular belief, Lorem Ipsum is not simply random text.but the majority have suffered alteration in some form ', 'There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'],
    links: ['#','#','#'],
    delays:[500,0,500]
  }

  showBoxes = () => (
      this.state.prices.map((box, i)=>(
           <Zoom delay={this.state.delays[i]}>
                <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                        <p>{this.state.descriptions[i]}</p>
                        </div>
                        <div className="pricing_buttons"><Buttons/></div>
                </div>
            </div>
           </Zoom>
      )
  ))

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">
          {this.showBoxes()}
        </div>
        </div>
      </div>
    )
  }
}

export default Pricing

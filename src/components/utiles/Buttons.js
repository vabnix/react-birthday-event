import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import TicketIcon from '../../resources/images/icons/ticket.png';

class Buttons extends Component {
  render() {
    return (
      <Button href="#" variant="contained" size="small" style={{
          background:'orange',
          color:'white'
      }}>
         <img src={TicketIcon} className="iconImage" alt="icon_button" />
         Purchase Ticket
      </Button>
    )
  }
}

export default Buttons

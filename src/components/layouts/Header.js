import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar';

class Header extends Component {
  state = {
    sidebarOpen: false,
    showHeader: false
  }

  toggleDrawer = (value) => {
    this.setState({
      sidebarOpen: value
    })
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScoll);
  }

  handleScoll = () =>{
    if(window.scrollY > 0){
      this.setState({
        showHeader: true
      })
    }else if(window.scrollY === 0){
      this.setState({
        showHeader: false
      })
    }
  } 

  render() {
    return (
      <div>
        <AppBar 
            position="fixed"
            style={{
                backgroundColor: this.state.showHeader?'#2f2f2f':'transparent',
                padding: '10px 0px',
                boxShadow: 'none'
            }}>
         <Toolbar>
           <div className="header_logo">
             <div className="font_righteous header_logo_venue">The Venue</div>
             <div className="header_logo_title">Birthday Event</div>
           </div>
           <IconButton aria-label="Menu" color="inherit" onClick={()=>this.toggleDrawer(true)}>
             <MenuIcon></MenuIcon>
           </IconButton>
           <Sidebar open={this.state.sidebarOpen} onClose={(value)=> this.toggleDrawer(value)} />
         </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header

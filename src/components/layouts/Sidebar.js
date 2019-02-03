import React from 'react';
import { scroller } from 'react-scroll';
import { Drawer, List, ListItem, ListSubheader, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Sidebar = (props) => {

   const scrollToElement = (element) =>{
        scroller.scrollTo((element),{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-80
        });
        props.onClose(false)
    }

        return (
            <Drawer
                anchor="right"
                open={props.open}
                onClose={() => props.onClose(false)}
            >
                <List
                    component="nav"
                    subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
                    <ListItem button onClick={() => scrollToElement("venue-info")}>
                        <ListItemIcon>
                            <MenuIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Venue Info" />
                    </ListItem>

                    <ListItem button onClick={() => scrollToElement('highlight')}>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Highlights" />
                    </ListItem>

                    <ListItem button onClick={() => scrollToElement('pricing')}>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText inset primary="Pricing" />
                    </ListItem>

                    <ListItem button onClick={() => scrollToElement('location')}>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Location" />
                    </ListItem>
                </List>
            </Drawer>
        )
}

export default Sidebar;

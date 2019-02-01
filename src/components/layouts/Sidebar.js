import React, { Component } from 'react'
import { Drawer, List, ListItem, ListSubheader, ListItemIcon, ListItemText } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

class Sidebar extends Component {
    render() {
        return (
            <Drawer
                anchor="right"
                open={this.props.open}
                onClose={() => this.props.onClose(false)}
            >
                <List
                    component="nav"
                    subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
                    <ListItem button onClick={() => console.log("Featured")}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Sent mail" />
                    </ListItem>

                    <ListItem button onClick={() => console.log("Venue Info")}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Venue Info" />
                    </ListItem>

                    <ListItem button onClick={() => console.log("Highlights")}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Highlights" />
                    </ListItem>

                    <ListItem button onClick={() => console.log("Pricing")}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Pricing" />
                    </ListItem>

                    <ListItem button onClick={() => console.log("Location")}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Location" />
                    </ListItem>
                </List>
            </Drawer>
        )
    }
}

export default Sidebar;

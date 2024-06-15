import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Box, Typography, MenuItem, Toolbar, AppBar, Drawer, List, ListItem, ListItemText, IconButton, styled } from '@mui/material';



export default function NavBar() {

    const [OpenDrawer, SetDrawer] = useState(false)

        const menuItems = [
            {"text": "Home", "path":"/"},
            {"text": "About", "path":"/About"},
            {"text": "Golf Rankings", "path":"/GolfRankings"},

        ]

        function handleDrawerToggle()
        {
            SetDrawer(!OpenDrawer)
        }

    return (
    <>

        
        <Drawer anchor="left" open={OpenDrawer} onClose={handleDrawerToggle} sx={{width: 240}}>
            <List sx={{width: 240}}>
                {menuItems.map((item)=> (
                    <ListItem key={item.text} component={NavLink} to={item.path}>
                        <ListItemText primary={item.text}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Drawer>


    </>
    )
}       






{/*              <nav className="NavBar"
            style={{ backgroundColor: theme.background, color: theme.foreground }}>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dash">Dashboard</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/Rates">Rates</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
            </ul> 
            </nav>{/* ++ Add another page with route and component 
        </nav> */}
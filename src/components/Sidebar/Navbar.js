import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import AccountIcon from '@material-ui/icons/AccountCircleOutlined';
import Notification from '@material-ui/icons/Notifications'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';


export default function Navbar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = event => {
        setAnchorEl(null);
    }

    const [anchorElNotif, setAnchorElNotif] = React.useState(null);
    const handleClickNotif = event => {
        setAnchorElNotif(event.currentTarget);
    };
    const handleCloseNotif = event => {
        setAnchorElNotif(null);
    }
    return (
        <div className="Navbar__root">
            <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}  style={{cursor:'pointer'},{marginRight: '2vw' }}>
            <ButtonGroup variant="contained" color="primary">
                <Button>Create</Button>
            </ButtonGroup>   
            </div>
        
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>


            <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickNotif}  style={{cursor:'pointer'},{marginRight: '2vw' }}>
                <Badge badgeContent={3} color="error" style={{cursor:'pointer'}}>
                    <Notification />
                </Badge>
                <KeyboardArrowDown />
            </div>
            
            <Menu
                id="simple-menu"
                anchorEl={anchorElNotif}
                open={Boolean(anchorElNotif)}
                onClose={handleCloseNotif}
                >
                <MenuItem>1. Your profile is 60% completed, please complete your profile !</MenuItem>
                <MenuItem>2. You have three tasks remaining for today</MenuItem>
                <MenuItem>3. Your Last transaction failed ! </MenuItem>
            </Menu>

            <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}  style={{cursor:'pointer'}}>
                <AccountIcon />
                <KeyboardArrowDown />
            </div>
            
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

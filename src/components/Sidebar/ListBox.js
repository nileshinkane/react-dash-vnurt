import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {Link} from 'react-router-dom';

//Icons
import Dashboard from '@material-ui/icons/DashboardOutlined';
import Market from '@material-ui/icons/HomeWorkOutlined';
import Order from '@material-ui/icons/CardTravel';
import Invoice from '@material-ui/icons/Description';
import Products from '@material-ui/icons/ShoppingBasket';
import Money from '@material-ui/icons/MonetizationOn';
import Customers from '@material-ui/icons/SupervisedUserCircleOutlined';
import Analysis from '@material-ui/icons/Assessment';
import Settings from '@material-ui/icons/Brightness5'; 

const useStyles = makeStyles(theme => ({
   root : {
       color : '#e6e7f0', 
   },
   pink:{
       color: '#a26885',
   } 
}))


export default function() {
    const classes = useStyles();
    
    
    return (
        <List
            subheader={
                <ListSubheader style={{color: '#e6e7f0'}} component="div">
                    Jain Rice Mill
                </ListSubheader>
            }
            className={classes.root}
        >
    
        <Link to="/">
            <ListItem button >
                <ListItemIcon>
                    <Dashboard className={classes.pink} />
                </ListItemIcon>
                <ListItemText primary="DASHBOARD" />
                    <KeyboardArrowRight />    
            </ListItem>
         </Link>   

            <Link to="/marketplace">
            <ListItem button >
            
                <ListItemIcon>
                    <Market style={{color: 'lightgreen'}} />
                </ListItemIcon>
                <ListItemText primary="MARKETPLACE" />
                    <KeyboardArrowRight /> 
            </ListItem>
            </Link>

            <Link to="/orders">
            <ListItem button >
                <ListItemIcon>
                    <Order style={{color: 'darkblue'}} />
                </ListItemIcon>
                <ListItemText primary="ORDERS" />
                    <KeyboardArrowRight />    
            </ListItem>
            </Link>
            <Link to="/invoices">
            <ListItem button >
                <ListItemIcon>
                    <Invoice style={{color:'yellow'}} />
                </ListItemIcon>
                <ListItemText primary="INVOICES" />
                    <KeyboardArrowRight />    
            </ListItem>
            </Link>

            <Link to="/products">
            <ListItem button >
                <ListItemIcon>
                    <Products style={{color: 'lightblue'}} />
                </ListItemIcon>
                <ListItemText primary="PRODUCTS" />
                    <KeyboardArrowRight />    
            </ListItem>
            </Link>

            <Link to="/expenses">
            <ListItem button >
                <ListItemIcon>
                    <Money style={{color: 'orange'}} />
                </ListItemIcon>
                <ListItemText primary="EXPENSES" />
                    <KeyboardArrowRight />    
            </ListItem>
            </Link>

            <Link to="/customers">
            <ListItem button >
                <ListItemIcon>
                    <Customers style={{color: 'aqua'}} />
                </ListItemIcon>
                <ListItemText primary="CUSTOMERS" />
                    <KeyboardArrowRight />    
            </ListItem>
            </Link>

            <Link to="analysis">
            <ListItem button >
                <ListItemIcon>
                    <Analysis style={{color: 'orange'}} />
                </ListItemIcon>
                <ListItemText primary="ANALYSIS" />
                    <KeyboardArrowRight />    
            </ListItem>
            </Link>

            <Link to="/settings">
            <ListItem button >
                <ListItemIcon>
                    <Settings style={{color: "white"}} />
                </ListItemIcon>
                <ListItemText primary="SETTINGS" />
                    <KeyboardArrowRight />    
            </ListItem>
            </Link>
    
    
    
        </List>
    )
}
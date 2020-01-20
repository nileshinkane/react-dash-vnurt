import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  approvalCard:{
    display: 'flex',
    marginTop: '10px'
  },
  cardLeft:{
    flex: 6,
    display: 'flex',
    alignItems:'flex-start',
    flexDirection: 'column',
  },
  cardRight:{
    flex: 1
  }
})

export default function Approvals() {

const classes = useStyles()
    return (
        <div>
        <h3>APPROVALS</h3>
        <Card className={classes.approvalCard} variant="outlined">
          <CardContent className={classes.cardLeft}>
            <h4>New Purchase Order</h4>
            <p>Item name : Item A</p>
            <p>Rs. 25000</p>
          </CardContent>
          <Divider className={classes.divider} orientation="vertical" />
          <CardContent className={classes.cardRight}>
            <h5><Button size="small" color="primary" variant="outlined">Accept</Button></h5>
            <h5><Button size="small" variant="outlined">DECLINE</Button></h5>
          </CardContent>
        </Card>

        <Card className={classes.approvalCard} variant="outlined">
          <CardContent className={classes.cardLeft}>
            <h4>New Purchase Order</h4>
            <p>Item name : Item A</p>
            <p>Rs. 25000</p>
          </CardContent>
          <Divider className={classes.divider} orientation="vertical" />
          <CardContent className={classes.cardRight}>
            <h5><Button size="small" color="primary" variant="outlined">Accept</Button></h5>
            <h5><Button size="small" variant="outlined">DECLINE</Button></h5>
          </CardContent>
        </Card>

        <Card className={classes.approvalCard} variant="outlined">
          <CardContent className={classes.cardLeft}>
            <h4>New Purchase Order</h4>
            <p>Item name : Item A</p>
            <p>Rs. 25000</p>
          </CardContent>
          <Divider className={classes.divider} orientation="vertical" />
          <CardContent className={classes.cardRight}>
            <h5><Button size="small" color="primary" variant="outlined">Accept</Button></h5>
            <h5><Button size="small" variant="outlined">DECLINE</Button></h5>
          </CardContent>
        </Card>
</div>

    )
}
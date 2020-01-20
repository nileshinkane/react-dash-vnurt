import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';  
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Chart from './Chart';
import CountUp from 'react-countup';
import Approvals from './Approvals';


  //Icons
  import AddCircle from '@material-ui/icons/AddCircle';
  import Cached from '@material-ui/icons/Cached';
  import Assessment from '@material-ui/icons/Receipt';
  import Stock from '@material-ui/icons/Assessment';
  import Money from '@material-ui/icons/MonetizationOn';
  

  const useStyles = makeStyles(theme => ({
    largeButtons: {
        padding : '10px',
        display: 'flex',
        alignItems : 'center',
        justifyContent : 'flex-start',
        color: '#19185a',
        cursor: 'pointer'
    },
    iconStyle: {
        margin : '0 13px', 
    },
    midPatch:{
      display: 'flex',
      flexDirection: 'row',
      padding : '0px',
      position: 'relative',
      height: '10vh',
      color: 'white',
      fontSize : '2vw',
      [theme.breakpoints.up('md')]: {
        fontSize : '1.2vw'
      },
  },
  blueBox:{
      backgroundColor : 'blue',
      position : 'relative',
      top: '-10%',
      borderRadius: 4,
      height: '120%',
      backgroundImage : 'linear-gradient(#312d7b , #1d185a)',
      padding:'10px',
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row'
  },
  blueBoxContent:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2vw'
  },
  remainingBox:{
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#1d185a'
  },
  divider:{
    height: '80%',
    backgroundColor: 'lightgray',
    margin: 'auto'
  },
  bottomPart: {
    minHeight: '32vh',
    height: 'auto'
  },
  approvals:{
    maxHeight: '32vh',
    overflowY: 'scroll',
    padding: '10px',
    backgroundColor: 'a'
  },
    
  }));  
  
  export default function Dashboard() {
    const classes = useStyles();
    
  
    return (
      <div className="Dashboard">
        <Grid container spacing={3}>
          <Grid item xs={4} lg={4}>
            <Paper className={classes.largeButtons}>
                <AddCircle className={classes.iconStyle} />
                <h5>NEW ORDER</h5>
            </Paper>
          </Grid>
          <Grid item xs={4} lg={4}>
            <Paper className={classes.largeButtons}>
                <Cached className={classes.iconStyle} />
                <h5>UPDATE ORDER</h5>
            </Paper>
          </Grid>
          <Grid item  xs={4} lg={4}>
            <Paper className={classes.largeButtons}>
                <Cached className={classes.iconStyle} />
                <h5>UPDATE RAW MATERIAL</h5>
            </Paper>
          </Grid>


          <Grid item xs={12} lg={12}>
            <Paper className={classes.midPatch}>
              <div className={classes.blueBox}>
                <Assessment />
                <div className={classes.blueBoxContent}>
                  <p>Today's Sales</p>
                  <h4>Rs <CountUp duration={2} end={45000} /></h4>
                </div>
              </div>
              <div className={classes.remainingBox}>
                <p>Orders received today</p>
                <h3><CountUp duration={2} end={52} /></h3>
              </div>
              <Divider className={classes.divider} orientation="vertical" />
              <div className={classes.remainingBox}>
                <p>Orders completed today</p>
                <h3><CountUp duration={2} end={25} /></h3>
              </div>
              <Divider className={classes.divider} orientation="vertical" />
              <div className={classes.remainingBox}>
                <p>Orders dispatched today</p>
                <h3><CountUp duration={2} end={27} /></h3>
              </div>
            </Paper>
          </Grid>


          <Grid item xs={12} lg={12}>
            <Paper className={classes.midPatch}>
              <div className={classes.blueBox}>
                <Money />
                <div className={classes.blueBoxContent}>
                  <p>Payments received today</p>
                  <h4>Rs <CountUp duration={2} end={15550} /></h4>
                </div>
              </div>
              <div className={classes.remainingBox}>
                <p>Invoices created today</p>
                <h3><CountUp duration={2} end={25} /></h3>
              </div>
              <Divider className={classes.divider} orientation="vertical" />
              <div className={classes.remainingBox}>
                <p>Total Overdue Invoices</p>
                <h3><CountUp duration={2} end={33} /></h3>
              </div>
              <Divider className={classes.divider} orientation="vertical" />
              <div className={classes.remainingBox}>
                <p>Total Overdue Amount</p>
                <h3>Rs <CountUp duration={2} end={10304} /></h3>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Paper className={classes.midPatch}>
              <div className={classes.blueBox}>
                <Stock />
                <div className={classes.blueBoxContent}>
                  <p>Today's Stock Value</p>
                  <h4>Rs <CountUp duration={2} end={5500} /></h4>
                </div>
              </div>
              <div className={classes.remainingBox}>
                <p>Item's in stock</p>
                <h3><CountUp duration={2} end={20} /></h3>
              </div>
              <Divider className={classes.divider} orientation="vertical" />
              <div className={classes.remainingBox}>
                <p>Low Stock items</p>
                <h3><CountUp duration={2} end={33} /></h3>
              </div>
              <Divider className={classes.divider} orientation="vertical" />
              <div className={classes.remainingBox}>
                <p>Out of Stocks Items</p>
                <h3><CountUp duration={2} end={12} /></h3>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Paper id="chartContainer" className={classes.bottomPart}>
              <Chart />  
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={classes.approvals}>
              <Approvals />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
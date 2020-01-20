import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard';
import Paper from '@material-ui/core/Paper';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';



class App extends React.Component{

  render() {
    return (
      
        <div className="App">
          <Router>
            <Fragment>
              <Sidebar />        
              <Switch>
                <Route exact path="/" render={() => <Dashboard />} />
                <Route path="/marketplace" render={() => <General text="Marketplace" />} />
                <Route path="/orders" render={() => <General text="Orders" />} />
                <Route path="/invoices" render={() => <General text="Invoices" />} />
                <Route path="/products" render={() => <General text="Products" />} />
                <Route path="/expenses" render={() => <General text="Expenses" />} />
                <Route path="/customers" render={() => <General text="Customers" />} />
                <Route path="/analysis" render={() => <General text="Analysis" />} />
                <Route path="/settings" render={() => <General text="Settings" />} />
              </Switch>   
            </Fragment>  
          </Router>        
        </div>
    );
  }
}

export default App;

function General (props) {
  return (
    <div className="General__root">
      <Paper className="General">
        This is the <b>{props.text}</b> dummy component created using <span className="highlight">react-router-dom</span>
      </Paper>
    </div>  
  )
}


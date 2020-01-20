import React from 'react';
import Paper from '@material-ui/core/Paper';
import ListBox from './ListBox';
import Navbar from './Navbar'; 
import './sidebar.css';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar : true
        }
    }

    render() {
        return(
                <Paper elevation={3} className='Sidebar__root'>
                <div className="Sidebar__real">
                    <Paper className="Sidebar__Logo">
                        JRML
                    </Paper>
                    <ListBox className="ListBox" />
                </div>    

                    <Paper elevation={4} className="Sidebar__Nav">
                        <Navbar handleState={this.props.handleState} redirect={this.props.redirect} />
                    </Paper>
                </Paper>
        )
    }
}
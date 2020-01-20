import React from 'react';
import { Redirect } from 'react-router-dom';



export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e) {
        e.preventDefault();
        this.props.handleState()
    }

    render () {
        
        if(this.props.redirect) {
            return <button onClick={this.handleLogOut} type="button">Logout</button>        
        }

        return (
            <Redirect to="/" />
        )
            
    }
}
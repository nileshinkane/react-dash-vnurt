import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import '../App.css';



class Login extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let uname = document.getElementById('username').value
        let pass = document.getElementById('password').value

        if(uname === 'admin' && pass==='admin') {
            this.props.handleState();
        }
    }

    render() {

        if(this.props.redirect) {
            return <Redirect to="/dashboard" />  
        }


        return( 
            <div className="Login__root">
                <Paper className="Login__Paper">
                    <h1 align= "center">Jain Rice Mills</h1>
                    <form className="Login__form" >
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={1}>
                                <AccountCircle />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    id="username"
                                    label="username"
                                    fullWidth
                                    defaultValue="admin"
                                    InputProps={{
                                    readOnly: false,
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={1}>
                                <VpnKey />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    id="password"
                                    label="password (read only)"
                                    type={'password'}
                                    fullWidth
                                    defaultValue="admin"
                                    InputProps={{
                                    readOnly: true,
                                }}
                                />
                            </Grid>
                        </Grid>
                        <Button onClick={this.handleSubmit} type="button" variant="contained" style={{backgroundColor:'#64dd17', color:'white'}}>
                            Login
                        </Button>
                    </form>
                </Paper>
            </div>
        )
    }
}

export default Login;
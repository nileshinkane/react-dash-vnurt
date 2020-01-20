import React from 'react';
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles({
    midPatch:{
        display: 'flex',
        flexDirection: 'row',
        padding : '0px',
        position: 'relative',
        height: '10vh'
    },
    blueBox:{
        backgroundColor : 'blue',
        // transform : 'scale(1.1)',
        position : 'relative',
        top: '-10%',
        borderRadius: 4,
        height: '120%',
        backgroundImage : 'linear-gradient(#312d7b , #1d185a)',
        padding:'10px',
        flex: '1'
    },
    remainingBox:{
        flex: '1'
    }
})



export default function MidPath() {
    const classes = useStyles();

    return (
        <Paper className={classes.midPatch}>
                <div className={classes.blueBox}>
                </div>
                <div className={classes.remainingBox}></div>
                <div className={classes.remainingBox}></div>
                <div className={classes.remainingBox}></div>
            </Paper>
    )
}
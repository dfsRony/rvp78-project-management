import React from 'react';
import Container from './Container';
import { CssBaseline} from '@material-ui/core';
import UseStyles from '../UseStyles';
export default ({component}) => {
    const classes  = UseStyles();
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Container component = {component}/>
      </div>
       
        
    )
}
import React from 'react';
import AppDrawer from './AppDrawer';
import AppContent from './AppContent';
import UseStyles from '../UseStyles';

export default ({ component }) => {
    const classes = UseStyles();
    return (
       <div className={classes.root}>
            <AppDrawer />
            <AppContent component={component}/>
       </div>
    );
}
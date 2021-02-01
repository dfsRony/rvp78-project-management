import React from 'react';
import { Router } from 'react-router-dom';
import history from './History';
import AppSwitch from './AppSwitch';
export default  () => {
    return(
        <Router history={history} >
           <AppSwitch />
        </Router>
    );
}

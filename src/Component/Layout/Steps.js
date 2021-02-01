import React from 'react';
import UseStyles from '../UseStyles';
import Tiles from './Tiles';

export default () => {
    const classes = UseStyles();
    return (
        <div className={classes.drawerContent}>
        {
            <ul className="StepProgress">
                <Tiles />
            </ul>
        }
     </div>
    );
}
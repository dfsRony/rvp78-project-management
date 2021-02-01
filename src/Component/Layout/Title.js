import React from 'react';
import {Typography, Box} from '@material-ui/core';
import UseStyles from '../UseStyles';

export default ({ tile }) => {
    const classes = UseStyles();
    return (
        <Typography >
            <Box fontWeight={700} className={classes.listText} component="span">
                { tile.title }  
            </Box>
            <Box component="span" className={classes.listText}>
                { tile.value.text }
            </Box>
        </Typography>
    );
}
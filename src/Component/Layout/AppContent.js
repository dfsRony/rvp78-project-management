import React from 'react';
import UseStyles from '../UseStyles';

export default ({ component }) => {
    const classes = UseStyles();
    return (
        <section className={classes.contentSection}>
            { component }
        </section>
    );
}
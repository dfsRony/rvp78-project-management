import React from 'react';
import UseStyles from '../UseStyles';
import classNames from 'classnames';

export default () => {
    const classes= UseStyles();

    return <div className={classNames(classes.bgWhite, classes.h100, classes.pt1rem, classes.pr2rem, classes.pb2rem)}>
        <div className={classNames( classes.bgBase, classes.h100, classes.ptrr3rem, classes.pbrr3rem)}>test</div>
    </div>
}
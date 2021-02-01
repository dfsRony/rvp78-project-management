import React from 'react';
import Steps from './Steps';
import ScrollArea from 'react-scrollbar';
import ImageLogo from './ImageLogo';
import UseStyles from '../UseStyles';
export default () => {
    const classes = UseStyles();
    return (
        <ScrollArea
            speed={0.1}
            className={classes.area}
            contentClassName={classes.scrollContent}
            horizontal={false}
            >
            <ImageLogo />
            <Steps />
        </ScrollArea>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';

export default (props) => {
    return (
        <Link {...props} >
            <List tile={props.tile} />
        </Link>
    );
}
import React from 'react';
import Title from './Title';
export default ({ tile, classData}) => {
    return (
        <li className= { classData }>
            <Title tile={tile}/>
        </li>
    );
}
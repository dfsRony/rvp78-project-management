import React from 'react';
import ListItem from './ListItem';
export default ({ tile }) => {
    return (
        <ListItem
            classData={tile.value.value === '' ? 'current StepProgress-item': 'is-done StepProgress-item' }
            tile = { tile }
        />
    );
}
import React, { useContext } from 'react';
import TileLink from './TileLink';
export default ({ tile }) => {
    return (
            <TileLink
                to = {tile.link} 
              
                tile = {tile}
            />
    );
}
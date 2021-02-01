import React, { useContext } from 'react';
import { LoaderContext } from '../Context/LoaderContext';
import clsx from 'clsx';
import { CircularProgress } from '@material-ui/core';

export default () => {
    const { loading } = useContext(LoaderContext)
    return (
        <div className={clsx('dAbsolute', {
            'hide' : loading === false,
        }
        )}>
            <div className="loader">
                <div className='loader_img'>
                    <CircularProgress size={100} className="loader_circular" />
                    <img  src={process.env.REACT_APP_LOADER_URL+'loader@0,25x.png'} alt="loader" />
                </div>
            </div>
           
        </div>
    )
}
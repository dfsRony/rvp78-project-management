import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppLayout from './AppLayout';

export default ({isExact, item, path, Page, Component, ...rest}) => 
   (
        <Route
            exact={ isExact }
            path={path}
            {...rest}
            render = { props => {
                return (
                    <AppLayout Component={Component} {...props} />
                )
            }} />
    )

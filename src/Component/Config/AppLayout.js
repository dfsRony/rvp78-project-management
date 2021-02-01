import React from 'react';
import Layout from '../Layout/Layout';
import { withRouter } from 'react-router-dom';

const AppLayout = ({ Component, ...rest }) => {
    return (
        <Layout>
            <Component {...rest}/>
        </Layout>
    );
}

export default withRouter(AppLayout);
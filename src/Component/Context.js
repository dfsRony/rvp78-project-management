import React from 'react';
import NavigationContextProvider from './Context/NavigationContext';
import { StylesProvider } from '@material-ui/core/styles';
import { jss } from '../jss';
import LoaderContextProvider from './Context/LoaderContext';
import ResponseContextProvider from './Context/ResponseContext';

const Context = (props) => {
    return ( 
        <StylesProvider jss={jss}>
            <LoaderContextProvider>
                <ResponseContextProvider>
                    <NavigationContextProvider>
                            {props.children}
                    </NavigationContextProvider>
                </ResponseContextProvider>
            </LoaderContextProvider>
        </StylesProvider>
     );
}
 
export default Context;
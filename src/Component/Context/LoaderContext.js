import React, { createContext, useState } from 'react';

export const LoaderContext = createContext();

const LoaderContextProvider = (props) => {
    const [loading, setLoading] = useState(false);
    const handleLoading = (_loading) => {
        setLoading(_loading);
    }
    return (
        <LoaderContext.Provider value={{loading, handleLoading}}>
            { props.children }
        </LoaderContext.Provider>
    );
}

export default LoaderContextProvider;

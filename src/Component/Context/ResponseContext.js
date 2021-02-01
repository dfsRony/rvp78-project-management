import React, { createContext, useState } from 'react';

export const ResponseContext = createContext();

const ResponseContextProvider = (props) => {
    const [open, setOpen] = useState(false);
    const [errorTitle, setErrorTitle] = useState('');
    const [errorContent, setErrorContent] = useState('');
    const [errorCode, setErrorCode] = useState('');
    const handleError = (_error, title, code, content, req) => {
         setOpen(_error);
        setErrorTitle(title);
        setErrorContent(content);
        setErrorCode(code);
        setTimeout(() => {
            req();
        }, 1000);
        return _error;
    }
    return (
        <ResponseContext.Provider value={{open, errorCode, errorTitle, errorContent, handleError}}>
            { props.children }
        </ResponseContext.Provider>
    );
}

export default ResponseContextProvider;

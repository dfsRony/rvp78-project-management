import React from 'react';

import Main from './Main';
import Loader from './Loader';

import ResponseDialog from './ResponseDialog';

const Layout = ({ children }) => {
  
  return (
    <div className="h-inherit">
      {/* <Loader /> */}
      {/* <ResponseDialog /> */}
      <Main component= {children}/>
    </div>
   
  );
}

export default Layout;
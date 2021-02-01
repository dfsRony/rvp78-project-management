import React, { useState, createContext } from 'react';
import Dashboard from '../Dashboard/Dashboard';

export const NavigationContext = createContext();

const NavigationContextProvider = (props) => {
    const [navigation] = useState([ 
        {
          component: Dashboard,
          path: '/',
          isExact: true,
          name: 'Dashboard',
        },
       
      ]);
    return ( 
        <NavigationContext.Provider value={{navigation}}>
            { props.children }
        </NavigationContext.Provider>
     );
}
 
export default NavigationContextProvider;
import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import { NavigationContext } from '../Context/NavigationContext';
const AppSwitch = () => {
  const { navigation } = useContext(NavigationContext);
  return ( 
    <Switch>
      {
        navigation.map( (item, index) => {
          return  (
            <AppRoute item={item} isExact={item.isExact} key={index} path={item.path} Component={item.component} />
          )
        })
      }
    </Switch>
  );
}
 
export default AppSwitch;
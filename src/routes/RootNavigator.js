import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './BottomTab';
import StackNav from './StackNav';

const RootNavigator = () => {
  const token = 123123;
  const Root = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Root.Navigator screenOptions={{headerShown:false}}>
       {/* {token ? StackNav():BottomNav(bottomnavigation)}/> */}
     <Root.Screen name = 'stack' component={StackNav}/> 
       <Root.Screen name = 'bottom' component={BottomNav}/>
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

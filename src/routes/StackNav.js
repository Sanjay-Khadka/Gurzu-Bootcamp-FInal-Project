import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import {LoginScreen,RegisterScreen} from '../screens';


const ScreenNav = () => {
    const {Navigator, Screen} = createNativeStackNavigator()
    
    return (
<NavigationContainer>
    <Navigator
     screenOptions={{
        headerShown: false
      }}>
        <Screen name = 'LoginScreen' component={LoginScreen}/>
        <Screen name = 'RegisterScreen' component={RegisterScreen}/>
       
    </Navigator>
</NavigationContainer>
    )
}
export default ScreenNav;

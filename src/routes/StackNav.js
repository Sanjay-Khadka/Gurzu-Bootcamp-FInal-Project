import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './BottomTab';
import {LoginScreen,RegisterScreen} from '../screens';


const ScreenNav = () => {
    const Stack = createNativeStackNavigator()
    
    return (
<NavigationContainer>
    <Stack.Navigator
     screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name = 'Bottomnav' component={BottomNav}/>
        <Stack.Screen name = 'LoginScreen' component={LoginScreen}/>
        <Stack.Screen name = 'RegisterScreen' component={RegisterScreen}/>
       
    </Stack.Navigator>
</NavigationContainer>
    )
}
export default ScreenNav;

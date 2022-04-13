import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../screens/LandingScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
export default StackNav;

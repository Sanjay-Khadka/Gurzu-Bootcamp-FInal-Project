import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './BottomTab';
import StackNav from './StackNav';
import TestScreen from '../screens';
const RootNavigator = () => {
  const token = 123123;
  const Root = createNativeStackNavigator();
  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      <Root.Screen name="Test" component={TestScreen} />
    </Root.Navigator>
  );
};

export default RootNavigator;

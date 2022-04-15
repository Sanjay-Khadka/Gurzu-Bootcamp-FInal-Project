import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import {CourseScreen, SettingsScreen, ChangePassword} from '../screens';
// import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SettingStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SettingsScreen">
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="passwordScreeen" component={ChangePassword} />
    </Stack.Navigator>
  );
};
export default SettingStackNav;

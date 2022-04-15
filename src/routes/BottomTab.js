import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, CalendarScreen} from '../screens';
// import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/Feather';
import {CourseDetailsNav, SettingStackNav} from '.';

const Bottom = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#FFFF',
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
          borderRadius: 10,
          margin: 2,

          // height:50
        },
        tabBarStyle: {
          backgroundColor: '#004277',
          height: '8%',
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="home" size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Courses"
        component={CourseDetailsNav}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="book-open" size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="calendar" size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Settings"
        component={SettingStackNav}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="settings" size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomNav;

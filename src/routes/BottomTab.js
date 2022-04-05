import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen,CourseScreen, CalendarScreen, NotificationScreen, SettingsScreen } from '../screens';
// import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/Feather';
import { useIsFocused } from '@react-navigation/native';

const BottomNav = () =>{

    const Bottom = createBottomTabNavigator();
return(
    <Bottom.Navigator screenOptions={{headerShown:false, tabBarActiveBackgroundColor:'#FFFF',tabBarItemStyle:{
  borderRadius:10,
margin:2,

      
    },tabBarStyle:{
      backgroundColor:'#004277',
    }}}>
        <Bottom.Screen name="Home" component={HomeScreen}
         options={{
            tabBarIcon: ({color, size}) => (
              <Icon
              color={color}
               
                name="home"
                size={size}
              />
            
            )
          }}></Bottom.Screen>
        <Bottom.Screen name="Course" component={CourseScreen}
           options={{
            tabBarIcon: ({color, size }) => (
              <Icon
                color={color}
               
                name="book"
                size={size}

              />
            
            ) 
          }}></Bottom.Screen>
        <Bottom.Screen name="Calendar" component={CalendarScreen}
           options={{
            tabBarIcon: ({color, size}) => (
              <Icon
              color={color}
               
                name="calendar"
                size={size}
              />
            
            ) 
          }}></Bottom.Screen>
        <Bottom.Screen name="Notification" component={NotificationScreen}
           options={{
            tabBarIcon: ({color, size}) => (
              <Icon 
              color={color}
               
                name="bell"
                size={size}
              />
            
            ) 
          }}></Bottom.Screen>
        <Bottom.Screen name="Settings" component={SettingsScreen}
           options={{
            tabBarIcon: ({color, size}) => (
              <Icon
              color={color}
               
                name="settings"
                size={size}
              />
            
            ),
            
          }}></Bottom.Screen>

    </Bottom.Navigator>
)
}
export default BottomNav;
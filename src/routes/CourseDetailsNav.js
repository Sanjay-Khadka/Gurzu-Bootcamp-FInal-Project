import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import {CourseScreen, IndividualChapters} from '../screens';
// import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IndividualCourse} from '../screens/Dashboard';
import {AllAssignment} from '../screens';
const Stack = createNativeStackNavigator();

const CourseDetailsNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CourseScreen">
      <Stack.Screen name="CourseScreen" component={CourseScreen} />
      <Stack.Screen name="individualCourse" component={AllAssignment} />
      {/* <Stack.Screen name="IndividualChapters" component={IndividualChapters} /> */}
    </Stack.Navigator>
  );
};
export default CourseDetailsNav;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllChapters, IndividualChapters} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
const Chapters = createNativeStackNavigator();
const ChapterDetails = () => {
  return (
    <Chapters.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AllChapters">
      <Chapters.Screen name="ALlChapters" component={AllChapters} />
      <Chapters.Screen
        name="IndividualChapters"
        component={IndividualChapters}
      />
    </Chapters.Navigator>
  );
};
export default ChapterDetails;

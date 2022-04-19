import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllAssignment, IndividualAssignment} from '../screens';
const Assignment = createNativeStackNavigator();
const AssignmentDetails = () => {
  return (
    <Assignment.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AllAssignment">
      <Assignment.Screen name="AllAssignment" component={AllAssignment} />
      <Assignment.Screen
        name="IndividualAssignment"
        component={IndividualAssignment}
      />
    </Assignment.Navigator>
  );
};
export default AssignmentDetails;

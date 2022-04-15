import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {HomeScreenHeader} from '../../components';
const CourseDetails = () => {
  return (
    <View>
      <View>
        <HomeScreenHeader Title="My Courses" />
      </View>
      <View style={styles.maincontainer}>
        <TouchableOpacity>
          <Text style={styles.titleText}>Course</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titleText}>Assignments</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titleText}>Grades</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CourseDetails;
const styles = StyleSheet.create({
  maincontainer: {
    marginVertical: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  titleText: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    fontWeight: '500',
    color: '#004277',
  },
});

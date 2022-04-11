import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {AllCourseFlatlist} from '../ScreenModules';
const {width, height} = Dimensions.get('window');
const AllCourseContainer = () => {
  return (
    <View style={styles.allcoursecontainer}>
      <Text style={styles.coursetext}>Select Courses</Text>
      <AllCourseFlatlist />
    </View>
  );
};

export default AllCourseContainer;

const styles = StyleSheet.create({
  allcoursecontainer: {
    backgroundColor: 'white',
    width: width,
    // alignItems: 'center',
    // backgroundColor: 'black',
    display: 'flex',
    flex: 1,
  },
  coursetext: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'auto',
    marginHorizontal: 10,
  },
});

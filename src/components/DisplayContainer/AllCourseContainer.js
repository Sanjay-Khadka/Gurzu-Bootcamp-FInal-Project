import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
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
    // backgroundColor: 'black',
    width: width,
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flex: 3,
  },
  coursetext: {
    marginBottom: 2,
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 200,
  },
});

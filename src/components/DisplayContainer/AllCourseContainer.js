import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AllCourseFlatlist} from '../ScreenModules';
import {useDispatch, useSelector} from 'react-redux';
import {AllCourse} from '../../redux/actions/CourseActions';
const {width, height} = Dimensions.get('window');
const AllCourseContainer = () => {
  const courseToken = useSelector(state => state.authReducer.authToken);

  const action = () => {
    dispatch(AllCourse(courseToken));
  };
  const dispatch = useDispatch();
  return (
    <View style={styles.allcoursecontainer}>
      <Text style={styles.coursetext}>Select Courses</Text>
      <TouchableOpacity onPress={() => action()}>
        <Text style={{color: 'black'}}>this is the button</Text>
      </TouchableOpacity>
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
    // backgroundColor: 'black',
    display: 'flex',
    flex: 3,
  },
  coursetext: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 200,
  },
});

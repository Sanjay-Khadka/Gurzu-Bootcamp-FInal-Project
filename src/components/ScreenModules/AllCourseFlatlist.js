import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Switch,
} from 'react-native';
import SwitchButton from './SwitchButton';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {enrollCourse} from '../../redux/actions/CourseActions';

const {height, width} = Dimensions.get('window');
const AllCourseFlatlist = () => {
  const dispatch = useDispatch();
  const [courseDataLocal, setCourseDataLocal] = useState([]);
  const token = useSelector(state => state.authReducer.authToken);
  // console.warn(token);
  const userId = useSelector(state => state.authReducer.Login);

  const toggleBtn = id => {
    console.warn(id);
    const newCourseData = courseDataLocal.map(value =>
      id === value.id ? {...value, isSelected: !value.isSelected} : value,
    );

    setCourseDataLocal(newCourseData);
    console.log(newCourseData);
  };
 

  const navigateCourseDetails = courseItemData => {
    const userIdValue = userId?.data?.data.id;
    toggleBtn(courseItemData?.id);
    dispatch(enrollCourse(token, userIdValue, courseItemData?.id));
  };
  const coursedata = useSelector(state => state.mainscreen.AllCourse.data);
  console.warn(coursedata);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateCourseDetails(item)}>
        <View style={styles.container}>
          <View style={styles.coursetitle}>
            <Text style={styles.textcourse}>{item.name}</Text>

            <Text style={styles.assignment}>{item.chapter_count} chapters</Text>
          </View>

          <SwitchButton
            isEnabled={item.isSelected}
            toggleSwitch={() => toggleBtn(item.id)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={courseDataLocal}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default AllCourseFlatlist;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3,
    // justifyContent: 'center',
    width: width - 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    // elevation: 5,
    flexDirection: 'row',
    height: height / 9,
    // margin: 6,
    borderRadius: 15,
    justifyContent: 'space-around',

    width: width - 10,
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
  },
  coursetitle: {
    height: height / 11,
    width: width - 90,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textcourse: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 15,
  },
  textdate: {
    fontSize: 16,
    color: '#004277',
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
  coursedetail: {
    width: 230,
    alignItems: 'stretch',
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  assignment: {
    fontSize: 12,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
    marginHorizontal: 15,
    marginVertical: 2,
  },
  goto: {
    fontSize: 12,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
    textAlign: 'right',
  },
});

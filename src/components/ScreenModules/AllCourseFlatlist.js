import React from 'react';
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
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('window');
const AllCourseFlatlist = () => {
  const coursedata = useSelector(state => state.mainscreen.AllCourse.data);
  console.warn(coursedata);
  const taskdetail = [
    {
      id: '287344',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      chapter: '-15 chapters',
    },
    {
      id: '28343474',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      chapter: '-15 chapters',
    },
  ];

  const renderItem = ({item}) => {
    // console.warn(item.id);
    return (
      <TouchableOpacity style={styles.button}>
        <View style={styles.container}>
          <View style={styles.coursetitle}>
            <Text style={styles.textcourse}>{item.name}</Text>

            <Text style={styles.assignment}>{item.chapter}</Text>
          </View>

          <SwitchButton />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={coursedata}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default AllCourseFlatlist;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginVertical: 5,
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
    marginHorizontal: 5,
  },
  goto: {
    fontSize: 12,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
    textAlign: 'right',
  },
});

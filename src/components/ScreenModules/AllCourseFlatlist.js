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

const {height, width} = Dimensions.get('window');
const AllCourseFlatlist = () => {
  const taskdetail = [
    {
      id: '2874',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      chapter: '-15 chapters',
    },
    {
      id: '2874',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      chapter: '-15 chapters',
    },
    {
      id: '2874',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      chapter: '-15 chapters',
    },
    {
      id: '2874',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      chapter: '-15 chapters',
    },
    {
      id: '2874',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      chapter: '-15 chapters',
    },
  ];

  const renderItem = ({item}) => {
    return (
      // <View style={styles.maincontainer}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.container}>
          <View style={styles.coursetitle}>
            <Text style={styles.textcourse}>{item.name}</Text>
            <View style={styles.coursedetail}>
              <Text style={styles.assignment}>{item.chapter}</Text>
            </View>
          </View>
          <SwitchButton />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={taskdetail}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default AllCourseFlatlist;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    width: width - 10,
  },
  container: {
    elevation: 10,
    flexDirection: 'row',
    height: height / 9,
    margin: 6,
    borderRadius: 15,
    justifyContent: 'space-around',

    width: width - 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  coursetitle: {
    height: height / 11,
    width: width - 90,
    //   backgroundColor:'red',
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

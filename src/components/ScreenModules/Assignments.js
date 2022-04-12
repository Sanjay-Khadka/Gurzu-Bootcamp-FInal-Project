import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const Assignments = () => {
  const taskdetail = [
    {
      id: '2',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      assignment: 'Login Page',
    },
    {
      id: '22',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      assignment: 'Login Page',
    },
    {
      id: '1234',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
      assignment: 'Login Page',
    },
  ];

  const renderItem = ({item}) => {
    return (
      // <View style={styles.maincontainer}>
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.datetime}>
            <Text style={styles.textdate}>{item.date}</Text>
            <Text style={styles.textdate}>{item.time}</Text>
          </View>
          <View style={styles.coursetitle}>
            <Text style={styles.textcourse}>{item.name}</Text>
            <View style={styles.coursedetail}>
              <Text style={styles.assignment}>{item.assignment}</Text>
              <Text style={styles.goto}>View assignment > </Text>
            </View>
          </View>
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

export default Assignments;

const styles = StyleSheet.create({
  datetime: {
    flexDirection: 'column',
    borderRightWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    borderRightColor: '#616161',
    // backgroundColor:'black',
    height: 60,
  },
  container: {
    elevation: 3,
    flexDirection: 'row',
    height: height / 8,
    margin: 6,
    borderRadius: 15,

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
    fontSize: 16,
    color: '#004277',
    fontWeight: '500',
    fontFamily: 'WorkSans',
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
    fontSize: 14,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
  },
  goto: {
    fontSize: 12,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
    textAlign: 'right',
  },
});

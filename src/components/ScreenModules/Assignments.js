import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const Assignments = () => {
  const taskdetail = [
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Development',
      date: '3rd March',
      time: '2:00 pm',
    },
    {
      id: '24',
      name: 'Frontend Develnt',
      date: '3rd March',
      time: '2:00 pm',
    },
  ];

  const renderItem = ({item}) => {
    return (
      // <View style={styles.maincontainer}>
      <View style={styles.container}>
        <View style={styles.datetime}>
          <Text style={styles.textdate}>{item.date}</Text>
          <Text style={styles.textdate}>{item.time}</Text>
        </View>
        <View style={styles.coursetitle}>
        <Text style={styles.textcourse}>{item.name}</Text>
        </View>
      </View>
      // </View>
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
    alignItems:'center',
    paddingHorizontal:10,
    justifyContent:'space-around',
    borderRightColor: '#616161',
    // backgroundColor:'black',
    height:60
  },
  container: {
    flexDirection: 'row',
    height: height / 10,
    margin: 6,
    borderRadius: 15,
   
    width: width-10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  coursetitle:{
      height:height/11,
      width:width-90,
    //   backgroundColor:'red',
      justifyContent:'center',
      alignItems:'stretch'
  },
  textcourse: {
    fontSize: 12,
    // margin: 15,
    color: '#000000',
    // width: 65,
    // height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans',
    paddingHorizontal:15,
  },
  textdate: {
    fontSize: 12,
    // margin: 7,
    color: '#000000',
    // width: 65,

    // height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
 
});

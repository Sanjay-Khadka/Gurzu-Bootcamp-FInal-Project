import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const Todo = () => {
  const tasks = [
    {id: 1, name: 'frontend'},
    {id: 1, name: 'frontend'},
    {id: 1, name: 'frontend'},
    {id: 1, name: 'frontend'},
    {id: 1, name: 'frontend'},
    {id: 1, name: 'frontend'},
    {id: 1, name: 'frontend'},
    {id: 1, name: 'frontend'},
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.textcourse}>{item.name}</Text>
        <Text style={styles.textdate}>{item.id}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    elevation:10,
    flexDirection: 'row',
    height: height / 10,
    margin: 6,
    borderRadius: 15,
    // width: '95%',
    width: width,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textcourse: {
    fontSize: 12,
    margin: 15,
    color: '#000000',
    width: 65,
    height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans',
  },
  textdate: {
    fontSize: 12,
    margin: 15,
    color: '#000000',
    width: 65,
    textAlign: 'center',
    height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
  textstatus: {
    fontSize: 10,
    marginRight: 15,
    color: '#616161',
    borderWidth: 1,
    borderColor: '#236C00',
    padding: 5,
    borderRadius: 25,
    width: 65,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
});

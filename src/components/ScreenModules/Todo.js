import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Todo = () => {
  const taskdetail = [
    {
      id: '1',
      name: 'backend',
      date: 2022,
    },
    {
      id: '2',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '3',
      name: 'js',
      date: 2022,
    },
    {
      id: '4',
      name: 'UI',
      date: 2022,
    },
    {
      id: '5',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '6',
      name: 'js',
      date: 2022,
    },
    {
      id: '7',
      name: 'UI',
      date: 2022,
    },
    {
      id: '8',
      name: 'UI',
      date: 2022,
    },
    {
      id: '9',
      name: 'UI',
      date: 2022,
    },
    {
      id: '10',
      name: 'UI',
      date: 2022,
    },
    {
      id: '11',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '12',
      name: 'backend',
      date: 2022,
    },
    {
      id: '13',
      name: 'UI',
      date: 2022,
    },
    {
      id: '14',
      name: 'frontendasfd',
      date: 2022,
    },
    {
      id: '15',
      name: 'UI',
      date: 2022,
    },
    {
      id: '16',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '17',
      name: 'what',
      date: 2022,
    },
    {
      id: '18',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '19',
      name: 'backend',
      date: 2022,
    },
    {
      id: '20',
      name: 'UI',
      date: 2022,
    },
    {
      id: '21',
      name: 'frontendasfd',
      date: 2022,
    },
    {
      id: '22',
      name: 'UI',
      date: 2022,
    },
    {
      id: '23',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '24',
      name: 'what',
      date: 2022,
    },
    {
      id: '15',
      name: 'UI',
      date: 2022,
    },
    {
      id: '16',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '17',
      name: 'what',
      date: 2022,
    },
    {
      id: '18',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '19',
      name: 'backend',
      date: 2022,
    },
    {
      id: '20',
      name: 'UI',
      date: 2022,
    },
    {
      id: '21',
      name: 'frontendasfd',
      date: 2022,
    },
    {
      id: '22',
      name: 'UI',
      date: 2022,
    },
    {
      id: '23',
      name: 'frontend',
      date: 2022,
    },
    {
      id: '24',
      name: 'last page',
      date: 2022,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Text style={styles.textcourse}>{item.name}</Text>
          <Text style={styles.textdate}>{item.date}</Text>
        </View>
      </View>
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

export default Todo;

const styles = StyleSheet.create({
  maincontainer: {
    // backgroundColor:"#808080",
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    top: -3,
    display: 'flex',
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: 75,
    margin: 5,
    borderRadius: 15,
    width: '95%',
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

import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
const Grades = () => {
  const gradesdata = useSelector(state => state.mainscreen.Grade);
  const allGrades = gradesdata?.data;
  // console.warn(allGrades);
  const scores = [
    {
      id: '1',
      name: 'backend',
      score: 20,
      status: 'done',
    },
    {
      id: '2',
      name: 'frontend',
      score: 20,
      status: 'done',
    },
    {
      id: '3',
      name: 'js',
      score: 20,
      status: 'done',
    },
    {
      id: '4',
      name: 'UI',
      score: 20,
      status: 'done',
    },
    {
      id: '5',
      name: 'frontend',
      score: 20,
      status: 'done',
    },
    {
      id: '6',
      name: 'js',
      score: 20,
      status: 'done',
    },
    {
      id: '7',
      name: 'UI',
      score: 20,
      status: 'submitted',
    },
    {
      id: '8',
      name: 'backend',
      score: 20,
      status: 'done',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.textcourse}>{item.id}</Text>
        <Text style={styles.textscore}>{item.rating}</Text>
        <Text style={styles.textstatus}>{item.submission.body}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={allGrades}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default Grades;

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: 45,
    margin: 5,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textcourse: {
    fontSize: 12,
    margin: 15,
    color: '#616161',
    width: 65,
    backgroundColor: '#FFFFFF',
    height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
  textscore: {
    fontSize: 12,
    margin: 15,
    color: '#616161',
    width: 65,
    // borderWidth:1,
    // borderColor:"#616161",
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
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

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ToggleButton} from '../../components';

import {HomeScreenHeader, Gradecontainer, Todo} from '../../components';

const HomeScreen = () => {
  const [grade, setGrade] = useState(false);
  const [todo, setTodo] = useState(false);
  const [assignment, setAssignment] = useState(false);
  const [recents, setRecent] = useState(false);
  const [color, setColor] = useState(false);
  let backgroundColor = null;
  const handleColor = () => {
    setColor(!color);
  };

  const handleTodoPress = () => {
    setTodo(!todo);
    setGrade(grade);
    setAssignment(assignment);
    setRecent(recents);
  };
  const handleGradePress = () => {
    setGrade(!grade);
    setTodo(todo);
    setAssignment(assignment);
    setRecent(recents);
  };
  const assignPress = () => {
    setAssignment(!assignment);
    setGrade(grade);
    setTodo(todo);
    setRecent(recents);
  };
  const recentPress = () => {
    setRecent(!recents);
    setGrade(grade);
    setAssignment(assignment);
    setTodo(todo);
  };
  // { ()=>  setAssignment(!assignment)}
  // { ()=>  setRecent(!recents)}

  // if(grade){
  // }
  // if(assignment){
  // }
  // if(recents){
  // }

  const handleGestuer = () => {
    // handleButtonPress()
    if (grade) {
      return <Gradecontainer />;
    }
    if (todo) {
      return <Todo />;
    }

    if (assignment) {
      return <Text>assignments</Text>;
    }
    if (recents) {
      return <Text>recent</Text>;
    }
  };

  // const handleToggle = () => {};

  return (
    <View style={styles.container}>
      <View>
        <HomeScreenHeader />
      </View>

      <View style={styles.buttoncontainer}>
        {!todo ? (
          <ToggleButton
            labelText="To-do"
            textColor={true}
            style={styles.togglebutton}
            onPress={() => setTodo(!todo)}
          />
        ) : (
          <ToggleButton
            labelText="To-do"
            style={styles.togglebutton1}
            onPress={() => setTodo(!todo)}
          />
        )}

        {!recents ? (
          <ToggleButton
            textColor={true}
            labelText="Recent lessons"
            style={styles.togglebutton}
            onPress={() => setRecent(!recents)}
          />
        ) : (
          <ToggleButton
            labelText="Recent lessons"
            style={styles.togglebutton1}
            onPress={() => setRecent(!recents)}
          />
        )}

        {!grade ? (
          <ToggleButton
            textColor={true}
            labelText="My Grades"
            style={styles.togglebutton}
            onPress={() => setGrade(!grade)}
          />
        ) : (
          <ToggleButton
            labelText="My Grades"
            style={styles.togglebutton1}
            onPress={() => setGrade(!grade)}
          />
        )}

        {!assignment ? (
          <ToggleButton
            textColor={true}
            labelText="My Assignments"
            style={styles.togglebutton}
            onPress={() => setAssignment(!assignment)}
          />
        ) : (
          <ToggleButton
            labelText="My Assignments"
            style={styles.togglebutton1}
            onPress={() => setAssignment(!assignment)}
          />
        )}

        <Text>upcoming task</Text>
      </View>
      <View style={{flex: 2}}>{handleGestuer()}</View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  buttoncontainer: {
    position: 'relative',
    top: '5%',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // height: "10%",
    // backgroundColor:'black'
  },

  togglebutton: {
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: '#FFFFFF',
  },
  togglebutton1: {
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: '#004277',
  },
});

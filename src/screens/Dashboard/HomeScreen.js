import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ToggleButton} from '../../components';
import Assignments from '../../components/ScreenModules/Assignments';
import {HomeScreenHeader, Gradecontainer, Todo} from '../../components';
import LottieView from 'lottie-react-native';
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
    setGrade(false);
    setAssignment(false);
    setRecent(false);
  };
  const handleGradePress = () => {
    setGrade(!grade);
    setTodo(false);
    setAssignment(false);
    setRecent(false);
  };
  const assignPress = () => {
    setAssignment(!assignment);
    setGrade(false);
    setTodo(false);
    setRecent(false);
  };
  const recentPress = () => {
    setRecent(!recents);
    setGrade(false);
    setAssignment(false);
    setTodo(false);
  };

  const handleGestuer = () => {
    if (grade) {
      return <Gradecontainer />;
    }
    if (todo) {
      return <Todo />;
    }

    if (assignment) {
      return <Assignments />;
    }
    if (recents) {
      return <Text>recent</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <HomeScreenHeader />
      </View>

      <View style={styles.buttoncontainer}>
        <ToggleButton
          labelText="To-do"
          iconname="checklist"
          textColor={!todo}
          style={!todo ? styles.togglebutton : styles.togglebutton1}
          onPress={() => handleTodoPress()}
        />

        <ToggleButton
          textColor={!recents}
          iconname="history"
          labelText="Recent lessons"
          style={!recents ? styles.togglebutton : styles.togglebutton1}
          onPress={() => recentPress()}
        />

        <ToggleButton
          textColor={!grade}
          labelText="My Grades"
          iconname="issue-closed"
          style={!grade ? styles.togglebutton : styles.togglebutton1}
          onPress={() => handleGradePress()}
        />

        <ToggleButton
          textColor={!assignment}
          iconname="project"
          labelText="My Assignment"
          style={!assignment ? styles.togglebutton : styles.togglebutton1}
          onPress={() => assignPress()}
        />
      </View>
     
      <View style={styles.content}>
       {/* <LottieView source={require('../../assets/loading.json')} autoPlay loop /> */}
      {handleGestuer()}
      </View>
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
  content:{
    flex:2,
    justifyContent:'center',
  alignItems:'center'  }
});

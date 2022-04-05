import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ToggleButton} from '../components';
import {useNavigation} from '@react-navigation/native';
import {Grades, HomeScreenHeader, Gradecontainer, Todo} from '../components';

const HomeScreen = () => {
  const [grade, setGrade] = useState(false);
  const [todo, setTodo] = useState(false);
  const [assignment, setAssignment] = useState(false);
  const [recents, setRecent] = useState(false);
  const [color, setColor] = useState(false);
  let backgroundColor=null
  const handleColor = () => {
    setColor(!color)
  
  };
  const handleGestuer = () => {
    if (grade) return <Gradecontainer />;
    if (todo) return <Todo />;

    if (assignment) return <Text>assignments</Text>;
    if (recents) return <Text>recent</Text>;
  };

  return (
    <View style={styles.container}>
      <HomeScreenHeader />

      <View style={styles.buttoncontainer}>
        <ToggleButton
          labelText="To-do"
          style={styles.togglebutton}
          onPress={() => handleColor}
        />
        <ToggleButton
          labelText="Recent lessons"
          style={styles.togglebutton}
          onPress={() => setRecent(!recents)}
        />
        <ToggleButton
          labelText="My Grades"
          style={styles.togglebutton}
          onPress={() => setGrade(!grade)}
        />
        <ToggleButton
          labelText="My Assignments"
           style={styles.togglebutton}
          onPress={() => setAssignment(!assignment)}
        />
      </View>
      {/* <View style={{ position:'relative',
  top:20, height:"100%"}}> */}
      {handleGestuer()}
      {/* </View> */}
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
    top: 14,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: 160,
  },

  togglebutton: {
    marginStart: 10,
    marginEnd: 10,
    // backgroundColor: backgroundColor,
  },
});

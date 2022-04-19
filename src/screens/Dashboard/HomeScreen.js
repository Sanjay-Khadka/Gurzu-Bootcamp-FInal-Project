import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {loginUser} from '../../redux/actions/AuthActions';
import {useFocusEffect} from '@react-navigation/native';
import {ToggleButton} from '../../components';
import {
  HomeScreenHeader,
  Gradecontainer,
  AssignmentContainer,
  RecentContainer,
  TodoContainer,
} from '../../components';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  courseDetail,
  gradesDetail,
  tasksDetail,
  assignmentDetail,
} from '../../redux/actions/assignmentGrades';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [grade, setGrade] = useState(false);
  const [todo, setTodo] = useState(false);
  const [assignment, setAssignment] = useState(true);
  const [recents, setRecent] = useState(false);
  const userdata = [useSelector(state => state.authReducer.Login)];
  const firstname = userdata?.data?.data.first_name;
  console.warn(userdata);
  const token = useSelector(state => state.authReducer.authToken);
  const dispatch = useDispatch();

  const handleGradePress = () => {
    setGrade(!grade);
    setTodo(false);
    setAssignment(false);
    setRecent(false);
    dispatch(gradesDetail(token));
  };
  const assignPress = () => {
    setAssignment(!assignment);
    setGrade(false);
    setTodo(false);
    setRecent(false);
    dispatch(assignmentDetail());
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
    // if (todo) {
    //   return <TodoContainer />;
    // }

    if (assignment) {
      return <AssignmentContainer />;
    }
    if (recents) {
      return <RecentContainer />;
    }
    if (recents !== true && assignment !== true && grade !== true) {
      return (
        <View>
          {userdata !== null ? (
            <Text>you have not enrolled in any course</Text>
          ) : (
            <Text style={{fontSize: 17, color: '#004277'}}>
              Please press on one of the buttons above
            </Text>
          )}
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <HomeScreenHeader />
      </View>

      <View style={styles.buttoncontainer}>
        {/* <ToggleButton
          labelText="To-do"
          iconname="checklist"
          textColor={!todo}
          style={!todo ? styles.togglebutton : styles.togglebutton1}
          onPress={() => handleTodoPress()}
        /> */}

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
      <View style={styles.content}>{handleGestuer()}</View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  buttoncontainer: {
    backgroundColor: 'white',
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
    backgroundColor: 'white',
  },
  togglebutton1: {
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: '#004277',
  },
  content: {
    flex: 2.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

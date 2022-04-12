import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ToggleButton} from '../../components';
import {
  HomeScreenHeader,
  AllCourseContainer,
  MyCourseContainer,
} from '../../components';
import {AllCourse} from '../../redux/actions/CourseActions';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const courseToken = useSelector(state => state.authReducer.authToken);
  console.warn(courseToken);

  const [todo, setTodo] = useState(false);
  const [recents, setRecent] = useState(true);

  const dispatch = useDispatch();
  const handleTodoPress = () => {
    setTodo(!todo);
    setRecent(false);
  };
  const recentPress = () => {
    setRecent(!recents);
    setTodo(false);
    // dispatch(AllCourse(courseToken));
  };

  const handleGestuer = () => {
    if (todo) {
      return <MyCourseContainer />;
    }
    if (recents) {
      return <AllCourseContainer />;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <HomeScreenHeader />
      </View>

      <View style={styles.buttoncontainer}>
        <ToggleButton
          labelText="My courses"
          iconname="pencil"
          textColor={!todo}
          style={!todo ? styles.togglebutton : styles.togglebutton1}
          onPress={() => handleTodoPress()}
        />

        <ToggleButton
          textColor={!recents}
          iconname="note"
          labelText="All courses"
          style={!recents ? styles.togglebutton : styles.togglebutton1}
          onPress={() => recentPress()}
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
    elevation: 10,
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: 'white',
  },
  togglebutton1: {
    elevation: 10,
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: '#004277',
  },
  content: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {NavigationHeader} from '../../components';
import {View, StyleSheet, ScrollView, Button} from 'react-native';
import ChapterDetails from '../../routes/ChapterDetails';
import AssignmentDetails from '../../routes/AssignmentDetails';
import AllChapters from './AllChapters';
import AllAssignment from './AllAssignment';
const IndividualCourse = () => {
  const handlePress = () => {
    setToggle(!toggle);
  };
  const [index, setIndex] = React.useState(0);
  const [toggle, setToggle] = useState(!toggle);
  return (
    <View style={styles.maincontainer}>
      <NavigationHeader Title="Courses" />
      <View style={styles.container}>
        <Tab
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={{
            backgroundColor: '#004277',
            height: 3,
          }}
          variant="primary">
          <Tab.Item
            title="Course"
            containerStyle={{backgroundColor: 'white'}}
            titleStyle={{fontSize: 13, color: '#004277'}}
          />
          <Tab.Item
            title="Assignment"
            containerStyle={{backgroundColor: 'white'}}
            titleStyle={{fontSize: 13, color: '#004277', width: 102}}
          />
          <Tab.Item
            title="Grades"
            containerStyle={{backgroundColor: 'white'}}
            titleStyle={{fontSize: 13, color: '#004277'}}
          />
        </Tab>
      </View>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          {/* <Button title="click" onPress={handlePress} /> */}
          <AllChapters />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
          <AllAssignment />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    width: '90%',
    marginHorizontal: 20,
  },
  react: {
    color: '#004277',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
  },
  complete: {
    color: '#414141',
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    marginTop: 10,
  },
  viewtab: {
    backgroundColor: 'white',
    padding: 30,
  },
  intro: {
    color: '#004277',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    // marginTop:50,
    // alignContent:'center',
    // alignItems:'center',
    textAlign: 'center',
  },
  viewcontainer: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 100,
    paddingBottom: 250,
  },
});
export default IndividualCourse;

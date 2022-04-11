import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import {Todo} from '../ScreenModules';

const {width} = Dimensions.get('window');
const TodoContainer = () => {
  return (
    <View style={styles.todocontainer}>
      {/* <LottieView source={require('../../assets/loading.json')} autoPlay loop /> */}

      <Todo />
    </View>
  );
};
export default TodoContainer;
const styles = StyleSheet.create({
  todocontainer: {
    backgroundColor: 'white',
    width: width,
    alignItems: 'center',
    // backgroundColor: 'black',
    display: 'flex',
    flex: 1,
  },
});

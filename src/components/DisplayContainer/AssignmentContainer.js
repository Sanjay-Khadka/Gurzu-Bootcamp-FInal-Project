import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

import {Assignments} from '../ScreenModules';
const {width, height} = Dimensions.get('window');
const AssignmentContainer = () => {
  return (
    <View style={styles.assignmentcontainer}>
      {/* <LottieView source={require('../../assets/loading.json')} autoPlay loop /> */}

      <Assignments />
    </View>
  );
};

export default AssignmentContainer;

const styles = StyleSheet.create({
  assignmentcontainer: {
    // backgroundColor: 'black',
    width: width,
    alignItems: 'center',
    // backgroundColor: 'black',
    // display: 'flex',
    // flex: 7,
  },
});

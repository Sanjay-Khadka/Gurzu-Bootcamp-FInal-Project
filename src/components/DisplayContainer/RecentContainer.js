import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

import {Recents} from '../ScreenModules';

const {width} = Dimensions.get('window');
const RecentContainer = () => {
  return (
    <View style={styles.recentcontainer}>
      <Text>upcoming tasks</Text>
      {/* <LottieView source={require('../../assets/loading.json')} autoPlay loop /> */}

      <Recents />
    </View>
  );
};

export default RecentContainer;

const styles = StyleSheet.create({
  recentcontainer: {
    backgroundColor: 'white',
    width: width,
    alignItems: 'center',
    // backgroundColor: 'black',
    display: 'flex',
    flex: 1,
  },
});

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

import {Grades} from '../ScreenModules';

const {height, width} = Dimensions.get('window');
const Gradecontainer = () => {
  return (
    <View style={styles.gradescontainer}>
        {/* <LottieView source={require('../../assets/loading.json')} autoPlay loop /> */}
      <View style={styles.titlecontainer}>
        <Text style={styles.titlestyle}>Course name</Text>
        <Text style={styles.titlestyle}>Score achieved</Text>
        <Text style={styles.titlestyle}>Status</Text>
      </View>
 

      <Grades />
      <View style={styles.gradesfooter}>
        <Text
          style={{
            color: '#004277',
            marginTop: 16,
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'WorkSans-Regular',
          }}>
          Total:64/100
        </Text>
      </View>
    </View>
  );
};
export default Gradecontainer;

const styles = StyleSheet.create({
  gradescontainer: {
    elevation: 10,
    height: height / 2,
    width: width - 45,
    borderRadius: 20,
    display: 'flex',
    // alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },

  titlecontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderWidth: 0.7,
    borderBottomColor: '#808080',
    height: 45,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  gradesfooter: {
    alignItems: 'center',
    marginBottom: 25,
    borderTopWidth: 0.7,
    borderTopColor: '#808080',
    justifyContent: 'center',
  },

  titlestyle: {
    color: '#004277',
    fontSize: 14,
    fontWeight: '500',
    flexDirection: 'column',
    width: 60,
    fontFamily: 'WorkSans-Regular',
  },
});

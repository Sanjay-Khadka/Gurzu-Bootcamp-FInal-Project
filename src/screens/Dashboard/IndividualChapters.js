import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const IndividualChapters = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>IndividualChapters</Text>
    </View>
  );
};

export default IndividualChapters;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
